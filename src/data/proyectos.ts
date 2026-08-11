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
  /** Archivo en public/proyectos/ sin extensión, o null si aún no hay captura.
   *  Sin captura la tarjeta dibuja una portada de color con el nombre, que se
   *  ve intencionada; antes quedaba una banda gris que parecía un fallo. */
  imagen: string | null;
  alt: string;
  /** Color de la portada cuando no hay captura. Se toma del propio proyecto
   *  para que la tarjeta se parezca a lo que verá quien entre al enlace. */
  color: string;
  /** Marca el contenido de relleno. La tarjeta lo señala en pantalla para que
   *  no se publique por descuido creyendo que es un caso real. */
  esMarcador: boolean;
}

// Lo que se escribe aquí de cada proyecto sale de su propio sitio, no de lo que
// nos gustaría decir. Nada de cifras de resultados ("subimos las ventas un X%")
// mientras no haya con qué respaldarlas.
export const proyectos: readonly Proyecto[] = [
  {
    nombre: 'ApuraY',
    rubro: 'Mototaxi y delivery',
    // Una frase. La descripción larga se leía como un párrafo de catálogo; aquí
    // lo único que hace falta es entender de qué va antes de decidir si entras.
    resumen: 'Pide mototaxi, comida y envíos en Coracora, Ayacucho.',
    entregado: ['App móvil', 'Página web'],
    url: 'https://apuray.pe',
    imagen: null,
    alt: '',
    color: '#0077B6',
    esMarcador: false,
  },
  {
    nombre: 'Quipuy',
    rubro: 'Educación',
    resumen: 'Mide cuánto te falta para ingresar a tu universidad.',
    entregado: ['App móvil', 'Página web'],
    url: 'https://quipuy.pe',
    imagen: 'quipuy-home',
    alt: 'Portada de Quipuy mostrando el puntaje del postulante frente al puntaje de corte de su universidad',
    color: '#5B4CF0',
    esMarcador: false,
  },
  {
    nombre: 'MindBlock',
    rubro: 'Educación',
    resumen: 'Robótica y programación para niños, jugando.',
    entregado: ['Plataforma web', 'Cuentas de alumno'],
    url: 'https://mindblock.io',
    imagen: 'mindblock-home',
    alt: 'Portada de MindBlock con su editor de programación por bloques y un juego de robótica',
    color: '#F97316',
    esMarcador: false,
  },
  {
    // Sin enlace a propósito. La dirección que nos pasaron, ajosycebollas.pe, no
    // existe: no tiene registro DNS. La que sí responde es ajosycebollas.com.pe,
    // y lo que abre es una pantalla de inicio de sesión, no un sitio público.
    // Mandar a un visitante a un login desde una vitrina de trabajos es peor que
    // no poner enlace, así que la tarjeta se queda sin botón hasta saber cuál es
    // la dirección buena.
    nombre: 'AjosyCebollas',
    rubro: 'Sistema a medida',
    resumen: 'Sistema de gestión con cuenta de acceso para cada usuario.',
    entregado: ['Sistema a medida', 'Cuentas de acceso'],
    url: null,
    imagen: null,
    alt: '',
    color: '#16A34A',
    esMarcador: false,
  },
];

/** Cuántos de los publicados son todavía relleno. Sirve para avisar en el build
 *  o para decidir si la sección merece salir. */
export const proyectosPendientes = proyectos.filter((p) => p.esMarcador).length;
