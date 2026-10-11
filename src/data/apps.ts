// Todo lo que cuenta /apps/. Los hechos salen de brief/02-oferta.md (sección 2.2) y de
// brief/03-prueba-y-recursos.md (A.2): se reescribe el estilo, no el hecho.
// Reglas de esta página:
//  - La tesis es del dueño: "No siempre hace falta una app, y te lo decimos antes".
//    La prueba la pone en práctica: sin nada marcado, basta un sistema que se abre en
//    el celular (no "una página": Bit One ya no vende páginas web).
//  - Android y iPhone se dice como oferta: la app se hace una vez y sirve para los dos.
//    Publicarla en iPhone se cotiza aparte, y eso va escrito donde se promete (paso 4
//    y primera pregunta). No hay ninguna app publicada en la tienda de Apple.
//  - Se enseñan tres apps. De la cuarta solo se dice que existe y que es de uso
//    interno: sin nombre, sin icono y sin enlace (su ficha muestra el interior de un
//    sistema interno; falta el visto bueno del dueño).
//  - Las tres fichas figuran en la cuenta de Google Play de la empresa, no en la de
//    quien usa cada app: la entrada de la lista lo dice, y dice cómo sale la del cliente.
//  - Sin estrellas ni descargas. Sin "panel", "integración" ni "licencias".
//  - Dinero y garantía se explican en /como-trabajamos/: aquí solo se enlaza. El paso 1
//    dice que se paga y que puede contratarse solo.
// En los textos, " " es un espacio que no se parte: evita renglones huérfanos.
import type { Par, Paso, Pregunta } from './empresa';
import { mensajes } from './empresa';

/** Una de las cuatro razones por las que una app vale la pena (brief 02, 2.2, "El problema"). */
export interface Tecla {
  id: 'diario' | 'senal' | 'avisos' | 'camara';
  titulo: string;
  /** Una escena corta, en minúscula: dos renglones de unas doce letras dentro de la tecla. */
  texto: string;
  /** Cómo se dice en el mensaje de WhatsApp: "Necesito que …". */
  dice: string;
}

export const app = {
  portada: {
    // Corta a propósito (38 letras): en tableta da tres renglones. Con "en la calle o
    // para" salían cuatro. La calle sigue en la frase del menú y en la descripción.
    titulo: 'Una app para tu equipo o\u00A0tus clientes.',
    entrada: 'Publicada a nombre de tu empresa. Y si no hace falta una app, te lo decimos antes.',
    // "Conversar", no "cotizar": el precio sale del paso 1, que se paga. Quien toca el
    // botón recibe una conversación, no un precio. El mensaje de WhatsApp sigue siendo el
    // del brief ("quiero cotizar una app"): si cambia, lo decide el dueño.
    boton: 'Conversar sobre mi app',
    /** Enlace secundario de la portada: baja a la prueba. */
    enlace: 'Saber si me hace falta',
    /** Lo que se añade al mensaje del cierre: "Me interesa: …". */
    interes: 'una app',
    ejemplo: 'Por ejemplo: mis repartidores anotan las entregas en papel y alguien las pasa en la tarde.',
  },

  /* ¿Te suena? Los tres pares del brief (02, 2.2). "Se sincroniza" se dice "se envía".
     Sin entrada: el título ya dice la escena y los pares vienen enseguida. */
  suena: {
    titulo: ['Papel, WhatsApp', 'y llamadas.'],
  },
  rotuloDespues: 'Con la app',
  pares: [
    { hoy: 'Tu equipo anota pedidos en papel o WhatsApp.', despues: 'Los pedidos entran desde el celular, en el momento.' },
    { hoy: 'Los clientes te escriben para saber en qué va lo suyo.', despues: 'El cliente ve el estado en su app, sin llamar.' },
    { hoy: 'Sin señal, nadie puede registrar nada.', despues: 'Funciona sin señal y se envía después.' },
  ] satisfies Par[],

  /* La prueba: el momento propio de la página. Cuatro teclas y un veredicto. */
  prueba: {
    rotulo: 'Haz la prueba',
    /** Tres renglones cortos; el último va en rojo. */
    titulo: ['No siempre', 'hace falta', 'una app.'],
    entrada: 'Es el trabajo más caro y más largo que hacemos. Por eso empezamos por lo incómodo: ver si te basta algo más simple.',
    pantalla: {
      rotulo: '¿Hace falta una app?',
      pregunta: 'Marca lo que necesitas.',
      teclas: [
        { id: 'diario', titulo: 'A diario', texto: 'se usa todos los días', dice: 'se use todos los días' },
        { id: 'senal', titulo: 'Sin señal', texto: 'anotas y se envía luego', dice: 'funcione sin señal' },
        { id: 'avisos', titulo: 'Avisos', texto: 'suena aunque esté cerrada', dice: 'mande avisos al celular' },
        { id: 'camara', titulo: 'Cámara', texto: 'lee un código o toma fotos', dice: 'use la cámara' },
      ] satisfies Tecla[],
      // Lo que basta es lo que cuenta /sistemas/ (brief 02, 2.3: se abre sin instalar nada,
      // también desde el celular). "Cuesta menos": la app es lo más caro que se hace.
      no: { rotulo: 'Sin marcar nada', titulo: 'Te basta un sistema que se abre en el celular.', texto: 'Sin instalar nada, y cuesta menos.' },
      si: { rotulo: 'Con lo que marcaste', titulo: 'Sí vale la pena una app.', texto: 'Cuéntanos tu caso y vemos qué va en ella.' },
    },
    boton: 'Consultar mi caso',
    nota: 'Lo que marques va escrito en el mensaje.',
    /** El otro camino, para quien no marcó nada: lleva a /sistemas/. */
    simple: 'Ver sistema a medida',
    /** Mensaje de WhatsApp sin nada marcado, y el arranque del que lleva lo marcado. */
    mensajeNo: 'Hola Bit One, quiero saber si me hace falta una app o me basta un sistema que se abre en el celular',
    mensajeSi: `${mensajes.app}. Necesito que`,
  },

  como: {
    titulo: ['Una app,', 'Android y iPhone.'],
    entrada: 'Se hace una vez y sirve para los dos. Toma de 2 a 5 meses.',
  },
  // Los plazos caben en los generales de data/empresa.ts (el paso 1 dura de 1 a 3 semanas).
  fases: [
    {
      titulo: 'Decidimos qué va en la app',
      duracion: '1 a 2 semanas',
      // El paso 1 se paga y puede contratarse solo: se dice aquí, no solo en el cierre.
      pasa: 'Solo lo que se usa de pie, con una mano y con prisa. Este paso se paga aparte y puedes contratarlo solo.',
      recibes: 'Por escrito: las pantallas, las fechas y el precio fijo.',
    },
    {
      titulo: 'Diseñamos las pantallas',
      duracion: '2 a 3 semanas',
      pasa: 'Dibujamos cada pantalla para que la recorras antes de construir.',
      recibes: 'Una maqueta para probar en tu propio celular.',
    },
    {
      titulo: 'La construimos por partes',
      duracion: '6 a 12 semanas',
      pasa: 'Con los avisos al celular y una página desde donde tu equipo cambia precios y avisos.',
      recibes: 'La app funcionando, parte por parte, para que la uses y corrijas.',
    },
    {
      titulo: 'La publicamos a tu nombre',
      duracion: '1 a 2 semanas',
      pasa: 'La subimos a Google Play con todo lo que pide. Las cuentas quedan a nombre de tu empresa.',
      // Lo de iPhone va aquí, donde se entrega: no solo dentro de una pregunta cerrada.
      recibes: 'La app en Google Play. Publicarla en iPhone se cotiza aparte.',
    },
  ] satisfies Paso[],

  /* Las apps que se pueden abrir, en filas. El icono y la ficha están en data/proyectos.ts. */
  publicadas: {
    titulo: ['Apps que puedes', 'abrir hoy.'],
    // Pendiente de confirmar con el dueño: es la forma de decir por qué estas figuran a
    // nombre de la empresa (brief 02, 8.1) sin decir de quién es cada proyecto.
    entrada: 'Estas están en nuestra cuenta de Google Play. La tuya sale con la cuenta de tu empresa.',
    /** El orden cuenta la historia: quien pide, el negocio que despacha y el robot. */
    orden: ['pe.apuray.river', 'pe.apuray.negocio', 'pe.mindblock.tinibotapp'],
    /** Para quién es cada app y qué hace, por paquete. Sin lo que su web marca como "pronto". */
    apps: {
      'pe.apuray.river': { rotulo: 'Para quien pide', texto: 'Pide comida y compras de mercado.' },
      'pe.apuray.negocio': { rotulo: 'Para el negocio', texto: 'Recibe y despacha los pedidos.' },
      'pe.mindblock.tinibotapp': { rotulo: 'Con un robot', texto: 'Los niños arman órdenes con bloques y el robot las obedece.' },
    } as Record<string, { rotulo: string; texto: string }>,
    // "Aquí": su ficha es pública en la tienda, así que no se dice que no exista ni
    // dónde está. Solo que este sitio no la enseña.
    nota: 'Hay una cuarta, de uso interno: aquí no se enseña.',
  },

  dudas: [
    {
      pregunta: '¿Funciona en Android y en iPhone?',
      respuesta: 'Se hace una sola vez y sirve para los dos. Publicarla en Google Play va incluido. En iPhone se cotiza aparte: Apple cobra una membresía cada año y tiene su propia revisión.',
    },
    {
      pregunta: '¿Se conecta con el sistema que ya uso?',
      respuesta: 'Sí, y casi siempre es lo principal: la app suele ser una ventana al sistema que ya tienes. Lo revisamos antes de darte el precio.',
    },
    {
      pregunta: '¿Qué pasa después de publicarla?',
      respuesta: 'Android y iPhone cambian cada año, y Google y Apple exigen que la app se mantenga al día. Ese mantenimiento se acuerda aparte.',
    },
  ] satisfies Pregunta[],

  /* El cierre pregunta por el caso, no por "lo que haces a mano": la app también
     puede ser para los clientes. */
  cierre: {
    titulo: ['Cuéntanos', 'tu caso.'],
    /** Lo que va delante de lo que escribe la persona: "… Mi caso: mis repartidores anotan…". */
    prefijo: 'Mi caso:',
  },
};
