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

// Lo que se escribe aquí de cada proyecto sale de su propio sitio, no de lo que
// nos gustaría decir. Nada de cifras de resultados ("subimos las ventas un X%")
// mientras no haya con qué respaldarlas.
export const proyectos: readonly Proyecto[] = [
  {
    nombre: 'ApuraY',
    rubro: 'Mototaxi y delivery',
    resumen:
      'App para pedir mototaxi, comida, mercado y envíos en Coracora, Ayacucho. Con su página web y publicada en Google Play.',
    entregado: ['App móvil', 'Página web', 'Publicada en Google Play'],
    url: 'https://apuray.pe',
    // Sin captura todavía. La tarjeta dibuja la banda con el rubro, del mismo
    // alto que tendrá la foto, así que al llegar no se mueve nada.
    imagen: null,
    alt: '',
    esMarcador: false,
  },
  {
    nombre: 'Quipuy',
    rubro: 'Educación',
    resumen:
      'Plataforma para postulantes a la universidad: mide cuánto te falta para el puntaje de corte y te hace practicar hasta cerrarlo.',
    entregado: ['App móvil', 'Página web', 'Publicada en Google Play'],
    url: 'https://quipuy.pe',
    imagen: 'quipuy-home',
    alt: 'Portada de Quipuy mostrando el puntaje del postulante frente al puntaje de corte de su universidad',
    esMarcador: false,
  },
  {
    nombre: 'MindBlock',
    rubro: 'Educación',
    resumen:
      'Plataforma de robótica y programación para niños de 6 a 14 años, con juegos por bloques y su robot educativo.',
    entregado: ['Plataforma web', 'Juegos interactivos', 'Cuentas de alumno'],
    url: 'https://mindblock.io',
    imagen: 'mindblock-home',
    alt: 'Portada de MindBlock con su editor de programación por bloques y un juego de robótica',
    esMarcador: false,
  },
];

/** Cuántos de los publicados son todavía relleno. Sirve para avisar en el build
 *  o para decidir si la sección merece salir. */
export const proyectosPendientes = proyectos.filter((p) => p.esMarcador).length;
