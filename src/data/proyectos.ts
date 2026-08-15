// Trabajos entregados, para /proyectos.
//
// Es la página más importante del sitio después de la portada: en una venta a
// empresas, lo primero que hace quien evalúa contratarte es abrir tus trabajos
// y comprobar si has construido algo del tamaño de lo suyo.
//
// Lo que se escribe aquí de cada proyecto sale de su propio sitio, no de lo que
// nos gustaría decir. Y hay una regla que conviene no perder: nada de cifras de
// resultados. Varias de estas plataformas publican en su web números propios
// —cuántas preguntas tienen, cuántos alumnos usan el robot—, y son suyos, no
// nuestros: repetirlos aquí los convertiría en un logro de BIT-ONE, que es
// exactamente el tipo de afirmación que este sitio evita. Se describe lo que el
// sistema HACE, que es lo que demuestra capacidad técnica.
//
// Las apps móviles de estos mismos proyectos viven en data/apps.ts, con enlace
// a su ficha de Play Store. Se listan aparte a propósito: una app suele ser una
// pieza de un proyecto y no un proyecto por su cuenta —ApuraY tiene dos—, así
// que meterlas aquí contaría dos veces el mismo trabajo.

export interface Proyecto {
  /** Nombre del producto o del cliente. */
  nombre: string;
  /** Qué tipo de sistema es. Sale en mayúsculas sobre el nombre. */
  rubro: string;
  /** Una o dos frases: qué hace el sistema. */
  resumen: string;
  /** Lo entregado, en etiquetas cortas. */
  entregado: readonly string[];
  /** Dirección en vivo. `null` cuando no hay ninguna que enseñar. */
  url: string | null;

  /** Si lo que abre `url` es público o un sistema con acceso restringido.
   *
   *  Importa y por eso es un campo y no una nota al pie: dos de estos cinco son
   *  sistemas internos y lo que responde su dirección es una pantalla de inicio
   *  de sesión. Mandar a alguien a un login desde un portafolio sin avisarle se
   *  siente como un enlace roto. Avisándole, pasa lo contrario: un sistema con
   *  acceso por usuario dice más de la capacidad técnica que una web pública.
   *
   *  El botón de la tarjeta cambia de texto según esto. */
  acceso: 'publico' | 'privado';

  /** Logotipo del proyecto en public/proyectos/logo-<logo>.webp, 256x256.
   *
   *  Son los logos REALES, descargados del propio sitio de cada proyecto y
   *  servidos desde nuestro dominio. `null` cuando el sitio no publica ninguno
   *  utilizable —Quipuy usa un emoji de favicon y AjosyCebollas no expone
   *  icono—; en ese caso la tarjeta dibuja un monograma con la inicial sobre el
   *  color del proyecto, en el mismo cuadrado redondeado, así la fila no se
   *  descuadra.
   *
   *  Antes aquí había una captura de pantalla a lo ancho de la tarjeta. Era el
   *  origen del problema: con cinco proyectos, cinco capturas grandes y un
   *  párrafo largo debajo de cada una, el bloque ocupaba media página y no se
   *  parecía en nada a la fila compacta de las apps. */
  logo: string | null;
  /** Color de la portada cuando no hay captura. Se toma del propio proyecto
   *  para que la tarjeta se parezca a lo que verá quien entre al enlace. */
  color: string;
  /** Marca el contenido de relleno. La tarjeta lo señala en pantalla para que
   *  no se publique por descuido creyendo que es un caso real. */
  esMarcador: boolean;

  // ---- Ficha técnica ----
  //
  // La diferencia entre una vitrina y un portafolio. Quien abre esta página es
  // alguien técnico decidiendo si sabemos construir algo del tamaño de lo suyo,
  // y para eso una frase por proyecto no alcanza: necesita saber con qué está
  // hecho y cuándo.
  //
  // Van vacíos a propósito, igual que las reseñas: el sitio no publica lo que
  // no puede sostener, y el stack es exactamente el dato que se verifica en la
  // primera reunión técnica. En cuanto se llenen, la tarjeta los muestra sola.

  /** Tecnologías con las que está construido. Lista vacía = todavía no se
   *  publica. Escribir solo lo que se pueda defender en una reunión técnica. */
  stack: readonly string[];

  /** Año de publicación, o rango si el desarrollo cruzó dos. `null` mientras no
   *  se confirme: una fecha equivocada en un portafolio se nota enseguida. */
  anio: string | null;
}

export const proyectos: readonly Proyecto[] = [
  {
    nombre: 'ApuraY',
    rubro: 'Plataforma de delivery',
    resumen:
      'Mototaxi, comida y envíos en Coracora, Ayacucho. Tres piezas conectadas: pasajero, negocio y repartidor.',
    entregado: ['Plataforma web', 'App de pasajero', 'App de negocio', 'Panel de comercios'],
    url: 'https://apuray.pe/',
    acceso: 'publico',
    logo: 'apuray',
    color: '#0086EA',
    esMarcador: false,
    stack: [],
    anio: null,
  },
  {
    nombre: 'Quipuy',
    rubro: 'Plataforma educativa',
    resumen:
      'Le dice a un postulante cuánto le falta para el puntaje de corte de su universidad. Con práctica adaptativa y suscripciones.',
    entregado: ['Plataforma web', 'App móvil', 'Cuentas de usuario', 'Suscripciones'],
    url: 'https://quipuy.pe/',
    acceso: 'publico',
    logo: null,
    color: '#5B4CF0',
    esMarcador: false,
    stack: [],
    anio: null,
  },
  {
    nombre: 'MindBlock',
    rubro: 'Plataforma educativa y robótica',
    resumen:
      'Programación por bloques para niños. El software controla un robot físico, TiniBot, desde el navegador y desde la app.',
    entregado: ['Plataforma web', 'App móvil', 'Programación por bloques', 'Cuentas de alumno'],
    url: 'https://mindblock.io/',
    acceso: 'publico',
    logo: 'mindblock',
    color: '#F97316',
    esMarcador: false,
    stack: [],
    anio: null,
  },
  {
    nombre: 'Grupo JMF',
    rubro: 'Intranet corporativa',
    resumen:
      'Sistema interno con acceso por usuario y su app móvil. No se vende afuera: lo usa el equipo todos los días.',
    entregado: ['Intranet', 'App móvil', 'Cuentas de acceso'],
    url: 'https://intranet.jmf.com.pe/',
    acceso: 'privado',
    logo: 'jmf',
    color: '#2A66C0',
    esMarcador: false,
    stack: [],
    anio: null,
  },
  {
    nombre: 'AjosyCebollas',
    rubro: 'Sistema de gestión',
    resumen:
      'Sistema de gestión a medida con cuenta de acceso por usuario. Software de operación interna.',
    entregado: ['Sistema a medida', 'Cuentas de acceso'],
    url: 'https://ajosycebollas.com.pe/login',
    acceso: 'privado',
    logo: null,
    color: '#16A34A',
    esMarcador: false,
    stack: [],
    anio: null,
  },
];

/** Cuántos de los publicados son todavía relleno. Sirve para avisar en el build
 *  o para decidir si la sección merece salir. */
export const proyectosPendientes = proyectos.filter((p) => p.esMarcador).length;
