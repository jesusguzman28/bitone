// Juego estándar de capturas de una página, para revisarla sin que cada
// revisor tome las suyas (menos carga para la máquina).
//
//   node D:/bitone/tools/set.mjs <ruta> <carpeta> [--clic nombre=selector ...] [--clic-movil nombre=selector ...]
//
//   node tools/set.mjs / revision/inicio/set --clic tablero="[data-llega]" --clic-movil menu="[data-abrir-menu]"
//
// Deja en la carpeta:
//   d-01.png, d-02.png...      la página entera en escritorio (1440x900)
//   m-01.png, m-02.png...      la página entera en celular (390x844)
//   primera-<tamaño>.png       la primera pantalla en ocho tamaños (cuatro de escritorio,
//                              1024x768, tableta 820x1180 y dos celulares); imprime el alto en cada uno
//   clic-<nombre>.png          escritorio, después de hacer clic en el selector
//   clic-movil-<nombre>.png    celular 390x844, después de hacer clic en el selector
//   clic-movil-<nombre>-360.png  lo mismo en 360x740
// Va de a una captura, con pausas, usando tools/shot.mjs.
import { spawnSync } from 'node:child_process';
import { mkdirSync, readdirSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const [, , ruta, carpeta, ...resto] = process.argv;
if (!ruta || !carpeta) {
  console.error('Uso: node set.mjs <ruta> <carpeta> [--clic nombre=selector] [--clic-movil nombre=selector]');
  process.exit(2);
}
const BASE = 'http://localhost:4321';
const url = /^https?:/.test(ruta) ? ruta : BASE + ruta;
const destino = resolve(carpeta);
const SHOT = fileURLToPath(new URL('./shot.mjs', import.meta.url));

mkdirSync(destino, { recursive: true });
for (const f of readdirSync(destino)) if (f.endsWith('.png')) rmSync(resolve(destino, f));

const pares = (bandera) => resto.flatMap((v, i) => (v === bandera && resto[i + 1] ? [resto[i + 1]] : []))
  .map((p) => { const k = p.indexOf('='); return [p.slice(0, k), p.slice(k + 1)]; });

const pasos = [
  ['escritorio', [url, resolve(destino, 'd.png'), '--tiles', '12', '--wait', '1200']],
  ['celular', [url, resolve(destino, 'm.png'), '--mobile', '--tiles', '12', '--wait', '1200']],
  ['primera pantalla en ocho tamaños', [url, resolve(destino, 'primera.png'), '--sizes', '1280x720,1366x650,1536x730,1920x937,1024x768,820x1180,m390x844,m360x740', '--wait', '1200']],
  ...pares('--clic').map(([n, s]) => [`clic ${n}`, [url, resolve(destino, `clic-${n}.png`), '--click', s, '--wait', '1200']]),
  // Cada clic de celular se toma en los dos tamaños: en 360x740 es donde menos cabe.
  ...pares('--clic-movil').flatMap(([n, s]) => [
    [`clic en celular ${n}`, [url, resolve(destino, `clic-movil-${n}.png`), '--mobile', '--click', s, '--wait', '1200']],
    [`clic en celular chico ${n}`, [url, resolve(destino, `clic-movil-${n}-360.png`), '--mobile', '--w', '360', '--h', '740', '--click', s, '--wait', '1200']],
  ]),
];

let fallos = 0;
for (const [nombre, args] of pasos) {
  const r = spawnSync(process.execPath, [SHOT, ...args], { encoding: 'utf8' });
  console.log(`== ${nombre}\n${(r.stdout || '').trim()}${r.stderr ? `\n${r.stderr.trim()}` : ''}`);
  if (r.status !== 0) fallos++;
}
console.log(`\n${readdirSync(destino).filter((f) => f.endsWith('.png')).length} capturas en ${destino}${fallos ? ` (${fallos} pasos fallaron)` : ''}`);
process.exit(fallos ? 1 : 0);
