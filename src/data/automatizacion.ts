// Todo lo que cuenta /automatizacion/. Los hechos salen de brief/02-oferta.md (secciones
// 2.4, 3 y 5.1): se reescribe el estilo, no el hecho.
// Reglas de esta página:
//  - Cuatro tareas, cada una con tres datos: cómo se hace hoy, qué se hace solo y qué
//    sigue pasando por una persona (brief 02, 3.7). Conectar sistemas vive aquí: es la cuarta.
//  - La cuenta solo multiplica el número de quien la usa: horas a la semana por 52
//    semanas, y eso entre 8 horas por día de trabajo. Son horas que hoy se van, no horas
//    que se ahorran: el brief prohíbe cifras de ahorro (01, sección 10) y la página lo
//    dice junto al resultado ("no una promesa de ahorro"). El número con el que arranca
//    va rotulado como ejemplo y no se escribe en el mensaje de WhatsApp hasta que la
//    persona toca las horas; mientras tanto el botón no dice "mi cuenta".
//  - No se publica un plazo total. El brief trae el plazo de cada paso (02, 3.1); la
//    suma ("5 a 10 semanas") es un cálculo de quien escribió el brief, no de la empresa.
//  - Lo que cobran otros (WhatsApp, la IA) se dice sin unidad: ni "por mensaje", ni "por
//    conversación", ni "por uso", ni "al mes". El brief trae versiones que se
//    contradicen (02, 5.1 y 8.2) y el dueño no ha dicho cuál vale. Lo que sí respaldan
//    todas: cobran aparte, lo paga el cliente directo y se estima por escrito antes.
//  - "Cuenta" es solo el cálculo ("Saca tu cuenta"). De dónde se paga se dice "los pagas
//    tú directo"; lo que se entrega, "tus usuarios y claves".
//  - Dinero y garantía se explican en /como-trabajamos/: aquí solo se enlaza, y se dice
//    una vez que el paso 1 es un trabajo pagado.
//  - Sin "panel", "integración", "licencias", "API" ni "bot": palabras de dueño.
// En los textos,   es un espacio que no se parte: evita renglones huérfanos.
import type { Paso, Pregunta } from './empresa';
import { enlaceA } from './navegacion';

export type IdCaso = 'reporte' | 'whatsapp' | 'facturas' | 'sistemas';

/** Una tarea que se repite: hoy, qué se hace solo y qué sigue pasando por una persona. */
export interface Caso {
  id: IdCaso;
  nombre: string;
  hoy: string;
  solo: string;
  persona: string;
  /** En la cuenta: el nombre corto de la tecla. */
  tecla: string;
  /** Cómo se dice en el mensaje de WhatsApp: "Se nos van 6 horas a la semana en …". */
  dice: string;
}

/** Los tres datos de cada tarea. `largo` encabeza la columna; `corto` va junto a la frase en celular. */
export interface Columnas {
  hoy: { largo: string; corto: string };
  solo: { largo: string; corto: string };
  persona: { largo: string; corto: string };
}

export const automatizacion = {
  portada: {
    // "a mano" no se parte: la idea de la página no queda cortada entre dos renglones.
    titulo: 'Lo que hoy haces a mano, se hace solo.',
    // "Un proceso a la vez" es del brief (02, 3.1); lo demás son las tres primeras tareas.
    entrada: 'Un proceso a la vez: el reporte, el WhatsApp, las facturas.',
    boton: 'Automatizar un proceso',
    /** Enlace secundario de la portada: baja a la cuenta. */
    enlace: 'Saca tu cuenta',
    /** Lo que se añade al mensaje del cierre: "Me interesa: …". */
    interes: 'automatizar un proceso',
    ejemplo: 'Por ejemplo: cada lunes armo el reporte de ventas copiando de seis archivos.',
  },

  /* Las cuatro tareas. Sin rótulo: el título ya dice de qué va la sección. La entrada es
     la clave de lectura de los tres datos: en celular van abreviados (Hoy, Solo, Persona). */
  casos: {
    titulo: ['Cuatro tareas.', '¿Cuál es la tuya?'],
    entrada: 'En cada una: cómo se hace hoy, qué se hace solo y qué le sigue tocando a una persona.',
    columnas: {
      hoy: { largo: 'Hoy', corto: 'Hoy' },
      solo: { largo: 'Se hace solo', corto: 'Solo' },
      persona: { largo: 'Pasa a una persona', corto: 'Persona' },
    } satisfies Columnas,
    /** El remate: un camino a lo construido. No son casos de automatización ni clientes:
        son sistemas que se pueden abrir (/proyectos/). */
    enlace: enlaceA.proyectos,
    lista: [
      {
        // brief 02, 3.2: "Cada lunes alguien copia y pega de seis archivos". Es la misma
        // escena del ejemplo del cierre ("cada lunes armo el reporte…").
        id: 'reporte',
        nombre: 'El reporte del lunes',
        hoy: 'Alguien copia y pega de seis archivos de Excel.',
        solo: 'Se arma cada semana y llega a quien decide.',
        persona: 'Explicar por qué bajó una sucursal.',
        tecla: 'El reporte',
        dice: 'armar el reporte',
      },
      {
        // brief 02, 3.3: "El WhatsApp de la empresa es una persona con un celular".
        id: 'whatsapp',
        nombre: 'El WhatsApp de la empresa',
        hoy: 'Es una persona con un celular.',
        solo: 'Responde lo de siempre: precio, stock y horario.',
        persona: 'Reclamos y negociaciones de precio.',
        tecla: 'El WhatsApp',
        dice: 'responder el WhatsApp de la empresa',
      },
      {
        id: 'facturas',
        nombre: 'Las facturas y documentos',
        hoy: 'Alguien digita cada una: RUC, montos e IGV.',
        solo: 'Se leen, se revisan y se registran.',
        persona: 'Lo que no cuadra: un RUC que no existe, un total distinto.',
        tecla: 'Las facturas',
        dice: 'digitar facturas y documentos',
      },
      {
        // Conectar sistemas (brief 02, 2.4): "entre uno y otro hay una persona copiando".
        id: 'sistemas',
        nombre: 'Sistemas que no se hablan',
        hoy: 'Entre uno y otro hay una persona copiando.',
        solo: 'El pedido de la tienda entra a facturación.',
        // Se entiende sola, sin "conexión": qué le toca hacer a la persona.
        persona: 'Revisar, si el sistema avisa que algo no pasó.',
        tecla: 'Pasar datos',
        dice: 'pasar datos de un sistema a otro',
      },
    ] satisfies Caso[],
  },

  /* La cuenta: el momento propio de la página. Solo aritmética con el número de quien
     la usa. Con 40 horas a la semana se llenan los 260 cuadros (40 x 52 / 8): un año de
     trabajo de cinco días por semana. Pendiente de que el dueño la apruebe. */
  cuenta: {
    rotulo: 'Saca tu cuenta',
    titulo: ['¿Cuántas horas', 'se te van?'],
    // Cabe en un renglón en celular. "A la semana" ya lo dice el rótulo de la barra.
    entrada: 'Pon tus horas y mira cuántas son al año.',
    tarea: {
      leyenda: '¿En qué tarea?',
      /** Lo que dice el mensaje si no se marca ninguna tarea. */
      otra: 'una tarea que hacemos a mano',
    },
    horas: { rotulo: 'Horas a la semana', min: 1, max: 40, ejemplo: 4, menos: 'Una hora menos', mas: 'Una hora más' },
    semanas: 52,
    jornada: 8,
    /** El rótulo del resultado: "Ejemplo" hasta que la persona toca las horas. */
    estado: { ejemplo: 'Ejemplo', propia: 'Tu cuenta' },
    anio: 'horas al año',
    dias: 'de trabajo',
    // Sin la segunda frase, 26 cuadros de 260 se leen como "poca cosa": es un décimo del año.
    cuadro: 'Cada cuadro, un día de 8 horas. Todos juntos, un año de trabajo.',
    // No es una cifra de ahorro (brief 01, sección 10): es lo que hoy se va, y se dice así.
    franca: 'Es lo que hoy se te va, no una promesa de ahorro.',
    /** El botón y su nota dicen la verdad en los dos estados: el ejemplo no se envía. */
    boton: { ejemplo: 'Escribir por WhatsApp', propia: 'Enviar mi cuenta' },
    nota: { ejemplo: 'Mueve las horas y tu cuenta irá en el mensaje.', propia: 'Tu cuenta va en el mensaje.' },
  },

  /* Cómo se hace. Las cuatro fases y sus plazos son los del brief (02, 3.1) y caben en
     los generales de data/empresa.ts. El total no se publica: la empresa nunca lo dijo. */
  como: {
    rotulo: 'Cómo se hace',
    // Sin entrada: lo que decía ya lo dicen los pasos 2 y 3, y con ella eran tres
    // secciones seguidas con la misma cabeza (titular de dos renglones y un párrafo gris).
    titulo: ['Primero a la par.', 'Después, solo.'],
  },
  // La página pinta los pasos en su variante breve (figura, plazo, título y "Recibes"),
  // que es lo que trae el brief. `pasa` queda escrito por si vuelve la variante completa.
  fases: [
    {
      titulo: 'Elegimos un proceso',
      duracion: '1 semana',
      pasa: 'Miramos cómo se hace hoy, paso a paso, y quién lo hace. Este paso tiene su propio precio por escrito y puedes contratarlo solo.',
      recibes: 'Por escrito: qué hará solo el sistema y el precio fijo.',
    },
    {
      titulo: 'Lo construimos',
      duracion: '2 a 6 semanas',
      pasa: 'Se arma alrededor de lo que ya usas: tu sistema, tu Excel, tu WhatsApp y tu correo.',
      recibes: 'La automatización funcionando junto al trabajo manual.',
    },
    {
      titulo: 'Comparamos y apagamos lo manual',
      duracion: '1 a 2 semanas',
      pasa: 'Las dos formas trabajan juntas y se comparan. Cuando cuadra, se apaga la manual.',
      recibes: 'El proceso andando solo y avisando si algo falla.',
    },
    {
      titulo: 'Queda a tu nombre',
      duracion: '1 semana',
      pasa: 'Te explicamos qué hace y qué revisar si se detiene.',
      // "Las cuentas" del brief se dice aquí "tus usuarios y claves" (manual, sección 10).
      recibes: 'Tus usuarios y claves, una guía de qué hace y 30 días de garantía.',
    },
  ] satisfies Paso[],
  /** Bajo los pasos: el paso 1 no es una cotización gratis (`cuandoSaleElPrecio`, en
      data/empresa.ts). Con la variante breve de los pasos, `fases[0].pasa` no se pinta. */
  notaPaso1: 'El paso 1 es un trabajo pagado, con su propio precio por escrito, y puedes contratarlo solo.',
  /** El remate de los pasos manda a /como-trabajamos/ con el mismo texto de todo el
      sitio. El precio fijo ya lo nombra el paso 1 ("Recibes"). No dice que allá esté el
      proceso de una automatización: allá están los cinco pasos generales. */
  enlacePrecio: enlaceA.comoTrabajamos,

  /* La IA: qué hace sola y qué decide una persona. Dos campos, uno al lado del otro.
     La frase de la casa es del blog ("La tarea avisa; la persona decide"): aquí cada
     mitad tiene que entenderse sola bajo su rótulo, y un renglón tiene 17 letras como mucho. */
  ia: {
    /** El título entero, para lector de pantalla: en pantalla va partido en los dos campos. */
    titulo: 'La IA avisa. Tu gente decide.',
    sola: {
      rotulo: 'Inteligencia artificial (IA)',
      titulo: 'La IA avisa.',
      // "Si duda, avisa": lo que el sistema no tiene claro no se resuelve solo (brief 02, 3.6 y 3.7).
      texto: 'Lee documentos, ordena correos y responde lo de siempre. Si duda, avisa.',
      // El aviso que el manual pide en la página que vende WhatsApp, a la vista y sin unidad.
      nota: 'La IA y WhatsApp cobran aparte: los pagas tú directo, no a nosotros. Donde la IA no hace falta, no se pone.',
    },
    persona: {
      rotulo: 'Lo que la IA no decide',
      titulo: 'Tu gente decide.',
      texto: 'Los reclamos, los montos altos y los casos raros pasan a alguien de tu equipo.',
      nota: 'Qué resuelve sola y qué pasa a una persona queda por escrito.',
    },
  },

  dudas: [
    {
      // brief 02, sección 5.1 ("Lo que se paga aparte"). Va primera: el campo rojo de
      // arriba acaba de decir que la IA y WhatsApp cobran aparte.
      pregunta: '¿Hay costos aparte?',
      // La estimación por escrito es de la IA y las herramientas (brief 02, 5.1). Para lo
      // que cobra WhatsApp el brief no promete ninguna, y /como-trabajamos/ tampoco.
      respuesta: 'Sí. WhatsApp, la IA y otras herramientas que use tu automatización cobran aparte. Los pagas tú directo, no a nosotros. Lo de la IA y las herramientas te lo estimamos por escrito antes.',
    },
    {
      pregunta: '¿Hay que cambiar los sistemas que ya usamos?',
      respuesta: 'No. Se arma alrededor de lo que ya tienes: tu sistema, tu Excel, tu WhatsApp y tu correo. Si alguno no se puede conectar, te lo decimos antes y proponemos otra salida.',
    },
    {
      pregunta: '¿Qué pasa si la automatización falla?',
      respuesta: 'Cada vez que trabaja queda registrado qué entró, qué hizo y qué salió. Si algo no cuadra, ese caso se detiene y avisa a quien definas. No sigue con datos dudosos.',
    },
  ] satisfies Pregunta[],
};
