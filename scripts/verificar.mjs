// Revisión previa al despliegue.
//
// Existe por un error concreto: un comentario del layout tenía escrita la
// etiqueta de script con sus signos de menor y mayor. Vite la detectaba aunque
// estuviera comentada y trataba el texto en español como JavaScript, así que
// el servidor de desarrollo se caía al arrancar. Pero `astro build` pasaba sin
// quejarse, porque ese escaneo solo corre en modo desarrollo. Es decir: la
// compilación sola NO alcanza para saber si el sitio está sano.
//
// Por eso este script revisa las dos cosas:
//
//   1. Que compile, y que el resultado tenga las páginas y el contenido que
//      debe tener (no basta con que el comando termine sin error: también
//      revisa que no se hayan quedado páginas vacías o sin título).
//   2. Que el servidor de desarrollo arranque de verdad y responda, mirando
//      además su salida por si escupe errores mientras sigue en pie.
//
// Se usa así, antes de subir a producción:
//
//     npm run verificar
//
// Devuelve código 0 si todo está bien y 1 si algo falló, para que sea difícil
// desplegar sin querer una versión rota.

import { spawn } from 'node:child_process';
import { readFile, readdir, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Rutas que siempre tienen que existir y responder. Si se agrega una página
// importante al sitio, va aquí.
const RUTAS = [
  '/',
  '/servicios/',
  '/servicios/desarrollo-de-software-a-medida/',
  '/servicios/mantenimiento-de-software/',
  '/servicios/apps-moviles/',
  '/metodologia/',
  '/proyectos/',
  '/nosotros/',
  '/contacto/',
  '/blog/',
  '/blog/cuanto-cuesta-un-software-a-medida-en-peru/',
];

// Frases que delatan un problema aunque el proceso siga vivo.
const SENALES_DE_ERROR = [
  'Failed to scan for dependencies',
  'Pre-transform error',
  '[vite] Internal server error',
  'Cannot find module',
  'is not exported by',
];

const PUERTO = 4321;
// Se convierte con fileURLToPath y no leyendo .pathname a mano: el pathname
// viene con los espacios escritos como %20, así que en una carpeta con espacios
// en el nombre la ruta resultante no existe y todo el script moría con un
// "spawn cmd.exe ENOENT" que no decía nada sobre la causa real.
const raiz = fileURLToPath(new URL('..', import.meta.url));

let fallos = 0;
const bien = (m) => console.log(`  ok    ${m}`);
const mal = (m) => { fallos++; console.log(`  FALLA ${m}`); };
const titulo = (m) => console.log(`\n${m}`);

/** Corre un comando y devuelve su salida junta. */
function correr(cmd) {
  return new Promise((resolve) => {
    // El comando va como una sola cadena a propósito: pasarlo partido en
    // argumentos junto con shell activo hace que Node avise de un riesgo de
    // seguridad, porque los argumentos se concatenan sin escapar.
    const p = spawn(cmd, { cwd: raiz, shell: true });
    let salida = '';
    p.stdout.on('data', (d) => (salida += d));
    p.stderr.on('data', (d) => (salida += d));
    p.on('close', (codigo) => resolve({ codigo, salida }));
  });
}

// ---------------------------------------------------------------- 1. compilar

titulo('1. Compilando el sitio');

const build = await correr('npm run build');
if (build.codigo !== 0) {
  mal('la compilación terminó con error:');
  console.log(build.salida.split('\n').slice(-25).join('\n'));
} else {
  const paginas = (build.salida.match(/(\d+) page\(s\) built/) ?? [])[1];
  bien(`compila sin errores (${paginas ?? '?'} páginas)`);
}

// ------------------------------------------- 2. revisar lo que quedó compilado

titulo('2. Revisando el resultado de la compilación');

const dist = join(raiz, 'dist');

async function paginasCompiladas(dir, acc = []) {
  for (const entrada of await readdir(dir, { withFileTypes: true })) {
    const ruta = join(dir, entrada.name);
    if (entrada.isDirectory()) await paginasCompiladas(ruta, acc);
    else if (entrada.name === 'index.html') acc.push(ruta);
  }
  return acc;
}

try {
  const htmls = await paginasCompiladas(dist);
  bien(`${htmls.length} páginas generadas`);

  // Una página que compila pero sale vacía o sin título es un fallo silencioso:
  // el comando no se queja y el problema recién se ve en Google, tarde.
  const vacias = [];
  const sinTitulo = [];
  for (const h of htmls) {
    const contenido = await readFile(h, 'utf8');
    const relativa = h.slice(dist.length).replace(/\\/g, '/');
    if ((await stat(h)).size < 2048) vacias.push(relativa);
    if (!/<title>[^<]{5,}<\/title>/.test(contenido)) sinTitulo.push(relativa);
  }
  vacias.length ? mal(`páginas sospechosamente vacías: ${vacias.join(', ')}`)
                : bien('ninguna página quedó vacía');
  sinTitulo.length ? mal(`páginas sin título: ${sinTitulo.join(', ')}`)
                   : bien('todas tienen título');

  // ---- Revisiones de SEO ----
  //
  // Todas nacen de un problema que ya estuvo publicado en la web anterior, no de una
  // lista de buenas prácticas copiada de algún sitio. Se comprueban aquí porque
  // ninguna rompe la compilación: el sitio se ve perfecto y el daño solo
  // aparece semanas después en los resultados de búsqueda.
  const LIMITE_TITULO = 65;      // a partir de aquí Google corta el título
  const LIMITE_DESC = 160;       // y aquí, la descripción
  const largos = [];
  const descLargas = [];
  const sinDesc = [];
  const sinBarra = new Map();
  const h1Malos = [];

  for (const h of htmls) {
    const c = await readFile(h, 'utf8');
    const rel = h.slice(dist.length).replace(/\\/g, '/').replace(/index\.html$/, '');

    const titulo = c.match(/<title>([^<]*)<\/title>/)?.[1] ?? '';
    if (titulo.length > LIMITE_TITULO) largos.push(`${rel} (${titulo.length})`);

    const desc = c.match(/<meta name="description" content="([^"]*)"/)?.[1];
    if (!desc) sinDesc.push(rel);
    else if (desc.length > LIMITE_DESC) descLargas.push(`${rel} (${desc.length})`);

    // Exactamente un H1 por página: cero deja a Google sin el titular, y dos o
    // más le hacen elegir cuál manda.
    const h1 = c.match(/<h1[\s>]/g)?.length ?? 0;
    if (h1 !== 1) h1Malos.push(`${rel} (${h1})`);

    // Enlaces internos sin barra final. Cada uno se sirve con un 307 —una
    // redirección temporal— hacia la versión con barra, que es la que declara
    // el canonical. Google no consolida señales a través de un 307 y cada
    // rastreo cuesta dos peticiones. Ver la nota en src/data/site.ts.
    for (const href of c.matchAll(/<a[^>]+href="(\/[^"]*)"/g)) {
      const ruta = href[1].split('#')[0].split('?')[0];
      const ultimo = ruta.split('/').pop() ?? '';
      if (ruta && !ruta.endsWith('/') && !ultimo.includes('.')) {
        sinBarra.set(ruta, (sinBarra.get(ruta) ?? 0) + 1);
      }
    }
  }

  largos.length ? mal(`títulos que Google va a cortar (>${LIMITE_TITULO}): ${largos.join(', ')}`)
                : bien(`ningún título pasa de ${LIMITE_TITULO} caracteres`);
  sinDesc.length ? mal(`páginas sin descripción: ${sinDesc.join(', ')}`)
                 : bien('todas tienen descripción');
  descLargas.length ? mal(`descripciones que Google va a cortar (>${LIMITE_DESC}): ${descLargas.join(', ')}`)
                    : bien(`ninguna descripción pasa de ${LIMITE_DESC} caracteres`);
  h1Malos.length ? mal(`páginas que no tienen exactamente un H1: ${h1Malos.join(', ')}`)
                 : bien('todas tienen exactamente un H1');
  sinBarra.size ? mal(`enlaces internos sin barra final (se sirven con 307): ${[...sinBarra.keys()].join(', ')}`)
                : bien('todos los enlaces internos llevan barra final');

  // Archivos que tienen que llegar a dist. CNAME es el que le dice a GitHub
  // Pages que la web va en bitone.pe: si falta, cada despliegue borra el
  // dominio propio y la web vuelve a jesusguzman28.github.io.
  const conDominio = await stat(join(dist, 'CNAME')).then(() => true, () => false);
  if (!conDominio) console.log('  aviso sin public/CNAME: se publicará en la dirección provisional de github.io');
  for (const archivo of [...(conDominio ? ['CNAME'] : []), '404.html', 'robots.txt', 'sitemap-index.xml']) {
    try {
      await stat(join(dist, archivo));
      bien(`${archivo} llegó a dist`);
    } catch {
      mal(`${archivo} NO llegó a dist`);
    }
  }
} catch (e) {
  mal(`no se pudo revisar dist: ${e.message}`);
}

// --------------------------------------- 3. el servidor de desarrollo arranca

titulo('3. Levantando el servidor de desarrollo');

const dev = spawn('npm run dev', { cwd: raiz, shell: true });
let logDev = '';
dev.stdout.on('data', (d) => (logDev += d));
dev.stderr.on('data', (d) => (logDev += d));

/** Espera a que el puerto conteste, hasta agotar el tiempo. */
async function esperarPuerto(segundos) {
  for (let i = 0; i < segundos * 2; i++) {
    if (dev.exitCode !== null) return false; // se murió durante el arranque
    try {
      const r = await fetch(`http://localhost:${PUERTO}/`, { signal: AbortSignal.timeout(2000) });
      if (r.ok) return true;
    } catch { /* todavía no levanta */ }
    await new Promise((r) => setTimeout(r, 500));
  }
  return false;
}

if (!(await esperarPuerto(45))) {
  mal('el servidor de desarrollo no llegó a responder');
  console.log(logDev.split('\n').slice(-25).join('\n'));
} else {
  bien('arranca y responde');

  for (const ruta of RUTAS) {
    try {
      const r = await fetch(`http://localhost:${PUERTO}${ruta}`, { signal: AbortSignal.timeout(15000) });
      r.ok ? bien(`${ruta} responde ${r.status}`) : mal(`${ruta} responde ${r.status}`);
    } catch (e) {
      mal(`${ruta} no responde (${e.message})`);
    }
  }

  // Se revisa aparte si el proceso murió: puede contestar la primera petición
  // y caerse enseguida, que es justo lo que hacía el error del comentario con
  // la etiqueta de script. Sin esto el resumen decía "no reportó errores".
  if (dev.exitCode !== null) {
    mal(`el servidor se cayó mientras corría (código ${dev.exitCode})`);
  } else {
    bien('sigue en pie al terminar la revisión');
  }

  const encontradas = SENALES_DE_ERROR.filter((s) => logDev.includes(s));
  encontradas.length
    ? mal(`el servidor reportó errores: ${encontradas.join(' / ')}`)
    : bien('no reportó errores mientras corría');

  if (encontradas.length || dev.exitCode !== null) {
    console.log(
      logDev
        .split('\n')
        .filter((l) => /error/i.test(l))
        .slice(0, 15)
        .join('\n')
    );
  }
}

// En Windows el proceso que arrancamos es el shell, no el servidor: matarlo a
// secas deja al Node hijo vivo ocupando el puerto 4321, y el siguiente arranque
// falla con "puerto en uso". Hay que bajar el árbol completo.
await new Promise((resolve) => {
  if (dev.exitCode !== null) return resolve();
  if (process.platform === 'win32') {
    spawn(`taskkill /pid ${dev.pid} /T /F`, { shell: true, stdio: 'ignore' }).on('close', resolve);
  } else {
    dev.kill('SIGTERM');
    resolve();
  }
});

// ------------------------------------------------------------------ resultado

titulo('─'.repeat(52));
if (fallos === 0) {
  console.log('TODO EN ORDEN. El sitio se puede desplegar.\n');
  process.exit(0);
} else {
  console.log(`${fallos} problema(s). NO despliegues hasta arreglarlos.\n`);
  process.exit(1);
}
