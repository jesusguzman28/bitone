// Revisa la web ya publicada en bitwise.pe.
//
// Sirve para dos cosas: confirmar después de un despliegue que quedó todo en
// pie, y salir de dudas cuando el servidor local se apaga y uno se pregunta si
// eso afectó a la web de verdad. No la afecta: son cosas separadas, y esto lo
// comprueba pidiendo las páginas desde afuera.
//
//     npm run revisar-produccion
//
// Devuelve 0 si todo responde y 1 si algo falla.

const DOMINIO = 'https://bitwise.pe';

const RUTAS = [
  '/',
  '/servicios/',
  '/proyectos/',
  '/nosotros/',
  '/contacto/',
  '/blog/',
  '/cuanto-cuesta-una-pagina-web-en-peru/',
  '/paginas-web-para-pollerias/',
  '/paginas-web-para-bodegas/',
  '/robots.txt',
  '/sitemap-index.xml',
];

// Direcciones viejas que tienen que seguir redirigiendo. Si una se rompe, se
// pierde el posicionamiento que ya tenía esa página en Google.
const REDIRECCIONES = ['/proyectos/pollerias-restaurantes', '/clientes'];

let fallos = 0;
const bien = (m) => console.log(`  ok    ${m}`);
const mal = (m) => { fallos++; console.log(`  FALLA ${m}`); };

/** Pide una dirección y devuelve estado, tiempo y quién la sirve. */
async function pedir(url, seguirRedirecciones = true) {
  const t0 = Date.now();
  try {
    const r = await fetch(url, {
      redirect: seguirRedirecciones ? 'follow' : 'manual',
      signal: AbortSignal.timeout(20000),
    });
    return {
      ok: true,
      estado: r.status,
      ms: Date.now() - t0,
      servidor: r.headers.get('server') ?? '?',
      cache: r.headers.get('cf-cache-status') ?? '-',
      destino: r.headers.get('location'),
    };
  } catch (e) {
    return { ok: false, error: e.message, ms: Date.now() - t0 };
  }
}

console.log(`\nRevisando ${DOMINIO}\n`);

console.log('1. Páginas');
let sumaMs = 0;
let medidas = 0;
for (const ruta of RUTAS) {
  const r = await pedir(DOMINIO + ruta);
  if (!r.ok) {
    mal(`${ruta} no responde (${r.error})`);
  } else if (r.estado !== 200) {
    mal(`${ruta} responde ${r.estado}`);
  } else {
    sumaMs += r.ms;
    medidas++;
    bien(`${ruta} responde 200 en ${r.ms}ms (caché: ${r.cache})`);
  }
}

console.log('\n2. Redirecciones de direcciones antiguas');
for (const ruta of REDIRECCIONES) {
  const r = await pedir(DOMINIO + ruta, false);
  if (!r.ok) mal(`${ruta} no responde (${r.error})`);
  else if (r.estado === 301 || r.estado === 308) bien(`${ruta} redirige ${r.estado} hacia ${r.destino}`);
  else mal(`${ruta} responde ${r.estado}, se esperaba una redirección 301`);
}

console.log('\n3. Quién la está sirviendo');
const portada = await pedir(DOMINIO + '/');
if (portada.ok) {
  // Si esto dice cloudflare, la web no depende de ninguna PC encendida.
  /cloudflare/i.test(portada.servidor)
    ? bien(`la sirve Cloudflare, no depende de ninguna computadora encendida`)
    : mal(`la sirve "${portada.servidor}", que no es lo esperado`);
}

if (medidas) console.log(`\n   Tiempo promedio de respuesta: ${Math.round(sumaMs / medidas)}ms`);

console.log('\n' + '─'.repeat(52));
if (fallos === 0) {
  console.log('La web publicada está en pie y completa.\n');
  process.exit(0);
} else {
  console.log(`${fallos} problema(s) en la web publicada.\n`);
  process.exit(1);
}
