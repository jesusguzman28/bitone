// ---- Páginas por ciudad: "fábrica de software en <ciudad>" ----
//
// Solo ciudades donde hay algo propio que contar. Una página por ciudad del
// Perú con el mismo texto y otro nombre es lo que Google llama "doorway pages"
// y castiga en todo el sitio. Cada entrada de aquí tiene razones y preguntas
// distintas, sacadas de lo que de verdad pasa en esa ciudad:
//
//   - Lima: donde está inscrita la empresa y donde decide el comprador B2B.
//   - Ayacucho: donde funciona el primer producto, ApuraY (Coracora).
//
// El resto del país lo cubre la portada ("Fábrica de software en Perú").
// Antes de sumar una ciudad, preguntarse qué se puede decir de ella que no
// sirva igual para cualquier otra. Si la respuesta es nada, no va.
//
// No se afirma oficina física en ninguna: el trabajo es remoto (así lo dice
// /contacto/) y la dirección fiscal es la de Lima.

export interface Ciudad {
  /** Parte final de la dirección: /fabrica-de-software-<slug>/ */
  slug: string;
  nombre: string;
  /** Tipo en schema.org: una ciudad o una región. */
  tipo: 'City' | 'AdministrativeArea';
  seoTitle: string;
  description: string;
  subtitulo: string;
  intro: readonly string[];
  razonesTitulo: string;
  razones: readonly { titulo: string; texto: string }[];
  /** Pruebas: casos o proyectos que respaldan lo que dice la página. */
  pruebas: readonly { texto: string; href: string }[];
  faq: readonly { q: string; a: string }[];
  /** Contexto que se suma al mensaje de WhatsApp del formulario. */
  contexto: string;
}

export const ciudades: readonly Ciudad[] = [
  {
    slug: 'lima',
    nombre: 'Lima',
    tipo: 'City',
    seoTitle: 'Fábrica de software en Lima',
    description:
      'Fábrica de software en Lima: sistemas a medida, apps móviles y mantenimiento para empresas. Empresa formal con RUC, alcance y precio cerrados por escrito.',
    subtitulo: 'Sistemas a medida, apps móviles y mantenimiento para empresas limeñas, con alcance y precio por escrito.',
    intro: [
      'BIT-ONE es la marca de Bitone E.I.R.L., empresa formal inscrita en Lima. Construimos el software que tu empresa necesita —sistemas internos, plataformas para tus clientes y apps móviles— con el alcance y el precio cerrados antes de programar, y con el código, los accesos y la documentación a nombre de tu empresa.',
      'Trabajamos como una fábrica de software pequeña a propósito: hablas con quien va a escribir el código, cada etapa se entrega funcionando y los cambios se cotizan antes de hacerlos, nunca después.',
    ],
    razonesTitulo: 'Por qué empresas de Lima trabajan con una fábrica chica',
    razones: [
      {
        titulo: 'Formal de punta a punta',
        texto: 'RUC, factura electrónica, orden de compra y contrato con el alcance firmado. Lo que pide el área de compras de una empresa, sin excepciones.',
      },
      {
        titulo: 'Sin intermediarios',
        texto: 'La reunión técnica es con quien construye el sistema. No hay un comercial en medio traduciendo lo que necesitas.',
      },
      {
        titulo: 'Lima conectada con provincia',
        texto: 'Muchas empresas limeñas operan fuera de Lima: personal en campo, almacenes, sedes. Hacemos apps que funcionan con mala señal y sincronizan después, porque ya las hicimos para provincia.',
      },
      {
        titulo: 'Integrado con lo que ya usas',
        texto: 'Facturación electrónica SUNAT, tu ERP, pasarelas de pago o el sistema heredado que nadie quiere tocar. Se integra en vez de reemplazar todo.',
      },
    ],
    pruebas: [
      { texto: 'Caso: de dos Excel y un Google Form a una intranet de operaciones', href: '/blog/caso-de-excel-y-google-forms-a-una-intranet/' },
      { texto: 'Cómo integrar la facturación electrónica de SUNAT a tu sistema', href: '/blog/facturacion-electronica-sunat-integrar-a-tu-sistema/' },
      { texto: 'Todos los proyectos en producción', href: '/proyectos/' },
    ],
    faq: [
      {
        q: '¿Pueden facturar a una empresa de Lima?',
        a: 'Sí. Bitone E.I.R.L. es una empresa formal con RUC 20615736261, inscrita en Lima. Emitimos factura electrónica y trabajamos con orden de compra.',
      },
      {
        q: '¿Cómo son las reuniones?',
        a: 'La reunión técnica es por videollamada, con quien va a construir el sistema. Las entregas de cada etapa se revisan en línea, sobre el sistema funcionando.',
      },
      {
        q: '¿Cuánto demora un proyecto?',
        a: 'Depende del alcance. Después de la etapa de análisis recibes un cronograma por etapas con fechas; una app móvil suele tomar de 2 a 5 meses.',
      },
    ],
    contexto: 'un proyecto para una empresa en Lima',
  },
  {
    slug: 'ayacucho',
    nombre: 'Ayacucho',
    tipo: 'AdministrativeArea',
    seoTitle: 'Fábrica de software en Ayacucho',
    description:
      'Desarrollo de software en Ayacucho: sistemas a medida y apps móviles pensados para provincia. Nuestro primer producto, ApuraY, funciona en Coracora.',
    subtitulo: 'Sistemas y apps pensados para provincia, hechos por quienes ya pusieron uno a funcionar en Coracora.',
    intro: [
      'Nuestro primer producto no nació en Lima: ApuraY, la plataforma de mototaxi, comida y envíos, funciona en Coracora. Construirla y operarla nos enseñó lo que un sistema necesita fuera de la capital —conexión inestable, pedidos que llegan por WhatsApp, pagos en efectivo— y eso es lo que llevamos a cada empresa ayacuchana que quiere ordenar su operación con software.',
      'Atendemos Huamanga, Huanta, Coracora, Puquio y el resto de la región de forma remota, con la misma formalidad que a una empresa de Lima.',
    ],
    razonesTitulo: 'Lo que cambia al construir para Ayacucho',
    razones: [
      {
        titulo: 'Hecho para la señal real',
        texto: 'Apps que toleran cortes, reintentan sin duplicar pedidos y sincronizan cuando vuelve la conexión. Lo aprendimos en Coracora, no en un manual.',
      },
      {
        titulo: 'El sistema se adapta a cómo se trabaja',
        texto: 'Si los pedidos llegan por WhatsApp y se paga en efectivo, el sistema lo absorbe. No se le pide a la gente que cambie su forma de comprar para que el software funcione.',
      },
      {
        titulo: 'Formal, aunque sea en provincia',
        texto: 'Empresa con RUC, factura electrónica y contrato con alcance. Lo mismo que exigiría una empresa de Lima.',
      },
      {
        titulo: 'Remoto, pero cerca',
        texto: 'La reunión técnica es por videollamada y las entregas se revisan en línea. No hace falta viajar a Lima para tener un sistema bien hecho.',
      },
    ],
    pruebas: [
      { texto: 'Caso ApuraY: una plataforma de delivery pensada para una ciudad de provincia', href: '/blog/caso-apuray-plataforma-de-delivery-en-provincia/' },
      { texto: 'App nativa, multiplataforma o web: cuál conviene a tu empresa', href: '/blog/app-nativa-multiplataforma-o-web/' },
      { texto: 'Todos los proyectos en producción', href: '/proyectos/' },
    ],
    faq: [
      {
        q: '¿Atienden empresas en Huamanga y el resto de Ayacucho?',
        a: 'Sí. Trabajamos de forma remota con toda la región: la reunión técnica es por videollamada y cada entrega se revisa en línea sobre el sistema funcionando.',
      },
      {
        q: '¿Qué tipo de sistemas hacen para empresas de provincia?',
        a: 'Lo que la operación necesite: ventas e inventario, pedidos y reparto, apps para personal en campo, integración con facturación electrónica. Siempre con alcance y precio cerrados por escrito antes de empezar.',
      },
      {
        q: '¿Funciona si la conexión a internet es inestable?',
        a: 'Se diseña para eso desde el inicio: la app guarda lo que se hace sin señal y lo envía cuando vuelve la conexión, sin duplicar registros.',
      },
    ],
    contexto: 'un proyecto para una empresa en Ayacucho',
  },
];
