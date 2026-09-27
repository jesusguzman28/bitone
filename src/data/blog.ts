// ---- Blog: guías para quien contrata software ----
//
// El blog anterior era del negocio viejo (páginas web para bodegas) y se borró
// con el cambio a bitone.pe. Estos artículos están escritos para el lector de
// ahora: quien tiene que decidir, presupuestar o heredar un sistema en una
// empresa peruana. Cada uno responde una búsqueda concreta y termina en el
// servicio que la resuelve (`servicio`), que es el enlazado interno que ayuda a
// posicionar las páginas de servicio.
//
// Reglas de contenido, las mismas del resto del sitio:
//   - Nada de cifras de ventas, clientes o proyectos que no se puedan probar.
//   - No se publican precios de entrada: los artículos explican de qué depende
//     el precio, no cuánto es.
//   - Lo técnico tiene que poder defenderse en una reunión.
//
// Campos:
//   `seoTitle`  máximo 55 caracteres (BaseLayout le suma " | BIT-ONE").
//   `excerpt`   máximo 160: es la meta description. `npm run verificar` lo mide.
//   `image`     portada 1200x630 en public/blog/<slug>.webp y <slug>-sm.webp,
//               generadas con scripts/make-portadas.py.

export interface Seccion {
  h2: string;
  parrafos: readonly string[];
  lista?: readonly string[];
}

export interface Post {
  slug: string;
  title: string;
  seoTitle: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  keywords: readonly string[];
  /** Página de servicio a la que lleva el cierre del artículo. */
  servicio: { href: string; label: string };
  intro: string;
  secciones: readonly Seccion[];
  faq?: readonly { q: string; a: string }[];
  image: string;
}

const portada = (slug: string) => `/blog/${slug}.webp`;

export const blog: readonly Post[] = [
  {
    slug: 'cuanto-cuesta-un-software-a-medida-en-peru',
    title: '¿Cuánto cuesta un software a medida en Perú? Qué define el precio',
    seoTitle: 'Cuánto cuesta un software a medida en Perú',
    excerpt:
      'Por qué dos sistemas "parecidos" pueden costar muy distinto, qué hace subir el precio y cómo pedir una cotización que no cambie a mitad del proyecto.',
    date: '2026-09-27',
    category: 'Presupuesto',
    readTime: '7 min',
    keywords: ['cuánto cuesta un software a medida', 'precio desarrollo de software Perú', 'cotizar sistema a medida'],
    servicio: { href: '/servicios/desarrollo-de-software-a-medida/', label: 'Desarrollo de software a medida' },
    intro:
      'Es la primera pregunta de casi todos y la que peor se responde con una cifra suelta. Un sistema de inventario para una sola sede y uno que conecta tres almacenes con facturación electrónica se llaman igual en una reunión, pero no se parecen en nada cuando se construyen. Esta guía explica de qué depende el precio para que puedas comparar cotizaciones con criterio.',
    secciones: [
      {
        h2: 'Lo que más mueve el precio',
        parrafos: [
          'El precio de un software a medida sale de las horas de trabajo que hacen falta para construirlo, probarlo y dejarlo funcionando. Esas horas dependen menos del "tipo" de sistema que de cuántas cosas distintas tiene que resolver. Estos son los factores que más pesan:',
        ],
        lista: [
          'Cuántos tipos de usuario hay y qué puede hacer cada uno. Un sistema con administrador, vendedor, almacén y cliente tiene cuatro juegos de pantallas y permisos.',
          'Con qué otros sistemas se tiene que conectar: facturación electrónica, pasarelas de pago, un ERP existente, bancos, WhatsApp. Cada integración es un proyecto pequeño dentro del proyecto.',
          'Si hay usuarios externos (clientes, proveedores) o solo personal interno. Lo que usa el público exige más cuidado en seguridad, diseño y soporte.',
          'Reportes y reglas de negocio: comisiones, precios por volumen, aprobaciones en cadena. Son invisibles en la demo y se llevan buena parte del tiempo.',
          'Si tiene que funcionar sin conexión o en el celular, además de en la web.',
          'Cuántos datos hay que migrar desde Excel o desde un sistema anterior, y en qué estado están.',
        ],
      },
      {
        h2: 'Por qué dos cotizaciones pueden ser tan distintas',
        parrafos: [
          'Cuando una cotización es mucho más baja que otra, casi nunca es porque un equipo trabaje más rápido. Lo habitual es que las dos no estén cotizando lo mismo: una incluye pruebas, documentación, despliegue y garantía, y la otra solo la programación.',
          'Antes de comparar precios, compara alcances. Pide que cada propuesta diga por escrito qué entra, qué queda fuera y qué pasa si algo cambia. Una cotización que no dice qué queda fuera es la que después crece.',
        ],
      },
      {
        h2: 'Cómo pedir una cotización que no cambie a mitad del proyecto',
        parrafos: [
          'El precio solo puede ser cerrado si el alcance lo está. Por eso la forma más segura de contratar es en dos pasos: primero una etapa de análisis, corta y con precio propio, que produce un documento con las pantallas, las reglas, las integraciones y el cronograma; y después la construcción, cotizada sobre ese documento.',
          'Esa primera etapa te sirve aunque no sigas con el mismo proveedor: con el documento en la mano puedes pedir otras cotizaciones que sí sean comparables.',
        ],
        lista: [
          'Pide el alcance por escrito, con lo que queda fuera.',
          'Pide el cronograma por etapas, con una entrega revisable en cada una.',
          'Pregunta cómo se cotiza un cambio antes de ejecutarlo.',
          'Confirma que el código, los accesos y la documentación quedan a nombre de tu empresa.',
        ],
      },
      {
        h2: 'Lo que cuesta después de la entrega',
        parrafos: [
          'El precio del desarrollo no es el costo total. Un sistema en producción necesita servidor o nube, dominio, certificados, a veces licencias de servicios de terceros (mapas, mensajería, facturación) y mantenimiento: actualizaciones de seguridad y ajustes cuando cambia la operación o una norma. Conviene que la propuesta los mencione, aunque sea como estimado, para que no aparezcan como sorpresa.',
        ],
      },
    ],
    faq: [
      {
        q: '¿Por qué no publican un precio de entrada?',
        a: 'Porque el rango entre un sistema chico y uno con integraciones es tan ancho que una cifra suelta confunde más de lo que ayuda. El precio sale cerrado y por escrito después de la etapa de análisis.',
      },
      {
        q: '¿Se puede pagar por etapas?',
        a: 'Sí. Lo normal es pagar por hitos: cada etapa se entrega funcionando y revisable, y se paga al aprobarla.',
      },
    ],
    image: portada('cuanto-cuesta-un-software-a-medida-en-peru'),
  },
  {
    slug: 'facturacion-electronica-sunat-integrar-a-tu-sistema',
    title: 'Cómo integrar la facturación electrónica de SUNAT a tu sistema',
    seoTitle: 'Integrar la facturación electrónica SUNAT a tu sistema',
    excerpt:
      'SEE del contribuyente, OSE o PSE: qué significa cada opción, qué necesita tu sistema para emitir comprobantes electrónicos y qué revisar antes de elegir.',
    date: '2026-09-27',
    category: 'Sistemas',
    readTime: '8 min',
    keywords: ['facturación electrónica SUNAT', 'integrar facturación electrónica', 'OSE PSE SUNAT', 'sistema de facturación'],
    servicio: { href: '/servicios/desarrollo-de-software-a-medida/', label: 'Desarrollo de software a medida' },
    intro:
      'Si tu empresa ya vende con un sistema propio —un punto de venta, un ERP, una plataforma web— tarde o temprano ese sistema tiene que emitir los comprobantes electrónicos sin que nadie los copie a mano en otro portal. Esta guía resume cómo funciona la emisión electrónica en el Perú y qué decisiones hay que tomar para conectarla.',
    secciones: [
      {
        h2: 'Qué es un comprobante electrónico, en términos de sistema',
        parrafos: [
          'Para SUNAT, una factura, una boleta o una nota de crédito electrónica es un archivo XML con un formato estándar (UBL 2.1), firmado digitalmente con un certificado digital de la empresa. Ese archivo se envía para su validación y, si está bien, se recibe una constancia de recepción (CDR) que confirma que el comprobante es válido.',
          'Lo que tu sistema tiene que hacer, entonces, es: armar el XML con los datos de la venta, firmarlo, enviarlo, guardar la respuesta y entregarle al cliente su representación (el PDF o el ticket con el código QR).',
        ],
      },
      {
        h2: 'Las formas de emitir: SEE del contribuyente, OSE y PSE',
        parrafos: [
          'SUNAT permite varios sistemas de emisión. Los portales gratuitos (SEE - SOL y el Facturador SUNAT) sirven para volúmenes bajos, pero son manuales: no se conectan con tu sistema. Para integrar hay tres caminos:',
        ],
        lista: [
          'SEE - Del contribuyente: tu propio sistema genera, firma y envía los comprobantes directamente a SUNAT. Te da control total, pero todo el trabajo técnico y el cumplimiento de los formatos quedan de tu lado.',
          'OSE (Operador de Servicios Electrónicos): una empresa autorizada por SUNAT valida tus comprobantes en su lugar. Suele responder más rápido y es habitual en empresas con volumen alto.',
          'PSE (Proveedor de Servicios Electrónicos): un proveedor genera, firma y envía por ti. Tu sistema solo le manda los datos de la venta, normalmente por una API, y recibe el resultado.',
        ],
      },
      {
        h2: 'Qué opción conviene',
        parrafos: [
          'Para la mayoría de empresas que están integrando por primera vez, trabajar con un PSE u OSE a través de su API es el camino más corto y el más fácil de mantener: los cambios de formato que publica SUNAT los absorbe el proveedor. La emisión directa tiene sentido cuando el volumen es muy alto o cuando la empresa quiere eliminar esa dependencia y tiene quien la mantenga.',
          'En cualquier caso, lo importante es que tu sistema quede desacoplado: que la emisión esté en un módulo propio, de forma que cambiar de proveedor no signifique reescribir el punto de venta.',
        ],
      },
      {
        h2: 'Lo que hay que resolver además del envío',
        parrafos: ['La conexión en sí es la parte fácil. Lo que más tiempo toma y más problemas evita es todo lo que pasa alrededor:'],
        lista: [
          'Series y correlativos por tipo de comprobante y por local, sin saltos ni duplicados.',
          'Cálculo correcto del IGV, las operaciones exoneradas o inafectas, los descuentos y el redondeo.',
          'Notas de crédito y débito ligadas al comprobante que corrigen, y la comunicación de baja para anular.',
          'Qué hace el sistema si SUNAT o el proveedor no responden: reintentos, cola de pendientes y comprobantes de contingencia.',
          'Guardar el XML y el CDR de cada comprobante durante el tiempo que exige la norma.',
          'Guía de remisión electrónica, si la empresa traslada mercadería.',
        ],
      },
      {
        h2: 'Antes de empezar',
        parrafos: [
          'Revisa en SUNAT qué obligaciones y plazos aplican a tu empresa, porque se actualizan con frecuencia. Ten a mano el certificado digital, los accesos a la Clave SOL y, si ya elegiste proveedor, su documentación técnica. Con eso, la integración se puede estimar con bastante precisión.',
        ],
      },
    ],
    faq: [
      {
        q: '¿Mi sistema actual puede emitir comprobantes electrónicos?',
        a: 'Casi siempre sí: se le agrega un módulo de emisión que toma los datos de cada venta y los envía a SUNAT o a un proveedor autorizado. Primero hay que revisar cómo guarda las ventas y los impuestos.',
      },
      {
        q: '¿Qué es el CDR?',
        a: 'La constancia de recepción que devuelve SUNAT o el OSE al validar un comprobante. Es la prueba de que el comprobante es válido y hay que guardarla junto con el XML.',
      },
    ],
    image: portada('facturacion-electronica-sunat-integrar-a-tu-sistema'),
  },
  {
    slug: 'software-a-medida-o-erp-de-paquete',
    title: 'Software a medida o ERP de paquete: cómo decidir sin equivocarte',
    seoTitle: 'Software a medida o ERP de paquete: cómo decidir',
    excerpt:
      'Cuándo conviene comprar un sistema ya hecho, cuándo construir uno propio y cuándo lo mejor es combinar los dos. Criterios prácticos para empresas peruanas.',
    date: '2026-09-27',
    category: 'Decidir',
    readTime: '6 min',
    keywords: ['software a medida vs ERP', 'ERP o sistema a medida', 'desarrollo de software a medida'],
    servicio: { href: '/servicios/', label: 'Comparar las formas de trabajar' },
    intro:
      'No siempre conviene construir. Un sistema ya hecho puede estar funcionando en semanas y costar menos al inicio. Pero cuando la forma de trabajar de la empresa es justamente lo que la diferencia, obligarla a entrar en un software genérico sale caro. Estos son los criterios para decidir.',
    secciones: [
      {
        h2: 'Cuándo conviene un sistema de paquete',
        parrafos: ['Un ERP o sistema comercial ya hecho suele ser la mejor opción cuando:'],
        lista: [
          'El proceso es estándar: contabilidad, planillas, compras y ventas sin reglas especiales.',
          'Necesitas empezar ya y no hay tiempo para una etapa de construcción.',
          'El proveedor tiene presencia local y soporte para la normativa peruana.',
          'Aceptas adaptar tu forma de trabajar a la del sistema.',
        ],
      },
      {
        h2: 'Cuándo conviene un software a medida',
        parrafos: ['Construir tiene sentido cuando:'],
        lista: [
          'El proceso es propio de tu negocio y es parte de lo que te hace competir.',
          'Pagas licencias por módulos que no usas, o por usuarios que solo consultan.',
          'Tienes varias herramientas que no se hablan y la información se pasa a mano entre ellas.',
          'Necesitas que clientes, proveedores o personal de campo usen el sistema desde el celular.',
          'Quieres que el código y los datos sean de la empresa, sin depender de las condiciones de un proveedor.',
        ],
      },
      {
        h2: 'La opción que casi nadie considera: combinar',
        parrafos: [
          'Muchas veces la respuesta correcta no es elegir uno. Se mantiene el sistema de paquete para lo estándar —contabilidad, facturación— y se construye a medida solo la parte que no encaja: una app para el personal en campo, un portal para clientes, un tablero que junta los datos de varios sistemas. Así se aprovecha lo que ya funciona y se invierte solo donde hay diferencia.',
        ],
      },
      {
        h2: 'Preguntas para decidir',
        parrafos: ['Antes de firmar con cualquiera de los dos caminos, responde por escrito:'],
        lista: [
          '¿Qué proceso concreto tiene que mejorar y cómo lo vas a medir?',
          '¿Cuánto cuesta el sistema en tres años, contando licencias, usuarios y mantenimiento?',
          '¿Qué pasa con tus datos si mañana cambias de proveedor?',
          '¿Quién va a usar el sistema a diario y lo probó antes de decidir?',
        ],
      },
    ],
    image: portada('software-a-medida-o-erp-de-paquete'),
  },
  {
    slug: 'heredaste-un-sistema-sin-documentacion',
    title: 'Heredaste un sistema sin documentación: qué hacer primero',
    seoTitle: 'Heredaste un sistema sin documentación: qué hacer',
    excerpt:
      'El programador se fue y nadie sabe cómo funciona el sistema. Los pasos para recuperar el control sin frenar la operación: accesos, respaldo, diagnóstico y plan.',
    date: '2026-09-27',
    category: 'Mantenimiento',
    readTime: '6 min',
    keywords: ['mantenimiento de sistemas heredados', 'sistema sin documentación', 'mantenimiento de software'],
    servicio: { href: '/servicios/mantenimiento-de-software/', label: 'Mantenimiento de software' },
    intro:
      'Pasa más de lo que parece: el sistema lo hizo una persona o una empresa que ya no está, funciona, la operación depende de él y nadie sabe bien cómo está hecho. El riesgo no es que falle hoy, sino que falle un día en que no hay a quién llamar. Estos son los primeros pasos para recuperar el control.',
    secciones: [
      {
        h2: '1. Asegura los accesos',
        parrafos: [
          'Antes que cualquier cambio, confirma que la empresa tiene los accesos a todo lo que hace funcionar el sistema, a su nombre y no al de una persona:',
        ],
        lista: [
          'El servidor o la cuenta de nube donde corre.',
          'El dominio y el correo asociado a él.',
          'La base de datos.',
          'El repositorio del código fuente, si existe.',
          'Las cuentas de servicios externos: facturación electrónica, pasarelas de pago, tiendas de apps.',
        ],
      },
      {
        h2: '2. Haz un respaldo completo y comprueba que se puede restaurar',
        parrafos: [
          'Un respaldo que nunca se probó no es un respaldo. Copia el código y la base de datos, y levántalos en otro entorno para comprobar que el sistema arranca con esa copia. Ese mismo entorno sirve después para hacer cambios sin tocar producción.',
        ],
      },
      {
        h2: '3. Diagnóstico: qué hay y en qué estado está',
        parrafos: [
          'Con el sistema corriendo en una copia, se revisa qué tecnologías usa y si siguen teniendo soporte, cómo está organizado el código, qué partes son críticas para la operación y dónde están los riesgos de seguridad más evidentes. El resultado es un documento corto con el mapa del sistema y una lista de problemas ordenada por riesgo.',
        ],
      },
      {
        h2: '4. Decide: mantener, mejorar o reemplazar',
        parrafos: [
          'Con el diagnóstico en la mano recién se puede decidir con datos. La mayoría de las veces el sistema se puede mantener: se documenta, se corrigen los riesgos más graves y se sigue mejorando por partes. Reescribir desde cero es la opción más cara y la más riesgosa, y conviene solo cuando la tecnología ya no tiene soporte o cuando cada cambio cuesta más que rehacer el módulo.',
        ],
      },
      {
        h2: '5. Que no vuelva a pasar',
        parrafos: [
          'La causa de fondo es que el conocimiento estaba en una sola cabeza. Se evita con tres cosas simples: el código en un repositorio de la empresa, documentación que se actualiza con cada cambio y más de una persona que conoce el sistema.',
        ],
      },
    ],
    faq: [
      {
        q: '¿Hay que detener el sistema para el diagnóstico?',
        a: 'No. Se trabaja sobre una copia; el sistema en producción sigue funcionando mientras tanto.',
      },
    ],
    image: portada('heredaste-un-sistema-sin-documentacion'),
  },
  {
    slug: 'app-nativa-multiplataforma-o-web',
    title: 'App nativa, multiplataforma o web: cuál conviene a tu empresa',
    seoTitle: 'App nativa, multiplataforma o web: cuál conviene',
    excerpt:
      'Las diferencias reales entre una app nativa, una multiplataforma y una web app, y cómo elegir según quién la usa, dónde y con qué conexión.',
    date: '2026-09-27',
    category: 'Apps móviles',
    readTime: '6 min',
    keywords: ['desarrollo de aplicaciones móviles Perú', 'app nativa o híbrida', 'app multiplataforma', 'web app'],
    servicio: { href: '/servicios/apps-moviles/', label: 'Desarrollo de apps móviles' },
    intro:
      'Antes de hablar de tecnología conviene responder quién va a usar la app, en qué celular, con qué conexión y cada cuánto. Esas respuestas deciden casi solas el tipo de app. Esta guía resume las tres opciones y cuándo tiene sentido cada una.',
    secciones: [
      {
        h2: 'Las tres opciones',
        parrafos: [],
        lista: [
          'App nativa: se construye por separado para Android y para iPhone, cada una con su propio código. Da el máximo acceso al teléfono, pero son dos desarrollos y dos mantenimientos.',
          'App multiplataforma: una sola base de código que se publica en las dos tiendas. Cubre la gran mayoría de casos de empresa con un solo desarrollo, y es la opción más equilibrada entre costo y experiencia.',
          'Web app (o PWA): una web pensada para el celular, que se abre desde el navegador y se puede "instalar" en la pantalla de inicio. No pasa por las tiendas y se actualiza al instante, pero tiene menos acceso al teléfono.',
        ],
      },
      {
        h2: 'Cómo elegir',
        parrafos: ['Algunas preguntas que casi siempre inclinan la balanza:'],
        lista: [
          '¿La usan tus clientes o tu personal? Una app para clientes necesita estar en las tiendas; para el personal interno, una web app puede bastar.',
          '¿Tiene que funcionar sin señal? Trabajo en campo, almacenes o provincias con conexión inestable piden una app instalada que guarde los datos y los sincronice después.',
          '¿Usa GPS en segundo plano, cámara, Bluetooth o notificaciones? Cuanto más usa el teléfono, más conviene una app instalada.',
          '¿Cada cuánto cambia? Si cambia todas las semanas, la web app evita esperar la revisión de las tiendas.',
        ],
      },
      {
        h2: 'Lo que no se ve en la cotización',
        parrafos: [
          'Una app casi nunca va sola: necesita un servidor y un panel web para administrarla. Publicarla requiere cuentas de desarrollador en Google Play y App Store, que conviene que estén a nombre de tu empresa desde el primer día, porque cambiarlas después es un trámite largo. Y cada año las tiendas piden actualizar la app a las versiones nuevas del sistema operativo, así que hay que prever ese mantenimiento.',
        ],
      },
    ],
    faq: [
      {
        q: '¿Se puede empezar con Android y sumar iPhone después?',
        a: 'Sí, y con una base multiplataforma sale mucho más barato que empezar de nuevo. Muchas empresas en Perú empiezan por Android porque es la mayoría de sus usuarios.',
      },
    ],
    image: portada('app-nativa-multiplataforma-o-web'),
  },
  {
    slug: 'caso-apuray-plataforma-de-delivery-en-provincia',
    title: 'Caso ApuraY: una plataforma de delivery pensada para una ciudad de provincia',
    seoTitle: 'Caso ApuraY: plataforma de delivery en provincia',
    excerpt:
      'Cómo construimos ApuraY para Coracora, Ayacucho: tres apps conectadas —pasajero, negocio y repartidor— y las decisiones que cambian fuera de Lima.',
    date: '2026-09-27',
    category: 'Casos',
    readTime: '5 min',
    keywords: ['caso de éxito desarrollo de software', 'app de delivery Perú', 'plataforma de delivery a medida'],
    servicio: { href: '/proyectos/', label: 'Ver todos los proyectos' },
    intro:
      'ApuraY es una plataforma de mototaxi, comida y envíos que funciona en Coracora, Ayacucho. Es un producto propio: lo construimos, lo operamos y está publicado en Google Play. Lo contamos porque resume bien lo que implica llevar un sistema a producción de verdad, y porque casi todo lo que aprendimos aplica a cualquier empresa que opere fuera de Lima.',
    secciones: [
      {
        h2: 'El problema',
        parrafos: [
          'En una ciudad de provincia los pedidos se hacían por llamada o por WhatsApp, a cada negocio por separado, sin saber cuánto iba a tardar ni dónde estaba el repartidor. Las plataformas grandes de delivery no llegan a esas ciudades, y copiar su modelo tal cual no funciona: el volumen es otro, la conexión es otra y la forma de pagar también.',
        ],
      },
      {
        h2: 'Lo que se construyó',
        parrafos: ['ApuraY son varias piezas conectadas que comparten un mismo servidor:'],
        lista: [
          'La app del pasajero y cliente, publicada en Google Play: pide mototaxi, comida, envíos y compras.',
          'La app del negocio (Mi Tienda AP): recibe los pedidos, los acepta y los despacha.',
          'La app del repartidor: recibe los viajes asignados y guía la entrega.',
          'Un panel web para administrar comercios, repartidores, zonas y pedidos.',
        ],
      },
      {
        h2: 'Decisiones que cambian fuera de Lima',
        parrafos: ['Varias decisiones de diseño salieron directamente del terreno:'],
        lista: [
          'Conexión inestable: las apps tienen que tolerar cortes y reintentar sin duplicar pedidos.',
          'Asignación del repartidor por carga de trabajo, para que los pedidos se repartan de forma pareja entre pocos repartidores.',
          'El negocio tiene que confirmar cada pedido: el cuello de botella real no era la flota, era que el comercio aceptara a tiempo.',
          'Canal manual para pedidos que llegan por WhatsApp, porque mucha gente sigue pidiendo así y el sistema tiene que absorberlos.',
          'Horarios y fechas siempre en hora de Perú, para que los reportes y los cortes de caja cuadren.',
        ],
      },
      {
        h2: 'Qué nos dejó',
        parrafos: [
          'Operar un sistema propio enseña cosas que un proyecto entregado y cerrado no enseña: qué se rompe con usuarios reales, qué avisos necesita el equipo para reaccionar a tiempo y por qué el monitoreo importa tanto como las funciones. Esa experiencia es la que llevamos a los sistemas que construimos para otras empresas.',
        ],
      },
    ],
    image: portada('caso-apuray-plataforma-de-delivery-en-provincia'),
  },
  {
    slug: 'caso-quipuy-plataforma-educativa-preuniversitaria',
    title: 'Caso QUIPUY: una plataforma que le dice al postulante cuánto le falta',
    seoTitle: 'Caso QUIPUY: plataforma educativa preuniversitaria',
    excerpt:
      'Cómo construimos QUIPUY: web y app Android sobre una sola API, práctica adaptativa y lo que exige Google Play para publicar una app con cuentas de usuario.',
    date: '2026-09-27',
    category: 'Casos',
    readTime: '5 min',
    keywords: ['caso de éxito desarrollo de software', 'plataforma educativa Perú', 'desarrollo de app educativa'],
    servicio: { href: '/servicios/apps-moviles/', label: 'Desarrollo de apps móviles' },
    intro:
      'QUIPUY es una plataforma para postulantes a la universidad en el Perú. Es un producto propio: lo diseñamos, lo construimos y lo operamos. Lo contamos porque reúne casi todo lo que tiene una plataforma con usuarios reales —cuentas, pagos por suscripción, una app en la tienda— y porque las lecciones sirven para cualquier empresa que quiera lanzar la suya.',
    secciones: [
      {
        h2: 'El problema',
        parrafos: [
          'Un postulante estudia meses sin saber si va bien. Sabe cuál es el puntaje de corte de la carrera que quiere, pero no cuánto le falta para llegar, ni en qué temas se le escapan los puntos. Los simulacros le dan una nota, no un camino.',
        ],
      },
      {
        h2: 'Lo que se construyó',
        parrafos: ['QUIPUY son dos puertas a un mismo sistema:'],
        lista: [
          'Una plataforma web donde el postulante elige universidad y carrera, practica y ve su avance.',
          'Una app Android nativa con la misma cuenta y el mismo avance.',
          'Un backend en Laravel que expone una sola API para la web y para la app, con cuentas de usuario y suscripciones.',
          'Acceso con Google o con correo y contraseña.',
        ],
      },
      {
        h2: 'Decisiones que importaron',
        parrafos: [],
        lista: [
          'Una sola API para web y app: cada regla —cómo se calcula lo que falta, qué se desbloquea con la suscripción— vive en un solo lugar y no se desincroniza entre plataformas.',
          'El avance se mide contra el puntaje de corte de la carrera elegida, no contra una nota abstracta. Es lo que el postulante entiende y lo que lo mueve a practicar.',
          'Práctica adaptativa: el sistema prioriza los temas donde el postulante falla más, en vez de repetir lo que ya domina.',
          'Login con correo además de Google: Google Play exige que sus revisores puedan entrar a la app sin una cuenta de Google personal.',
        ],
      },
      {
        h2: 'Lo que exige publicar en Google Play',
        parrafos: [
          'Publicar una app con cuentas de usuario no es solo subir el archivo. La tienda pide una cuenta de prueba para sus revisores, una página donde el usuario pueda eliminar su cuenta y sus datos, políticas de privacidad y declarar qué datos recoge la app. Además, la firma de la app la administra Google: eso cambia cómo se configura el inicio de sesión con Google y cómo se prueba una versión antes de publicarla.',
          'Ninguna de esas cosas es difícil, pero todas toman tiempo si se descubren al final. En los proyectos de apps que hacemos para otras empresas entran en el plan desde el primer día.',
        ],
      },
    ],
    faq: [
      {
        q: '¿Una app y una web pueden compartir el mismo sistema?',
        a: 'Sí, y es lo recomendable: un solo backend con una API que usan las dos. Las reglas del negocio viven en un solo lugar y los datos del usuario son los mismos en ambas.',
      },
    ],
    image: portada('caso-quipuy-plataforma-educativa-preuniversitaria'),
  },
];

export const blogPorSlug = (slug: string) => blog.find((p) => p.slug === slug);

/** Artículos que llevan a una página de servicio, para enlazarlos desde ella. */
export const blogDeServicio = (href: string) => blog.filter((p) => p.servicio.href === href);
