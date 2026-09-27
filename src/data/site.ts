// Configuración central del sitio. Todo el contenido real vive aquí.
// Contenido alineado con el rediseño 2026.

export const site = {
  name: 'BIT-ONE',
  // Nombre comercial: el que la gente conoce y el que se enseña en pantalla.
  //
  // La marca pasó de "Bitwise" a "BIT-ONE" para que se parezca a la empresa que
  // factura, Bitone E.I.R.L. Aun así marca y razón social siguen en campos
  // distintos, y eso no es repetición: Google las lee por separado —`name` es la
  // marca y `legalName` la razón social—, y tenerlas mezcladas hacía que el
  // sitio declarara como razón social un nombre que no está inscrito así.
  marca: 'BIT-ONE Perú',
  // Razón social y RUC de la empresa que factura.
  razonSocial: 'Bitone E.I.R.L.',
  domain: 'https://bitone.pe',
  whatsapp: '51945574190',
  // Es el mensaje que se autocompleta desde el menú y desde el botón flotante
  // en las 15 páginas, así que fija el tono de la primera frase que escribe
  // todo el mundo. Decía "quiero una cotización para mi negocio", que es lo que
  // escribe un dueño de bodega, no un área de sistemas.
  whatsappMsg: 'Hola BIT-ONE, quiero conversar un proyecto de desarrollo',
  // El correo sale en el pie, en /contacto y en el JSON-LD que lee Google.
  //
  // Está en un Gmail personal y conviene cambiarlo por uno del dominio. El sitio
  // vende "correo corporativo con tu dominio" en todas las landings; escribir
  // desde gmail.com le quita fuerza a esa frase justo donde más se nota.
  // Al crear la casilla, aquí se cambia esta línea y queda actualizado en todo
  // el sitio de una vez. No lo cambiamos antes de que exista: un correo que
  // rebota pierde clientes en silencio.
  email: 'gguzman.bitone@gmail.com',
  phone: '+51 945 574 190',
  // RUC de la empresa. Vacío = no se muestra en ninguna parte.
  //
  // Importa más de lo que parece: el sitio afirma "empresa formal con RUC" cinco
  // veces, y la comparativa lo marca como la diferencia frente al trabajo
  // informal. Decirlo sin enseñarlo es justo lo que un cliente desconfiado
  // nota. Sale en el pie, en /contacto y en el `taxID` del JSON-LD, que es de
  // donde Google reconoce que detrás del sitio hay una entidad real.
  //
  // Verificado con el dígito de control de SUNAT antes de publicarlo: 11
  // dígitos, empieza en 20 (persona jurídica) y el verificador cuadra.
  ruc: '20615736261',
  city: 'Lima, Perú',
  // Horario en texto, tal como se lee en el pie y en /contacto.
  hours: 'Lun – Sáb: 9:00 – 19:00',
  // El mismo horario en la forma que entiende Google (openingHoursSpecification
  // del JSON-LD). Van los dos porque uno es para personas y el otro para
  // máquinas, y ninguno de los dos formatos sirve para lo del otro. Si cambia
  // el horario, se cambian ambos: el de arriba es lo que se ve, este es lo que
  // Google usa para decir "abierto ahora" en los resultados.
  horario: {
    dias: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    abre: '09:00',
    cierra: '19:00',
  },
  // El orden importa y por eso cambió: es el orden en que se dibujan los iconos
  // en el pie y el orden del `sameAs` que lee Google para saber qué perfiles son
  // de esta organización. LinkedIn iba último, empatado con TikTok; en una venta
  // a empresas es el único de los cuatro donde está el comprador, así que va
  // primero.
  //
  // PENDIENTE: Instagram y TikTok siguen bajo el usuario `bitwise_peru`, de la
  // marca anterior. Mientras no se renombren, el `sameAs` le está diciendo a
  // Google que BIT-ONE y Bitwise son la misma entidad, lo cual es cierto pero
  // se ve descuidado en la ficha.
  socials: {
    linkedin: 'https://linkedin.com/company/bitwise-peru-oficial',
    facebook: 'https://www.facebook.com/share/1E74K2gsDA/?mibextid=wwXIfr',
    instagram: 'https://www.instagram.com/bitwise_peru',
    tiktok: 'https://www.tiktok.com/@bitwise_peru',
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
// `connect-src` en la política de seguridad (la meta Content-Security-Policy de
// src/layouts/BaseLayout.astro), o el navegador bloqueará el envío.
export const formulario = {
  endpoint: '',
  accessKey: '',
} as const;

// Medición del sitio.
//
// Hasta ahora no había ninguna: solo el token de verificación de Search
// Console, que dice qué búsquedas traen visitas pero no qué hace la gente al
// llegar. No se sabía cuántos abren WhatsApp, cuántos llenan el formulario ni
// desde qué página. Sin eso, cualquier decisión de SEO se toma a ciegas.
//
// Está vacío a propósito, igual que `formulario`. Mientras `ga4` sea una
// cadena vacía NO se carga ningún script: el sitio sigue sin JavaScript de
// terceros y sin ninguna petición fuera del dominio, que es de donde sale
// buena parte de su velocidad.
//
// Para activarlo:
//   1. Crea una propiedad en analytics.google.com y copia el identificador de
//      medición. Tiene la forma G-XXXXXXXXXX.
//   2. Pégalo aquí abajo.
//   3. IMPORTANTE — en src/layouts/BaseLayout.astro, suma a la meta
//      Content-Security-Policy https://www.googletagmanager.com en script-src
//      y https://www.google-analytics.com https://*.google-analytics.com en
//      connect-src. Sin eso el navegador bloquea el script y no se mide nada.
//
// Además de las visitas, BaseLayout marca solo las dos conversiones reales del
// sitio: `clic_whatsapp` (cualquier enlace a wa.me, en cualquier página) y
// `envio_formulario`. No se mide nada más: llenar el panel de eventos que nadie
// va a mirar solo hace más difícil encontrar los dos que importan.
export const analitica = {
  ga4: '',
} as const;

export const seo = {
  defaultTitle: 'Empresa de desarrollo de software en Perú | BIT-ONE',
  titleTemplate: '%s | BIT-ONE',
  // Máximo 160 caracteres: pasado ese punto Google la corta con puntos
  // suspensivos y la última frase se pierde. Vale para esta y para la
  // `description` de cualquier página; `npm run verificar` lo comprueba en las
  // 30 antes de dejar desplegar.
  description:
    'Empresa de desarrollo de software en Perú: sistemas a medida, apps móviles y mantenimiento. Alcance y precio por escrito, y el código queda a tu nombre.',
  // Temas reales sobre los que trabaja la empresa. Alimentan `knowsAbout` del
  // JSON-LD: son materias de servicio, NO variantes de búsqueda. Las frases
  // tipo "página web barata" son consultas de usuario y no describen a la
  // organización; ahí no van.
  topics: [
    'Empresa de desarrollo de software',
    'Desarrollo de software a medida',
    'Fábrica de software',
    'Mantenimiento de sistemas heredados',
    'Sistemas ERP',
    'Integración de sistemas',
    'Integración con SUNAT',
    'Aplicaciones móviles',
  ],
  ogImage: '/og-default.jpg',
  // Token de verificación de propiedad en Google Search Console. Vive aquí y
  // no incrustado en el layout para que rotarlo sea cambiar una línea en el
  // archivo donde ya está el resto de la configuración del sitio.
  googleSiteVerification: 'pT4-z8d9zSfJdwsOV5p3xuh2UtFTyJATXcMhuTNKEZI',
} as const;

// Aquí vivía PRECIO_PISO = 1500, el piso que anunciaba todo el sitio cuando
// vendía páginas web. Se fue con ellas: ya no hay ninguna cifra publicada
// contra la que validar, y una constante que nadie lee es una invitación a que
// alguien la vuelva a usar por error.

export const waLink = (msg: string = site.whatsappMsg) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;

// Todas las direcciones internas del sitio se escriben CON barra final.
//
// No es un detalle de estilo. El sitio se compila con `build.format: 'directory'`
// —cada página es una carpeta con su index.html— y el canonical de cada una
// declara la barra: https://bitone.pe/servicios/. Cuando un enlace apuntaba a
// /servicios, el servidor respondía 307 —una redirección TEMPORAL— hacia la
// versión con barra. Un 307 le dice a Google "esta dirección es la buena, la
// otra es un desvío pasajero", así que no consolidaba las señales en la
// definitiva y cada rastreo costaba dos peticiones. Todos los enlaces internos
// del sitio salían así.
//
// Regla: si escribes un href interno en cualquier archivo, termínalo en barra.
// El menú tiene seis sitios y todos cuestan: cada uno que se añade le quita
// atención a los demás. Por eso "Blog" salió y entró "Metodología".
//
// Metodología ocupa su lugar porque responde la pregunta que decide esta venta
// —"¿y si esto se va de las manos?"— y porque es la página que un comprador
// necesita para justificar la contratación dentro de su propia empresa.
export const nav = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/servicios/' },
  { label: 'Metodología', href: '/metodologia/' },
  { label: 'Proyectos', href: '/proyectos/' },
  { label: 'Nosotros', href: '/nosotros/' },
  { label: 'Contacto', href: '/contacto/' },
] as const;

// ---- Hero (home) ----
export const hero = {
  // Arranque fijo del titular, en grande. Lleva la keyword principal y no se
  // anima: es lo que leen Google y los buscadores con IA, que no ejecutan
  // JavaScript. Un H1 pintado por JavaScript equivale a una página sin título.
  h1: 'Empresa de desarrollo de software',
  // El final del titular, también en grande, y esto sí se escribe y se borra.
  //
  // Las tres frases completan la línea de arriba, así que se leen seguidas:
  // "Fábrica de software / para empresas en Perú". Son cortas a propósito: a
  // este tamaño de letra, una frase larga ocupa cuatro renglones en un celular
  // y empuja el botón fuera de la pantalla.
  //
  // El orden importa. La primera es la que lleva la keyword y es la que se pinta
  // en el HTML servido, así que el titular que lee Google sigue diciendo
  // exactamente "Fábrica de software para empresas en Perú" aunque el JavaScript
  // no llegue a correr. Las otras dos son el adorno.
  //
  // Las tres miden parecido (22-26 caracteres) y eso no es casualidad: completan
  // la misma línea de arriba, así que si una fuera mucho más larga el titular
  // ocuparía un renglón más y el bloque saltaría cada vez que le tocara el
  // turno. Al cambiar una frase hay que mantenerle el largo.
  //
  // Ninguna promete un plazo. Hubo una que decía "listas en semanas, no meses" y
  // se quitó: un proyecto grande puede tomar meses de verdad, y una frase así en
  // el titular se convierte en un reclamo el día que no se cumple.
  //
  // Ninguna afirma tampoco trayectoria, tamaño de equipo ni cartera de clientes.
  // No es modestia: todavía no hay ventas, así que cualquier cifra de ese tipo
  // sería inventada, y en una venta B2B esa es justo la afirmación que el
  // cliente verifica. Las dos últimas frases son compromisos contractuales
  // —alcance por escrito, código a tu nombre—, que se cumplen desde el primer
  // proyecto y no dependen de tener historia.
  typed: [
    'en Perú, para empresas.',
    'con alcance por escrito.',
    'con el código a tu nombre.',
  ],
  pills: [
    // Decía "Rápidas", en femenino, porque el titular hablaba de páginas web.
    // Ahora el sujeto son los sistemas, así que la concordancia se rompía. Y de
    // paso cambia lo que se promete: "rápido" no es lo que distingue a un
    // sistema —los grandes tardan meses—, sino que se arme para cómo trabajas
    // tú. El icono pasa de rayo a controles deslizantes por lo mismo.
    { label: 'A tu medida', color: '#f59e0b', icon: '<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>' },
    // "Precio justo" y "Profesionales" hablaban a un dueño de MYPE que teme que
    // le cobren de más. Un gerente de sistemas no teme eso: teme que el alcance
    // se le desborde y quedarse con un sistema que nadie sabe mantener. Las dos
    // pastillas de ahora responden esos dos miedos, y las dos son cosas que se
    // firman, no cualidades que uno se atribuye solo.
    { label: 'Precio cerrado', color: '#22c55e', icon: '<circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8M12 18V6"/>' },
    { label: 'Código documentado', color: '#818cf8', icon: '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/>' },
  ],
  // `label` es la etiqueta visible del carrusel; `alt` describe lo que se ve en
  // la foto para lectores de pantalla y para Google Imágenes.
  //
  // Las etiquetas decían "Página web", "Aplicaciones móviles" y "Tienda
  // virtual": los tres productos del negocio anterior, dos de los cuales ya no
  // se venden. Se leían encima del titular que dice "Empresa de desarrollo de
  // software" y encima de las tres tarjetas de servicios, así que la portada
  // ofrecía dos cosas distintas en la misma pantalla.
  //
  // Ahora son las mismas tres de `serviciosHome` y en el mismo orden, para que
  // el carrusel, las tarjetas y la lista de /contacto nombren lo mismo. El
  // orden de las fotos cambió con ellas: la del celular pasó al final para
  // quedar debajo de "Apps móviles", que es la única de las tres etiquetas que
  // su foto muestra de verdad. La primera sigue siendo `uno`, que es la que
  // index.astro precarga.
  //
  // PENDIENTE, y es lo que la etiqueta sola no arregla: las tres fotos son
  // maquetas del negocio anterior —una web de artesanía, una app de compras y
  // un catálogo con botón "Añadir al carrito"—. Con las etiquetas nuevas,
  // "Proyecto a medida" y "Mantener un sistema" salen escritas sobre una tienda
  // en pantalla. Hacen falta tres fotos de un sistema de operación: un panel
  // con datos, no un escaparate.
  slides: [
    {
      src: '/hero/uno.webp',
      msrc: '/hero/celular/uno.webp',
      label: 'Proyecto a medida',
      alt: 'Pantalla de un iMac sobre un escritorio de madera con la portada de una tienda de artesanía peruana',
    },
    {
      src: '/hero/tres.webp',
      msrc: '/hero/celular/tres.webp',
      label: 'Mantener un sistema',
      alt: 'Laptop sobre un escritorio de madera con un catálogo de textiles peruanos, sus filtros y sus precios en soles',
    },
    {
      src: '/hero/dos.webp',
      msrc: '/hero/celular/dos.webp',
      label: 'Apps móviles',
      alt: 'App móvil de una tienda de accesorios mostrando un producto con su precio en soles, sostenida en la mano',
    },
  ],
} as const;

// ---- Tira de hechos del hero ----
// Aquí iban dos precios: "Páginas web desde S/1,500" y "Tiendas online desde
// S/3,000". Se fueron con el cambio de negocio, y no por gusto: un sistema no
// tiene precio de entrada publicable. Uno para un taller de dos mecánicos y uno
// para una distribuidora con tres almacenes no se parecen, así que cualquier
// cifra aquí obligaría después a explicar por qué subió. Es la misma razón por
// la que /servicios/erp-sistemas/ nunca publicó una.
//
// Lo que ocupa su lugar no es relleno: son las dos cosas que bajan el miedo a
// escribir cuando no hay precio a la vista. Que la primera visita no se cobra
// —o sea, preguntar no compromete a nada— y que el sistema se arma por partes
// —o sea, no hay que pagarlo todo de golpe—. Las dos se sostienen por escrito
// en la página de cada rubro y en la de sistemas a medida.
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
export const heroHechos = [
  {
    k: 'Primera reunión',
    v: 'Sin costo',
    de: '#60a5fa',
    a: '#22d3ee',
    tinte: 'rgba(56,132,246,0.13)',
    borde: 'rgba(96,165,250,0.32)',
  },
  {
    k: 'Alcance y precio',
    v: 'Por escrito',
    de: '#c084fc',
    a: '#8b7bf7',
    tinte: 'rgba(139,92,246,0.15)',
    borde: 'rgba(192,132,252,0.32)',
  },
] as const;

// ---- Contadores animados (home) ----
// `derivado` marca las cifras que NO se escriben aquí: las calcula el
// componente a partir de los datos reales para que no puedan quedar viejas.
//
// La primera cifra era "Entrega mínima: 7 días", calculada a partir del plazo
// más corto de las 12 landings web. Ya no aplica: un sistema no se entrega en
// una fecha, se entrega por partes, y publicar un plazo mínimo aquí sería
// prometer justo lo que /servicios dice que no se puede prometer. La reemplaza
// el compromiso de cotización, que sí se cumple siempre y ya está por escrito
// en la comparativa de /servicios y en las expectativas de /contacto.
//
// El mecanismo de `derivado` se queda en Stats.astro aunque ahora ninguna cifra
// lo use: el día que vuelva a haber un número calculado, está listo.
export const homeStats = [
  { n: 24, suffix: 'horas', k: 'Cotización por escrito', derivado: null },
  // Decía "Respuesta WhatsApp < 2 horas". Es cierto y era un gran argumento
  // frente a una agencia que no contesta, pero presumir velocidad de WhatsApp
  // ante una empresa refuerza justo la impresión que hay que evitar: que
  // detrás hay una persona con el celular en la mano. La cifra se queda —la
  // respuesta rápida sigue siendo verdad— pero medida como se mide en B2B.
  { n: 2, prefix: '<', suffix: 'horas', k: 'Primera respuesta', derivado: null },
  { n: 30, suffix: 'días', k: 'Garantía post-entrega', derivado: null },
  { n: 100, suffix: '%', tight: true, k: 'Código y datos tuyos', derivado: null },
] as const;

// ---- Servicios destacados (home) ----
//
// `href` apunta a la página propia del servicio, no al ancla de /servicios.
// Antes decía '/servicios#web': un ancla no es una dirección, así que la
// portada —la página con más autoridad del sitio— no le pasaba nada a
// /servicios/pagina-web/, /servicios/tienda-online/ ni /servicios/erp-sistemas/.
// Esas tres recibían UN solo enlace interno en todo el sitio, mientras cada
// landing de rubro recibía entre cinco y trece. Y son justo las páginas que
// compiten por "página web profesional Perú" y "tienda online Perú".
// Las tres tarjetas ya no son tipos de producto —web, tienda, sistema— sino
// las tres formas de contratar a una fábrica de software. Es el cambio que pide
// el cliente nuevo: un gerente de sistemas no elige entre "web" y "app", elige
// entre encargar un proyecto cerrado, sumar gente a su equipo o soltarle a
// alguien un sistema que ya existe y nadie quiere tocar.
//
// La tarjeta destacada llevaba el rótulo "Más pedido" cuando arriba estaba la
// tienda online. Se quitó y conviene dejar dicho por qué, para que no vuelva:
// era falso. Sin ventas todavía, nada puede ser "lo más pedido". El rótulo de
// ahora dice a qué le dedicamos el tiempo, que es una afirmación sobre nosotros
// y no sobre una demanda que no existe.
//
// Las tres tarjetas enlazan a su página propia. Durante un rato "equipo
// dedicado" y "mantener un sistema" apuntaron a /contacto/ porque no existían:
// eso significaba que dos de los tres servicios eran invisibles para Google y
// no se podían explicar a nadie antes de escribir. Ya están escritas.
export const serviciosHome = [
  {
    tag: 'Proyecto a medida',
    time: 'Según el alcance',
    desc: 'Nos encargas el sistema completo, con alcance y precio cerrados antes de escribir una línea de código.',
    price: 'A consultar',
    priceLabel: 'Precio',
    priceNote: 'Según alcance',
    href: '/servicios/desarrollo-de-software-a-medida/',
    featured: true,
    badge: 'Lo principal',
    iconName: 'tuerca',
    iconColor: '#6366f1',
    features: [
      'Alcance y precio por escrito antes de empezar',
      'Se entrega por etapas, revisables',
      'Se integra con los sistemas que ya usas',
      'Código documentado y entregado',
    ],
  },
  {
    tag: 'Mantener un sistema',
    time: 'Por mes o por bolsa de horas',
    desc: 'Heredaste un sistema y quien lo hizo ya no está. Lo levantamos, lo documentamos y lo dejamos mantenible.',
    price: 'A consultar',
    priceLabel: 'Precio',
    priceNote: 'Según el estado',
    href: '/servicios/mantenimiento-de-software/',
    featured: false,
    iconName: 'soporte',
    iconColor: '#E8A317',
    features: [
      'Primero un diagnóstico de lo que hay',
      'Se documenta lo que no estaba documentado',
      'Correcciones y mejoras priorizadas contigo',
      'Sin quedarte atado: la documentación es tuya',
    ],
  },
  {
    // Ocupa el hueco que dejó "Equipo dedicado", y le corresponde: es el único
    // de los tres que se puede comprobar antes de la primera reunión. Hay
    // cuatro apps publicadas bajo la cuenta de Bitone E.I.R.L. en Play Store, y
    // están enlazadas más abajo en la propia portada.
    tag: 'Apps móviles',
    time: '2 a 5 meses',
    desc: 'Android y iPhone desde una sola base. Publicadas en las tiendas con las cuentas a nombre de tu empresa.',
    price: 'A consultar',
    priceLabel: 'Precio',
    priceNote: 'Según alcance',
    href: '/servicios/apps-moviles/',
    featured: false,
    iconName: 'celular',
    iconColor: '#0891b2',
    features: [
      'Una sola base para Android y iPhone',
      'Publicación en las tiendas incluida',
      'Panel web para administrarla',
      'Las cuentas quedan a tu nombre',
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
//                enlazado interno hacia páginas de sector. Vacío mientras no
//                existan: las 12 landings de rubro se borraron con el cambio
//                de negocio.
//   ivaIncluido  null cuando el sitio no lo declara. No se supone: un
//                valueAddedTaxIncluded inventado es una afirmación de precio
//                falsa en datos estructurados.
//
// Los cuatro `id` tienen que existir como `tabId` en servicios.ts, o el índice
// de /servicios/ enseñará una pestaña que no lleva a ninguna parte.
//
// Ninguno publica precio (`price: null`). Es coherente con todo el sitio desde
// el cambio de negocio, y tiene una consecuencia en el JSON-LD: el Offer de
// cada servicio se emite sin `price`, nunca con una cifra de relleno.
export const serviciosTabs = [
  {
    id: 'medida',
    rubros: [],
    trabajos: ['Sistema interno de operación', 'Plataforma con usuarios externos', 'Integración entre sistemas', 'Migración a una tecnología nueva'],
    label: 'Software a medida',
    tag: 'Proyecto a medida',
    icon: 'tuerca',
    title: 'Nos encargas el proyecto completo',
    incluye: 'Alcance y precio cerrados antes de programar',
    time: 'Según el alcance',
    price: null,
    ivaIncluido: null,
    priceLabel: 'A consultar',
    priceNote: 'Según alcance',
    schemaId: 'software-a-medida',
    schemaName: 'Desarrollo de software a medida para empresas',
    serviceType: 'Desarrollo de software a medida',
    desc: 'Definimos qué tiene que hacer, lo cerramos por escrito y lo construimos por etapas revisables.',
    wa: 'Hola BIT-ONE, quiero conversar un proyecto de software a medida',
    features: [
      { t: 'Etapa de análisis antes de cotizar', i: 'buscar', c: '#0891b2' },
      { t: 'Alcance, plazo y precio por escrito', i: 'documento', c: '#2563eb' },
      { t: 'Adicionales cotizados antes de ejecutarse', i: 'etiqueta', c: '#d97706' },
      { t: 'Entregas por etapas revisables', i: 'cajas', c: '#4f46e5' },
      { t: 'Se integra con los sistemas que ya tienes', i: 'enchufe', c: '#7c3aed' },
      { t: 'Código y documentación a tu nombre', i: 'codigo', c: '#059669' },
    ],
  },
  {
    id: 'mantenimiento',
    rubros: [],
    trabajos: ['Sistema sin documentación', 'Proveedor anterior que ya no está', 'Tecnología que se quedó atrás', 'Correcciones y mejoras continuas'],
    label: 'Mantenimiento',
    tag: 'Mantener un sistema',
    icon: 'soporte',
    title: 'Un sistema que nadie quiere tocar',
    incluye: 'Primero un diagnóstico de lo que hay',
    time: 'Por mes o por bolsa de horas',
    price: null,
    ivaIncluido: null,
    priceLabel: 'A consultar',
    priceNote: 'Según el estado',
    schemaId: 'mantenimiento-software',
    schemaName: 'Mantenimiento y documentación de sistemas existentes',
    serviceType: 'Mantenimiento de software',
    desc: 'Heredaste un sistema y quien lo construyó ya no está. Lo levantamos, lo documentamos y lo dejamos mantenible.',
    wa: 'Hola BIT-ONE, necesito mantenimiento de un sistema que ya tenemos',
    features: [
      { t: 'Diagnóstico con informe del estado real', i: 'buscar', c: '#0891b2' },
      { t: 'Se documenta lo que no estaba documentado', i: 'documento', c: '#2563eb' },
      { t: 'Correcciones priorizadas contigo', i: 'tuerca', c: '#4f46e5' },
      { t: 'Por bolsa de horas o contrato mensual', i: 'reloj', c: '#d97706' },
      { t: 'Reporte de en qué se consumió el tiempo', i: 'grafico', c: '#7c3aed' },
      { t: 'La documentación es tuya', i: 'llave', c: '#059669' },
    ],
  },
  {
    id: 'apps',
    rubros: [],
    trabajos: ['App para equipo en campo', 'App para tus usuarios finales', 'Llevar al celular un sistema existente', 'Trabajo sin conexión y sincronización'],
    label: 'Apps móviles',
    tag: 'Aplicaciones móviles',
    icon: 'celular',
    title: 'Aplicaciones para Android y iPhone',
    incluye: 'Publicadas con las cuentas a tu nombre',
    time: '2 a 5 meses',
    price: null,
    ivaIncluido: null,
    priceLabel: 'A consultar',
    priceNote: 'Según alcance',
    schemaId: 'apps-moviles',
    schemaName: 'Desarrollo de aplicaciones móviles para Android e iOS',
    serviceType: 'Desarrollo de aplicaciones móviles',
    desc: 'Para lo que tu equipo hace en la calle o lo que tus usuarios abren varias veces por semana.',
    wa: 'Hola BIT-ONE, quiero cotizar el desarrollo de una app móvil',
    features: [
      { t: 'Una sola base para Android y iPhone', i: 'codigo', c: '#7c3aed' },
      { t: 'Publicación en las tiendas incluida', i: 'tienda', c: '#059669' },
      { t: 'Avisos al celular y trabajo sin conexión', i: 'campana', c: '#d97706' },
      { t: 'Panel web para administrarla', i: 'tablero', c: '#2563eb' },
      { t: 'Las cuentas quedan a nombre de tu empresa', i: 'llave', c: '#ca8a04' },
      { t: 'Se conecta con tus sistemas', i: 'enchufe', c: '#0891b2' },
    ],
  },
] as const;

// ---- Condiciones comerciales (/servicios) ----
export const condiciones = [
  {
    // Decía "Pago 50/50 · hasta 3 cuotas sin interés". Eso es una condición para
    // una persona que paga de su bolsillo. Una empresa paga contra hito
    // entregado y con el plazo de crédito que maneje su área de finanzas.
    title: 'Pago por hitos',
    desc: 'Se cobra contra entrega de cada etapa, no por adelantado.',
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
    title: 'Código y documentación tuyos',
    desc: 'Repositorios, documentación y datos a nombre de tu empresa.',
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
// Las columnas cambiaron con el cliente.
//
// Antes comparaba contra "Trabajo informal" y "Agencia grande", con criterios
// como "pagos en cuotas sin interés" y "hablas directo con tu desarrollador".
// Ninguna empresa evalúa contra el trabajo informal: evalúa contra hacerlo con
// su propio equipo y contra una fábrica grande. Y "hablas directo con tu
// desarrollador", en una venta B2B, no se lee como cercanía sino como aviso de
// que detrás hay muy poca gente.
//
// Regla que se mantiene de la versión anterior y que conviene no perder: cada
// columna es una SITUACIÓN, no un competidor con nombre. Así ningún "no" acusa
// a nadie en particular y la tabla no le da munición a quien quiera
// desmentirla. Y las filas donde el rival gana se marcan como gana: una
// comparativa donde una columna saca 9 de 9 no la cree nadie.
export const comparativa = {
  cols: ['BIT-ONE', 'Con tu equipo interno', 'Fábrica grande'],
  rows: [
    { label: 'Alcance y precio cerrados por escrito', vals: ['si', 'no', 'si'] },
    { label: 'Empieza sin proceso de contratación', vals: ['si', 'no', 'si'] },
    { label: 'Adicionales cotizados antes de ejecutarse', vals: ['si', 'aveces', 'aveces'] },
    { label: 'Código y documentación a tu nombre', vals: ['si', 'si', 'Extra'] },
    { label: 'Hablas con quien escribe el código', vals: ['si', 'si', 'no'] },
    { label: 'Se puede parar o cambiar prioridad a mitad', vals: ['si', 'si', 'no'] },
    { label: 'Conocimiento que se queda en tu empresa', vals: ['aveces', 'si', 'no'] },
    { label: 'Capacidad para un proyecto de 20 personas', vals: ['no', 'no', 'si'] },
    { label: 'Empresa formal con RUC y factura SUNAT', vals: ['si', 'si', 'si'] },
  ],
} as const;

// ---- Proceso (home) ----
// Las cuatro etapas, reescritas para el encargo de una empresa.
//
// La versión anterior describía el proceso de una página web: mockup aprobado,
// dos rondas de cambios, capacitación grabada, soporte por WhatsApp. Ninguna de
// esas cuatro cosas es lo que pregunta quien encarga un sistema; lo que
// pregunta es cómo se fija el alcance, qué pasa cuando cambia, y qué recibe al
// final además del software funcionando.
//
// Aquí está el esqueleto de la página de proceso que todavía falta escribir.
// Cuando exista, estas cuatro etapas son su índice.
export const proceso = [
  { n: '01', title: 'Levantamos el alcance', desc: 'Reunión técnica con quien conoce la operación. Qué tiene que hacer, con qué se integra y qué queda fuera.', icon: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>' },
  { n: '02', title: 'Documento y precio', desc: 'Alcance por escrito, cronograma por etapas y precio cerrado. Se firma antes de escribir una línea de código.', icon: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4M8 13h8M8 17h8M8 9h2"/>' },
  { n: '03', title: 'Construimos por etapas', desc: 'Cada etapa se entrega funcionando y revisable. Lo que salga del alcance se cotiza antes de ejecutarlo, nunca después.', icon: '<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>' },
  { n: '04', title: 'Entregamos y documentamos', desc: 'Código, repositorios, documentación y accesos a nombre de tu empresa, con 30 días de garantía sobre lo entregado.', icon: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.29 7 12 12l8.71-5M12 22V12"/>' },
] as const;

// ---- Nosotros ----
// Reescrita entera con el cambio a fábrica de software.
//
// La versión anterior estaba calibrada para un dueño de MYPE y funcionaba:
// "empezamos haciendo webs a los vecinos del barrio", "te explicamos en
// cristiano, como quien le enseña a un pata del colegio", "no somos la agencia
// más grande del Perú". Ante alguien que tiene que justificar internamente una
// compra de decenas de miles de soles, esas tres frases restan, y la última se
// disculpa por el tamaño antes de que nadie pregunte.
//
// Lo que la sustituye no infla nada. Aquí NO se afirma ni antigüedad, ni
// tamaño de equipo, ni número de clientes: sin ventas registradas, cualquiera
// de esas cifras sería inventada, y son justo las que un comprador verifica.
// Todo lo que se afirma sale de proyectos.ts —cuatro productos construidos y
// publicados— o es un compromiso contractual que se cumple desde el primer
// encargo.
// Los dos fundadores, con nombre, formación y perfil verificable.
//
// Es el hueco más grande que le quedaba al sitio en una venta a empresas:
// aquí se compra gente, y hasta ahora no aparecía una sola persona. Quien
// evalúa un proveedor pequeño quiere saber a quién le está pagando, y en un
// equipo de este tamaño ocultarlo no lo hace parecer más grande, lo hace
// parecer opaco.
//
// El enlace a LinkedIn no es un adorno: es lo que convierte "somos ingenieros
// de ESAN" en una afirmación que se comprueba en un clic, igual que el RUC en
// el pie o la cuenta de desarrollador en la sección de apps. Es la misma regla
// de todo el sitio: nada que no se pueda verificar.
//
// Aquí NO va cargo inventado ni años de experiencia. "Fundador" es un hecho;
// "CTO con 10 años de trayectoria" en una empresa sin ventas registradas es
// exactamente lo que un comprador B2B comprueba y desmonta.
export const fundadores = [
  {
    nombre: 'Gabriel Guzmán Ramos',
    rol: 'Fundador',
    linkedin: 'https://www.linkedin.com/in/gabriel-guzman-ramos/',
  },
  {
    nombre: 'Jesús Guzmán',
    rol: 'Fundador',
    linkedin: 'https://www.linkedin.com/in/jesusguzman01/',
  },
] as const;

// Aquí había una constante con la formación de los dos fundadores —la carrera
// y la universidad—. Se quitó de la página y por tanto también de aquí.

export const nosotros = {
  title: 'Construimos productos, <span class="gradient-text--warm">no solo encargos</span>',
  intro: 'Somos una empresa de desarrollo en Lima. Antes de construir para otros construimos lo nuestro, y eso cambia cómo trabajamos: llegamos a tu proyecto habiendo tomado las decisiones difíciles en el nuestro.',
  historiaTitle: 'Lo primero que construimos fue nuestro',
  historia: [
    'BIT-ONE es la marca de Bitone E.I.R.L., empresa formal con RUC en Lima. Empezó al revés de como empieza casi toda fábrica de software: en vez de esperar el primer encargo, nos pusimos a construir productos propios y a publicarlos.',
    'ApuraY mueve mototaxi, comida y envíos en Coracora, Ayacucho, con app en el celular y su web. Quipuy le dice a un postulante cuánto le falta para entrar a su universidad. MindBlock enseña robótica y programación a niños, con cuenta propia para cada alumno. Y AjosyCebollas es un sistema de gestión con acceso por usuario. Los cuatro están funcionando, no en una carpeta de propuestas.',
    'Eso importa para quien nos contrata por una razón concreta: construir un producto de cero obliga a decidir qué entra, qué no entra y qué se rompe primero cuando crece. Esa es la parte que no se aprende ejecutando pedidos ajenos, y es la que traemos cuando todavía no tienes claro qué hay que construir.',
  ],
  mision: 'Que una empresa peruana pueda encargar software a medida sin las dos cosas que más le pesan: un alcance que se desborda a mitad del proyecto y un sistema que después nadie puede mantener sin llamarnos.',
  vision: 'Ser el equipo al que una empresa recurre cuando el proyecto importa de verdad: el que no se puede entregar tarde, ni entregar a medias, ni dejar sin documentar.',
  valores: [
    { title: 'El alcance se firma antes', desc: 'Primero una etapa de análisis, después un documento con lo que entra, lo que no entra, el cronograma y el precio. Recién con eso firmado se escribe código.' },
    { title: 'Los adicionales se cotizan antes', desc: 'El alcance cambia casi siempre y está previsto. Lo que salga de lo firmado se cotiza por escrito, con su impacto en la fecha, antes de ejecutarlo. Nunca se descubre en la entrega.' },
    { title: 'Se entrega por partes', desc: 'Nada de un único entregable al final. El proyecto se corta en etapas revisables para que puedas parar, corregir o cambiar de prioridad sin haber perdido meses.' },
    { title: 'El código es tuyo', desc: 'Código fuente, repositorios, documentación y datos quedan a nombre de tu empresa. No usamos piezas propietarias nuestras que te obliguen a seguir contratándonos para mantener lo que ya pagaste.' },
    { title: 'Se documenta mientras se construye', desc: 'La documentación no es un anexo que se escribe al final si sobra tiempo. Es lo que permite que otro equipo, o el tuyo, tome el sistema y siga.' },
    { title: 'Empresa formal', desc: 'RUC activo, factura electrónica SUNAT en cada hito, trabajo contra orden de compra y acuerdo de confidencialidad firmado antes de la reunión técnica si tu área legal lo pide.' },
  ],
} as const;

// ---- Contacto ----
export const contactoForm = {
  // La lista de rubros era el giro de una MYPE —bodega, pollería, barbería—.
  // Con el cliente nuevo, lo que ubica a quien escribe no es su giro sino su
  // tamaño y si tiene o no área de sistemas: eso es lo que decide cómo se
  // conversa el proyecto y quién firma.
  rubros: ['Empresa con área de sistemas', 'Empresa sin área de sistemas', 'Startup', 'Agencia o consultora', 'Institución educativa', 'Entidad pública', 'Otro'],
  necesidades: ['Proyecto a medida', 'App móvil', 'Mantener un sistema existente', 'Integrar sistemas que ya tenemos', 'Migrar de tecnología', 'Aún no está definido'],
} as const;

// "Sin compromiso ni presión de venta" tranquilizaba a quien teme que le cobren
// por preguntar. Quien evalúa un proveedor de software no teme eso: teme contar
// su operación a un desconocido y que la primera conversación sea con un
// comercial que no entiende lo que le está describiendo.
export const contactoExpectativas = [
  'Primera respuesta en menos de 2 horas hábiles',
  'Reunión técnica con quien va a escribir el código',
  'Acuerdo de confidencialidad firmado antes, si lo necesitas',
] as const;

// ---- FAQ (home) ----
// Las seis preguntas de la portada son las que hace quien evalúa contratar
// desarrollo, no las que hace un dueño de negocio comprando su primer sistema.
// Cambia hasta quién las hace: aquí hay un área de sistemas o una gerencia que
// va a tener que justificar la contratación adentro, así que las dudas son de
// contrato —alcance, propiedad, confidencialidad, facturación— antes que de
// funcionalidad.
//
// Ninguna respuesta afirma trayectoria, tamaño de equipo ni cartera. Sin ventas
// todavía, eso sería inventado, y es justo lo que el cliente B2B verifica. Lo
// que se afirma son compromisos que se firman y se cumplen desde el primer
// proyecto.
export const faqs = [
  { q: '¿Qué hace exactamente una empresa de desarrollo de software?', a: 'Construye software por encargo, a la medida de quien lo pide, en vez de vender un producto ya hecho con licencias. En la práctica eso son tres cosas: levantar qué necesita el cliente, construirlo y entregarlo funcionando y documentado. Somos una empresa de desarrollo de software en Lima y trabajamos con empresas de todo el Perú, de forma remota.' },
  { q: '¿Cómo definen el alcance y el precio?', a: 'En una primera etapa de análisis, antes de programar: se levanta qué tiene que hacer el sistema, con qué se integra y qué queda fuera. De ahí sale un documento de alcance con el precio y el cronograma, y recién con eso firmado se empieza. Esa etapa se puede contratar aparte si quieres evaluarnos con algo chico antes de comprometer el proyecto entero.' },
  { q: '¿El código y la propiedad intelectual son nuestros?', a: 'Sí, sin condiciones. El código fuente, los repositorios, la documentación y los datos quedan a nombre de tu empresa, y los accesos se entregan completos. No usamos componentes propietarios nuestros que te aten a seguir contratándonos para poder mantener lo que ya pagaste.' },
  { q: '¿Qué pasa si el alcance cambia a mitad del proyecto?', a: 'Cambia casi siempre, así que está previsto. Lo que entra fuera del alcance firmado se cotiza como adicional, por escrito y antes de ejecutarlo, con su impacto en el cronograma. Lo que no hacemos es absorberlo callados y descubrirlo en la fecha de entrega, que es como se rompen la mayoría de estos proyectos.' },
  { q: '¿Trabajan con los sistemas que ya tenemos?', a: 'Sí, y es lo habitual: casi ningún proyecto empieza en una empresa que no tenga nada. En la etapa de análisis se revisa qué sistemas hay, si exponen una forma de conectarse y qué se puede leer o escribir contra ellos. Eso se hace antes de cotizar, porque una integración que resulta imposible a mitad del proyecto cambia el alcance entero.' },
  { q: '¿Firman acuerdo de confidencialidad?', a: 'Sí, y lo firmamos antes de la reunión técnica si tu empresa lo prefiere. Aceptamos el modelo de acuerdo de tu área legal en vez de imponer el nuestro. Si el proyecto toca datos personales o información sensible, eso también se acuerda por escrito antes de tener acceso a nada.' },
  { q: '¿Emiten factura y trabajan con orden de compra?', a: 'Sí. Somos una empresa formal con RUC y emitimos factura electrónica SUNAT en cada hito. Trabajamos contra orden de compra y nos adaptamos a los plazos de pago de tu área de finanzas, siempre que queden acordados al firmar y no se descubran después.' },
] as const;
