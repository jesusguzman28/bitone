// Lo que cuenta /sistemas/ ("Sistema a medida"). Todo sale de brief/02-oferta.md
// (2.1, 2.3, 4.1, 4.2 y 4.3) y de brief/01-empresa.md (sección 7, pregunta 9: "se empieza
// por la que más duele… cada parte tiene su precio fijo y su fecha por escrito").
// Se reescribe el estilo, no el hecho.
// Reglas:
//  - Los títulos de sección van en renglones de 17 letras como mucho.
//  - /sistemas/ no lleva fases propias: su proceso es el general y vive en
//    /como-trabajamos/. Aquí el precio se nombra una sola vez ("Cada parte") y dos
//    enlaces mandan allá: bajo "Cada parte" y bajo las preguntas.
//  - Sin "panel", "integración", "licencias", "módulo" ni "API": palabras de dueño.
//  - No se nombran programas de otras empresas: el brief deja esa decisión al dueño.
//  - Cada "hoy" y cada "con esta parte" sale de una página de servicio del brief, no
//    del blog, y no promete lo que depende de otros (la boleta electrónica necesita un
//    emisor autorizado que contrata el cliente: brief 02, 5.1).
//  - \u00A0 es un espacio que no se parte: une "precio fijo por escrito" y las dos
//    últimas palabras de las frases que en celular dejaban una cola suelta.
import { mensajes, type Clausula, type Par, type Pregunta } from './empresa';
import { enlaceA } from './navegacion';

/** Las cinco partes del tocapu de la página. El dibujo de cada una está en
    components/sistemas/PartesTocapu.astro, con este mismo id. */
export type IdParte = 'almacen' | 'ventas' | 'clientes' | 'compras' | 'caja';

export interface Parte {
  id: IdParte | 'todo';
  /** El nombre del botón que la elige. */
  nombre: string;
  /** Una sola palabra: la que va escrita sobre su pieza del dibujo. */
  pieza?: string;
  /** El título de su ficha. */
  titulo: string;
  /** Cómo se lleva hoy y cómo queda con esa parte hecha. */
  par: Par;
  /** Rótulo del segundo renglón del par. */
  rotuloDespues: string;
  /** El botón de WhatsApp de la ficha y el mensaje con que abre. */
  boton: string;
  mensaje: string;
}

const empezarPor = (que: string) => `${mensajes.sistema}. Quiero empezar por ${que}.`;

export const sistemas = {
  portada: {
    // "cómo trabaja" va unido: sale "Un sistema hecho / para cómo trabaja / tu negocio."
    // y ningún renglón acaba en "cómo" colgado.
    titulo: 'Un sistema hecho para cómo\u00A0trabaja tu negocio.',
    // Las cuatro palabras tienen su parte abajo: pedidos, ventas y cobranzas caen en
    // "Pedidos y ventas"; almacén, en "Almacén".
    entrada: 'Pedidos, almacén, ventas o cobranzas en un solo lugar. Lo que hoy llevas en Excel, WhatsApp y papel.',
    boton: 'Conversar sobre mi sistema',
    interes: 'un sistema a medida',
    ejemplo: 'Por ejemplo: cada área lleva su lista en Excel y para saber cómo vamos hay que preguntar.',
  },

  /** El momento de la página: el sistema se arma por partes y el dueño elige la primera. */
  partes: {
    rotulo: 'Se arma por partes',
    titulo: ['Empieza por', 'lo que más duele.'],
    entrada: 'Elige una parte: esa se construye primero. Las demás se suman después.',
    /** Lo que lee un lector de pantalla antes de las opciones. */
    leyenda: 'Elige la parte por la que empiezas',
    lista: [
      {
        // brief 02, 4.1, sistema de inventario.
        id: 'almacen',
        nombre: 'Almacén',
        pieza: 'Almacén',
        titulo: 'Almacén',
        par: {
          hoy: 'El stock real vive en tres Excel y alguien lo cuadra a mano cada\u00A0mes.',
          despues: 'Un solo número de stock para todos tus almacenes, con conteo desde el celular.',
        },
        rotuloDespues: 'Con esta parte',
        boton: 'Empezar por almacén',
        mensaje: empezarPor('almacén'),
      },
      {
        // brief 02, 4.2, distribuidoras ("dictan pedidos por WhatsApp", "alguien en oficina
        // digita todo de nuevo", "el vendedor toma el pedido y entra solo") y 4.1, ventas
        // ("sabes quién te debe y cuándo vence").
        id: 'ventas',
        nombre: 'Pedidos y ventas',
        pieza: 'Pedidos',
        titulo: 'Pedidos, ventas y cobranza',
        par: {
          hoy: 'Tus vendedores dictan los pedidos por WhatsApp y alguien en oficina los digita de\u00A0nuevo.',
          despues: 'El pedido entra solo desde el celular del vendedor. Sabes quién te debe y cuándo vence.',
        },
        rotuloDespues: 'Con esta parte',
        boton: 'Empezar por pedidos',
        mensaje: empezarPor('pedidos y ventas'),
      },
      {
        // brief 02, 4.1, seguimiento de clientes.
        id: 'clientes',
        nombre: 'Clientes',
        pieza: 'Clientes',
        titulo: 'Clientes',
        par: {
          hoy: 'Los WhatsApp con tus clientes viven en el celular de cada vendedor. Si se va, se lleva la\u00A0relación.',
          despues: 'Cada mensaje queda en la ficha del cliente. Ves a todos tus clientes y en qué va cada venta.',
        },
        rotuloDespues: 'Con esta parte',
        boton: 'Empezar por clientes',
        mensaje: empezarPor('clientes'),
      },
      {
        // brief 02, 4.2: el "hoy" es de bodega; lo que incluye, de ferretería ("compras y
        // cuentas por pagar a proveedores"). No promete que el sistema avise qué reponer.
        id: 'compras',
        nombre: 'Compras',
        pieza: 'Compras',
        titulo: 'Compras',
        par: {
          hoy: 'No sabes qué falta hasta que se acaba.',
          despues: 'Tus compras y lo que le debes a cada proveedor, junto a tu stock.',
        },
        rotuloDespues: 'Con esta parte',
        boton: 'Empezar por compras',
        mensaje: empezarPor('compras'),
      },
      {
        // brief 02, 4.2: restaurante ("la caja cierra sola") y bodega ("cierre de caja del
        // día"). Sin boleta: depende de un emisor autorizado que contrata el cliente.
        id: 'caja',
        nombre: 'Caja',
        pieza: 'Caja',
        titulo: 'Caja',
        par: {
          hoy: 'Cierras sin saber cuánto vendiste ni qué\u00A0gastaste.',
          despues: 'La caja cierra sola. Sabes cuánto se vendió.',
        },
        rotuloDespues: 'Con esta parte',
        boton: 'Empezar por caja',
        mensaje: empezarPor('caja'),
      },
    ] satisfies Parte[],
    /** El tocapu completo: las cinco partes tejidas. */
    todo: {
      id: 'todo',
      nombre: 'Todo junto',
      titulo: 'Todo junto',
      par: {
        hoy: 'Cada área lleva su propia lista. Para saber cómo va el negocio,\u00A0preguntas.',
        despues: 'Todos ven la misma información. Se llega por partes, nunca de golpe.',
      },
      rotuloDespues: 'Con el sistema',
      boton: 'Ver por dónde empezar',
      mensaje: `${mensajes.sistema}. Quiero todas las áreas en un solo sistema: ¿por dónde conviene empezar?`,
    } satisfies Parte,
  },

  /** Cómo va cada parte. Lleva la única mención del precio de la página: el detalle
      está en /como-trabajamos/. */
  cadaParte: {
    titulo: 'Cada parte',
    puntos: [
      'Tiene su precio\u00A0fijo\u00A0por\u00A0escrito y su fecha, antes de empezar.',
      'La usas mientras construimos la siguiente.',
      'Puede ser la última: lo que ya tienes funciona completo.',
    ],
  },

  /** El texto de los dos enlaces a /como-trabajamos/ (bajo "Cada parte" y bajo las
      preguntas): el mismo de todo el sitio. No promete "cuánto demora": allá la
      construcción "depende del tamaño" y no hay plazo total. */
  enlacePrecio: enlaceA.comoTrabajamos,

  franca: {
    titulo: ['A veces basta', 'un programa ya hecho.'],
    texto: 'Cuesta una mensualidad y está andando en días. Si ese es tu caso, te lo decimos en la primera conversación.',
    listas: {
      a: {
        rotulo: 'Te basta uno ya hecho si',
        puntos: [
          'Tienes una o dos tiendas y quieres controlar el\u00A0stock.',
          'Solo necesitas emitir facturas y\u00A0boletas.',
          'Necesitas empezar esta semana, con un costo mensual\u00A0bajo.',
        ],
      },
      b: {
        rotulo: 'Te conviene a medida si',
        puntos: [
          'Ya usas un programa y trabajas alrededor de él con\u00A0Excel.',
          'Tus reglas de precios, aprobaciones o despacho no caben en\u00A0ninguno.',
          'Necesitas que se conecte con lo que ya usas, o que el sistema sea\u00A0tuyo.',
        ],
      },
    },
  },

  teLlevas: {
    rotulo: 'Al terminar',
    titulo: ['Todo queda', 'a tu nombre.'],
    entrada: 'Si mañana quieres seguir con otro proveedor o con tu propio equipo, puedes.',
    hoja: { titulo: 'Qué te llevas', rotulo: 'Lista de entrega' },
    clausulas: [
      // Sin "servidor": no es palabra de due\u00F1o. La nota de la hoja lo nombra y lo explica.
      { titulo: 'El sistema en marcha', texto: 'En internet, en una cuenta a nombre de tu empresa, y con tu equipo\u00A0capacitado.' },
      { titulo: 'Un usuario por persona', texto: 'Cada persona entra con el suyo y ve solo lo que le\u00A0toca.' },
      // Con condición: el brief dice "casi siempre" y que se revisa antes de cotizar.
      { titulo: 'Conectado a lo que ya usas', texto: 'Con lo que revisamos antes de darte el precio: facturación electrónica, contabilidad, WhatsApp o\u00A0Excel.' },
      { titulo: 'El programa completo', texto: 'Con una guía de cómo está hecho, para quien lo\u00A0mantenga.' },
      { titulo: '30 días de garantía', texto: 'Lo que falle en las primeras semanas de uso se corrige sin\u00A0costo.' },
    ] satisfies Clausula[],
    /** Se suma a la nota general de la hoja (lo que Bit One no cobra): lo que sí se paga
        cada mes, y a quién (brief 02, 2.3 y 5.1). */
    // "El servidor donde vive tu sistema" es el nombre de ese costo en todo el sitio
    // (`loQueCobranOtros`, en data/empresa.ts), y se explica solo.
    nota: 'El servidor donde vive tu sistema lo pagas tú directo, cada mes: te estimamos ese costo antes de\u00A0empezar.',
  },

  /** La prueba: dos sistemas ya hechos, en texto. Sus datos salen de `enTexto`
      (data/proyectos.ts): son de uso interno, van sin captura y sin enlace. */
  hechos: {
    rotulo: 'Sistemas que ya hicimos',
    nota: 'Los dos son de uso interno: por eso no se enseñan.',
    /** Solo si existe /proyectos/. "Todos": ahí están los que sí se pueden abrir. Antes
        decía "Ver sistemas que ya construimos", justo después de "no se enseñan". */
    enlace: enlaceA.proyectos,
  },

  dudas: [
    {
      pregunta: '¿Se conecta con lo que ya uso?',
      respuesta: 'Casi siempre: facturación electrónica, contabilidad, WhatsApp o Excel. Lo revisamos antes de darte el precio.',
    },
    {
      pregunta: '¿Se puede usar desde el celular?',
      respuesta: 'Sí, se adapta a la pantalla del celular. Si tu equipo trabaja en la calle, sin señal o necesita la cámara, conviene una app.',
    },
    {
      pregunta: '¿Pueden entrar mis clientes o proveedores?',
      respuesta: 'Sí. Tus clientes ven sus pedidos o descargan sus comprobantes, y tus proveedores suben sus facturas. Es el mismo sistema, con un tipo de usuario más.',
    },
    {
      pregunta: '¿Dónde queda instalado?',
      respuesta: 'En un servidor en internet, contratado a nombre de tu empresa. Lo pagas tú directo: ese costo mensual depende del tamaño del sistema y te lo estimamos antes de empezar.',
    },
  ] satisfies Pregunta[],
};
