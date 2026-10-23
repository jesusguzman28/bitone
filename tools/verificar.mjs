// Revisión de lo compilado: lo que un ojo no ve.
//
//   npm run build && node tools/verificar.mjs
//
// Mira dist/ y comprueba, página por página: que exista, que tenga un solo h1,
// título y descripción, que ningún enlace interno ni imagen esté roto, que las
// anclas existan, y que no se haya colado nada de lo que el sitio no dice
// (enlaces en pausa, promesas retiradas, rayas largas). También el peso.
// Sale con código 1 si algo falla.
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { gzipSync } from 'node:zlib';

const DIST = fileURLToPath(new URL('../dist/', import.meta.url));
const PAGINAS = ['/', '/sistemas/', '/apps/', '/automatizacion/', '/rescate/', '/negocios/', '/proyectos/', '/como-trabajamos/', '/nosotros/'];
// Lo que el sitio no debe decir ni enlazar (ver docs/SISTEMA.md).
const PROHIBIDO = [
  [/https?:\/\/(www\.)?quipuy\.pe/i, 'enlace a quipuy.pe'],
  [/https?:\/\/(www\.)?mindblock\.io/i, 'enlace a mindblock.io (en pausa)'],
  [/cotizaci[oó]n\s+(gratis\s+)?en\s+(menos\s+de\s+)?24\s+horas/i, '"cotización en 24 horas"'],
  [/a consultar/i, '"a consultar"'],
  [/lorem ipsum/i, 'texto de relleno'],
];

if (!existsSync(DIST)) { console.error('No hay dist/. Corre primero: npm run build'); process.exit(1); }

const fallos = [];
const avisos = [];
const archivoDe = (ruta) => join(DIST, ruta.replace(/^\//, ''), ruta.endsWith('/') ? 'index.html' : '');
const html = new Map();
for (const p of PAGINAS) {
  const f = archivoDe(p);
  if (!existsSync(f)) { fallos.push(`${p}: no se compiló`); continue; }
  html.set(p, readFileSync(f, 'utf8'));
}

const textoVisible = (h) => h.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ');
const ids = (h) => new Set([...h.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
let externos = new Set();

console.log('página              h1  alto HTML  JS gz   enlaces  imágenes');
for (const [p, h] of html) {
  const h1 = (h.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) fallos.push(`${p}: tiene ${h1} h1 (debe ser uno)`);
  const titulo = (h.match(/<title>([^<]*)<\/title>/) || [])[1];
  if (!titulo || titulo.length < 10) fallos.push(`${p}: falta el título`);
  const desc = (h.match(/<meta name="description" content="([^"]*)"/) || [])[1];
  if (!desc || desc.length < 40) fallos.push(`${p}: falta la descripción`);
  if (desc && desc.length > 170) avisos.push(`${p}: la descripción mide ${desc.length} letras (se corta en Google sobre las 160)`);

  // Enlaces e imágenes internos.
  const enlaces = [...h.matchAll(/\shref="([^"]+)"/g)].map((m) => m[1]);
  const imagenes = [...h.matchAll(/\ssrc="([^"]+)"/g), ...h.matchAll(/\ssrcset="([^"]+)"/g)]
    .flatMap((m) => m[1].split(',').map((x) => x.trim().split(/\s+/)[0])).filter(Boolean);
  let internos = 0;
  for (const e of enlaces) {
    if (/^(https?:|mailto:|tel:)/.test(e)) { if (/^https?:/.test(e) && !e.includes('bitone.pe')) externos.add(e.split('?')[0]); continue; }
    if (e.startsWith('#')) { if (e.length > 1 && !ids(h).has(decodeURIComponent(e.slice(1)))) fallos.push(`${p}: el ancla ${e} no existe`); continue; }
    if (!e.startsWith('/')) { avisos.push(`${p}: enlace relativo "${e}"`); continue; }
    internos++;
    const [ruta, ancla] = e.split('#');
    const destino = archivoDe(ruta);
    if (!existsSync(destino) || statSync(destino).isDirectory()) { fallos.push(`${p}: enlace roto a ${e}`); continue; }
    if (ancla && html.has(ruta) && !ids(html.get(ruta)).has(decodeURIComponent(ancla))) fallos.push(`${p}: ${e} apunta a un ancla que no existe`);
  }
  for (const i of imagenes) {
    if (/^(https?:|data:)/.test(i)) continue;
    if (!existsSync(join(DIST, i.replace(/^\//, '')))) fallos.push(`${p}: imagen caída ${i}`);
  }

  const texto = textoVisible(h);
  if (/[—–]/.test(texto)) fallos.push(`${p}: hay rayas largas en el texto ("${(texto.match(/.{0,30}[—–].{0,30}/) || [''])[0].trim()}")`);
  for (const [re, nombre] of PROHIBIDO) if (re.test(h)) fallos.push(`${p}: ${nombre}`);
  // La marca anterior no se cuela en textos, títulos ni etiquetas. Las direcciones de
  // las redes sí la llevan (bitwise_peru) y no cuentan.
  // Bitwise es el sitio principal de la casa: se nombra y se enlaza a propósito (pie y
  // datos de empresa). Lo que no debe pasar es que una página hable de "Bitwise" como
  // si fuera otra empresa: se revisa a mano, no aquí.

  const scripts = [...h.matchAll(/<script[^>]*\ssrc="([^"]+)"/g)].map((m) => m[1]);
  const enLinea = [...h.matchAll(/<script(?![^>]*\ssrc=)[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1]).join('');
  const js = scripts.reduce((n, s) => n + (existsSync(join(DIST, s)) ? gzipSync(readFileSync(join(DIST, s))).length : 0), gzipSync(enLinea).length);
  if (js > 40_000) avisos.push(`${p}: ${Math.round(js / 1000)} kB de JavaScript comprimido (meta: 40)`);
  console.log(p.padEnd(20), String(h1).padEnd(3), `${String(Math.round(gzipSync(h).length / 1000)).padStart(3)} kB gz `, `${String((js / 1000).toFixed(1)).padStart(5)} kB`, String(internos).padStart(7), String(new Set(imagenes).size).padStart(9));
}

// Lo que quedó en dist/_astro.
const astro = join(DIST, '_astro');
if (existsSync(astro)) {
  const archivos = readdirSync(astro).map((n) => ({ n, kb: statSync(join(astro, n)).size / 1000 }));
  const crudas = archivos.filter((a) => /\.(png|jpe?g)$/i.test(a.n) && !/^tarjeta\./.test(a.n));
  if (crudas.length) fallos.push(`dist/_astro lleva imágenes sin optimizar: ${crudas.map((a) => a.n).join(', ')}`);
  const pesada = archivos.filter((a) => /\.(png|jpe?g|webp|avif)$/i.test(a.n)).sort((a, b) => b.kb - a.kb)[0];
  if (pesada && pesada.kb > 150) avisos.push(`la imagen más pesada mide ${Math.round(pesada.kb)} kB (${pesada.n})`);
  const css = archivos.filter((a) => a.n.endsWith('.css')).reduce((s, a) => s + gzipSync(readFileSync(join(astro, a.n))).length, 0);
  console.log(`\n_astro: ${archivos.length} archivos · imagen más pesada ${pesada ? Math.round(pesada.kb) : 0} kB · CSS ${(css / 1000).toFixed(1)} kB comprimido`);
}
// Fuera de las nueve páginas solo hay redirecciones de la web anterior (astro.config.mjs),
// y cada una lleva a una de las nueve.
const htmlSueltos = (dir, base = '/') => readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
  e.isDirectory() ? (e.name === '_astro' ? [] : htmlSueltos(join(dir, e.name), `${base}${e.name}/`)) : e.name === 'index.html' ? [base] : []);
let redirecciones = 0;
for (const ruta of htmlSueltos(DIST)) {
  if (PAGINAS.includes(ruta)) continue;
  const destino = (readFileSync(archivoDe(ruta), 'utf8').match(/http-equiv="refresh" content="0;url=([^"]+)"/) || [])[1];
  if (!destino) fallos.push(`${ruta}: página que no es de las nueve ni una redirección`);
  else if (!PAGINAS.includes(destino)) fallos.push(`${ruta}: redirige a ${destino}, que no es una de las nueve`);
  else redirecciones++;
}
const mapa = existsSync(join(DIST, 'sitemap-0.xml')) ? readFileSync(join(DIST, 'sitemap-0.xml'), 'utf8') : '';
const enMapa = [...mapa.matchAll(/<loc>https:\/\/bitone\.pe([^<]*)<\/loc>/g)].map((m) => m[1]);
if (!existsSync(join(DIST, 'sitemap-index.xml'))) fallos.push('falta sitemap-index.xml');
if (enMapa.length !== PAGINAS.length || PAGINAS.some((p) => !enMapa.includes(p))) fallos.push(`el sitemap lista ${enMapa.join(', ') || 'nada'} (deben ser las nueve páginas)`);
console.log(`redirecciones de la web anterior: ${redirecciones} · sitemap: ${enMapa.length} páginas`);
console.log(`enlaces a otros sitios (${externos.size}): ${[...externos].map((e) => e.replace(/^https?:\/\//, '').slice(0, 46)).join(' · ')}`);

if (avisos.length) console.log(`\nAVISOS (${avisos.length})\n- ${avisos.join('\n- ')}`);
if (fallos.length) { console.log(`\nFALLOS (${fallos.length})\n- ${fallos.join('\n- ')}`); process.exit(1); }
console.log('\nTodo en orden: nueve páginas, sin enlaces rotos ni imágenes caídas.');
