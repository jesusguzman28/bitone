// Lo construido. Solo lo que respalda brief/03-prueba-y-recursos.md.
// Reglas: no se les llama "clientes", sin años, sin tecnologías y sin cifras de
// resultados (son de cada proyecto, no nuestras). No se dice de quién es cada
// proyecto: se describe qué hace.
import type { ImageMetadata } from 'astro';
import apurayWeb from '../assets/proyectos/apuray-web.png';
import apurayCelular from '../assets/proyectos/apuray-celular.png';
import mindblockSeisJuegos from '../assets/proyectos/mindblock-seis-juegos.png';
import tinibot from '../assets/proyectos/tinibot.webp';
import iconoApuray from '../assets/apps/apuray.webp';
import iconoMiTienda from '../assets/apps/mi-tienda-ap.webp';
import iconoTinibot from '../assets/apps/tinibot.webp';
import { enlaceA } from './navegacion';

export interface Captura {
  imagen: ImageMetadata;
  alt: string;
}

export interface Proyecto {
  id: string;
  nombre: string;
  /** Qué es, en palabras de dueño. */
  tipo: string;
  lugar?: string;
  resumen: string;
  /** null = no se enlaza (es interno, o su web pública todavía no está para enseñarla). */
  enlace: { url: string; texto: string } | null;
  /** Solo los internos: se dice tal cual. */
  acceso: 'publico' | 'interno';
}

// Su web marca Taxi y Envíos como "PRONTO": aquí solo se nombra lo que ya funciona
// (brief 03, A.5 punto 5). La captura es su portada real y dice "mototaxi" en
// letra chica; eso se corrige en apuray.pe, no aquí.
export const apuray: Proyecto & { web: Captura; celular: Captura } = {
  id: 'apuray',
  nombre: 'ApuraY',
  tipo: 'Pedidos y reparto',
  lugar: 'Coracora, Ayacucho',
  resumen: 'Comida, mercado, licorería y regalos que llegan en moto. Quien pide, el negocio que despacha y quien reparte usan el mismo sistema.',
  enlace: { url: 'https://apuray.pe/', texto: 'Abrir apuray.pe' },
  acceso: 'publico',
  web: { imagen: apurayWeb, alt: 'Portada de apuray.pe en una computadora: fondo azul y el titular Pide desde tu casa, te lo trae la moto' },
  celular: { imagen: apurayCelular, alt: 'La misma portada de apuray.pe en un celular' },
};

// EN PAUSA: el enlace a mindblock.io. Su pie firma "BITWISE S.A.C." (aquí la empresa
// es Bitone E.I.R.L.) y muestra una preventa con el contador en ceros (brief 03, A.5
// punto 3). Mientras el dueño no lo corrija allá, se describe y se enlaza solo su
// app. Para reponerlo: enlace: { url: 'https://mindblock.io/', texto: 'Abrir mindblock.io' }.
// La captura es un recorte de su zona de juegos sin el contador de juegos ni las
// pastillas de filtro, que llevan cifras del proyecto y no coinciden con las de su
// portada: seis tarjetas enteras (mindblock-seis-juegos.png, 760 x 425), cortadas por
// el canal de 16 px de la propia página. Es la misma en la portada y en /proyectos/.
// Es más ancha que la pantalla del monitor (16:10): se enseña entera, sobre el color
// de fondo de la propia captura (`fondo`), con <Dispositivo encaje="entera">.
// No hay más ancho que sacar: la captura original mide 1440 px a densidad 1 y, sin
// cifras, la zona limpia tiene 433 px de alto. Para verla nítida en pantallas grandes
// hace falta una captura nueva de mindblock.io/juegos a 1440 x 900 y densidad 2.
// La foto de la placa del robot (src/assets/proyectos/tinibot-placa.png) no se
// importa aquí: una imagen importada que ninguna página pinta se publica igual, entera.
// La página que la use (/proyectos/) la importa y la pasa por <Imagen>, con este alt:
// "La placa electrónica del robot TiniBot, negra, con un pulsador azul".
export const mindblock: Proyecto & { juegos: Captura & { fondo: string }; robot: Captura } = {
  id: 'mindblock',
  nombre: 'MindBlock',
  tipo: 'Educación y robótica',
  resumen: 'Los niños arman órdenes con bloques y un robot de verdad, TiniBot, las obedece. Funciona desde la computadora y desde su app.',
  enlace: null,
  acceso: 'publico',
  juegos: { imagen: mindblockSeisJuegos, fondo: '#06060F', alt: 'Seis juegos de programación de MindBlock: Patrón Mágico, Fábrica de Sueños, Búscame, Atrápame, Granja Code y RoboCode' },
  robot: { imagen: tinibot, alt: 'Dos robots TiniBot rojos, con ojos saltones, ruedas azules y la placa electrónica a la vista' },
};

/** La placa del robot. La foto la importa la pieza que la pinta (ver la nota de arriba):
    src/components/proyectos/FueraDePantalla.astro. */
export const placaTinibot = {
  alt: 'La placa electrónica del robot TiniBot, negra, con un pulsador azul',
  /** El rótulo de su ficha. Corto (en celular la ficha mide dos módulos) y sin decir de
      quién es la placa: que la diseñó o fabricó Bitwise solo lo afirma mindblock.io, con
      la razón social que está por aclarar (brief 03, A.5 punto 3). */
  rotulo: 'Por dentro',
};

// Los textos de /proyectos/. Los de cada proyecto están arriba (los comparten la
// portada y /sistemas/); aquí, solo lo que dice esta página.
// "portada": la página promete solo lo que cumple. Hoy se pueden abrir apuray.pe y las
// tres fichas de Google Play; mindblock.io está en pausa. Cuando se reponga su enlace,
// la entrada puede volver a decir que los proyectos se abren. El botón no dice "algo
// así": en la primera pantalla todavía no se ha enseñado nada.
// "robot" es su momento propio: lo construido que no cabe en una pantalla. Lo que se
// afirma es lo que respalda el brief: el programa mueve un robot de verdad. De quién es
// la placa no se dice. La segunda frase es una comparación con el negocio del lector, no
// un dato de MindBlock.
// "tuyo" es la última fila de la lista de sistemas: el del lector. Lo que promete es lo
// seguro (brief 01): la primera conversación es gratis y el precio es fijo y por escrito.
// Los espacios duros ( ) evitan que un renglón acabe en un artículo suelto.
export const vitrina = {
  portada: {
    titulo: 'Lo que hemos construido.',
    // Dice qué se construyó, sin nombres propios que el lector todavía no conoce: ApuraY
    // aparece justo debajo, con su captura. La descripción para buscadores sí lo nombra.
    entrada: 'Un sistema de pedidos y tres apps que puedes abrir ahora\u00A0mismo.',
    descripcion: 'Sistemas y apps hechos por Bit One. ApuraY y tres apps de Google Play se pueden abrir ahora mismo.',
    boton: 'Escríbenos por WhatsApp',
    mensaje: 'Hola Bit One, vi sus proyectos y quiero conversar sobre un sistema para mi empresa',
  },
  robot: {
    rotulo: 'TiniBot, el robot de MindBlock',
    titulo: ['No todo se queda', 'en la pantalla.'],
    texto: 'Un niño arma una orden con bloques. El programa la manda a la placa electrónica y el robot se mueve.',
    puente: 'En tu negocio es igual: el pedido que entra por el celular tiene que salir del almacén.',
  },
  otros: {
    titulo: ['Otros sistemas', 'que hicimos.'],
    nota: 'Son de uso interno: no están abiertos al público. Por eso van en texto.',
    tuyo: {
      nombre: 'El tuyo',
      rotulo: 'Tu negocio',
      // "Tu sistema", no "lo demás": no todo lo demás va a precio fijo (el paso 1 tiene
      // su propio precio, un rescate se paga por horas o por mes y lo de otros se paga directo).
      texto: 'Es el que falta. La primera conversación es gratis. Tu sistema, con precio fijo por\u00A0escrito.',
      /** Primero su rubro (ahí reconoce su negocio); después, cómo se trabaja y se cobra. */
      enlaces: { rubro: 'Mira tu rubro', proceso: enlaceA.comoTrabajamosCorto },
    },
  },
  cierre: {
    interes: 'algo como lo que vi en sus proyectos',
  },
} as const;

// Van en texto, sin captura y sin enlace: Grupo JMF y AjosyCebollas son de uso
// interno y no hay permiso para enseñarlos. Los leen también la portada y /sistemas/.
// Qué se dice de cada uno: solo lo que consta en la lista del dueño (brief 03, A.1) y
// se puede decir sin afirmar de quién es el sistema ni cuánto se usa. Nada de "su
// equipo" ni "todos los días": lo primero dice de quién es y lo segundo no se
// comprueba desde fuera. Falta que el dueño dé una frase de qué hace cada uno.
// AjosyCebollas: el tipo es el del brief ("Sistema de gestión"). Su pantalla de
// ingreso dice "Pedidos a proveedores", que es más concreto, pero nadie lo ha
// confirmado: no se publica hasta que el dueño lo diga.
// Grupo JMF: su app está en Google Play (su ficha habla de asistencia y proyectos del
// personal), pero enseña el interior de un sistema interno: tampoco se cita.
export const enTexto: Proyecto[] = [
  {
    id: 'ajosycebollas',
    nombre: 'AjosyCebollas',
    tipo: 'Sistema de gestión',
    resumen: 'Hecho a medida. Cada persona entra con su usuario y su clave.',
    enlace: null,
    acceso: 'interno',
  },
  {
    id: 'jmf',
    nombre: 'Grupo JMF',
    tipo: 'Sistema interno',
    resumen: 'Funciona en la computadora y tiene su app para celular.',
    enlace: null,
    acceso: 'interno',
  },
];

// EN PAUSA: Quipuy. Está en la lista del dueño, pero hoy desde fuera solo se comprueba
// una página de presentación: sus botones no llevan a ninguna parte, no hay app en
// Google Play y nada público lo une a Bit One (brief 03, A.5 punto 4). No sale en
// ninguna página hasta que el dueño dé la dirección real de la plataforma. Para
// reponerlo, pásalo a `enTexto` y revisa la nota de `vitrina.otros`.
export const enPausa: Proyecto[] = [
  {
    id: 'quipuy',
    nombre: 'Quipuy',
    tipo: 'Educación',
    resumen: 'Le dice a un postulante cuánto le falta para el puntaje de corte de su universidad.',
    enlace: null,
    acceso: 'publico',
  },
];

export interface App {
  nombre: string;
  paquete: string;
  frase: string;
  icono: ImageMetadata;
  /** Dirección de su ficha en Google Play. */
  ficha: string;
}

const ficha = (paquete: string) => `https://play.google.com/store/apps/details?id=${paquete}`;

// Las apps públicas. Sin estrellas ni descargas: la nota guardada está
// desactualizada y las descargas son datos de la tienda, no logros.
// La app de Grupo JMF (com.jmf.app) también está en Google Play, pero su ficha
// enseña el interior de un sistema de uso interno: no se enlaza ni se pinta su
// icono (src/assets/apps/jmf.webp) sin el visto bueno del dueño.
export const apps: App[] = [
  { nombre: 'Mi Tienda AP', paquete: 'pe.apuray.negocio', frase: 'El negocio recibe y despacha.', icono: iconoMiTienda, ficha: ficha('pe.apuray.negocio') },
  { nombre: 'Apuray', paquete: 'pe.apuray.river', frase: 'La app de quien pide.', icono: iconoApuray, ficha: ficha('pe.apuray.river') },
  { nombre: 'TiniBot', paquete: 'pe.mindblock.tinibotapp', frase: 'Bloques que el robot obedece.', icono: iconoTinibot, ficha: ficha('pe.mindblock.tinibotapp') },
];
