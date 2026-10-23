// El mapa del sitio. Es la única fuente de la cabecera, del menú de celular y
// del pie: una página nueva se añade aquí y aparece en los tres.
//
// Ningún enlace interno queda muerto. Este archivo mira qué páginas existen de
// verdad (archivos en src/pages) y, mientras una no exista, su enlace lleva a la
// sección de la portada que la resume. Cuando alguien crea la página, el enlace
// cambia solo. Solo se usa al compilar: no lo importes desde un <script> de navegador.
import type { NombreSigno } from '../lib/signos';

export interface Pagina {
  ruta: string;
  /** Nombre en menús y enlaces. */
  nombre: string;
  /** Una línea para el menú de celular y el pie. */
  frase: string;
  /** Signo dominante de la página: va en su portada y en su cenefa. */
  signo: NombreSigno;
  /** Sección de la portada que resume esta página: a donde lleva el enlace mientras no exista. */
  ancla: string;
  /** Si la página vive en bitwise.pe (el sitio principal), su dirección allá. El enlace
      lleva ahí y la ruta local redirige (astro.config.mjs). */
  externo?: string;
}

export const paginas = {
  inicio: { ruta: '/', nombre: 'Inicio', frase: 'Del desorden al sistema.', signo: 'medida', ancla: '' },
  sistemas: { ruta: '/sistemas/', nombre: 'Sistema a medida', frase: 'Pedidos, almacén y ventas en un solo lugar.', signo: 'medida', ancla: 'servicios', externo: 'https://bitwise.pe/servicios/desarrollo-de-software-a-medida/' },
  apps: { ruta: '/apps/', nombre: 'App para tu negocio', frase: 'Para tu equipo en la calle o para tus clientes.', signo: 'app', ancla: 'servicios', externo: 'https://bitwise.pe/servicios/apps-moviles/' },
  automatizacion: { ruta: '/automatizacion/', nombre: 'Automatización', frase: 'Lo que hoy haces a mano, se hace solo.', signo: 'greca', ancla: 'servicios', externo: 'https://bitwise.pe/automatizacion/' },
  rescate: { ruta: '/rescate/', nombre: 'Rescate de un sistema', frase: 'Arreglamos o mantenemos el sistema que ya tienes.', signo: 'rescate', ancla: 'servicios' },
  // Los cuatro rubros, en el orden de la página (data/negocios.ts): la bodega va al final.
  negocios: { ruta: '/negocios/', nombre: 'Para tu negocio', frase: 'Distribuidora, ferretería, restaurante, bodega.', signo: 'enlace', ancla: 'servicios', externo: 'https://bitwise.pe/soluciones/' },
  // No dice "se puede abrir": hoy solo se abren apuray.pe y tres fichas de Google Play.
  proyectos: { ruta: '/proyectos/', nombre: 'Proyectos', frase: 'Sistemas y apps hechos por Bit One.', signo: 'app', ancla: 'construido' },
  comoTrabajamos: { ruta: '/como-trabajamos/', nombre: 'Cómo trabajamos', frase: 'Proceso, precio, plazos y garantía.', signo: 'greca', ancla: 'como-trabajamos' },
  nosotros: { ruta: '/nosotros/', nombre: 'Nosotros', frase: 'Las personas y cómo escribirnos.', signo: 'enlace', ancla: 'nosotros' },
} as const satisfies Record<string, Pagina>;

export type ClavePagina = keyof typeof paginas;

/* ---------- qué páginas existen ---------- */

// Rutas que hoy tienen archivo: 'src/pages/apps.astro' y 'src/pages/apps/index.astro' son '/apps/'.
const construidas = new Set(
  Object.keys(import.meta.glob('../pages/**/*.astro')).map((archivo) => {
    const ruta = archivo.replace('../pages/', '').replace(/\.astro$/, '').replace(/(^|\/)index$/, '');
    return ruta ? `/${ruta}/` : '/';
  }),
);

// Rutas que viven en bitwise.pe: su dirección allá.
const externos = new Map(Object.values(paginas).filter((p) => 'externo' in p).map((p) => [p.ruta, (p as Pagina).externo as string]));

/** ¿Ya existe la página de esta ruta? Cuenta la que vive en bitwise.pe. */
export const existe = (ruta: string): boolean => construidas.has(ruta) || externos.has(ruta);

/** El enlace a una ruta: la dirección en bitwise.pe si vive allá; si no, la ruta local. */
export const enlaceDe = (ruta: string): string => externos.get(ruta) ?? ruta;

/** A dónde lleva hoy el enlace a una página: a ella si existe; si no, a su sección de la portada. */
export const destino = (pagina: Pagina): string => (existe(pagina.ruta) ? enlaceDe(pagina.ruta) : `/#${pagina.ancla}`);

/* ---------- menús ---------- */

/** Las puertas de entrada: lo que se despliega bajo "Servicios". */
export const menuServicios: Pagina[] = [paginas.sistemas, paginas.apps, paginas.automatizacion, paginas.rescate, paginas.negocios];

/** Las páginas que van sueltas en la cabecera, después de "Servicios". */
export const menuEmpresa: Pagina[] = [paginas.proyectos, paginas.comoTrabajamos, paginas.nosotros];

export interface EnlaceDeMenu {
  nombre: string;
  href: string;
  /** Ruta de la página, si el enlace ya lleva a ella (para marcar la actual). */
  ruta?: string;
}

/** Lo que pintan hoy la cabecera, el menú de celular y el pie.
    `servicios`: las páginas de servicio que ya existen, con su signo y su frase.
    `enlaces`: los enlaces sueltos. Mientras no exista ninguna página de servicio,
    el primero es "Servicios" y lleva a esa sección de la portada. */
export const mapa: { servicios: Pagina[]; enlaces: EnlaceDeMenu[] } = (() => {
  const servicios = menuServicios.filter((p) => existe(p.ruta));
  const enlaces: EnlaceDeMenu[] = menuEmpresa.map((p) => ({ nombre: p.nombre, href: destino(p), ruta: existe(p.ruta) ? p.ruta : undefined }));
  if (!servicios.length) enlaces.unshift({ nombre: 'Servicios', href: '/#servicios' });
  return { servicios, enlaces };
})();

/* ---------- cómo se llama el enlace a las dos páginas a las que todas mandan ---------- */

/** Un solo texto por destino, en todo el sitio: quien pasa de una página a otra reconoce
    que el enlace lleva al mismo lugar. Los dos nombran la página como la nombra el menú.
    `comoTrabajamos`: la página y lo que se va a buscar ahí. Solo se puede partir después
    de los dos puntos: donde no cabe en un renglón (un celular de 360 px, una nota
    lateral) queda "Cómo trabajamos:" arriba y el resto abajo, nunca una palabra suelta.
    `comoTrabajamosCorto`: donde solo cabe el nombre (la fila "El tuyo" de /proyectos/) o
    donde no se puede prometer la garantía (el paso 1 de /rescate/).
    `proyectos`: vale después de una lista (la portada, /apps/, /sistemas/) y sola. */
export const enlaceA = {
  comoTrabajamos: 'Cómo\u00A0trabajamos: precio,\u00A0pagos\u00A0y\u00A0garantía',
  comoTrabajamosCorto: 'Cómo trabajamos',
  proyectos: 'Ver todos los proyectos',
} as const;

/** Todas las rutas del sitio, en orden de lectura. */
export const rutas: string[] = Object.values(paginas).map((p) => p.ruta);

/** ¿Esta ruta es la de la página que se está viendo? Sirve para aria-current. */
export function esActual(ruta: string, rutaActual: string): boolean {
  const limpia = rutaActual.endsWith('/') ? rutaActual : rutaActual + '/';
  return ruta === '/' ? limpia === '/' : limpia.startsWith(ruta);
}
