// Adapta el sitio compilado para servirse en una subcarpeta, p. ej.
// https://jesusguzman28.github.io/bitone/, mientras bitone.pe no esté activo.
//
//     node scripts/ruta-provisional.mjs /bitone https://jesusguzman28.github.io
//
// El sitio está escrito para vivir en la raíz de un dominio: todos sus enlaces
// e imágenes empiezan en "/". En una subcarpeta esas direcciones apuntan fuera
// del sitio y se pierden los estilos, las fotos y la navegación. Esto les
// antepone la subcarpeta en dist, sin tocar el código fuente.
//
// Además:
//   - Cambia https://bitone.pe por la dirección provisional, para que el
//     canonical y la imagen al compartir no apunten a un dominio que no abre.
//   - Marca todas las páginas con noindex: una copia provisional no debe
//     competir en Google con la definitiva.
//
// Lo usa el flujo de publicación solo cuando no existe public/CNAME. Cuando el
// dominio esté listo se vuelve a crear ese archivo y este paso deja de correr.

import { readdir, readFile, writeFile, rm } from 'node:fs/promises';
import { join } from 'node:path';

const [base, origen] = process.argv.slice(2);
if (!base?.startsWith('/') || base.endsWith('/') || !origen) {
  console.error('Uso: node scripts/ruta-provisional.mjs /subcarpeta https://usuario.github.io');
  process.exit(1);
}
const DIST = 'dist';
const DOMINIO = 'https://bitone.pe';
const nuevoDominio = origen.replace(/\/$/, '') + base;

async function archivos(dir) {
  const salida = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) salida.push(...(await archivos(p)));
    else if (/\.(html|css|xml|txt)$/.test(e.name)) salida.push(p);
  }
  return salida;
}

// "/algo" pero no "//cdn" ni ya prefijado.
const raiz = (ruta) => (ruta.startsWith('/') && !ruta.startsWith('//') && !ruta.startsWith(base + '/') ? base + ruta : ruta);

let cambiados = 0;
for (const f of await archivos(DIST)) {
  const antes = await readFile(f, 'utf8');
  let s = antes.split(DOMINIO).join(nuevoDominio);

  if (f.endsWith('.html')) {
    s = s.replace(/\b(href|src|action|poster)="(\/[^"]*)"/g, (_, a, r) => `${a}="${raiz(r)}"`);
    s = s.replace(/\bsrcset="([^"]*)"/g, (_, v) =>
      `srcset="${v.split(',').map((x) => x.trim().replace(/^\/\S*/, raiz)).join(', ')}"`);
    s = s.replace(/url\((['"]?)(\/[^)'"]*)\1\)/g, (_, q, r) => `url(${q}${raiz(r)}${q})`);
    s = s.replace(/<meta name="robots"[^>]*>/g, '');
    s = s.replace('<head>', '<head><meta name="robots" content="noindex, nofollow">');
  } else if (f.endsWith('.css')) {
    s = s.replace(/url\((['"]?)(\/[^)'"]*)\1\)/g, (_, q, r) => `url(${q}${raiz(r)}${q})`);
  }

  if (s !== antes) {
    await writeFile(f, s);
    cambiados++;
  }
}

// Sin dominio propio no hay CNAME que publicar.
await rm(join(DIST, 'CNAME'), { force: true });

console.log(`Ruta provisional ${nuevoDominio}/: ${cambiados} archivos ajustados.`);
