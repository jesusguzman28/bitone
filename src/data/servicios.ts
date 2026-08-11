// Contenido largo de cada servicio, para su página propia.
//
// Por qué existe este archivo: hasta ahora los cuatro servicios vivían en una
// sola dirección, /servicios, repartidos en pestañas donde tres quedaban
// ocultas. Google indexa una página, así que "tienda online", "ERP" y "app
// móvil" competían entre sí dentro del mismo documento y ninguna podía
// posicionar por su cuenta. Con una página por servicio cada una compite por
// su propia búsqueda.
//
// `serviciosTabs` en site.ts sigue siendo la fuente del precio, el plazo y la
// lista de lo que incluye. Aquí va solo lo que una página propia necesita y
// una pestaña no tenía: el problema que resuelve, cómo funciona por dentro,
// las preguntas frecuentes y las fotos.
//
// Regla al escribir esto: nada de cifras de resultados ni casos de clientes.
// Lo que se afirma es lo que el servicio hace, no lo que promete lograr.

export interface PasoServicio {
  /** Título corto del paso. */
  titulo: string;
  desc: string;
  /** Nombre del icono en iconos.ts. */
  icono: string;
  /** Archivo en public/servicios/ sin extensión, o null si el paso no lleva foto. */
  foto: string | null;
  alt: string;
}

export interface Servicio {
  /** Última parte de la dirección: /servicios/<slug>/ */
  slug: string;
  /** Id en serviciosTabs de site.ts, de donde salen precio, plazo y features. */
  tabId: string;

  h1: string;
  metaTitle: string;
  metaDescription: string;
  breadcrumb: string;
  /** Cómo se nombra el servicio dentro de una frase, en singular y minúsculas:
   *  "¿Hablamos de tu ___?". El breadcrumb no sirve para esto —salía "¿Hablamos
   *  de tu erps y sistemas?"— porque está escrito para un menú, no para una
   *  oración. */
  enFrase: string;
  eyebrow: string;
  intro: string;

  /** Foto principal, en public/servicios/<hero>.webp y <hero>-sm.webp.
   *  `null` mientras no haya foto: la portada se dibuja a una sola columna
   *  centrada en vez de dejar la mitad vacía esperando una imagen. */
  hero: string | null;
  heroAlt: string;

  problema: { title: string; parrafos: readonly string[] };
  comoFunciona: { title: string; intro: string; pasos: readonly PasoServicio[] };
  precio: { title: string; parrafos: readonly string[] };
  faqs: readonly { q: string; a: string }[];
}

export const servicios: readonly Servicio[] = [
  {
    slug: 'pagina-web',
    tabId: 'web',

    h1: 'Página web para tu negocio en Perú',
    metaTitle: 'Página web profesional en Perú desde S/1,500',
    metaDescription:
      'Página web para MYPEs con diseño propio, dominio .com y hosting del primer año incluidos. Preparada para salir en Google y con los textos en tus manos. Entrega en 2 a 4 semanas.',
    breadcrumb: 'Página web',
    enFrase: 'página web',
    eyebrow: 'Páginas web',
    intro:
      'La página donde te encuentran cuando te buscan por tu nombre o por lo que vendes. Con tus fotos, tus precios y un botón de WhatsApp que abre la conversación.',

    // Sin foto todavía: la portada sale a una sola columna. Al dejar
    // pagina-web.webp y pagina-web-sm.webp en public/servicios/, basta con
    // escribir aquí 'pagina-web' y la portada vuelve a dos columnas.
    hero: null,
    heroAlt: '',

    problema: {
      title: 'Si no apareces, el cliente termina llamando a otro',
      parrafos: [
        'Hoy casi nadie compra sin buscar primero. Escriben tu nombre en Google, o escriben lo que necesitan y la zona: "gimnasio en Surco", "taller de autos cerca". Si ahí no sale nada tuyo, el cliente no piensa que no existes; simplemente entra al que sí salió.',
        'Muchos negocios resuelven eso con una página de Facebook o un perfil de Instagram, y ayuda. Pero esos perfiles los ordena la red social, no tú: el precio queda enterrado entre publicaciones viejas, la información de contacto cambia de sitio, y quien entra desde una búsqueda no encuentra en dos segundos lo que vino a buscar.',
        'Una página web propia es la única dirección que controlas tú. Ahí decides qué se ve primero, qué precio se muestra y por dónde te escriben. Y es la que Google puede leer entera para mostrarte cuando alguien busca lo que tú haces.',
      ],
    },

    comoFunciona: {
      title: 'Cómo se arma tu página',
      intro:
        'Tres partes: lo que ve el visitante, lo que lee Google y lo que puedes cambiar tú después. Ninguna depende de que nos escribas.',
      pasos: [
        {
          titulo: 'Se ve bien en el celular, que es por donde entran',
          desc:
            'Se diseña primero para el celular y después para pantalla grande, porque en Perú la mayoría entra desde el teléfono. Las fotos cargan rápido, los textos se leen sin agrandar la pantalla y el botón de WhatsApp queda siempre a la vista.',
          icono: 'celular',
          foto: null,
          alt: '',
        },
        {
          titulo: 'Preparada para que Google la encuentre',
          desc:
            'Cada página lleva su título, su descripción y su dirección propia, que es lo que Google lee para decidir cuándo mostrarte. Se entrega conectada a Google Search Console y con estadísticas de visitas, así puedes ver por qué búsquedas llega la gente.',
          icono: 'google',
          foto: null,
          alt: '',
        },
        {
          titulo: 'Los textos y las fotos los cambias tú',
          desc:
            'Viene con un panel para cambiar textos, subir fotos y actualizar precios sin saber programar. Se entrega con una capacitación grabada, así que la puedes volver a ver cuando entre alguien nuevo a tu equipo.',
          icono: 'tablero',
          foto: null,
          alt: '',
        },
      ],
    },

    precio: {
      title: 'Precio y plazo',
      parrafos: [
        'Una página web parte en S/1,500 + IGV y se entrega entre 2 y 4 semanas desde que apruebas el diseño. Ese precio incluye el diseño propio, el dominio .com y el hosting del primer año, el certificado de seguridad, el correo con tu dominio y el panel para administrarla.',
        'Lo que mueve el precio hacia arriba es la cantidad de secciones y lo que la página tenga que hacer además de mostrar: reservas, agenda, catálogo grande o textos en dos idiomas. Eso se conversa antes y queda por escrito en la cotización, no aparece a mitad del proyecto.',
        'El pago va 50% al empezar y 50% contra entrega, con boleta o factura en cada uno. Al terminar quedan a tu nombre el dominio y el código: si mañana quieres trabajar con otra empresa, te lo llevas.',
      ],
    },

    faqs: [
      {
        q: '¿Cuánto demora tener la página lista?',
        a: 'Entre 2 y 4 semanas desde que apruebas el diseño. Lo que más suele demorar no es el trabajo nuestro sino los textos y las fotos del negocio: si los tienes listos al empezar, la entrega se acorta bastante.',
      },
      {
        q: '¿El dominio y el hosting están incluidos?',
        a: 'El primer año sí, los dos. Desde el segundo se renuevan cada año y el costo depende del dominio y del plan de hosting. Te avisamos antes del vencimiento con el monto exacto. El dominio queda registrado a tu nombre.',
      },
      {
        q: '¿Puedo cambiar los textos y las fotos yo mismo?',
        a: 'Sí. Viene con un panel para cambiar textos, subir fotos y actualizar precios, y una capacitación grabada para aprender a usarlo. No dependes de nosotros para el día a día.',
      },
      {
        q: '¿Voy a salir primero en Google?',
        a: 'La página se entrega preparada para posicionar —estructura, títulos, velocidad, Search Console— pero nadie puede garantizar el primer puesto, y quien lo garantice te está vendiendo humo. Salir arriba depende también de la competencia de tu rubro y del tiempo que lleve publicada.',
      },
      {
        q: '¿Sirve si ya tengo Facebook o Instagram?',
        a: 'Sí, y funcionan mejor juntos. Las redes sirven para que te sigan; la página, para que te encuentren buscando y para tener toda tu información ordenada en un sitio que controlas tú. La página suele ser el enlace que pones en el perfil.',
      },
      {
        q: '¿Puedo vender por la página?',
        a: 'Con catálogo y pedido por WhatsApp, sí, y eso entra en este servicio. Si necesitas carrito, pago en línea y control de stock, eso ya es una tienda online, que es otro servicio y parte en S/3,000. Si no estás seguro de cuál te conviene, lo conversamos antes de cotizar.',
      },
    ],
  },
  {
    slug: 'tienda-online',
    tabId: 'tienda',

    h1: 'Tienda online para tu negocio en Perú',
    // Sin "| Bitwise" al final: BaseLayout ya lo agrega con titleTemplate.
    metaTitle: 'Tienda online en Perú desde S/3,000',
    metaDescription:
      'Tienda virtual con catálogo, control de stock y cobro automático por Yape, Plin y tarjetas. Dominio, hosting y capacitación incluidos. Entrega en 4 a 6 semanas.',
    breadcrumb: 'Tienda online',
    enFrase: 'tienda online',
    eyebrow: 'Comercio electrónico',
    intro:
      'Tu catálogo publicado, el stock al día y el cobro resuelto sin que tengas que contestar cada precio por mensaje. El cliente elige, paga y tú recibes el pedido listo para despachar.',

    hero: 'tienda-online',
    heroAlt:
      'Interior de una tienda pequeña con ropa colgada y productos ordenados en repisas de madera',

    problema: {
      title: 'Vender por WhatsApp funciona hasta que deja de funcionar',
      parrafos: [
        'Al inicio alcanza: llega el mensaje, respondes el precio, coordinas el pago y anotas el pedido. El problema aparece cuando el negocio crece. Las mismas tres preguntas —cuánto cuesta, si hay stock, cómo se paga— se repiten decenas de veces al día, y cada una se responde a mano.',
        'Lo que se pierde no siempre se nota. El cliente que escribió a las once de la noche y no tuvo respuesta hasta el día siguiente. El pedido que se confirmó cuando ya no quedaba stock. El precio que se dijo distinto en dos conversaciones. Nada de eso queda registrado en ningún lado, así que tampoco se puede revisar después.',
        'Una tienda online no reemplaza el WhatsApp: le quita el trabajo repetitivo. El catálogo responde el precio y la disponibilidad a cualquier hora, el cobro se hace solo, y el WhatsApp queda para lo que de verdad necesita una persona atendiendo.',
      ],
    },

    comoFunciona: {
      title: 'Cómo funciona por dentro',
      intro:
        'Tres momentos: lo que ve tu cliente, cómo te paga y qué te llega a ti. El resto lo maneja la tienda sola.',
      pasos: [
        {
          titulo: 'Tu catálogo, con precios y stock reales',
          desc:
            'Cada producto con su foto, su descripción y su precio. Cuando algo se agota, deja de aparecer disponible: no se venden productos que ya no tienes. Los cambias desde un panel, sin depender de nosotros para subir una foto o corregir un precio.',
          icono: 'carrito',
          foto: 'tienda-online-catalogo',
          alt: 'Catálogo de productos abierto en una tableta, sobre una mesa con artículos alrededor',
        },
        {
          titulo: 'Te paga como ya está acostumbrado',
          desc:
            'Yape, Plin, tarjeta de débito o crédito y transferencia. El cobro se confirma solo y el pedido queda registrado con lo que compró, cuánto pagó y a dónde va. Sin captura de pantalla que revisar ni pago que verificar a mano.',
          icono: 'tarjeta',
          foto: 'tienda-online-pago',
          alt: 'Pago sin contacto acercando un celular a un terminal de cobro',
        },
        {
          titulo: 'El pedido te llega listo para despachar',
          desc:
            'Entra a tu panel con los datos completos y el pago ya confirmado. Puedes emitir boleta o factura electrónica SUNAT si lo activas, y revisar en cualquier momento qué se vendió, cuánto y qué producto se mueve más.',
          icono: 'documento',
          foto: 'tienda-online-despacho',
          alt: 'Caja de cartón cerrada y sellada, lista para ser enviada',
        },
      ],
    },

    precio: {
      title: 'Precio y plazo',
      parrafos: [
        'Una tienda online parte en S/3,000 y se entrega entre 4 y 6 semanas. Ese precio incluye el diseño, el catálogo cargado, las pasarelas de pago configuradas, el dominio y el hosting del primer año, y una capacitación grabada para que puedas administrarla tú.',
        'Lo que mueve el precio hacia arriba es el tamaño del catálogo y lo que tenga que hacer la tienda además de vender: facturación electrónica SUNAT, conectarla con un sistema que ya uses, o reglas de despacho por zona. Eso se conversa antes y queda por escrito en la cotización, no aparece a mitad del proyecto.',
        'El pago va 50% al empezar y 50% contra entrega, con boleta o factura en cada uno. En proyectos grandes se puede dividir hasta en tres cuotas sin interés.',
      ],
    },

    faqs: [
      {
        q: '¿Puedo cambiar precios y productos yo mismo?',
        a: 'Sí. La tienda viene con un panel donde subes productos, cambias precios, actualizas fotos y marcas lo que se agotó. Se entrega con una capacitación grabada, así que la puedes volver a ver cuando entre alguien nuevo a tu equipo. No dependes de nosotros para la operación diaria.',
      },
      {
        q: '¿Qué formas de pago acepta?',
        a: 'Yape, Plin, tarjetas de débito y crédito, y transferencia bancaria. Son las que más usa el comprador peruano. Las pasarelas cobran su propia comisión por transacción, que va directo al proveedor de pago y no pasa por nosotros.',
      },
      {
        q: '¿Emite boleta y factura electrónica?',
        a: 'Se puede integrar facturación electrónica SUNAT, y se cotiza aparte porque depende del proveedor de facturación que uses y de cómo esté dado de alta tu RUC. Si todavía no facturas electrónicamente, la tienda funciona igual y lo puedes activar después.',
      },
      {
        q: '¿Sirve si vendo pocos productos?',
        a: 'Sí, y en ese caso el catálogo se arma más rápido. Si vendes menos de una docena de productos vale la pena conversarlo primero: a veces una página web con catálogo y pedido por WhatsApp resuelve lo mismo por menos, y te lo decimos antes de cotizar.',
      },
      {
        q: '¿Qué pasa con el dominio y el hosting después del primer año?',
        a: 'El primer año va incluido. Desde el segundo se renueva anualmente y el costo depende del dominio y del plan de hosting que tengas. Te avisamos antes del vencimiento con el monto exacto. El dominio queda a tu nombre, así que es tuyo aunque decidas trabajar con otra empresa.',
      },
      {
        q: '¿Se ve bien en celular?',
        a: 'Se diseña primero para celular y después para pantalla grande, porque ahí es donde compra la mayoría en Perú. Eso incluye el proceso de pago completo, que es donde más se abandonan las compras cuando la tienda no está pensada para móvil.',
      },
    ],
  },
  {
    slug: 'erp-sistemas',
    tabId: 'erp',

    h1: 'ERP y sistemas a medida para tu negocio',
    metaTitle: 'ERP y sistemas a medida en Perú',
    metaDescription:
      'Sistemas de ventas, stock y caja hechos a la medida de tu negocio. Automatizan las tareas repetitivas, se conectan con SUNAT y billeteras, y dan reportes de verdad.',
    breadcrumb: 'ERPs y sistemas',
    enFrase: 'sistema',
    eyebrow: 'Sistemas a medida',
    intro:
      'Para dejar de llevar el negocio en cuadernos y hojas de Excel que solo entiende una persona. Un sistema hecho para cómo trabajas tú, no un programa genérico al que tienes que adaptarte.',

    hero: null,
    heroAlt: '',

    problema: {
      title: 'El Excel aguanta hasta que el negocio lo pasa',
      parrafos: [
        'Casi todos empiezan igual: un cuaderno para las ventas, un Excel para el stock y la memoria del dueño para el resto. Funciona mientras el negocio es chico y una sola persona lo ve todo.',
        'Los problemas aparecen de a pocos y siempre parecidos. Dos personas editan el mismo archivo y se pierde el trabajo de una. El stock del sistema no coincide con el del almacén y nadie sabe desde cuándo. Cerrar el mes toma dos días de sumar a mano. Y cuando falta quien lleva el Excel, nadie más sabe dónde está cada cosa.',
        'Un sistema a medida no es un Excel más bonito: es que el dato se escriba una sola vez y todos vean lo mismo, que las tareas repetitivas las haga solo, y que la información no dependa de que una persona en particular esté ese día.',
      ],
    },

    comoFunciona: {
      title: 'Cómo se arma tu sistema',
      intro:
        'No hay un producto cerrado que se instala igual para todos. Se arma en tres etapas, y en la primera decides tú qué entra.',
      pasos: [
        {
          titulo: 'Primero miramos cómo trabajas hoy',
          desc:
            'Antes de programar nada, revisamos tu operación: qué se anota, quién lo anota, dónde se traba y qué se repite todos los días. De ahí sale la lista de lo que el sistema tiene que hacer, con su alcance por escrito. Sin esa lista no hay cotización seria.',
          icono: 'tuerca',
          foto: null,
          alt: '',
        },
        {
          titulo: 'Se construye por módulos, no todo de golpe',
          desc:
            'Ventas, stock, caja, compras, clientes: se ordenan por lo que más te duele y se entregan por partes, para que empieces a usar lo primero mientras se construye lo siguiente. Se conecta con SUNAT para boletas y facturas, y con las billeteras que ya cobras.',
          icono: 'cajas',
          foto: null,
          alt: '',
        },
        {
          titulo: 'Los reportes salen solos',
          desc:
            'Qué se vendió, qué se está por acabar, cuánto entró en caja y qué producto se mueve más. Los reportes se arman con lo que tu negocio de verdad necesita mirar, no con una plantilla, y salen al momento en vez de a fin de mes.',
          icono: 'grafico',
          foto: null,
          alt: '',
        },
      ],
    },

    precio: {
      title: 'Precio y plazo',
      parrafos: [
        'Aquí no publicamos un precio de entrada, y es a propósito: un sistema para una bodega con un punto de venta y uno para una distribuidora con tres almacenes no se parecen en nada. Poner una cifra suelta obligaría después a explicar por qué subió.',
        'La cotización sale de la primera etapa, la de revisar cómo trabajas. De ahí salen los módulos, el plazo y el precio, todo por escrito y antes de empezar a programar. Esa revisión no compromete a nada.',
        'El pago se reparte por etapas de entrega, con boleta o factura en cada una. El código queda a tu nombre: si mañana quieres que lo mantenga otro equipo, se lo entregas y sigue funcionando.',
      ],
    },

    faqs: [
      {
        q: '¿Cuánto cuesta un sistema a medida?',
        a: 'Depende de lo que tenga que hacer, y por eso no publicamos una cifra de entrada. Un sistema de ventas y stock para un local no cuesta lo mismo que uno con varios almacenes y facturación. La cotización sale de revisar tu operación primero, y llega por escrito con los módulos y el plazo.',
      },
      {
        q: '¿Qué es un ERP, en simple?',
        a: 'Un solo sistema donde vive todo lo del negocio —ventas, stock, compras, caja, clientes— en vez de tener cada cosa en un archivo distinto. La ventaja es que el dato se escribe una sola vez: cuando vendes, el stock baja solo y la caja se actualiza sola.',
      },
      {
        q: '¿Se puede conectar con lo que ya uso?',
        a: 'En general sí. Se conecta con SUNAT para boletas y facturas electrónicas, con las billeteras y pasarelas que ya cobras, y con otros sistemas si tienen forma de conectarse. Qué se puede y qué no se revisa en la primera etapa, antes de cotizar.',
      },
      {
        q: '¿Mi equipo va a poder usarlo?',
        a: 'Se diseña pensando en quién lo va a usar todos los días, no en quién lo programa. Se entrega con capacitación y con la operación diaria en la menor cantidad de pasos posible. Si tu equipo necesita tres clics para registrar una venta, algo se hizo mal.',
      },
      {
        q: '¿Qué pasa si mañana necesito algo más?',
        a: 'Se construye por módulos justamente para eso: se le suman partes sin rehacerlo. El soporte y las mejoras continuas se acuerdan aparte, y tú decides si las tomas con nosotros o con otro equipo, porque el código es tuyo.',
      },
      {
        q: '¿También hacen chatbots con IA?',
        a: 'Sí, y suele entrar como un módulo más: un chatbot en WhatsApp que responde las preguntas repetidas, toma pedidos o consulta el stock del propio sistema. Tiene sentido cuando ya hay un sistema detrás del que sacar la información.',
      },
    ],
  },
  {
    slug: 'apps-moviles',
    tabId: 'apps',

    h1: 'Aplicaciones móviles para Android y iPhone',
    metaTitle: 'Desarrollo de apps móviles en Perú',
    metaDescription:
      'Apps para Android y iPhone hechas a medida, publicadas en Play Store y con las cuentas a tu nombre. Con panel web para administrarlas y avisos al celular de tus clientes.',
    breadcrumb: 'Apps móviles',
    enFrase: 'app',
    eyebrow: 'Aplicaciones móviles',
    intro:
      'Una app tiene sentido cuando tu cliente o tu equipo van a volver seguido. No es un producto cerrado: es llevar al celular algo que tu negocio ya hace.',

    hero: null,
    heroAlt: '',

    problema: {
      title: 'Una app no siempre es la respuesta, y conviene saberlo antes',
      parrafos: [
        'La app es el paso más caro y más largo de todo lo que hacemos, así que empecemos por lo incómodo: muchas veces no hace falta. Si lo que necesitas es que te encuentren y te escriban, una página web lo resuelve por mucho menos. Si necesitas vender por internet, una tienda online también.',
        'La app gana cuando hay repetición. Un cliente que pide varias veces al mes, un programa de puntos, un equipo en la calle que registra visitas, avisos que tienen que llegar al bolsillo aunque nadie abra el navegador. Ahí un ícono en la pantalla del celular vale lo que cuesta.',
        'Por eso la primera conversación no es sobre la app: es sobre qué tiene que pasar para que alguien la abra una segunda vez. Si esa respuesta no aparece, te lo decimos y te proponemos el camino más corto.',
      ],
    },

    comoFunciona: {
      title: 'Cómo se arma tu app',
      intro:
        'Depende de qué se lleva al celular: un sistema que ya tienes, una tienda, o algo hecho desde cero. El camino es el mismo.',
      pasos: [
        {
          titulo: 'Se define qué va al celular y qué no',
          desc:
            'Una app no repite todo lo que hace tu sistema o tu web: se queda con lo que la gente hace de pie, con una mano y con prisa. Esa lista corta se define al principio y es la que decide el plazo y el precio.',
          icono: 'celular',
          foto: null,
          alt: '',
        },
        {
          titulo: 'Una sola app para Android y iPhone',
          desc:
            'Se construye una vez y funciona en los dos, en vez de pagar dos desarrollos. Lleva avisos al celular para lo que de verdad importa —un pedido listo, una cita mañana— y un panel web desde donde tú la administras.',
          icono: 'codigo',
          foto: null,
          alt: '',
        },
        {
          titulo: 'La publicamos nosotros, a tu nombre',
          desc:
            'Nos encargamos de subirla a Play Store, con las fichas, las capturas y las políticas que piden. Las cuentas de desarrollador quedan registradas a tu nombre, así que la app es tuya. La App Store de iPhone se cotiza aparte porque tiene su propio costo anual.',
          icono: 'tienda',
          foto: null,
          alt: '',
        },
      ],
    },

    precio: {
      title: 'Precio y plazo',
      parrafos: [
        'La entrega va de 2 a 5 meses y el precio se cotiza según el alcance. No publicamos una cifra de entrada porque el rango es demasiado ancho: llevar al celular un catálogo que ya existe no se parece a construir una app con cuentas de usuario, pagos y avisos.',
        'La cotización sale de definir qué va al celular, que es la primera etapa. De ahí salen las pantallas, el plazo y el precio, por escrito y antes de empezar.',
        'El pago se reparte por etapas de entrega, con boleta o factura en cada una. Las cuentas de las tiendas y el código quedan a tu nombre desde el primer día.',
      ],
    },

    faqs: [
      {
        q: '¿Cuánto cuesta hacer una app?',
        a: 'Se cotiza según lo que la app tenga que hacer, y el rango es ancho: no es lo mismo llevar al celular un catálogo que ya existe que construir una app con cuentas, pagos y avisos. La cotización sale de definir el alcance primero, y llega por escrito.',
      },
      {
        q: '¿Funciona en Android y en iPhone?',
        a: 'Sí, se construye una vez y funciona en los dos. La publicación en Play Store de Android va incluida. La App Store de iPhone se cotiza aparte, porque Apple cobra una membresía anual propia que se paga aunque no publiques nada más.',
      },
      {
        q: '¿Necesito una app o me alcanza con una web?',
        a: 'Si lo que buscas es que te encuentren y te escriban, la web alcanza y cuesta mucho menos. La app conviene cuando la misma persona va a volver seguido: pedidos frecuentes, puntos, citas, o un equipo que registra trabajo en la calle. Si nos cuentas tu caso te decimos cuál te conviene, aunque sea el más barato.',
      },
      {
        q: '¿Las cuentas de Play Store quedan a mi nombre?',
        a: 'Sí, y es importante: si la app está publicada bajo la cuenta de la agencia, dependes de esa agencia para cualquier actualización. Las registramos a nombre de tu negocio desde el inicio.',
      },
      {
        q: '¿Puedo administrarla sin saber programar?',
        a: 'Sí. Viene con un panel web para cambiar contenidos, precios y avisos sin tocar la app. Lo que sí necesita a un programador es cambiar cómo funciona, y eso entra en el soporte.',
      },
      {
        q: '¿Qué pasa después de publicarla?',
        a: 'Android e iPhone sacan versiones nuevas cada año y las tiendas piden que la app se mantenga al día. El soporte después de publicarla se acuerda aparte y cubre esas actualizaciones y los arreglos que aparezcan.',
      },
    ],
  },
];

export function getServicio(slug: string): Servicio | undefined {
  return servicios.find((s) => s.slug === slug);
}

/**
 * Busca el servicio que corresponde a una pestaña de /servicios.
 * Devuelve undefined mientras ese servicio todavía no tenga página propia, así
 * el índice puede enlazar solo los que ya existen.
 */
export function servicioDeTab(tabId: string): Servicio | undefined {
  return servicios.find((s) => s.tabId === tabId);
}

/** Dirección pública de un servicio. */
export function hrefServicio(slug: string): string {
  return `/servicios/${slug}/`;
}
