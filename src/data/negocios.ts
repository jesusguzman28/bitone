// Lo que cuenta /negocios/ ("Para tu negocio"). Textos de brief/02-oferta.md: sección 4.2
// (los cuatro rubros: lo más vívido, hoy, después, incluye y casos), 4.1 (otros rubros:
// clínicas y citas, logística y despacho, fábricas) y 4.3 (cuándo no conviene). Las cuatro
// condiciones salen de brief/01-empresa.md, sección 3. Se reescribe el estilo, no el hecho.
// Reglas:
//  - Son ejemplos de un mismo servicio, el sistema a medida: no hay un producto por rubro.
//  - No se prometen visitas al local: la empresa está en Lima y atiende todo el Perú.
//  - "También si…" son los casos que el brief da para cada rubro. No son clientes.
//  - No se nombran programas de otras empresas.
//  - La frase cuenta la escena; los tres "hoy" dicen lo que esa escena le cuesta al dueño.
//    No se repiten entre sí.
//  - Las cuatro frases miden parecido (68 a 77 letras) y cada "con el sistema" mide de 35
//    a 43: en la página los cuatro negocios comparten casilla y el más largo manda en el
//    alto de todos. Con esa medida cada uno da dos renglones en celular y uno solo en
//    tableta y en escritorio. Con más, en tableta y a 1024 se parte y agranda la casilla
//    de los cuatro; con menos, en celular queda un renglón solo en una casilla de dos.
//    Si cambias uno, mira el celular, la tableta y el escritorio de 1024.
//  - El orden es el de la página: la distribuidora va primero (es el ejemplo de la portada
//    y el negocio de quien suele llegar) y la bodega, al final. Un sistema a medida para una
//    bodega chica es la oferta más dudosa (brief 02, 8.2) y no puede ser la cara de la página.
//  - Nadie vende aquí un sistema a quien tiene "dos locales": la franqueza de esta misma
//    página dice que para una o dos tiendas suele bastar un programa ya hecho.
//  -   es un espacio que no se parte.
import { mensajes, type Par, type Pregunta } from './empresa';
import { enlaceA } from './navegacion';

export interface Rubro {
  /** También es el ancla: /negocios/#ferreteria abre ese rubro. */
  id: string;
  /** El nombre corto: el del botón que lo elige. */
  nombre: string;
  /** Cómo sigue el rótulo "Hoy en…". */
  enTu: string;
  /** El problema, dicho como lo dice el dueño. */
  frase: string;
  /** Tres cosas que cambian: cómo se lleva hoy y cómo queda. */
  pares: Par[];
  /** Lo que lleva dentro, en cuatro palabras. */
  incluye: string[];
  /** Otros casos del mismo rubro. */
  tambien: string;
  /** El botón de WhatsApp del rubro y el mensaje con que abre. */
  boton: string;
  mensaje: string;
}

const tengo = (que: string) => `Hola Bit One, tengo ${que} y quiero conversar sobre un sistema`;

export const rubros: Rubro[] = [
  {
    id: 'distribuidora',
    nombre: 'Distribuidora',
    enTu: 'tu distribuidora',
    frase: 'Tus vendedores dictan los pedidos por WhatsApp o los mandan en foto.',
    pares: [
      { hoy: 'Alguien en oficina digita todo de nuevo.', despues: 'El vendedor toma el pedido y entra solo.' },
      { hoy: 'Sale un pedido sin stock y el cliente reclama.', despues: 'Solo se vende lo que hay en almacén.' },
      // El "hoy" de la cobranza es el de la ficha de ventas y facturación (brief 02, 4.1),
      // que nombra a las distribuidoras entre sus casos. El "después" sí es de esta ficha.
      { hoy: 'Alguien persigue la cobranza en un Excel.', despues: 'Sabes qué cliente te debe y desde cuándo.' },
    ],
    incluye: ['Pedidos', 'Precios por cliente', 'Reparto', 'Cobranza'],
    tambien: 'También si repartes con varios camiones y cobras al entregar.',
    boton: 'Tengo una distribuidora',
    mensaje: tengo('una distribuidora'),
  },
  {
    id: 'ferreteria',
    nombre: 'Ferretería',
    enTu: 'tu ferretería',
    // "El clavo," va junto: la segunda frase no empieza al final de un renglón.
    frase: 'El mismo tubo se vende por metro y por tira. El clavo, por kilo y por unidad.',
    pares: [
      { hoy: 'Miles de productos y nadie sabe el stock.', despues: 'Buscas por nombre, medida o código.' },
      { hoy: 'El programa ya hecho no lo entiende: el stock nunca cuadra.', despues: 'El stock cuadra en cada unidad y almacén.' },
      { hoy: 'La cotización sale a mano y se pierde.', despues: 'La cotización se vuelve venta y factura.' },
    ],
    // Cuatro nombres cortos: en celular la tira cabe en dos renglones, como las otras tres.
    incluye: ['Productos por medida', 'Stock', 'Cotizaciones', 'Compras'],
    tambien: 'También si cotizas a constructoras y vendes al crédito.',
    boton: 'Tengo una ferretería',
    mensaje: tengo('una ferretería'),
  },
  {
    id: 'restaurante',
    nombre: 'Restaurante',
    enTu: 'tu restaurante',
    frase: 'El mozo anota en papel, cocina no entiende la letra y el plato sale mal.',
    pares: [
      { hoy: 'La comanda va en papel hasta cocina.', despues: 'El mozo toma el pedido y cocina lo ve.' },
      { hoy: 'El delivery llega por WhatsApp y se pierde.', despues: 'Delivery y salón en la misma pantalla.' },
      // "La caja cierra sola, con boleta de cada venta", en menos letras (ver las reglas).
      { hoy: 'Cierras sin saber cuánto vendiste ni qué gastaste.', despues: 'La caja cierra sola, boleta por boleta.' },
    ],
    incluye: ['Comandas', 'Mesas', 'Delivery', 'Caja'],
    // Dos casos del brief: la pollería o cevichería y "saber qué plato le deja más". El de
    // "dos locales y una sola caja" no va: choca con la franqueza (ver las reglas de arriba).
    tambien: 'También si eres pollería o cevichería y quieres saber qué plato te deja más.',
    boton: 'Tengo un restaurante',
    mensaje: tengo('un restaurante'),
  },
  {
    id: 'bodega',
    nombre: 'Bodega',
    enTu: 'tu bodega o minimarket',
    frase: 'Vendes todo el día, pero al cerrar no sabes cuánto ganaste ni qué se acabó.',
    pares: [
      { hoy: 'Las ventas del día van en un cuaderno.', despues: 'Cada venta sale con boleta desde la caja.' },
      // "Sabes quién te debe y cuánto", con ocho letras más: así mide como los demás.
      { hoy: 'El fiado se pierde entre papeles y memoria.', despues: 'Queda anotado quién te debe y cuánto.' },
      { hoy: 'No sabes qué falta hasta que se acaba.', despues: 'Ves tu stock desde el celular, donde estés.' },
    ],
    incluye: ['Caja', 'Stock', 'Fiado', 'Cierre del día'],
    tambien: 'También si tienes varias cajas o das fiado todos los días.',
    boton: 'Tengo una bodega',
    mensaje: tengo('una bodega'),
  },
];

export const negocios = {
  portada: {
    // 40 letras: se parte solo en dos o tres renglones parejos, sin palabra suelta. Dice
    // de qué va la página sin leer la entrada ("las reglas de tu negocio" no lo decía).
    // "tu tipo" y "de negocio" van unidos: ningún renglón acaba en "tu" ni en "de".
    titulo: 'Un sistema hecho para tu\u00A0tipo de\u00A0negocio.',
    // Los cuatro, en el orden de la página.
    entrada: 'Mira cómo queda en una distribuidora, una ferretería, un restaurante y una bodega.',
    boton: 'Conversar sobre mi negocio',
    interes: 'un sistema para mi negocio',
    // Responde a la pregunta del cierre ("Cuéntanos qué haces a mano."): el mensaje sale
    // como "Hoy hacemos a mano: en mi ferretería…".
    ejemplo: 'Por ejemplo: en mi ferretería llevo el stock de dos almacenes en Excel y nunca cuadra.',
  },

  /** El momento de la página: se elige el negocio y cambian la frase y los tres pares. */
  elige: {
    titulo: 'Elige tu negocio.',
    entrada: 'Toca el tuyo y mira qué cambia.',
    /** Lo que lee un lector de pantalla antes de las opciones: qué se elige y qué pasa. */
    leyenda: 'Elige tu negocio. Abajo cambia su ejemplo.',
    rotulos: { hoy: 'Hoy en', con: 'Con el sistema', dentro: 'Lleva dentro' },
  },

  /** Otros rubros que la oferta también cubre (brief 02, sección 4.1): clínicas y citas
      (con veterinarias y talleres entre sus casos), logística y despacho, y fábricas (un
      caso de la ficha de ERP). "Consultorio" no va: para uno, el brief dice que basta una
      agenda ya hecha (4.3). */
  otros: {
    pregunta: '¿Otro rubro?',
    texto: 'Clínica, veterinaria, taller, transporte, reparto o fábrica: se arma igual, con tus reglas.',
    // Dice a la vista que abre WhatsApp: la flecha sola no lo dice.
    enlace: 'Cuéntanos el tuyo por WhatsApp',
    mensaje: `${mensajes.sistema}. Mi negocio es de otro rubro:`,
  },

  /** La prueba: un sistema que ya funciona y se puede abrir (brief 03, A.1 y A.2). ApuraY
      es público; "Mi Tienda AP" es la app con la que el negocio recibe y despacha los
      pedidos. Se describe qué hace: no se le llama cliente ni se dan cifras. */
  prueba: {
    pregunta: '¿Quieres ver uno?',
    texto: 'ApuraY: pedidos y reparto en Coracora. El negocio recibe cada pedido en su celular y lo despacha.',
    /** La app que se enseña en ese renglón, con su icono real y su ficha de Google Play
        (data/proyectos.ts, `apps`), y la frase que la acompaña aquí. */
    app: { paquete: 'pe.apuray.negocio', frase: 'La app del negocio, en Google Play.' },
    enlace: enlaceA.proyectos,
  },

  /** Lo que no cambia de un rubro a otro: las condiciones (brief 01, sección 3). Aquí se
      nombra el precio, una sola vez; el detalle está en /como-trabajamos/.
      La garantía es "sobre lo entregado" (brief 01, 5.1). "Por cada entrega" solo lo decía
      la página de ERP y el brief 02 (8.2) lo anota como contradicción: no vuelve sin que
      el dueño lo confirme. */
  trato: {
    titulo: ['Cambia el rubro.', 'El trato, no.'],
    condiciones: [
      // "Antes de construir": el precio fijo sale del paso 1, que se paga. "Antes de
      // empezar", leído solo, parecía un precio antes de pagar nada.
      { cifra: 'Precio fijo', texto: 'por escrito, antes de construir' },
      { cifra: 'Por partes', texto: 'pagas cada parte al recibirla' },
      { cifra: '30 días', texto: 'de garantía sobre lo entregado' },
      { cifra: 'A tu nombre', texto: 'el programa, tus claves y tus datos' },
    ],
    enlace: enlaceA.comoTrabajamos,
  },

  franca: {
    titulo: ['Si tu negocio es chico,', 'quizá no nos necesitas.'],
    texto: 'Para una o dos tiendas suele bastar un programa ya hecho. Un sistema a medida es para cuando ya probaste uno y aun así sigues llevando cosas aparte en Excel.',
    /** Solo si existe /sistemas/. */
    enlace: 'Cómo se arma un sistema a medida',
  },

  // Cada respuesta se entiende sola y empieza por el sí, el no o el depende.
  dudas: [
    {
      // brief 01, 5.2: la facturación electrónica que no estaba en el plan se cotiza aparte.
      // brief 02, 5.1: el emisor autorizado de SUNAT se contrata a nombre del cliente.
      pregunta: '¿Emite boletas y facturas electrónicas?',
      respuesta: 'Sí, si lo pides desde el inicio: salen del propio sistema. El servicio que las envía a SUNAT se contrata a nombre de tu empresa y lo pagas directo.',
    },
    {
      pregunta: '¿Funciona si se va el internet?',
      respuesta: 'Sí, si se decide desde el inicio. El pedido o la comanda se guarda en el celular y se envía cuando vuelve la señal. Solo el comprobante electrónico necesita conexión.',
    },
    {
      // brief 02, 4.2. Restaurante: "su propio celular o una tablet común" y, en cocina,
      // "una pantalla o una impresora". Distribuidora: el pedido va "en el celular del
      // vendedor". Bodega: "punto de venta con lector de código de barras".
      pregunta: '¿Hay que comprar equipos?',
      respuesta: 'Depende del negocio. El mozo o el vendedor usa su celular o una tablet común. Cocina necesita una pantalla o una impresora. Y la caja de una bodega, un lector de código de barras.',
    },
    {
      // brief 02, 4.3 ("para una o dos tiendas, un programa listo te sirve") y 4.1 (inventario:
      // "un solo número de stock para todos" los almacenes). Dice lo mismo que la franqueza.
      pregunta: '¿Y si tengo más de un local?',
      respuesta: 'Depende de cuántos. Con uno o dos, prueba antes un programa ya hecho: suele bastar. Con más locales o varios almacenes, el sistema se arma para que todos vean el mismo stock.',
    },
  ] satisfies Pregunta[],
};
