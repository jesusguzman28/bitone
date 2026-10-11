// El mini sistema de pedidos de la portada: datos de muestra, estado y dibujo.
// Este archivo lo usan los dos lados: Astro pinta con él el estado inicial (la
// pantalla nunca está vacía, ni sin JavaScript) y el navegador lo sigue desde ahí.
//
// Es un ejemplo: una distribuidora de abarrotes inventada, un martes cualquiera.
// Las horas son fijas, dentro del horario de un negocio; no salen del reloj.

export interface Producto {
  id: string;
  nombre: string;
  corto: string;
  unidad: string;
  /** "saco de arroz" / "sacos de arroz": para escribir el mensaje. */
  uno: string;
  varios: string;
  /** "saco" / "sacos": la medida sola, para la fila del pedido ("Arroz 3 sacos"). */
  medida: [uno: string, varios: string];
  precio: number;
  inicio: number;
  /** Con este stock o menos, toca reponer. */
  minimo: number;
}

export type Renglon = [id: string, cantidad: number];
export type EstadoPedido = 'nuevo' | 'pendiente' | 'despachado';

export interface Pedido {
  n: number;
  codigo: string;
  cliente: string;
  items: Renglon[];
  total: number;
  hora: string;
  estado: EstadoPedido;
  mensaje: string;
}

export interface Estado {
  stock: Record<string, number>;
  /** El más nuevo va primero. */
  pedidos: Pedido[];
  /** Cuántos pedidos del guion ya llegaron. */
  llegados: number;
}

const SACO: [string, string] = ['saco', 'sacos'];
const CAJA: [string, string] = ['caja', 'cajas'];

export const productos: Producto[] = [
  { id: 'arroz', nombre: 'Arroz extra', corto: 'Arroz', unidad: 'saco 50 kg', uno: 'saco de arroz', varios: 'sacos de arroz', medida: SACO, precio: 168, inicio: 36, minimo: 10 },
  { id: 'azucar', nombre: 'Azúcar rubia', corto: 'Azúcar', unidad: 'saco 50 kg', uno: 'saco de azúcar', varios: 'sacos de azúcar', medida: SACO, precio: 146, inicio: 29, minimo: 10 },
  { id: 'aceite', nombre: 'Aceite vegetal', corto: 'Aceite', unidad: 'caja 12 x 1 L', uno: 'caja de aceite', varios: 'cajas de aceite', medida: CAJA, precio: 96, inicio: 11, minimo: 8 },
  { id: 'leche', nombre: 'Leche evaporada', corto: 'Leche', unidad: 'caja 24 tarros', uno: 'caja de leche', varios: 'cajas de leche', medida: CAJA, precio: 84, inicio: 41, minimo: 12 },
  { id: 'fideos', nombre: 'Fideos spaghetti', corto: 'Fideos', unidad: 'caja 20 x 500 g', uno: 'caja de fideos', varios: 'cajas de fideos', medida: CAJA, precio: 52, inicio: 28, minimo: 8 },
  { id: 'atun', nombre: 'Atún en trozos', corto: 'Atún', unidad: 'caja 48 latas', uno: 'caja de atún', varios: 'cajas de atún', medida: CAJA, precio: 216, inicio: 13, minimo: 5 },
];
const porId = Object.fromEntries(productos.map((p) => [p.id, p]));

interface Guion {
  cliente: string;
  items: Renglon[];
  hora: string;
  /** {a} y {b} se cambian por lo pedido. */
  texto: string;
}

/** Lo que ya pasó esta mañana antes de que llegue el visitante. */
const manana: (Guion & { estado: EstadoPedido })[] = [
  { cliente: 'Bodega San José', items: [['arroz', 2], ['leche', 1]], hora: '9:12', texto: 'Hola, anótame {a} y {b}.', estado: 'despachado' },
  { cliente: 'Minimarket El Sol', items: [['fideos', 3], ['atun', 1]], hora: '9:47', texto: 'Buenas, necesito {a} y {b}.', estado: 'despachado' },
  { cliente: 'Bodega Carmencita', items: [['azucar', 1], ['aceite', 2]], hora: '10:20', texto: 'Buenos días. Para hoy: {a} y {b}.', estado: 'despachado' },
  { cliente: 'Bodega La Esquina', items: [['leche', 2], ['arroz', 1]], hora: '10:41', texto: 'Vecino, necesito {a} y {b}.', estado: 'pendiente' },
];

/** Los pedidos que llegan cuando el visitante toca el botón. Son ocho y se acaban. */
const guion: Guion[] = [
  { cliente: 'Bodega Rosita', items: [['arroz', 3], ['aceite', 2]], hora: '10:52', texto: 'Buenas, mándame {a} y {b} para hoy.' },
  { cliente: 'Market Don Pepe', items: [['leche', 4], ['fideos', 2]], hora: '11:05', texto: 'Hola, lo de siempre: {a} y {b}.' },
  { cliente: 'Minimarket Santa Ana', items: [['azucar', 2], ['atun', 1]], hora: '11:18', texto: 'Buenos días, envíame {a} y {b}.' },
  { cliente: 'Bodega Mi Luchita', items: [['fideos', 2], ['azucar', 2]], hora: '11:34', texto: 'Buenas, mándame {a} y {b}.' },
  { cliente: 'Bodega San José', items: [['aceite', 3], ['leche', 2]], hora: '11:50', texto: 'Me faltó: {a} y {b}.' },
  { cliente: 'Minimarket El Sol', items: [['arroz', 4], ['atun', 1]], hora: '12:07', texto: 'Hola, anótame {a} y {b}.' },
  { cliente: 'Bodega Carmencita', items: [['atun', 2], ['fideos', 3]], hora: '12:21', texto: 'Para la tarde: {a} y {b}.' },
  { cliente: 'Bodega La Esquina', items: [['azucar', 3], ['aceite', 2]], hora: '12:40', texto: 'Vecino, mándame {a} y {b}.' },
];

/** Casillas de la tira de ventas: una por pedido del día. */
export const CASILLAS = manana.length + guion.length;
const PRIMER_CODIGO = 143;

/* ---------- cuentas ---------- */

export const soles = (n: number) => 'S/ ' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const totalDe = (items: Renglon[]) => items.reduce((s, [id, n]) => s + porId[id].precio * n, 0);
const frase = ([id, n]: Renglon) => (n === 1 ? `1 ${porId[id].uno}` : `${n} ${porId[id].varios}`);
const armar = (g: Guion, n: number, estado: EstadoPedido): Pedido => ({
  n,
  codigo: '#' + String(n).padStart(4, '0'),
  cliente: g.cliente,
  items: g.items,
  total: totalDe(g.items),
  hora: g.hora,
  estado,
  mensaje: g.texto.replace('{a}', frase(g.items[0])).replace('{b}', g.items[1] ? frase(g.items[1]) : ''),
});

export function estadoInicial(): Estado {
  const stock = Object.fromEntries(productos.map((p) => [p.id, p.inicio]));
  const pedidos = manana.map((g, i) => armar(g, PRIMER_CODIGO + i, g.estado));
  pedidos.forEach((p) => p.items.forEach(([id, n]) => { stock[id] -= n; }));
  return { stock, pedidos: pedidos.reverse(), llegados: 0 };
}

/** El siguiente pedido del guion, o null si ya llegaron todos. No cambia el estado. */
export function siguientePedido(estado: Estado): Pedido | null {
  const g = guion[estado.llegados];
  return g ? armar(g, PRIMER_CODIGO + manana.length + estado.llegados, 'nuevo') : null;
}

export const quedanPedidos = (estado: Estado) => estado.llegados < guion.length;
export const ventasDe = (estado: Estado) => estado.pedidos.reduce((s, p) => s + p.total, 0);
export const porDespachar = (estado: Estado) => estado.pedidos.filter((p) => p.estado !== 'despachado').length;
export const estaBajo = (id: string, hay: number) => hay <= porId[id].minimo;

/* ---------- dibujo (el mismo HTML en el servidor y en el navegador) ---------- */

export const burbujaEntra = (p: Pedido) =>
  `<li class="tb-burbuja tb-burbuja--entra"><b>${p.cliente}</b><span>${p.mensaje}</span><time>${p.hora}</time></li>`;

export const burbujaSale = (p: Pedido) =>
  `<li class="tb-burbuja tb-burbuja--sale"><small>Respuesta automática</small><span>Pedido ${p.codigo} registrado. Total ${soles(p.total)}.</span><time>${p.hora}</time></li>`;

export function celdaEstado(p: Pedido): string {
  if (p.estado === 'nuevo') return '<span class="tb-estado tb-estado--nuevo">Nuevo</span>';
  if (p.estado === 'pendiente') {
    return `<button class="tb-despachar" type="button" data-despachar="${p.n}" aria-label="Despachar el pedido ${p.codigo} de ${p.cliente}">Despachar</button>`;
  }
  return '<span class="tb-estado tb-estado--hecho">Despachado</span>';
}

/** "Arroz 3 sacos": el producto y cuánto, con su medida, para que no se lea "tres arroces". */
const renglon = ([id, n]: Renglon) => `${porId[id].corto} ${n} ${porId[id].medida[n === 1 ? 0 : 1]}`;

export const filaPedido = (p: Pedido) =>
  `<li class="tb-pedido" data-estado="${p.estado}" data-n="${p.n}">` +
  `<p class="tb-pedido__quien"><span>${p.codigo}</span><strong>${p.cliente}</strong></p>` +
  `<p class="tb-pedido__items">${p.items.map(renglon).join(' · ')}</p>` +
  `<p class="tb-pedido__total">${soles(p.total)}</p>` +
  `<div class="tb-pedido__estado">${celdaEstado(p)}</div></li>`;

export function filaProducto(p: Producto, hay: number): string {
  const bajo = estaBajo(p.id, hay);
  return (
    `<li class="tb-prod" data-id="${p.id}"${bajo ? ' data-bajo' : ''}>` +
    `<p class="tb-prod__nombre"><strong><span class="tb-largo">${p.nombre}</span><span class="tb-corto">${p.corto}</span></strong>` +
    `<span data-nota>${bajo ? 'Reponer' : p.unidad}</span></p>` +
    `<p class="tb-prod__num"><span class="tb-prod__delta" aria-hidden="true"></span><span class="solo-lector">Quedan </span><span data-hay>${hay}</span></p></li>`
  );
}

export function tira(estado: Estado): string {
  const n = estado.pedidos.length;
  return Array.from({ length: CASILLAS }, (_, i) => {
    if (i >= n) return '<i></i>';
    const p = estado.pedidos[n - 1 - i];
    return p.estado === 'nuevo' ? '<i data-lleno data-nuevo></i>' : '<i data-lleno></i>';
  }).join('');
}

/** Las últimas conversaciones del chat: la del pedido más nuevo va al final. */
export const chat = (estado: Estado, cuantas = 2) =>
  estado.pedidos.slice(0, cuantas).reverse().map((p) => burbujaEntra(p) + burbujaSale(p)).join('');
