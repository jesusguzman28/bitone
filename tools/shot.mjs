// Capturas de pantalla para revisar el diseño con los ojos, no solo con el código.
//
//   node D:/bitone/tools/shot.mjs <archivo.html | url> <salida.png> [opciones]
//
//   --w 1440 --h 900   tamaño de la ventana (por defecto 1440x900)
//   --mobile           celular: 390x844, táctil, densidad 2
//   --tiles 8          una captura por pantalla, bajando la página (salida-01.png, -02...)
//   --full             una sola captura de la página entera
//   --sizes "1280x720,1366x650,m390x844"
//                      la primera pantalla en varios tamaños con un solo comando
//                      (salida-1280x720.png...). Una "m" delante = celular.
//   --scroll 1200      baja N píxeles antes de capturar
//   --wait 800         espera en ms después de cargar (por defecto 800)
//   --reduced          con "reducir movimiento" activado
//   --click "selector" hace clic en un elemento antes de capturar
//
//   node D:/bitone/tools/shot.mjs --cerrar     apaga el navegador de capturas
//
// Además de la imagen, imprime lo que un ojo no ve: errores de consola,
// archivos que no cargaron, alto de la página y si hay desborde horizontal.
//
// POR QUÉ ESTÁ HECHO ASÍ. Esta PC se reinició sola tres veces mientras se
// tomaban capturas en ráfaga (la última, en mitad de una). Abrir y cerrar un
// navegador entero por cada captura produce picos bruscos de carga, así que:
//   1. Hay UN solo navegador, que se abre una vez y se queda encendido. Cada
//      captura se conecta a él, abre una pestaña y la cierra.
//   2. Ese navegador corre con prioridad baja y limitado a dos núcleos.
//   3. Solo se toma una captura a la vez en toda la máquina (candado), con una
//      pausa corta entre una y otra.
import { chromium } from 'playwright-core';
import { resolve } from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { existsSync, mkdirSync, rmdirSync, statSync } from 'node:fs';
import { spawn } from 'node:child_process';

const PUERTO = 9333;
const CDP = `http://127.0.0.1:${PUERTO}`;
const AQUI = fileURLToPath(new URL('.', import.meta.url));
const CANDADO = resolve(AQUI, '.captura.lock');
const PERFIL = resolve(AQUI, '.navegador');
const NAVEGADORES = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
];
const esperar = (ms) => new Promise((r) => setTimeout(r, ms));

async function conectar() {
  try { return await chromium.connectOverCDP(CDP, { timeout: 3000 }); } catch { return null; }
}

// Abre el navegador de capturas si no está abierto: sin ventana, sin tarjeta
// gráfica, con prioridad baja y atado a dos núcleos (máscara F0 = hilos 4 a 7).
async function navegador() {
  let n = await conectar();
  if (n) return n;
  const exe = NAVEGADORES.find((p) => existsSync(p));
  if (!exe) { console.error('No se encontró Chrome ni Edge.'); process.exit(1); }
  const orden = `start "" /b /belownormal /affinity F0 "${exe.replace(/\//g, '\\')}" --headless=new --remote-debugging-port=${PUERTO} --disable-gpu --no-first-run --no-default-browser-check --disable-extensions --disable-background-networking --user-data-dir="${PERFIL}" about:blank`;
  spawn('cmd.exe', ['/d', '/s', '/c', orden], { detached: true, stdio: 'ignore', windowsVerbatimArguments: true }).unref();
  for (let i = 0; i < 40; i++) {
    await esperar(500);
    n = await conectar();
    if (n) return n;
  }
  console.error('El navegador de capturas no respondió.');
  process.exit(1);
}

const [, , objetivo, salida, ...resto] = process.argv;

if (objetivo === '--cerrar') {
  const n = await conectar();
  if (n) { const s = await n.newBrowserCDPSession(); await s.send('Browser.close').catch(() => {}); console.log('Navegador de capturas apagado.'); }
  else console.log('El navegador de capturas no estaba abierto.');
  process.exit(0);
}
if (!objetivo || !salida) {
  console.error('Uso: node shot.mjs <archivo|url> <salida.png> [--w N --h N --mobile --tiles N --full --sizes "AxB,mAxB" --scroll N --wait N --reduced --click sel]');
  process.exit(2);
}
const flag = (n) => resto.includes(`--${n}`);
const valor = (n, d) => { const i = resto.indexOf(`--${n}`); return i >= 0 ? resto[i + 1] : d; };
const url = /^(https?|file):/.test(objetivo) ? objetivo : pathToFileURL(resolve(objetivo)).href;

// Una sola captura a la vez en toda la máquina.
for (let i = 0; ; i++) {
  try { mkdirSync(CANDADO); break; } catch {
    // Un candado de más de 3 minutos es de un proceso que murió: se rompe.
    try { if (Date.now() - statSync(CANDADO).mtimeMs > 180000) { rmdirSync(CANDADO); continue; } } catch { continue; }
    if (i > 720) { console.error('Otra captura lleva demasiado tiempo; inténtalo de nuevo.'); process.exit(1); }
    await esperar(500);
  }
}
const soltar = () => { try { rmdirSync(CANDADO); } catch { /* ya no está */ } };
process.on('exit', soltar);
process.on('SIGINT', () => process.exit(130));
process.on('SIGTERM', () => process.exit(143));

const n = await navegador();
const problemas = [];
const hechas = [];
let ultimas = null;

// Abre la página en una pestaña nueva con el tamaño pedido.
async function abrir({ w, h, movil }) {
  const contexto = await n.newContext({
    viewport: { width: w, height: h },
    deviceScaleFactor: movil ? 2 : 1,
    isMobile: movil,
    hasTouch: movil,
    reducedMotion: flag('reduced') ? 'reduce' : 'no-preference',
    locale: 'es-PE',
  });
  const pagina = await contexto.newPage();
  pagina.on('console', (m) => { if (m.type() === 'error') problemas.push(`consola: ${m.text()}`); });
  pagina.on('pageerror', (e) => problemas.push(`error: ${e.message}`));
  pagina.on('requestfailed', (r) => problemas.push(`no cargó: ${r.url()}`));
  pagina.on('response', (r) => { if (r.status() >= 400) problemas.push(`${r.status()}: ${r.url()}`); });
  await pagina.goto(url, { waitUntil: 'load', timeout: 45000 });
  await pagina.waitForTimeout(Number(valor('wait', 800)));
  const clic = valor('click', null);
  if (clic) { await pagina.click(clic).catch((e) => problemas.push(`clic: ${e.message}`)); await pagina.waitForTimeout(600); }
  return { contexto, pagina };
}
const medidas = (pagina) => pagina.evaluate(() => ({
  alto: document.documentElement.scrollHeight,
  ancho: document.documentElement.scrollWidth,
  ventana: innerWidth,
}));
const bajar = async (pagina, y) => { await pagina.evaluate((v) => scrollTo(0, v), y); await pagina.waitForTimeout(700); };

try {
  const lista = valor('sizes', null);
  if (lista) {
    for (const t of lista.split(',').map((x) => x.trim()).filter(Boolean)) {
      const movil = t.startsWith('m');
      const [w, h] = t.replace(/^m/, '').split('x').map(Number);
      const { contexto, pagina } = await abrir({ w, h, movil });
      const archivo = salida.replace(/\.png$/i, `-${t}.png`);
      await pagina.screenshot({ path: archivo });
      hechas.push(archivo);
      const m = await medidas(pagina);
      if (m.ancho > m.ventana + 1) problemas.push(`DESBORDE HORIZONTAL en ${t}: contenido ${m.ancho}px, ventana ${m.ventana}px`);
      // El alto en cada tamaño: una página que se alarga de más en uno solo se ve aquí.
      console.log(`  ${t}: la página mide ${m.alto}px (${(m.alto / h).toFixed(1)} pantallas)`);
      ultimas = { ...m, w, h };
      await contexto.close();
      await esperar(600);
    }
  } else {
    const movil = flag('mobile');
    const w = Number(valor('w', movil ? 390 : 1440));
    const h = Number(valor('h', movil ? 844 : 900));
    const { contexto, pagina } = await abrir({ w, h, movil });
    if (resto.includes('--tiles')) {
      const max = Number(valor('tiles', 8));
      const { alto } = await medidas(pagina);
      const pasos = Math.min(max, Math.max(1, Math.ceil(alto / h)));
      for (let i = 0; i < pasos; i++) {
        await bajar(pagina, Math.min(i * h, Math.max(0, alto - h)));
        const archivo = salida.replace(/\.png$/i, `-${String(i + 1).padStart(2, '0')}.png`);
        await pagina.screenshot({ path: archivo });
        hechas.push(archivo);
      }
      if (Math.ceil(alto / h) > max) console.log(`aviso: la página mide ${alto}px; solo se capturaron las primeras ${max} pantallas`);
    } else if (flag('full')) {
      // Se recorre la página primero para que aparezca lo que entra al hacer scroll.
      const { alto } = await medidas(pagina);
      for (let y = 0; y < alto; y += h) await bajar(pagina, y);
      await bajar(pagina, 0);
      await pagina.screenshot({ path: salida, fullPage: true });
      hechas.push(salida);
    } else {
      const y = Number(valor('scroll', 0));
      if (y) await bajar(pagina, y);
      await pagina.screenshot({ path: salida });
      hechas.push(salida);
    }
    ultimas = { ...(await medidas(pagina)), w, h };
    await contexto.close();
  }
} catch (e) {
  console.error(`No se pudo capturar ${url}: ${e.message}`);
  process.exitCode = 1;
}

console.log(`capturas: ${hechas.join(', ')}`);
if (ultimas) {
  console.log(`página: ${ultimas.ancho}x${ultimas.alto}px en ventana de ${ultimas.w}x${ultimas.h}`);
  if (!valor('sizes', null)) console.log(ultimas.ancho > ultimas.ventana + 1 ? `DESBORDE HORIZONTAL: el contenido mide ${ultimas.ancho}px y la ventana ${ultimas.ventana}px` : 'sin desborde horizontal');
}
console.log(problemas.length ? `problemas (${problemas.length}):\n  ${[...new Set(problemas)].slice(0, 20).join('\n  ')}` : 'sin errores de consola ni archivos caídos');
// Pausa corta para no encadenar capturas sin respiro; el navegador queda abierto.
await esperar(1200);
process.exit(process.exitCode ?? 0);
