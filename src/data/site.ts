// Configuración central del sitio. Todo el contenido real vive aquí.
// Contenido alineado con el rediseño 2026.

export const site = {
  name: 'Bitwise',
  legalName: 'Bitwise Perú',
  domain: 'https://bitwise.pe',
  whatsapp: '51945574190',
  whatsappMsg: 'Hola Bitwise 👋 quiero una cotización para mi negocio',
  email: 'gguzman.bitone@gmail.com',
  phone: '+51 945 574 190',
  city: 'Lima, Perú',
  hours: 'Lun – Sáb: 9:00 – 19:00',
  socials: {
    facebook: 'https://www.facebook.com/share/1E74K2gsDA/?mibextid=wwXIfr',
    instagram: 'https://www.instagram.com/bitwise_peru',
    tiktok: 'https://www.tiktok.com/@bitwise_peru',
    linkedin: 'https://linkedin.com/company/bitwise-peru-oficial',
  },
} as const;

// Dónde se guarda una copia de cada formulario enviado.
//
// El formulario abre WhatsApp con el mensaje armado, y eso funciona bien desde
// el celular. Pero desde una computadora sin WhatsApp Web, o si la persona
// cierra la ventana antes de darle enviar, ese contacto se pierde y no queda
// registro en ninguna parte. Este endpoint es la red de seguridad: se manda una
// copia por detrás y WhatsApp se abre igual.
//
// Está vacío a propósito. Mientras lo esté, el formulario se comporta como
// siempre —solo WhatsApp— y no se hace ninguna petición a ningún sitio.
//
// Para activarlo hace falta una dirección que reciba el envío y te lo mande al
// correo. Dos caminos, los dos gratis para el volumen de una MYPE:
//
//   1. web3forms.com — pides una clave con tu correo, no hay que crear cuenta.
//      El endpoint queda así:  https://api.web3forms.com/submit
//      y la clave se pone en `formAccessKey`.
//   2. formspree.io — creas cuenta y te da una dirección propia. En ese caso
//      `formAccessKey` se deja vacío.
//
// IMPORTANTE: al poner una dirección aquí hay que sumar ese dominio a
// `connect-src` en public/_headers, o el navegador bloqueará el envío por la
// política de seguridad del sitio. Está anotado también allí.
export const formulario = {
  endpoint: '',
  accessKey: '',
} as const;

export const seo = {
  defaultTitle: 'Páginas web, tiendas online y ERPs para MYPEs | Bitwise Perú',
  titleTemplate: '%s | Bitwise',
  description:
    'Páginas web desde S/1,500 con dominio y hosting incluidos, tiendas online desde S/3,000 y sistemas a medida para negocios peruanos. Factura SUNAT y WhatsApp directo.',
  // Temas reales sobre los que trabaja la empresa. Alimentan `knowsAbout` del
  // JSON-LD: son materias de servicio, NO variantes de búsqueda. Las frases
  // tipo "página web barata" son consultas de usuario y no describen a la
  // organización; ahí no van.
  topics: [
    'Desarrollo web',
    'Comercio electrónico',
    'Sistemas ERP',
    'Integración con SUNAT',
    'Aplicaciones móviles',
    'Chatbots con inteligencia artificial',
  ],
  ogImage: '/og-default.jpg',
  // Token de verificación de propiedad en Google Search Console. Vive aquí y
  // no incrustado en el layout para que rotarlo sea cambiar una línea en el
  // archivo donde ya está el resto de la configuración del sitio.
  googleSiteVerification: 'pT4-z8d9zSfJdwsOV5p3xuh2UtFTyJATXcMhuTNKEZI',
} as const;

// Piso de precio anunciado en toda la comunicación: "desde S/1,500 + IGV".
// Solo es cierto si ningún servicio ni rubro cotiza por debajo. Cualquier
// precio del sitio se valida contra esta constante.
export const PRECIO_PISO = 1500;

export const waLink = (msg: string = site.whatsappMsg) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;

export const nav = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Blog', href: '/blog' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
] as const;

// ---- Hero (home) ----
export const hero = {
  eyebrow: 'Hecho en Perú',
  // Arranque fijo del titular, en grande. Lleva la keyword principal y no se
  // anima: es lo que leen Google y los buscadores con IA, que no ejecutan
  // JavaScript. Un H1 pintado por JavaScript equivale a una página sin título.
  h1: 'Páginas web y tiendas online',
  // El final del titular, también en grande, y esto sí se escribe y se borra.
  //
  // Las tres frases completan la línea de arriba, así que se leen seguidas:
  // "Páginas web y tiendas online / para MYPEs en Perú". Son cortas a propósito:
  // a este tamaño de letra, una frase larga ocupa cuatro renglones en un celular
  // y empuja el botón y los precios fuera de la pantalla.
  //
  // El orden importa. La primera es la que lleva la keyword y es la que se pinta
  // en el HTML servido, así que el titular que lee Google sigue diciendo
  // exactamente "Páginas web y tiendas online para MYPEs en Perú" aunque el
  // JavaScript no llegue a correr. Las otras dos son el adorno.
  //
  // Cada una afirma algo que el sitio ya sostiene por escrito en otra página
  // —plazo de entrega, pasarelas peruanas—; nada de promesas genéricas que
  // después no se puedan respaldar en la cotización.
  // Las tres miden lo mismo (27 caracteres) y eso no es casualidad: completan la
  // misma línea de arriba, así que si una fuera más corta el titular ocuparía un
  // renglón menos y el bloque se vería encogido cada vez que le tocara el turno.
  // Con largos parejos, el titular corta igual siempre. Al cambiar una frase hay
  // que mantenerle el largo.
  //
  // Ninguna promete un plazo. Hubo una que decía "listas en semanas, no meses" y
  // se quitó: un proyecto grande puede tomar meses de verdad, y una frase así en
  // el titular se convierte en un reclamo el día que no se cumple. Los plazos
  // están en /servicios, donde van por servicio y con su rango. Aquí solo van
  // hechos que se cumplen siempre, sin depender del tamaño del encargo.
  typed: [
    'para MYPEs en todo el Perú.',
    'con el dominio a tu nombre.',
    'que cobran por Yape y Plin.',
  ],
  pills: [
    { label: 'Rápidas', color: '#f59e0b', icon: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>' },
    { label: 'Precio justo', color: '#22c55e', icon: '<circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8M12 18V6"/>' },
    { label: 'Profesionales', color: '#818cf8', icon: '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/>' },
  ],
  // `label` es la etiqueta visible del carrusel; `alt` describe lo que se ve en
  // la foto para lectores de pantalla y para Google Imágenes.
  slides: [
    {
      src: '/hero/uno.webp',
      msrc: '/hero/celular/uno.webp',
      label: 'Página web',
      alt: 'Página web de una tienda de artesanía peruana abierta en un iMac sobre un escritorio de madera',
    },
    {
      src: '/hero/dos.webp',
      msrc: '/hero/celular/dos.webp',
      label: 'Aplicaciones móviles',
      alt: 'App móvil de una tienda de accesorios mostrando un producto con su precio en soles, sostenida en la mano',
    },
    {
      src: '/hero/tres.webp',
      msrc: '/hero/celular/tres.webp',
      label: 'Tienda virtual',
      alt: 'Tienda virtual con catálogo de textiles peruanos, filtros y botones de añadir al carrito, abierta en una laptop',
    },
  ],
} as const;

// ---- Tira de precios del hero ----
// Los dos puntos de entrada del catálogo, que son las dos preguntas con las que
// llega todo el mundo: "cuánto cuesta una web" y "cuánto cuesta vender online".
// Van con "Desde" delante porque son pisos, no precios cerrados: la cotización
// real sube según el alcance, y prometer una cifra exacta aquí obliga después a
// explicar por qué subió.
//
// `S/1,500` tiene que coincidir con PRECIO_PISO. Si algún día se mueve el piso,
// se mueven los dos: el guardia de rubros.ts valida los rubros contra la
// constante, pero no puede ver este texto.
//
// Cada tarjeta lleva su color, y el color va aquí y no suelto en la plantilla
// para que la cifra, el borde y el fondo no puedan quedar de tonos distintos.
// Azul para la web y morado para la tienda: son los dos únicos sitios del hero
// con estos tonos, así que se leen como dos opciones a elegir y no se confunden
// con el rojo y el dorado de la marca, que aquí visten los botones y el titular.
//   `de`/`a`  → extremos del degradado de la cifra
//   `tinte`   → relleno de la tarjeta
//   `borde`   → filo de 1px
//
// Sin línea de detalle bajo el precio. La tenía solo en escritorio ("+ IGV ·
// dominio y hosting incluidos" y "Con pasarela de pagos peruana") y hacía que
// la misma tarjeta se leyera distinta según el aparato. Aquí la tarjeta responde
// una sola pregunta —cuánto cuesta empezar—; el "+ IGV" y todo lo que incluye
// están en las tarjetas de /servicios, que es donde se va a comparar de verdad.
export const heroPrecios = [
  {
    k: 'Páginas web',
    v: 'S/1,500',
    de: '#60a5fa',
    a: '#22d3ee',
    tinte: 'rgba(56,132,246,0.13)',
    borde: 'rgba(96,165,250,0.32)',
  },
  {
    k: 'Tiendas online',
    v: 'S/3,000',
    de: '#c084fc',
    a: '#8b7bf7',
    tinte: 'rgba(139,92,246,0.15)',
    borde: 'rgba(192,132,252,0.32)',
  },
] as const;

// ---- Contadores animados (home) ----
// `derivado` marca las cifras que NO se escriben aquí: las calcula el
// componente a partir de los datos reales para que no puedan quedar viejas.
export const homeStats = [
  { n: 7, suffix: 'días', k: 'Entrega mínima', derivado: 'entregaMinima' },
  { n: 2, prefix: '<', suffix: 'horas', k: 'Respuesta WhatsApp', derivado: null },
  { n: 30, suffix: 'días', k: 'Garantía post-entrega', derivado: null },
  { n: 100, suffix: '%', tight: true, k: 'Código y dominio tuyos', derivado: null },
] as const;

// ---- Servicios destacados (home) ----
export const serviciosHome = [
  {
    tag: 'Página web profesional',
    time: '2 a 4 semanas',
    desc: 'Rápida, lista para salir en Google y con los textos en tus manos. Dominio y hosting del primer año incluidos.',
    price: 'S/1,500',
    priceLabel: 'Desde',
    priceNote: ' + IGV',
    href: '/servicios#web',
    featured: false,
    iconName: 'www',
    iconColor: '#D91023',
    features: [
      'Se ve bien en el celular',
      'Cambias textos y fotos tú mismo',
      'Preparada para salir en Google',
      'Botón de WhatsApp',
    ],
  },
  {
    tag: 'Tienda online',
    time: '4 a 6 semanas',
    desc: 'Tu cliente elige, paga y tú recibes el pedido listo, a cualquier hora. Dominio y hosting incluidos.',
    price: 'S/3,000',
    priceLabel: 'Desde',
    priceNote: '',
    href: '/servicios#tienda',
    featured: true,
    badge: 'Más pedido',
    iconName: 'carrito',
    iconColor: '#E8A317',
    features: [
      'Cobras por Yape, Plin y tarjeta',
      'Catálogo y control de stock',
      'Pedidos por WhatsApp',
      'Boleta y factura SUNAT',
    ],
  },
  {
    tag: 'ERPs y sistemas a medida',
    time: 'Según el tamaño',
    desc: 'Para llevar ventas, stock y caja sin cuadernos ni Excel. Hecho a la medida de tu negocio.',
    price: 'A consultar',
    priceLabel: 'Precio',
    priceNote: '',
    href: '/servicios#erp',
    featured: false,
    iconName: 'tuerca',
    iconColor: '#6366f1',
    features: [
      'Control de ventas, stock y caja',
      'Chatbot con IA en WhatsApp',
      'Se conecta con SUNAT y billeteras',
      'Reportes hechos a tu medida',
    ],
  },
] as const;

// ---- Servicios en detalle (/servicios, pestañas) ----
// Cada pestaña carga además los datos de su Offer en JSON-LD. Viven aquí, junto
// al precio que se muestra en pantalla, para que el precio visible y el
// declarado a Google no puedan separarse.
//
//   price        precio de entrada en soles; null = no hay precio fijo publicado
//   rubros       rubros donde ese servicio aplica de verdad. Alimentan el
//                enlazado interno desde /servicios, que hasta ahora no
//                enlazaba a ninguna de las 12 páginas de rubro.
//   ivaIncluido  null cuando el sitio no lo declara. No se supone: un
//                valueAddedTaxIncluded inventado es una afirmación de precio
//                falsa en datos estructurados.
export const serviciosTabs = [
  {
    id: 'web',
    rubros: ['clinicas-consultorios', 'barberias-salones-belleza', 'talleres-mecanicos'],
    // Tipos de trabajo que entran en este servicio. Sustituyen a la lista de
    // rubros que había en /servicios, que daba a entender que el precio cambia
    // según el giro del negocio. No cambia: una pollería y una barbería pagan lo
    // mismo por la misma página. Lo que mueve el precio es el trabajo que hay
    // detrás, y eso es lo que se enseña aquí.
    trabajos: ['Página de presentación', 'Catálogo sin venta online', 'Página para una campaña', 'Web con blog y noticias'],
    label: 'Página web',
    tag: 'Páginas web',
    icon: 'www',
    title: 'Tu página web profesional',
    incluye: 'Dominio y hosting por 1 año incluidos',
    time: '2 a 4 semanas',
    price: 1500,
    ivaIncluido: false,
    priceLabel: 'S/1,500',
    priceNote: '+ IGV',
    schemaId: 'pagina-web',
    schemaName: 'Diseño y desarrollo de páginas web para MYPEs',
    serviceType: 'Diseño web',
    desc: 'Rápida, segura y lista para salir en Google. Se ve bien en el celular y los textos los cambias tú.',
    wa: 'Hola Bitwise 👋 quiero cotizar una página web',
    // `c` es el color del icono en la lista de "qué incluye". Uno por fila y no
    // uno por servicio: seis chips del mismo tono se leen como un bloque gris y
    // la vista los salta. Con colores distintos cada fila se distingue de un
    // vistazo. Los tonos van a juego con lo que dice la fila —verde para cobros,
    // azul para el celular— y los logos de marca llevan el suyo propio.
    features: [
      { t: 'Se ve bien en el celular', i: 'celular', c: '#2563eb' },
      { t: 'Cambias textos y fotos tú mismo', i: 'tablero', c: '#7c3aed' },
      { t: 'Dominio .com y hosting por 1 año', i: 'www', c: '#0891b2' },
      { t: 'Candado de seguridad y correo propio', i: 'correo', c: '#db2777' },
      { t: 'Preparada para salir en Google', i: 'google', c: '#ea4335' },
      { t: 'Botón de WhatsApp y formulario', i: 'whatsapp', c: '#25d366' },
    ],
  },
  {
    id: 'tienda',
    rubros: ['ferreterias', 'opticas', 'panaderias-pastelerias'],
    // Aquí sí van ejemplos de negocio, porque en una tienda lo que se vende
    // cambia el trabajo de verdad: no es lo mismo un catálogo de ropa con tallas
    // y colores que una carta con horarios de reparto o una agenda con pago.
    trabajos: ['Tienda de ropa con tallas y colores', 'Restaurante con pedidos y reparto', 'Minimarket y abarrotes', 'Reservas y citas con pago'],
    label: 'Tienda online',
    tag: 'Tiendas online',
    icon: 'carrito',
    title: 'Tu tienda vendiendo sola',
    incluye: 'Dominio, hosting y medios de pago',
    time: '4 a 6 semanas',
    price: 3000,
    ivaIncluido: null,
    priceLabel: 'S/3,000',
    priceNote: '',
    schemaId: 'tienda-online',
    schemaName: 'Desarrollo de tiendas online para MYPEs',
    serviceType: 'Comercio electrónico',
    desc: 'Tu cliente elige, paga y tú recibes el pedido listo. A cualquier hora, sin que tengas que contestar.',
    wa: 'Hola Bitwise 👋 quiero cotizar una tienda online',
    features: [
      { t: 'Catálogo con control de stock', i: 'carrito', c: '#d97706' },
      { t: 'Cobras por Yape, Plin y tarjeta', i: 'tarjeta', c: '#059669' },
      { t: 'Pago automático y pedidos por WhatsApp', i: 'whatsapp', c: '#25d366' },
      { t: 'Boleta y factura SUNAT (opcional)', i: 'documento', c: '#2563eb' },
      { t: 'Panel de ventas y reportes', i: 'grafico', c: '#7c3aed' },
      { t: 'Video para que lo manejes tú', i: 'video', c: '#e11d48' },
    ],
  },
  {
    id: 'erp',
    rubros: ['talleres-mecanicos', 'farmacias-boticas', 'academias-preuniversitarios'],
    trabajos: ['Control de stock y almacén', 'Automatizar tareas repetitivas', 'Facturación y caja', 'Reportes de ventas'],
    label: 'ERPs y sistemas',
    tag: 'Sistemas a medida',
    icon: 'tuerca',
    title: 'Un sistema hecho para tu negocio',
    incluye: 'Definimos contigo qué va a hacer',
    time: 'Según el tamaño',
    price: null,
    ivaIncluido: null,
    priceLabel: 'A consultar',
    priceNote: 'Según alcance',
    schemaId: 'erp',
    schemaName: 'Desarrollo de ERPs y sistemas a medida',
    serviceType: 'Software a medida',
    desc: 'Para llevar ventas, stock y caja sin cuadernos ni Excel. Se arma según lo que tu negocio necesita.',
    wa: 'Hola Bitwise 👋 quiero cotizar un sistema / ERP para mi negocio',
    features: [
      { t: 'Control de ventas, stock y caja', i: 'cajas', c: '#d97706' },
      { t: 'Chatbot con IA en WhatsApp', i: 'whatsapp', c: '#25d366' },
      { t: 'Se conecta con SUNAT y billeteras', i: 'enchufe', c: '#0891b2' },
      { t: 'Hace solo las tareas repetitivas', i: 'tuerca', c: '#4f46e5' },
      { t: 'Reportes hechos a tu medida', i: 'grafico', c: '#7c3aed' },
      { t: 'Soporte y mejoras continuas', i: 'soporte', c: '#0284c7' },
    ],
  },
  {
    id: 'apps',
    rubros: ['gimnasios-crossfit', 'veterinarias-petshop', 'pollerias-restaurantes'],
    // La app no es un producto cerrado: es llevar al celular algo que ya existe.
    // Por eso los cuatro empiezan igual, "tu ... en el celular", y el último deja
    // dicho que se arma según lo que haga falta.
    trabajos: ['Tu sistema en el celular', 'Tu tienda en el celular', 'App de pedidos para tu equipo', 'A medida, según lo que necesites'],
    label: 'Apps móviles',
    tag: 'Aplicaciones móviles',
    icon: 'celular',
    title: 'Tu app en el celular de tus clientes',
    incluye: 'La publicamos en Play Store',
    time: '2 a 5 meses',
    price: null,
    ivaIncluido: null,
    priceLabel: 'A consultar',
    priceNote: 'Según alcance',
    schemaId: 'apps-moviles',
    schemaName: 'Desarrollo de aplicaciones móviles para Android e iOS',
    serviceType: 'Desarrollo de aplicaciones móviles',
    desc: 'Una app que tus clientes descargan e instalan. Funciona en Android y en iPhone, y la publicamos nosotros.',
    wa: 'Hola Bitwise 👋 quiero cotizar una app móvil',
    features: [
      { t: 'Funciona en Android y en iPhone', i: 'codigo', c: '#7c3aed' },
      { t: 'La publicamos en Play Store', i: 'tienda', c: '#059669' },
      { t: 'Avisos al celular y estadísticas', i: 'campana', c: '#d97706' },
      { t: 'Panel web para administrarla', i: 'tablero', c: '#2563eb' },
      { t: 'Las cuentas quedan a tu nombre', i: 'llave', c: '#ca8a04' },
      { t: 'Soporte después de publicarla', i: 'soporte', c: '#0284c7' },
    ],
  },
] as const;

// ---- Condiciones comerciales (/servicios) ----
export const condiciones = [
  {
    title: 'Pago 50 / 50',
    desc: 'Mitad al empezar y mitad al recibir. Hasta 3 cuotas sin interés.',
    color: '#16a34a',
    bg: 'rgba(22,163,74,0.1)',
    icon: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',
  },
  {
    title: 'Factura SUNAT',
    desc: 'Empresa formal con RUC. Boleta o factura en cada pago.',
    color: '#D91023',
    bg: 'rgba(217,16,35,0.09)',
    icon: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4M8 13h8M8 17h8"/>',
  },
  {
    title: 'Garantía 30 días',
    desc: 'Arreglamos errores y ajustes chicos sin costo.',
    color: '#c98a12',
    bg: 'rgba(232,163,23,0.14)',
    icon: '<path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"/><path d="m9 12 2 2 4-4"/>',
  },
  {
    title: 'Código y dominio tuyos',
    desc: 'Todo queda a tu nombre. Si te quieres llevar la web, te la llevas.',
    color: '#6366f1',
    bg: 'rgba(129,140,248,0.12)',
    icon: '<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>',
  },
] as const;

// ---- Comparativa (/servicios) ----
// La columna del medio decía "Freelance" y marcaba "no" en RUC y en factura
// SUNAT. Eso es generalizar sobre un oficio entero: hay muchos freelancers
// formales que facturan, y a un cliente que trabajó bien con uno la tabla le
// suena injusta. Además le da munición a cualquiera que quiera desmentirnos.
//
// Ahora la columna es la situación, no la persona: "Trabajo informal" es
// contratar sin contrato, sin RUC y sin factura, que es el riesgo real del que
// queremos hablar. Con ese título, cada "no" de esa columna es cierto por
// definición y no acusa a nadie. Un freelance formal cae en la primera columna
// junto con nosotros, y así debe ser.
export const comparativa = {
  cols: ['Bitwise', 'Trabajo informal', 'Agencia grande'],
  rows: [
    { label: 'Cotización por escrito en 24 h', vals: ['si', 'aveces', 'no'] },
    { label: 'Empresa formal con RUC', vals: ['si', 'no', 'si'] },
    { label: 'Factura electrónica SUNAT', vals: ['si', 'no', 'si'] },
    { label: 'Respuesta WhatsApp < 2 horas', vals: ['si', 'aveces', 'no'] },
    { label: 'Hablas directo con tu desarrollador', vals: ['si', 'si', 'no'] },
    { label: 'Código fuente entregado', vals: ['si', 'aveces', 'Extra'] },
    { label: 'Garantía de 30 días', vals: ['si', 'no', 'si'] },
    { label: 'Pagos en cuotas sin interés', vals: ['si', 'no', 'no'] },
    { label: 'Se conecta con SUNAT y billeteras', vals: ['si', 'aveces', 'si'] },
  ],
} as const;

// ---- Proceso (home) ----
export const proceso = [
  { n: '01', title: 'Conversamos', desc: 'Por WhatsApp o videollamada entendemos tu negocio, objetivos y presupuesto real.', icon: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/>' },
  { n: '02', title: 'Cotizamos claro', desc: 'Propuesta en soles con alcance y fechas por escrito. Sin letra chica ni sorpresas.', icon: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4M8 13h8M8 17h8M8 9h2"/>' },
  { n: '03', title: 'Diseñamos y desarrollamos', desc: 'Mockup aprobado por ti y avances semanales con link de preview. 2 rondas de cambios sin costo.', icon: '<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>' },
  { n: '04', title: 'Entregamos y acompañamos', desc: 'Capacitación grabada, accesos completos, 30 días de garantía y soporte por WhatsApp.', icon: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.29 7 12 12l8.71-5M12 22V12"/>' },
] as const;

// ---- Marcas / proyectos ----
export const marcas = [
  { name: 'QUIPUY', link: 'https://quipuy.pe', style: 'letter-spacing:0.14em' },
  { name: 'MindBlock', link: 'https://mindblock.io', style: 'letter-spacing:-0.02em', dot: true },
  { name: 'JMF', link: null, style: '', logo: '/marcas/jmf.png', alt: 'Grupo JMF' },

  // Logotipos provisionales dibujados a medida, cada uno con una forma distinta
  // para que la fila no se lea como una plantilla repetida. Van en SVG en línea
  // para heredar el color del banner. Se reemplazan en cuanto lleguen los reales.
  {
    // Sello circular
    name: 'Florería Adams',
    link: null,
    style: '',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Florería Adams">
      <circle cx="50" cy="50" r="45" stroke="currentColor" stroke-width="2.2"/>
      <circle cx="50" cy="50" r="39" stroke="currentColor" stroke-width="0.9" opacity="0.5"/>
      <g stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="50" cy="34" r="5.5"/>
        <path d="M50 28.5c2.6-5 7.6-6.4 10.1-3.9s.9 7.5-4.1 10.1"/>
        <path d="M50 28.5c-2.6-5-7.6-6.4-10.1-3.9s-.9 7.5 4.1 10.1"/>
        <path d="M50 39.5c2.6 5 7.6 6.4 10.1 3.9s.9-7.5-4.1-10.1"/>
        <path d="M50 39.5c-2.6 5-7.6 6.4-10.1 3.9s-.9-7.5 4.1-10.1"/>
        <path d="M50 45v16"/>
        <path d="M50 55c-5 0-8.4-2.5-9.2-6.7 5-.8 8.4 1.7 9.2 6.7Z"/>
      </g>
      <text x="50" y="76" text-anchor="middle" fill="currentColor" font-family="'Space Grotesk',sans-serif" font-size="8" font-weight="700" letter-spacing="1.6">FLORERÍA</text>
      <text x="50" y="86" text-anchor="middle" fill="currentColor" font-family="'Space Grotesk',sans-serif" font-size="10" font-weight="700" letter-spacing="1.2">ADAMS</text>
    </svg>`,
  },
  {
    // Lockup horizontal, sin recuadro
    name: 'Lima Se',
    link: null,
    style: '',
    wide: true,
    svg: `<svg viewBox="0 0 190 70" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Lima Se">
      <g stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 4)">
        <ellipse cx="32" cy="31" rx="20" ry="15" transform="rotate(-22 32 31)"/>
        <path d="M32 16v30" transform="rotate(-22 32 31)"/>
        <path d="M17 31h30" transform="rotate(-22 32 31)"/>
        <path d="m22 21 20 20" transform="rotate(-22 32 31)"/>
        <path d="m42 21-20 20" transform="rotate(-22 32 31)"/>
        <path d="M47 13c3.5-4.5 8-5.5 11.5-4.5" />
      </g>
      <text x="76" y="34" fill="currentColor" font-family="'Space Grotesk',sans-serif" font-size="26" font-weight="700" letter-spacing="1">LIMA</text>
      <text x="76" y="57" fill="currentColor" font-family="'Space Grotesk',sans-serif" font-size="26" font-weight="700" letter-spacing="6">SE</text>
    </svg>`,
  },
  {
    // Etiqueta redondeada con el nombre fuera del marco
    name: 'Coffee & Dreams',
    link: null,
    style: '',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Coffee and Dreams">
      <rect x="20" y="4" width="60" height="56" rx="26" stroke="currentColor" stroke-width="2.2"/>
      <g stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
        <path d="M37 27h22v10a11 11 0 0 1-22 0V27Z"/>
        <path d="M59 30h3.5a4.5 4.5 0 0 1 0 9H59"/>
        <path d="M36 51h26"/>
        <path d="M45 20c-1.6-2.4 0-4 1.2-5.6"/>
        <path d="M53 20c-1.6-2.4 0-4 1.2-5.6"/>
      </g>
      <text x="50" y="79" text-anchor="middle" fill="currentColor" font-family="'Space Grotesk',sans-serif" font-size="11" font-weight="700" letter-spacing="0.6">COFFEE</text>
      <text x="50" y="92" text-anchor="middle" fill="currentColor" font-family="'Space Grotesk',sans-serif" font-size="9" font-weight="700" letter-spacing="1.4">&amp; DREAMS</text>
    </svg>`,
  },
] as const;


// ---- Rubros ----


// ---- Nosotros ----
export const nosotros = {
  eyebrow: 'Sobre nosotros',
  title: 'Peruanos impulsando <span class="gradient-text--warm">negocios peruanos</span>',
  intro: 'La tecnología no debería ser un lujo reservado para las grandes empresas. Por eso trabajamos con MYPEs, a precio justo, de tú a tú.',
  historiaTitle: 'Empezamos haciendo webs a los vecinos del barrio',
  historia: [
    'Bitwise nació en Lima con una idea simple: las MYPEs peruanas también merecen tecnología de primer nivel, sin pagar lo que pagan las multinacionales. Nos cansamos de ver bodegueros, restauranteros y emprendedores pagando fortunas a agencias que ni siquiera los escuchan.',
    'Empezamos haciendo webs a vecinos, conocidos y contactos del colegio. Hoy seguimos con la misma idea: tecnología bien hecha, a precio que una MYPE puede pagar, y con la misma persona que te cotiza atendiéndote de principio a fin.',
    'No somos la agencia más grande del Perú. Pero sí una en la que hablas directo con quien desarrolla tu proyecto, responde el WhatsApp al toque y entrega lo que promete.',
  ],
  mision: 'Democratizar la tecnología en el Perú. Que cualquier MYPE —desde la bodega de la esquina hasta la ferretería del barrio— pueda vender por internet, facturar electrónicamente y crecer con herramientas profesionales a precio accesible.',
  vision: 'Que cuando un emprendedor peruano piense "necesito una web o un sistema", lo primero que se le venga a la mente sea Bitwise.',
  valores: [
    { title: 'Precio justo', desc: 'Ni carísimo como las grandes consultoras, ni tan bajo que sacrifiquemos calidad. Cotizaciones claras, en soles y sin letra chica.' },
    { title: 'Hacemos lo que prometemos', desc: 'Fechas reales, no plazos inventados. Si dijimos 10 días, son 10 días. Y si hay demoras, te avisamos primero.' },
    { title: 'Hablamos como tú', desc: 'Nada de tecnicismos imposibles. Te explicamos todo en cristiano, como quien le enseña a un pata del colegio.' },
    { title: 'Soporte que responde', desc: 'No te dejamos botado después de entregar. WhatsApp directo con quien hizo tu proyecto, no un call center.' },
    { title: 'Orgullo peruano', desc: 'Somos peruanos trabajando para peruanos. Entendemos la realidad de la MYPE, los rubros locales y cómo se vende acá.' },
    { title: 'Transparencia total', desc: 'Ves el avance semana a semana. Si algo no te gusta, lo cambiamos. Tu opinión manda porque tu negocio manda.' },
  ],
} as const;

// ---- Contacto ----
export const contactoForm = {
  rubros: ['Bodega / minimarket', 'Restaurante / pollería', 'Ferretería / repuestos', 'Farmacia / botica', 'Consultorio / clínica', 'Salón / barbería', 'Taller / servicio técnico', 'Tienda de ropa', 'Educación / academia', 'Servicio profesional', 'Otro'],
  necesidades: ['Página web', 'Tienda online', 'ERP / sistema a medida', 'Chatbot IA WhatsApp', 'App móvil', 'Aún no sé, asesórenme'],
} as const;

export const contactoExpectativas = [
  'Respuesta en menos de 2 horas hábiles',
  'Cotización por escrito en 24 horas',
  'Sin compromiso ni presión de venta',
] as const;

// ---- FAQ (home) ----
export const faqs = [
  { q: '¿Puedo pagar en cuotas o necesito todo al contado?', a: 'Trabajamos con 50% de adelanto y 50% contra entrega. En proyectos grandes puedes dividir en hasta 3 cuotas sin interés. Aceptamos Yape, Plin, transferencia y tarjeta, con boleta o factura electrónica SUNAT en cada pago.' },
  { q: '¿Qué incluye el precio de S/1,500?', a: 'El diseño y la programación, tu dominio .com y el hosting del primer año, el candado de seguridad, el correo con tu dominio, el formulario de contacto, el botón de WhatsApp y dejarla preparada para salir en Google, con estadísticas de visitas. El precio es sin IGV; emitimos boleta o factura.' },
  { q: '¿El sitio web, el dominio y el código quedan a mi nombre?', a: 'Sí, 100%. El dominio se registra con tus datos y el código fuente es tuyo desde el primer día. Te entregamos accesos completos. Si mañana quieres migrar a otra agencia, el traspaso es directo.' },
  { q: '¿Qué pasa si no me gusta el diseño?', a: 'Antes de programar te mostramos el diseño y recién con tu aprobación seguimos. Incluimos 2 rondas de cambios sin costo y 30 días de garantía post-entrega.' },
  { q: '¿Yo puedo actualizar textos, fotos y precios sin depender de ustedes?', a: 'Sí. Entregamos la web con un panel simple para que lo manejes tú y una capacitación grabada de 30 minutos para que tú o tu equipo cambien contenido sin pagar extra.' },
  { q: '¿Trabajan con empresas fuera de Lima?', a: 'Sí. Atendemos MYPEs en todo el Perú, 100% remoto por Zoom y WhatsApp. Mismo precio, misma calidad, sin cargo extra por ubicación.' },
] as const;

// ---- Blog (SEO) ----
// Categorías con el mismo esquema que producción: slug para filtrar, etiqueta para mostrar.
export const blogCats = [
  { slug: 'pymes-peru', label: 'Pymes Perú' },
  { slug: 'desarrollo-web', label: 'Desarrollo Web' },
  { slug: 'ecommerce', label: 'Tiendas online' },
  { slug: 'seo-marketing', label: 'Salir en Google' },
  { slug: 'apps-moviles', label: 'Apps Móviles' },
] as const;

export const catLabel = (slug: string) =>
  blogCats.find((c) => c.slug === slug)?.label ?? slug;

export const blog = [
  {
    slug: 'inteligencia-artificial-para-negocios-pequenos-peru',
    rubros: ['clinicas-consultorios', 'academias-preuniversitarios', 'barberias-salones-belleza'],
    title: '5 formas de usar inteligencia artificial en tu negocio pequeño (sin ser experto)',
    excerpt: 'La IA ya no es solo para grandes empresas. Te mostramos cómo una MYPE peruana puede ahorrar horas y vender más usando herramientas de IA hoy mismo.',
    category: 'pymes-peru',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&q=80&auto=format&fit=crop',
    emoji: '🤖',
    author: 'Bitwise',
    featured: false,
    date: '2026-07-14',
    readTime: '7 min',
    keywords: ['inteligencia artificial para pequeñas empresas', 'IA para negocios Perú', 'herramientas de IA para MYPES', 'automatización para negocios'],
    body: [
      'La inteligencia artificial dejó de ser cosa de películas o de grandes corporaciones. Hoy, en Perú, más del 80% de los dueños de pequeñas empresas dice estar listo para usar IA, y lo mejor es que muchas de estas herramientas son gratuitas o cuestan menos que un almuerzo al mes. Aquí van 5 formas prácticas de aprovecharla en tu negocio, sin necesidad de saber programar.',
      '1. Contesta clientes 24/7 con un chatbot en WhatsApp. Un asistente con IA puede responder las preguntas típicas ("¿cuánto cuesta?", "¿hacen delivery?", "¿dónde están?"), tomar pedidos e incluso cerrar ventas mientras tú duermes o atiendes el local. Nunca más pierdes un cliente por no contestar a tiempo.',
      '2. Crea contenido para tus redes y tu web en minutos. Herramientas como ChatGPT o Gemini te ayudan a redactar publicaciones, descripciones de productos, correos y hasta las preguntas frecuentes de tu web. Tú das la idea en tu idioma; la IA te devuelve un borrador listo para pulir.',
      '3. Ordena tus números sin ser contador. La IA puede armarte una hoja de cálculo de flujo de caja, resumir tus ventas del mes o proyectar cuánto stock comprar según tu histórico. Menos adivinar, más decidir con datos.',
      '4. Mejora tus fotos y diseños. Con IA generas o retocas imágenes de tus productos, quitas fondos y creas piezas para redes sin pagar un diseñador para cada post. Tu negocio se ve más profesional a costo casi cero.',
      '5. Automatiza tareas repetitivas. Conectando apps con herramientas como Zapier o Make, puedes hacer que un pedido de WhatsApp se registre solo en una hoja, que se envíe un mensaje de confirmación automático o que te avise cuando un producto se agote.',
      'El punto no es reemplazar tu toque humano —ese es tu mayor valor—, sino sacarte de encima el trabajo pesado para que dediques tu tiempo a vender y atender bien. En Bitwise integramos estas herramientas de IA directamente en tu web o app, listas para tu rubro. Si quieres empezar, escríbenos por WhatsApp y te asesoramos gratis.',
    ],
  },
  {
    slug: 'chatbot-whatsapp-con-ia-atencion-24-7',
    rubros: ['pollerias-restaurantes', 'barberias-salones-belleza', 'farmacias-boticas'],
    title: 'Chatbot con IA en WhatsApp: atiende clientes 24/7 sin contratar a nadie',
    excerpt: 'Un asistente automático que responde, toma pedidos y cierra ventas en WhatsApp a cualquier hora. Te explicamos cómo funciona y cuánto puede ayudar a tu MYPE.',
    category: 'seo-marketing',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=1200&q=80&auto=format&fit=crop',
    emoji: '💬',
    author: 'Bitwise',
    featured: false,
    date: '2026-07-13',
    readTime: '6 min',
    keywords: ['chatbot WhatsApp Perú', 'WhatsApp Business con IA', 'atención al cliente automática', 'bot para vender por WhatsApp'],
    body: [
      'En Perú, casi toda venta pasa por WhatsApp. El problema: no puedes estar pegado al celular las 24 horas. Cada mensaje que no contestas a tiempo es una venta que probablemente se va a la competencia. Ahí es donde un chatbot con inteligencia artificial cambia el juego.',
      'Un chatbot con IA es como tener un vendedor que nunca duerme. Responde al instante, entiende lo que el cliente quiere (aunque escriba con faltas o en jerga), muestra tu catálogo, arma el pedido y hasta genera el link de pago. Todo sin que tú levantes un dedo.',
      'A diferencia de los bots antiguos de "responde 1 para menú, 2 para horarios", los de hoy conversan de forma natural. Si un cliente pregunta "¿tienes pollo a la brasa para 4 personas y cuánto sale con delivery a Los Olivos?", el bot lo entiende y responde con precio y tiempo, como lo haría una persona.',
      '¿Para qué rubros sirve? Prácticamente todos: pollerías y restaurantes que reciben pedidos, bodegas que atienden por catálogo, barberías que agendan citas, farmacias que confirman stock. Cualquier negocio que hoy pierde tiempo contestando lo mismo una y otra vez gana con un chatbot.',
      'Lo importante es que el bot atienda bien y sepa cuándo pasarte la conversación a ti. Un buen chatbot filtra las consultas fáciles solo y te avisa cuando llega un cliente listo para comprar o con una duda especial. Tú recibes clientes calientes, no un buzón lleno de preguntas repetidas.',
      'En Bitwise conectamos tu web o app con un chatbot de IA en WhatsApp entrenado con la información de tu negocio: tus productos, precios, horarios y forma de atender. Escríbenos y te mostramos una demo funcionando para tu rubro.',
    ],
  },
  {
    slug: 'como-cobrar-online-yape-plin-pasarela-de-pago',
    rubros: ['gimnasios-crossfit', 'ferreterias', 'pollerias-restaurantes'],
    title: 'Cómo cobrar online en tu negocio: Yape, Plin y pasarelas de pago explicadas',
    excerpt: 'Deja de perder ventas por no aceptar pagos digitales. Comparamos Yape, Plin y las pasarelas de tarjeta para que elijas bien según tu tipo de negocio.',
    category: 'ecommerce',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80&auto=format&fit=crop&sat=-50',
    emoji: '💳',
    author: 'Bitwise',
    featured: false,
    date: '2026-07-12',
    readTime: '6 min',
    keywords: ['cobrar con Yape en mi web', 'pasarela de pago Perú', 'aceptar pagos online negocio', 'cobrar por internet Perú'],
    body: [
      'Hoy en Perú, si tu negocio no acepta pagos digitales, estás perdiendo ventas. Las billeteras móviles como Yape y Plin ya son parte del día a día, y cada vez más clientes esperan poder pagar sin efectivo, incluso online. La buena noticia: montar el cobro digital es más fácil y económico de lo que crees.',
      'Yape y Plin son ideales para empezar. Son gratuitas, todo el mundo las tiene y el dinero te llega al instante. Para un negocio chico, poner tu QR en el local y en tu web ya te resuelve gran parte de los cobros. La limitación: son pagos manuales, tú confirmas cada uno, y tienen topes de monto.',
      'Cuando tu volumen crece o vendes montos altos, conviene una pasarela de pago (como las que procesan tarjetas Visa y Mastercard). Estas cobran automáticamente en tu web, aceptan tarjetas nacionales e internacionales y te dan un panel con todas tus transacciones. Cobran una comisión por venta, pero a cambio profesionalizas el cobro y no dependes de confirmar a mano.',
      '¿Cuál elegir? Si recién empiezas o vendes montos bajos, arranca con Yape y Plin integrados a tu catálogo web. Si ya tienes tienda online, vendes a otras ciudades o manejas tickets altos, súmale una pasarela de tarjeta. Lo ideal es ofrecer varias opciones: mientras más formas de pago, menos ventas se caen.',
      'Un detalle clave para las MYPES: cobrar formal también significa emitir boleta o factura electrónica. Conectar tu cobro con facturación SUNAT desde el inicio te evita problemas y le da confianza al cliente. Muchos abandonan una compra si el negocio se ve informal.',
      'En Bitwise dejamos tu web lista para cobrar: integramos billeteras peruanas, pasarelas de tarjeta y facturación electrónica según lo que tu negocio necesite. Escríbenos por WhatsApp y te armamos el esquema de cobro que más te conviene.',
    ],
  },
  {
    slug: 'por-que-tu-negocio-necesita-pagina-web',
    rubros: ['clinicas-consultorios', 'gimnasios-crossfit', 'veterinarias-petshop'],
    title: 'Por qué tu negocio pequeño necesita una página web (aunque uses redes)',
    excerpt: 'Instagram y WhatsApp no son suficientes. Te explicamos por qué una web propia hace que tu MYPE venda más y se vea más profesional.',
    category: 'desarrollo-web',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80&auto=format&fit=crop',
    emoji: '🚀',
    author: 'Bitwise',
    featured: false,
    date: '2026-07-05',
    readTime: '5 min',
    keywords: ['página web para negocios pequeños', 'página web para mi negocio', 'página web para mypes'],
    body: [
      'Muchos emprendedores nos dicen: "ya tengo Instagram, ¿para qué quiero una web?". La respuesta corta: porque las redes no son tuyas. Si mañana te cierran o bloquean la cuenta, pierdes años de trabajo y todos tus clientes de golpe.',
      'Tu página web es tu local en internet: es tuya, aparece en Google cuando alguien busca tu rubro y da confianza. Un negocio con web propia se ve más serio que uno que solo manda fotos por WhatsApp. Y lo mejor: trabaja para ti las 24 horas, incluso cuando estás durmiendo.',
      'Piensa en cómo compra la gente hoy: antes de ir a un local o escribir por WhatsApp, buscan en Google y comparan. Si no apareces, simplemente no existes para ese cliente. Y si el que sí aparece tiene una web ordenada con precios, fotos y ubicación, se lleva la venta aunque tú tengas mejor producto.',
      'Una web también te ahorra tiempo. En vez de contestar las mismas preguntas cien veces al día ("¿cuánto cuesta?", "¿hacen delivery?", "¿dónde están?"), tu web responde sola y filtra a los clientes que llegan realmente listos para comprar.',
      'Lo ideal es combinar ambas: usa las redes para llegar a la gente y tu web para cerrar la venta, mostrar tu catálogo completo y quedar bien posicionado en las búsquedas de Google. Las redes son el alquiler; tu web es la propiedad.',
    ],
  },
  {
    slug: 'como-aparecer-en-google-negocio-local',
    rubros: ['pollerias-restaurantes', 'ferreterias', 'clinicas-consultorios'],
    title: 'Cómo hacer que tu negocio aparezca en Google (SEO local para MYPEs)',
    excerpt: 'Pasos concretos para que tu negocio salga cuando alguien busca tu rubro en tu ciudad. Sin tecnicismos, aplicable hoy mismo.',
    category: 'seo-marketing',
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80&auto=format&fit=crop',
    emoji: '📍',
    author: 'Bitwise',
    featured: false,
    date: '2026-06-28',
    readTime: '7 min',
    keywords: ['SEO local Perú', 'aparecer en Google', 'posicionamiento web Perú'],
    body: [
      'Cuando alguien busca "pollería cerca de mí" o "ferretería en Trujillo", Google muestra primero a los negocios que trabajaron su presencia digital. La buena noticia es que no necesitas pagar publicidad para aparecer: con SEO local bien hecho, puedes rankear gratis.',
      'Lo básico: crea y verifica tu ficha de Google Business Profile, usa las mismas palabras que tus clientes buscan en los textos de tu web, consigue reseñas reales y asegúrate de que tu web cargue rápido y se vea bien en el celular (el 80% del tráfico en Perú es móvil).',
      'Las reseñas son oro. Un negocio con 50 reseñas de 4.8 estrellas gana casi siempre contra uno sin reseñas, aunque el segundo esté más cerca. Pide reseñas a tus clientes contentos: mándales el link directo por WhatsApp después de una buena compra y hazlo un hábito.',
      'La ficha de Google también necesita datos completos y consistentes: mismo nombre, dirección y teléfono en tu web, tu ficha y tus redes. Sube fotos reales de tu local y tus productos, responde las preguntas y publica novedades. Google premia a los negocios activos.',
      'En cada web que hacemos incluimos SEO básico: títulos optimizados, datos estructurados y velocidad. Es la base para que Google te encuentre. Luego, con el tiempo y buen contenido —como este blog—, subes posiciones sin gastar en publicidad.',
    ],
  },
  {
    slug: 'tienda-online-vs-vender-por-whatsapp',
    rubros: ['ferreterias', 'panaderias-pastelerias', 'farmacias-boticas'],
    title: 'Tienda online vs. vender por WhatsApp: ¿qué le conviene a tu MYPE?',
    excerpt: 'Comparamos los dos caminos para vender por internet en Perú, con sus costos, ventajas y cuándo conviene cada uno.',
    category: 'ecommerce',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80&auto=format&fit=crop',
    emoji: '🛍️',
    author: 'Bitwise',
    featured: false,
    date: '2026-06-20',
    readTime: '6 min',
    keywords: ['tienda online Perú', 'vender por WhatsApp', 'tienda virtual para negocios pequeños'],
    body: [
      'Vender por WhatsApp es rápido y sin costo, perfecto para empezar. Pero cuando tu volumen crece, contestar pedidos uno por uno te consume el día y pierdes ventas por no responder a tiempo.',
      'Una tienda online resuelve eso: tu cliente ve el catálogo, arma su pedido y paga solo, a cualquier hora. Tú recibes la orden lista con el comprobante. Se integra igual con WhatsApp para coordinar la entrega, así que no pierdes ese canal.',
      'Hay un costo oculto de vender solo por WhatsApp: los errores. Pedidos mal apuntados, precios que cambias de memoria, stock que ya no tienes. Una tienda online mantiene todo ordenado —catálogo, precios y stock en un solo lugar— y reduce esos errores que te cuestan plata y reputación.',
      'Otra ventaja: la tienda cobra igual mientras duermes. Muchas ventas se pierden porque el cliente quiere comprar a las 11 de la noche y nadie contesta. Con pago automátict automático, esa venta entra sola y tú la despachas al día siguiente.',
      'Nuestra recomendación: empieza con un catálogo web conectado a WhatsApp y, cuando el volumen lo justifique, súmale la pasarela de pago y el cobro automático. Creces por módulos, sin gastar de más al inicio.',
    ],
  },
] as const;
