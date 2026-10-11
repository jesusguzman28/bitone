// Identidad y compromisos de Bit One. Todo lo que hay aquí está respaldado por
// brief/01-empresa.md. Si un dato no está en ese brief, no se escribe.
import type { ImageMetadata } from 'astro';
import fotoGabriel from '../assets/equipo/gabriel.webp';
import fotoGuillermo from '../assets/equipo/guillermo.webp';
import fotoJesus from '../assets/equipo/jesus.webp';

export const empresa = {
  /** El nombre que se enseña en pantalla. */
  marca: 'Bit One',
  lema: 'Software a la medida de tu operación.',
  /** La empresa legal: la que firma y factura. Solo en líneas formales. */
  razonSocial: 'Bitone E.I.R.L.',
  ruc: '20615736261',
  ciudad: 'Lima, Perú',
  horario: 'Lun a sáb, 9:00 a 19:00',
  horarioLargo: 'Lunes a sábado, de 9:00 a 19:00',
  /** Cabe en un renglón de rótulo a 360 px de ancho. */
  respuesta: 'Respuesta en menos de 2 horas hábiles',
  telefono: '+51 945 574 190',
  whatsapp: '51945574190',
  correo: 'gguzman.bitone@gmail.com',
  googlePlay: 'https://play.google.com/store/apps/developer?id=BIT+ONE',
  /** El dominio donde se publica. De aquí salen la dirección canónica de cada página
      y la de la tarjeta para compartir (Base.astro), si astro.config.mjs no trae `site`. */
  dominio: 'https://bitone.pe',
} as const;

/** Une con espacios que no se parten: "RUC 20615736261" no queda a caballo entre dos
    renglones. */
const junto = (texto: string) => texto.replaceAll(' ', '\u00A0');

/** La aclaración de los nombres. Se dice una sola vez por página: la trae el pie.
    Ninguna página repite la razón social ni el RUC.
    Es la única línea formal del sitio y no se lee partida: la razón social y el RUC con
    su número van cada uno unido. Antes llevaba "(BIT ONE en Google Play)" porque la
    marca era otra; con Bit One la tienda ya dice el mismo nombre. */
export const aclaracionNombres =
  `${empresa.marca} es la marca de ${junto(empresa.razonSocial)}, ${junto(`RUC ${empresa.ruc}`)}.`;

// Las cuentas conservan el usuario de antes (bitwise_peru): son las que existen. Si se
// renombran, se cambian aquí.
export const redes = [
  { nombre: 'LinkedIn', url: 'https://linkedin.com/company/bitwise-peru-oficial' },
  { nombre: 'Facebook', url: 'https://www.facebook.com/share/1E74K2gsDA/?mibextid=wwXIfr' },
  { nombre: 'Instagram', url: 'https://www.instagram.com/bitwise_peru' },
  { nombre: 'TikTok', url: 'https://www.tiktok.com/@bitwise_peru' },
] as const;

/* ---------- WhatsApp ---------- */

export const mensajes = {
  general: 'Hola Bit One, quiero conversar sobre un sistema para mi empresa',
  sistema: 'Hola Bit One, quiero conversar sobre un sistema para mi empresa',
  app: 'Hola Bit One, quiero cotizar una app para mi empresa',
  automatizacion: 'Hola Bit One, quiero automatizar un proceso de mi empresa',
  rescate: 'Hola Bit One, tengo un sistema que necesita mantenimiento',
} as const;

/** Arma el enlace de WhatsApp. Sin mensaje, usa el general. Con '' abre el chat vacío. */
export function enlaceWhatsApp(mensaje: string = mensajes.general): string {
  const base = `https://wa.me/${empresa.whatsapp}`;
  return mensaje ? `${base}?text=${encodeURIComponent(mensaje)}` : base;
}

/* ---------- Personas ---------- */

/** Cómo se encuadra un retrato dentro de su disco: cuánto se amplía y qué punto de la
    foto (en % desde la esquina de arriba a la izquierda) queda en el centro. */
export interface Encuadre {
  zoom: number;
  x: number;
  y: number;
}

export interface Cofundador {
  nombre: string;
  /** Nombre de pila, para textos alternativos y enlaces. */
  pila: string;
  rol: 'Cofundador';
  linkedin: string;
  foto: ImageMetadata;
  /** El encuadre de su retrato. Lo usan igual la portada (Equipo) y /nosotros/
      (PortadaFirmada): las mismas tres caras se ven igual en las dos páginas. */
  encuadre?: Encuadre;
}

// El brief solo respalda nombre, rol y LinkedIn. Sin cargos, estudios ni biografías.
// Las direcciones de LinkedIn son las del sitio publicado: nadie las abrió desde aquí.
// Las tres fotos son distintas (una de hombros, una de terno y una ya recortada en
// círculo). Con estos encuadres las tres cabezas miden casi lo mismo y casi no se ve el
// fondo. Solo valen para estas fotos: con retratos nuevos (brief 03, "Qué falta",
// punto 5) se borran.
export const cofundadores: Cofundador[] = [
  { nombre: 'Gabriel Guzmán Ramos', pila: 'Gabriel', rol: 'Cofundador', linkedin: 'https://www.linkedin.com/in/gabriel-guzman-ramos/', foto: fotoGabriel, encuadre: { zoom: 1.5, x: 44, y: 36 } },
  { nombre: 'Guillermo Vilcas', pila: 'Guillermo', rol: 'Cofundador', linkedin: 'https://www.linkedin.com/in/guillermo-vilcas-cabieses/', foto: fotoGuillermo, encuadre: { zoom: 1.62, x: 49, y: 37.5 } },
  // Su foto ya viene recortada en círculo sobre gris claro: se amplía lo justo para que el aro no asome.
  { nombre: 'Jesús Guzmán', pila: 'Jesús', rol: 'Cofundador', linkedin: 'https://www.linkedin.com/in/jesusguzman01/', foto: fotoJesus, encuadre: { zoom: 1.16, x: 50, y: 50 } },
];

/* ---------- Cómo trabajamos ---------- */

export interface Paso {
  titulo: string;
  duracion: string;
  /** Qué pasa en este paso. */
  pasa: string;
  /** Lo que te queda en la mano al terminar. */
  recibes: string;
}

// Los cinco pasos, con un solo texto para todo el sitio: los pinta la portada (figura,
// plazo, título y "Recibes") y /como-trabajamos/ (además, "qué pasa"). Brief 01, 5.2.
// Cada texto cabe en tres renglones de una columna de escritorio de /como-trabajamos/:
// así las seis figuras y los tres bloques del dinero entran juntos en una pantalla.
// Sin palabras de sistemas, y con el tablero del paso 2, que el brief ofrece ("un
// tablero donde ves el avance").
export const pasos: Paso[] = [
  {
    titulo: 'Entendemos cómo trabajas',
    duracion: '1 a 3 semanas',
    pasa: 'Nos reunimos con quien toma los pedidos y con quien despacha.',
    // El documento dice "precio fijo": es de donde sale.
    recibes: 'Un documento con lo que incluye, las fechas y el precio fijo.',
  },
  {
    titulo: 'Firmamos y arrancamos',
    duracion: '3 a 5 días',
    // "Las cuentas a tu nombre", no "tus cuentas": para un dueño, sus cuentas son las del
    // banco. El brief dice "abrimos las cuentas a nombre de tu empresa".
    pasa: 'Firmamos ese documento. Abrimos las cuentas a tu nombre y un tablero de avance.',
    recibes: 'Tus usuarios y claves, y el plan de la primera entrega.',
  },
  {
    titulo: 'Construimos por partes',
    duracion: 'Depende del tamaño',
    pasa: 'Tú decides qué va primero. Lo que no te convence se corrige antes de seguir.',
    recibes: 'Cada dos semanas, una parte que ya puedes usar.',
  },
  {
    titulo: 'Lo pruebas con datos reales',
    duracion: '2 semanas',
    pasa: 'No se agrega nada nuevo. Tu equipo lo usa y corregimos lo que salga.',
    recibes: 'El sistema probado y la lista de fallas cerrada.',
  },
  {
    // "a tu nombre" va unido ( ): en dos renglones el título parte "Queda / a tu
    // nombre", sin dejar colgada la preposición ni separar "tu" de "nombre".
    titulo: 'Queda a tu nombre',
    duracion: '1 semana',
    pasa: 'Lo ponemos en marcha contigo y capacitamos a tu equipo.',
    // La garantía de 30 días no se repite aquí: es una cláusula de la hoja.
    recibes: 'El sistema en marcha, el programa completo, una guía y tus claves.',
  },
];

/** Cuándo sale el precio y qué se paga antes: la respuesta segura a "¿la cotización es gratis?".
    Gratis es la primera conversación; el paso 1 es trabajo pagado (brief 01, sección 10).
    Del precio del paso 1 solo se dice que es propio y por escrito: ningún brief trae en
    qué momento se le comunica al cliente, y el dueño no lo ha confirmado. "Antes de
    empezar" queda para el precio fijo del sistema, que sí lo respalda el brief. */
export const cuandoSaleElPrecio =
  'La primera conversación es gratis. El paso\u00A01 es un trabajo pagado, con su propio precio por escrito. De ahí sale el precio fijo de todo el sistema, y puedes quedarte solo con ese paso.';

/** Qué pasa después de escribir: los tres renglones del cierre. */
export const quePasaDespues = [
  'Nos escribes.',
  'Respondemos en menos de 2 horas hábiles y conversamos, gratis.',
  // Se entiende solo en cualquier página (no nombra un "paso 1" que quizá nadie explicó) y
  // no dice en qué momento se comunica ese precio: el dueño no lo ha confirmado.
  // \u00A0 une "por escrito" para que no se parta entre dos renglones.
  'Si te conviene seguir, el primer paso se paga y tiene su precio por\u00A0escrito.',
] as const;

/* ---------- Lo que queda por escrito ---------- */

export interface Clausula {
  titulo: string;
  texto: string;
}

// La 01 dice "solo sube", no "solo cambia": si quitas algo, el precio también cambia, y
// es a tu favor (ver `cambios`, "Quitas algo").
export const clausulas: Clausula[] = [
  { titulo: 'Precio fijo', texto: 'Qué incluye el sistema, las fechas y cuánto cuesta. Solo sube si pides algo nuevo.' },
  { titulo: 'Pago por partes', texto: 'Pagas cada parte cuando está entregada, no por adelantado.' },
  { titulo: 'Factura electrónica', texto: 'Una por cada parte entregada. Somos empresa formal, con RUC.' },
  { titulo: '30 días de garantía', texto: 'Lo que falle en las primeras semanas de uso se corrige sin costo.' },
  { titulo: 'Todo a tu nombre', texto: 'El programa, tus usuarios y claves, y tus datos son de tu empresa.' },
  { titulo: 'Lo nuevo se cotiza antes', texto: 'En dos días hábiles sabes cuánto cuesta y cuánto mueve la fecha. No se hace sin tu aprobación.' },
];

/** Va al pie de la hoja completa (/como-trabajamos/), no en la portada. Dice lo que
    Bit One no cobra y lo que sí se acuerda aparte (brief 02 y brief 01, sección 10).
    Lo que cobren otros (por ejemplo, WhatsApp a las empresas) se dice en /como-trabajamos/
    y en la página que lo vende, sin unidad: ver `loQueCobranOtros`. */
export const notaDeLaHoja = 'Por usar tu sistema no nos pagas mensualidad ni un monto por usuario. El mantenimiento, si lo quieres, se acuerda aparte.';

/** Plazos que la empresa firma, no resultados. Son las únicas cifras de la portada.
    Dicen lo que la hoja no dice: cuánto tarda cada respuesta sobre el precio. */
export const compromisos = [
  { cifra: '2 horas hábiles', texto: 'para responderte' },
  // Leída sola dice qué son esas semanas: el paso 1, que es un trabajo pagado. "Para
  // tener tu precio por escrito" a secas parecía una cotización gratis en tres semanas.
  // \u00A0 une "paso 1", "se paga:" y "de ahí": ningún renglón acaba en "se" ni en "de".
  { cifra: '1 a 3 semanas', texto: 'dura el paso\u00A01, que se\u00A0paga: de\u00A0ahí sale tu\u00A0precio' },
  // El plazo es el de un cambio pedido a mitad del trabajo (brief 01, sección 4), no el de
  // la primera cotización: por eso lo dice. Leída sola no debe parecer "cotización en dos días".
  { cifra: '2 días hábiles', texto: 'para decirte cuánto cuesta un cambio' },
] as const;

/* ---------- Hoy y con el sistema ---------- */

export interface Par {
  hoy: string;
  despues: string;
}

export const pares: Par[] = [
  { hoy: 'Tus vendedores dictan los pedidos por WhatsApp y alguien los digita de nuevo.', despues: 'El pedido entra solo y completo.' },
  { hoy: 'Para saber cómo va el negocio, preguntas.', despues: 'Pedidos, almacén y ventas al día, sin preguntar.' },
  { hoy: 'El reporte del lunes se arma el domingo.', despues: 'El reporte se arma solo y llega a quien decide.' },
  { hoy: 'Entre un sistema y otro hay una persona copiando.', despues: 'La información pasa sola, sin volver a digitarla.' },
  { hoy: 'El WhatsApp de la empresa es una persona con un celular.', despues: 'Lo de siempre se responde solo. Lo demás pasa a tu equipo.' },
];

/** Los dos que acompañan al ejemplo de la portada: los de una distribuidora. */
export const paresDePortada: Par[] = pares.slice(0, 2);

/* ---------- Preguntas ---------- */

export interface Pregunta {
  pregunta: string;
  respuesta: string;
}

// Cada respuesta se entiende sola: quien abre solo "¿Cuánto cuesta?" tiene que leer
// ahí mismo que el precio sale del paso 1 y que ese paso se paga (no es una cotización gratis).
// Corta: en la portada eso mismo ya lo dicen el campo rojo, su cifra y el cierre. El
// plazo y lo que mueve el precio están en /como-trabajamos/.
export const preguntasDePortada: Pregunta[] = [
  {
    pregunta: '¿Cuánto cuesta?',
    respuesta:
      'Depende de lo que necesites. El precio fijo por escrito sale del paso\u00A01, que es un trabajo pagado.',
  },
  {
    pregunta: '¿Puedo empezar con algo pequeño?',
    respuesta:
      'Sí, y es lo habitual. Se empieza por la parte que más duele y se entrega funcionando antes de seguir. Cada parte tiene su precio y su fecha por escrito.',
  },
  {
    pregunta: '¿Qué pasa con lo que ya tengo en Excel?',
    respuesta:
      'Se pasa al sistema nuevo. Revisamos qué datos hay y cuáles vale la pena traer. Se limpian los repetidos y los saldos que no cuadran, y se prueba todo antes de arrancar.',
  },
  {
    pregunta: '¿Y después de los 30 días de garantía?',
    respuesta:
      'El sistema es tuyo: puedes seguir con nosotros, con otro proveedor o con tu propio equipo. Si sigues con nosotros, el mantenimiento se acuerda aparte.',
  },
];

/* ---------- Cómo trabajamos, a fondo (/como-trabajamos/) ---------- */

/** Lo que cobran otros. Se dice aquí, donde se habla de dinero, y en la página que lo vende.
    Solo lo que trae el brief 02 (5.1): la estimación antes de empezar es la del servidor;
    para Apple y WhatsApp no promete ninguna. De WhatsApp no se dice si cobra por mensaje
    o por conversación: el brief trae las dos (8.2).
    Cada costo tiene un solo nombre en todo el sitio: "el servidor" (aquí y en /sistemas/)
    y "la membresía" de Apple (aquí y en /apps/). El periodo de esos dos sí se dice: el
    brief lo trae sin contradicción (costo mensual del servidor, membresía anual de Apple). */
export const loQueCobranOtros =
  'Lo que cobran otros lo pagas directo, a nombre de tu empresa. Por ejemplo, el servidor donde vive tu sistema: te estimamos ese costo antes de empezar. También la membresía anual de Apple para publicar en iPhone y lo que cobra WhatsApp a las empresas.';

/** El rescate se cobra de otra forma que un sistema nuevo (brief 02, 2.5, "Precio"). Va
    en /como-trabajamos/, al pie de la hoja: quien llega desde /rescate/ lee ahí "pagas
    cada parte cuando está entregada" y tiene que encontrar, en la misma hoja, cómo se
    paga lo suyo. No dice a qué va pegada la garantía en un rescate: el dueño no lo ha dicho. */
export const pagoDelRescate =
  'En el rescate de un sistema, la revisión tiene precio fijo por escrito. Arreglar y mejorar se paga por horas o con un contrato mensual.';

export interface Cambio {
  titulo: string;
  /** Qué le pasa al precio o a la fecha. */
  etiqueta: string;
  texto: string;
}

/** Qué pasa si pides algo nuevo: los cuatro casos (brief 01, sección 5.2). */
export const cambios: Cambio[] = [
  { titulo: 'Cambias el orden', etiqueta: 'No mueve nada', texto: 'Quieres los reportes antes que el control de almacén. Se reordena: no cuesta ni mueve la fecha.' },
  { titulo: 'Algo entregado falla', etiqueta: 'Sin costo', texto: 'Un cálculo no cuadra. Lo corregimos con prioridad: no es un cambio, es algo que no cumplió lo acordado.' },
  // El plazo (dos días hábiles) ya lo dicen la hoja y las cifras de la misma página.
  { titulo: 'Pides algo que no estaba', etiqueta: 'Se cotiza antes', texto: 'Además quieres facturación electrónica. Te decimos cuánto cuesta y cuánto mueve la fecha. No se hace hasta que lo apruebes.' },
  // La etiqueta del brief es "Baja el precio o se compensa": el monto queda a favor del
  // cliente, y puede descontarse o cambiarse por otra cosa. "Baja el precio" a secas afirmaba solo lo primero.
  { titulo: 'Quitas algo', etiqueta: 'A tu favor', texto: 'El inventario ya no va. Sale del plan y ese monto se descuenta o se cambia por otra cosa.' },
];

/** Lo que Bit One le pide al cliente (brief 01, sección 5.2). No son promesas: son condiciones.
    El tiempo va completo: la hora para elegir qué sigue y los 45 minutos para ver lo
    entregado (brief 01, sección 7, pregunta 7). Con solo los 45 minutos se pedía menos de la mitad.
    Textos cortos: en celular cada uno cabe en dos renglones de rótulo. */
export const deTuLado = [
  { cifra: '1 persona', texto: 'que decida y apruebe lo entregado' },
  { cifra: '48 horas', texto: 'para responder si el trabajo se detiene' },
  { cifra: '1 hora', texto: 'cada dos semanas: elegir qué sigue' },
  { cifra: '45 minutos', texto: 'cada dos semanas: ver lo entregado' },
] as const;

/** Las preguntas de dinero y plazos. Solo van en /como-trabajamos/. */
export const preguntasDeProceso: Pregunta[] = [
  // "¿El precio puede subir a mitad del proyecto?" ya no va aquí: lo responde el campo rojo,
  // en letra grande. En su lugar, la pregunta que falta en una página que habla de dinero
  // (brief 01, sección 7, y brief 02, 5.1).
  {
    pregunta: '¿Por qué no publican precios?',
    respuesta: 'Porque depende de lo que necesites. Un sistema de pedidos para una tienda no cuesta lo mismo que uno de producción para una fábrica. Por eso el precio sale del paso 1, por escrito. Ese paso se paga y tiene su propio precio.',
  },
  {
    pregunta: '¿Puedo contratar solo el paso 1?',
    respuesta: 'Sí. Nos reunimos con tu equipo y anotamos qué tiene que hacer el sistema. Te llevas el documento con el precio y las fechas, y con eso decides si sigues con nosotros.',
  },
  {
    pregunta: '¿Podemos parar el proyecto a la mitad?',
    respuesta: 'Sí. Se termina la parte en curso, te entregamos lo construido funcionando y pagas solo lo hecho. El programa es tuyo desde el inicio: puedes retomarlo con quien quieras.',
  },
  {
    pregunta: '¿Cómo sé que el avance es real?',
    respuesta: 'Porque no te damos porcentajes. Cada dos semanas ves el sistema funcionando y entras a probarlo. Lo que no se puede mostrar cuenta como no empezado.',
  },
];

/* ---------- Nosotros (/nosotros/) ---------- */

// Los textos de la página están en data/nosotros.ts. Aquí quedan las personas
// (`cofundadores`, arriba, con el encuadre de cada retrato), que también usa la portada.
