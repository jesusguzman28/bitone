// Trabajos entregados, para /proyectos.
//
// Ahora mismo son marcadores de posición: "Proyecto A", "Proyecto B"… Están a
// propósito, y con nombre de marcador, para que nadie los confunda con trabajo
// real mientras se llenan.
//
// Por qué existían antes: la página prometía "Trabajo real, con URL en vivo" y
// "entra, navega y compruébalo tú mismo", pero no mostraba ni un proyecto. Solo
// la parrilla de rubros, que son páginas de venta, no trabajos hechos. Invitar a
// comprobar algo que no se puede comprobar es peor que no decir nada.
//
// Para reemplazar uno: cambia `nombre`, `rubro` y `resumen`, escribe la
// dirección real en `url` y deja la captura en public/proyectos/<imagen>.webp
// (más <imagen>-sm.webp para móvil). En cuanto `url` deja de ser null, la
// tarjeta muestra el botón "Ver en vivo"; mientras tanto no lo muestra, así que
// no promete lo que no hay.

export interface Proyecto {
  /** Nombre del negocio. Mientras sea marcador, "Proyecto A". */
  nombre: string;
  rubro: string;
  /** Una frase: qué se le hizo a ese negocio. */
  resumen: string;
  /** Lo entregado, en tres etiquetas cortas. */
  entregado: readonly string[];
  /** Dirección en vivo. `null` mientras no exista: la tarjeta oculta el botón. */
  url: string | null;
  /** Archivo en public/proyectos/ sin extensión, o null si aún no hay captura. */
  imagen: string | null;
  alt: string;
  /** Marca el contenido de relleno. La tarjeta lo señala en pantalla para que
   *  no se publique por descuido creyendo que es un caso real. */
  esMarcador: boolean;
}

export const proyectos: readonly Proyecto[] = [
  {
    nombre: 'Proyecto A',
    rubro: 'Pollería',
    resumen: 'Carta en línea con pedidos por WhatsApp y la misma información en Google.',
    entregado: ['Página web', 'Carta administrable', 'Pedidos por WhatsApp'],
    url: null,
    imagen: null,
    alt: '',
    esMarcador: true,
  },
  {
    nombre: 'Proyecto B',
    rubro: 'Ferretería',
    resumen: 'Tienda en línea con catálogo grande, control de stock y cobro automático.',
    entregado: ['Tienda online', 'Control de stock', 'Yape, Plin y tarjeta'],
    url: null,
    imagen: null,
    alt: '',
    esMarcador: true,
  },
  {
    nombre: 'Proyecto C',
    rubro: 'Clínica',
    resumen: 'Reserva de citas por especialidad, con recordatorio al paciente.',
    entregado: ['Página web', 'Reserva de citas', 'Recordatorios'],
    url: null,
    imagen: null,
    alt: '',
    esMarcador: true,
  },
  {
    nombre: 'Proyecto D',
    rubro: 'Distribuidora',
    resumen: 'Sistema de ventas, stock y caja para reemplazar los archivos de Excel.',
    entregado: ['Sistema a medida', 'Stock y caja', 'Reportes'],
    url: null,
    imagen: null,
    alt: '',
    esMarcador: true,
  },
];

/** Cuántos de los publicados son todavía relleno. Sirve para avisar en el build
 *  o para decidir si la sección merece salir. */
export const proyectosPendientes = proyectos.filter((p) => p.esMarcador).length;
