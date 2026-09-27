// Contenido largo de cada servicio, para su página propia.
//
// Por qué existe este archivo: los servicios vivían en una sola dirección,
// /servicios, repartidos en pestañas donde el resto quedaba oculto. Google
// indexa una página, así que todos competían entre sí dentro del mismo
// documento y ninguno podía posicionar por su cuenta. Con una página por
// servicio cada una compite por su propia búsqueda.
//
// ---------------------------------------------------------------------------
// Reestructurado el 2026-08-15 para el negocio nuevo, y el motivo es puro SEO.
//
// Quedaban dos servicios: "ERPs y sistemas a medida" y "apps móviles". El
// problema no era el contenido sino a qué búsqueda respondía cada uno. Un
// comprador B2B en Perú no busca "ERP" cuando quiere contratar desarrollo:
// quien escribe "ERP" casi siempre quiere COMPRAR un ERP ya hecho, que es una
// intención distinta y un cliente distinto. Lo que sí busca es "desarrollo de
// software a medida", "equipo de desarrollo dedicado" o "mantenimiento de
// sistemas".
//
// Y había un agujero peor: la portada ofrecía formas de contratar que no
// tenían página y enlazaban a /contacto/, así que eran invisibles para Google y
// no se podían explicar a nadie antes de que alguien escribiera.
//
// Ahora son tres páginas y cada una responde a una búsqueda distinta:
//
//   desarrollo-de-software-a-medida  →  "desarrollo de software a medida Perú"
//   mantenimiento-de-software        →  "mantenimiento de sistemas / software heredado"
//   apps-moviles                     →  "desarrollo de aplicaciones móviles Perú"
//
// Hubo una cuarta, /servicios/equipo-de-desarrollo-dedicado/, y se retiró: es un
// servicio que solo se puede vender cuando hay personas disponibles para
// asignar, y publicarlo antes de eso es prometer capacidad que no se tiene.
// El texto está en el historial de git para cuando el equipo dé para ofrecerlo.
// ---------------------------------------------------------------------------
//
// `serviciosTabs` en site.ts sigue siendo la fuente del precio, el plazo y la
// lista de lo que incluye. Aquí va solo lo que una página propia necesita y
// una pestaña no tenía: el problema que resuelve, cómo funciona por dentro y
// las preguntas frecuentes.
//
// Regla al escribir esto: nada de cifras de resultados ni casos de clientes.
// Lo que se afirma es lo que el servicio hace, no lo que promete lograr. Y
// nada de trayectoria, tamaño de equipo ni cartera: sin ventas registradas,
// eso sería inventado y es lo primero que un comprador B2B verifica.

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
  /** Última parte de la dirección: /servicios/<slug>/
   *  Lleva la keyword completa a propósito: la dirección es una de las señales
   *  que Google lee para entender de qué trata la página. */
  slug: string;
  /** Id en serviciosTabs de site.ts, de donde salen precio, plazo y features. */
  tabId: string;

  h1: string;
  /** Máximo 55 caracteres: BaseLayout le suma " | BIT-ONE" y a partir de ~65
   *  Google corta el resultado de búsqueda a media frase. */
  metaTitle: string;
  /** Máximo 160 caracteres. `npm run verificar` lo comprueba antes de desplegar. */
  metaDescription: string;
  breadcrumb: string;
  /** Cómo se nombra el servicio dentro de una frase, en singular y minúsculas:
   *  "¿Hablamos de tu ___?". El breadcrumb no sirve para esto —salía "¿Hablamos
   *  de tu erps y sistemas?"— porque está escrito para un menú, no para una
   *  oración. */
  enFrase: string;
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
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'desarrollo-de-software-a-medida',
    tabId: 'medida',

    h1: 'Desarrollo de software a medida en Perú',
    metaTitle: 'Desarrollo de software a medida en Perú',
    metaDescription:
      'Software a medida para empresas peruanas, con alcance y precio cerrados por escrito antes de programar. Entregas por etapas y el código a nombre de tu empresa.',
    breadcrumb: 'Software a medida',
    enFrase: 'proyecto',
    intro:
      'Nos encargas el sistema completo. Definimos qué tiene que hacer, lo cerramos por escrito y lo construimos por etapas revisables, sin que el alcance se te desborde a mitad de camino.',

    hero: null,
    heroAlt: '',

    problema: {
      title: 'Los proyectos de software no fracasan programando',
      parrafos: [
        'Fracasan antes. Empiezan con un acuerdo verbal sobre lo que hay que construir, con las dos partes convencidas de haber entendido lo mismo. Tres meses después aparece la diferencia: lo que para el proveedor era «un reporte» para el cliente eran cuatro, y lo que iba a tomar seis semanas lleva cuatro meses.',
        'El segundo punto de quiebre es el cambio de alcance. Cambia siempre, porque nadie conoce del todo un sistema hasta que empieza a usarlo. El problema no es que cambie: es que el cambio se absorbe en silencio, sin cotizar y sin mover la fecha, hasta que llega la entrega y no está listo. Ahí ya no hay conversación posible, solo reclamo.',
        'El tercero llega después de entregar. El sistema funciona, pero nadie sabe cómo está hecho por dentro. No hay documentación, el repositorio está a nombre del proveedor y cualquier cambio pequeño obliga a volver con quien lo construyó. El cliente no compró un sistema: compró una dependencia.',
      ],
    },

    comoFunciona: {
      title: 'Cómo se construye tu proyecto',
      intro:
        'Tres etapas, y en la primera todavía puedes irte sin haber comprometido el proyecto entero.',
      pasos: [
        {
          titulo: 'Primero se levanta el alcance',
          desc:
            'Reunión técnica con quien conoce la operación de verdad, no solo con quien firma. Qué tiene que hacer el sistema, con qué se integra, qué datos maneja y —sobre todo— qué queda fuera. De ahí sale un documento de alcance con el cronograma y el precio. Esta etapa se puede contratar aparte si prefieres evaluarnos con algo chico antes de comprometer el proyecto completo.',
          icono: 'buscar',
          foto: null,
          alt: '',
        },
        {
          titulo: 'Se construye por etapas revisables',
          desc:
            'Cada etapa se entrega funcionando, no en una presentación. Puedes probarla, corregir el rumbo o cambiar la prioridad de lo que viene sin haber perdido meses. Lo que salga del alcance firmado se cotiza por escrito, con su impacto en la fecha, y antes de ejecutarlo.',
          icono: 'cajas',
          foto: null,
          alt: '',
        },
        {
          titulo: 'Se entrega para que puedas mantenerlo sin nosotros',
          desc:
            'Código fuente, repositorios, documentación técnica y accesos a nombre de tu empresa. No usamos componentes propietarios nuestros que te obliguen a seguir contratándonos. Si mañana tu equipo interno toma el sistema, tiene con qué.',
          icono: 'codigo',
          foto: null,
          alt: '',
        },
      ],
    },

    precio: {
      title: 'Cómo se fija el precio',
      parrafos: [
        'No publicamos un precio de entrada, y es a propósito: un sistema interno para veinte usuarios y una plataforma con usuarios externos, pagos e integraciones no se parecen en nada. Poner una cifra suelta obligaría después a explicar por qué subió, que es justo la conversación que este servicio existe para evitar.',
        'El precio sale de la etapa de análisis y llega cerrado, por escrito, junto con el alcance y el cronograma. Nada se empieza a programar antes de que ese documento esté firmado por ambas partes.',
        'Se factura contra hito entregado, con factura electrónica SUNAT en cada uno. Trabajamos contra orden de compra y nos ajustamos a los plazos de pago de tu área de finanzas, siempre que queden acordados al firmar.',
      ],
    },

    faqs: [
      {
        q: '¿Cómo sé que el precio no va a subir a mitad del proyecto?',
        a: 'Porque lo que se firma es el alcance, no una intención. El documento dice qué entra y qué no entra, con ese nivel de detalle. Si durante el proyecto aparece algo fuera de esa lista —y suele aparecer—, se cotiza por escrito con su impacto en el cronograma y tú decides si entra o queda para después. Lo que no hacemos es absorberlo callados y descubrirlo en la fecha de entrega.',
      },
      {
        q: '¿Podemos empezar con algo chico para evaluarlos?',
        a: 'Sí, y es lo que recomendamos cuando no hemos trabajado juntos antes. La etapa de análisis se contrata por separado: recibes el documento de alcance, el cronograma y el precio del proyecto completo, y con eso en la mano decides si sigues con nosotros o te lo llevas. Ese documento es tuyo desde que lo pagas.',
      },
      {
        q: '¿Se integra con los sistemas que ya tenemos?',
        a: 'En general sí, y es parte de lo que se revisa en la etapa de análisis: qué sistemas hay, si exponen una interfaz de conexión y qué se puede leer o escribir contra ellos. Se hace ahí, antes de cotizar, porque una integración que resulta imposible a mitad del proyecto cambia el alcance entero.',
      },
      {
        q: '¿El código y la propiedad intelectual son nuestros?',
        a: 'Sí, sin condiciones. Código fuente, repositorios, documentación y datos quedan a nombre de tu empresa y los accesos se entregan completos. No trabajamos con componentes propietarios nuestros que te aten a seguir contratándonos para mantener lo que ya pagaste.',
      },
      {
        q: '¿Firman acuerdo de confidencialidad?',
        a: 'Sí, y antes de la reunión técnica si tu área legal lo prefiere. Aceptamos el modelo de acuerdo de tu empresa en vez de imponer el nuestro. Si el proyecto toca datos personales o información sensible, el tratamiento se acuerda también por escrito antes de que tengamos acceso a nada.',
      },
      {
        q: '¿Qué pasa después de entregar?',
        a: 'Hay 30 días de garantía sobre lo entregado, que cubre lo que no funcione según el alcance firmado. A partir de ahí, el mantenimiento y las mejoras se acuerdan aparte y decides si los tomas con nosotros, con tu equipo interno o con otro proveedor. Como el código y la documentación son tuyos, las tres opciones están realmente abiertas.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'mantenimiento-de-software',
    tabId: 'mantenimiento',

    h1: 'Mantenimiento de sistemas que ya están funcionando',
    metaTitle: 'Mantenimiento de software y sistemas',
    metaDescription:
      'Heredaste un sistema y quien lo construyó ya no está. Lo levantamos, lo documentamos y lo dejamos mantenible, sin quedarte atado a nosotros.',
    breadcrumb: 'Mantenimiento',
    enFrase: 'sistema',
    intro:
      'El caso más común y del que menos se habla: un sistema que funciona, del que depende la operación, y que nadie del equipo actual entiende por dentro.',

    hero: null,
    heroAlt: '',

    problema: {
      title: 'El sistema funciona, y por eso nadie lo toca',
      parrafos: [
        'Casi todas las empresas tienen uno. Se construyó hace años, resuelve algo importante y sigue en pie. Pero quien lo escribió ya no está, no hay documentación, y cada vez que alguien propone tocarlo la respuesta es la misma: mejor no, no vaya a ser.',
        'El costo de esa parálisis no aparece en ninguna factura, pero se paga igual. Cambios que se posponen durante meses. Procesos manuales que existen solo porque nadie se atreve a automatizarlos ahí dentro. Y un riesgo que crece solo: el día que ese sistema falle de verdad, no hay nadie que sepa por dónde entrar.',
        'Lo primero que hace falta no es reescribirlo. Reescribir es la reacción habitual y casi siempre la más cara: se tiran años de reglas de negocio que están en el código y en ningún otro sitio. Lo primero es entender qué hay, dejarlo documentado, y recién entonces decidir qué se arregla, qué se reemplaza y qué se deja como está.',
      ],
    },

    comoFunciona: {
      title: 'Cómo se toma un sistema heredado',
      intro:
        'El orden importa: primero entender, después documentar, y solo al final tocar.',
      pasos: [
        {
          titulo: 'Diagnóstico de lo que hay',
          desc:
            'Se revisa el código, la base de datos, las integraciones y cómo está desplegado. De ahí sale un informe con el estado real: qué tecnologías usa, qué está desactualizado, dónde están los riesgos y qué tan difícil es cambiarlo. Ese informe es tuyo y sirve aunque decidas no seguir con nosotros.',
          icono: 'buscar',
          foto: null,
          alt: '',
        },
        {
          titulo: 'Se documenta lo que no estaba documentado',
          desc:
            'Arquitectura, modelo de datos, integraciones y las reglas de negocio que solo viven en el código. Es la parte que convierte un sistema intocable en un sistema mantenible, y la que hace que el siguiente equipo —el nuestro, el tuyo o el que venga— pueda entrar sin empezar de cero.',
          icono: 'documento',
          foto: null,
          alt: '',
        },
        {
          titulo: 'Correcciones y mejoras, priorizadas contigo',
          desc:
            'Con el mapa completo se ordena qué vale la pena hacer: lo que corrige un riesgo, lo que desbloquea trabajo detenido y lo que puede esperar. Se ejecuta por bolsa de horas o por contrato mensual, y en ambos casos ves en qué se fue el tiempo.',
          icono: 'tuerca',
          foto: null,
          alt: '',
        },
      ],
    },

    precio: {
      title: 'Cómo se cobra',
      parrafos: [
        'El diagnóstico se cotiza aparte y por sí solo: es un trabajo acotado, con un entregable concreto —el informe del estado del sistema— y sirve aunque decidas no continuar. Es también la única forma honesta de presupuestar lo demás: nadie puede decir cuánto cuesta mantener un sistema que todavía no ha abierto.',
        'A partir de ahí hay dos formas. Bolsa de horas, para cuando el trabajo es intermitente y quieres control fino del gasto. O contrato mensual, para cuando necesitas disponibilidad garantizada y una velocidad de respuesta acordada.',
        'En las dos se factura con factura electrónica SUNAT y se reporta en qué se consumió el tiempo. La documentación que se genere es tuya, y eso incluye la del sistema que nosotros no construimos.',
      ],
    },

    faqs: [
      {
        q: 'El sistema lo hizo otro proveedor. ¿Igual lo toman?',
        a: 'Sí, es el caso más frecuente de este servicio. Lo que hace falta es acceso al código, a la base de datos y al entorno donde corre. Si no tienes el código fuente, ese es el primer problema a resolver y también lo revisamos: sin él las opciones se reducen mucho y conviene saberlo antes de gastar en cualquier otra cosa.',
      },
      {
        q: '¿No sería mejor reescribirlo desde cero?',
        a: 'Casi nunca, y menos como primera decisión. Un sistema viejo tiene años de reglas de negocio que no están escritas en ningún otro sitio, y una reescritura las pierde en silencio hasta que alguien las echa de menos en producción. Después del diagnóstico te decimos con qué nos encontramos, y si de verdad conviene reescribir una parte, lo decimos aunque sea el camino más largo.',
      },
      {
        q: '¿Qué pasa si está hecho con una tecnología muy antigua?',
        a: 'Se evalúa en el diagnóstico y es una de las cosas que ahí se responde: si todavía se puede mantener, si conviene actualizar por etapas o si hay un riesgo real de que deje de poder desplegarse. Que sea antiguo no lo hace irrecuperable; lo que lo complica de verdad es que además no esté documentado.',
      },
      {
        q: '¿Cuánto demora el diagnóstico?',
        a: 'Depende del tamaño del sistema y de qué tan rápido se consigan los accesos, que suele ser lo que más demora. Al cotizarlo te damos el plazo, y ese plazo va cerrado: es un trabajo acotado, no una investigación abierta.',
      },
      {
        q: '¿Quedamos atados a ustedes después?',
        a: 'Al contrario: el objetivo declarado de este servicio es lo opuesto. La documentación que se produce es tuya y está pensada para que cualquier equipo pueda tomar el sistema. Si después del diagnóstico prefieres que lo mantenga tu equipo interno, tienes con qué hacerlo.',
      },
      {
        q: '¿Pueden atender una urgencia de producción?',
        a: 'Solo bajo contrato mensual, donde la disponibilidad y el tiempo de respuesta quedan acordados por escrito. No prometemos atención de urgencias sin un contrato que la respalde: prometerla y no poder cumplirla el día que hace falta es peor que no ofrecerla.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'apps-moviles',
    tabId: 'apps',

    h1: 'Desarrollo de aplicaciones móviles para Android y iPhone',
    metaTitle: 'Desarrollo de apps móviles en Perú',
    metaDescription:
      'Aplicaciones para Android y iPhone a medida, publicadas en las tiendas con las cuentas a nombre de tu empresa. Con panel de administración y avisos al celular.',
    breadcrumb: 'Apps móviles',
    enFrase: 'app',
    intro:
      'Para lo que tu equipo hace en la calle o lo que tus usuarios abren varias veces por semana. Es el servicio del que más experiencia propia tenemos: dos de nuestros productos publicados son apps.',

    hero: null,
    heroAlt: '',

    problema: {
      title: 'Una app no siempre es la respuesta, y conviene saberlo antes',
      parrafos: [
        'Es el desarrollo más caro y más largo de los que hacemos, así que empecemos por lo incómodo: muchas veces no hace falta. Si lo que necesitas es que alguien consulte algo de vez en cuando, una aplicación web bien hecha en el navegador del celular lo resuelve por mucho menos y sin pasar por dos tiendas.',
        'La app gana cuando hay repetición o cuando hace falta el aparato. Un equipo en campo que registra trabajo sin señal estable, avisos que tienen que llegar aunque nadie abra el navegador, cámara, ubicación o lectura de códigos como parte del proceso. Ahí el ícono en la pantalla del celular vale lo que cuesta.',
        'Por eso la primera conversación no es sobre la app: es sobre qué tiene que pasar para que alguien la abra una segunda vez. Si esa respuesta no aparece, lo decimos y proponemos el camino más corto, aunque sea el más barato para ti.',
      ],
    },

    comoFunciona: {
      title: 'Cómo se construye tu app',
      intro:
        'El camino es el mismo tanto si se lleva al celular un sistema que ya existe como si se parte de cero.',
      pasos: [
        {
          titulo: 'Se define qué va al celular y qué no',
          desc:
            'Una app no repite todo lo que hace tu sistema: se queda con lo que se usa de pie, con una mano y con prisa. Esa lista corta se define al principio y es la que decide el plazo y el precio. Todo lo demás se queda en el panel web.',
          icono: 'celular',
          foto: null,
          alt: '',
        },
        {
          titulo: 'Una sola base para Android y iPhone',
          desc:
            'Se construye una vez y funciona en los dos, en vez de pagar y mantener dos desarrollos. Incluye los avisos al celular para lo que de verdad los necesita y un panel web desde donde tu equipo la administra sin depender de una actualización en la tienda.',
          icono: 'codigo',
          foto: null,
          alt: '',
        },
        {
          titulo: 'Publicación con las cuentas a tu nombre',
          desc:
            'Nos encargamos de subirla, con las fichas, las capturas y las políticas que exigen las tiendas. Las cuentas de desarrollador quedan registradas a nombre de tu empresa: si la app está publicada bajo la cuenta del proveedor, dependes de él para cada actualización, y eso es un problema el día que quieras cambiar de equipo.',
          icono: 'tienda',
          foto: null,
          alt: '',
        },
      ],
    },

    precio: {
      title: 'Cómo se fija el precio',
      parrafos: [
        'El plazo va de 2 a 5 meses y el precio se cotiza según el alcance. No publicamos una cifra de entrada porque el rango es demasiado ancho: llevar al celular un catálogo que ya existe no se parece a construir una app con cuentas de usuario, pagos y trabajo sin conexión.',
        'La cotización sale de definir qué va al celular, que es la primera etapa. De ahí salen las pantallas, el plazo y el precio, cerrados y por escrito antes de empezar.',
        'Se factura contra hito entregado. Las cuentas de las tiendas y el código quedan a nombre de tu empresa desde el primer día. La membresía anual de la tienda de Apple se cotiza aparte porque se paga aunque no publiques nada más.',
      ],
    },

    faqs: [
      {
        q: '¿Necesitamos una app o nos alcanza con una web móvil?',
        a: 'Si lo que se busca es consulta ocasional, una aplicación web bien hecha alcanza y cuesta bastante menos, además de evitar el proceso de las tiendas. La app conviene cuando hay repetición, cuando hacen falta avisos al celular, o cuando el proceso usa cámara, ubicación o funciona sin señal estable. Si nos cuentas el caso te decimos cuál conviene, aunque sea el camino más corto.',
      },
      {
        q: '¿Funciona en Android y en iPhone?',
        a: 'Sí, se construye sobre una sola base y funciona en los dos. La publicación en la tienda de Android va incluida. La de Apple se cotiza aparte porque implica una membresía anual que se paga por separado y un proceso de revisión propio con sus tiempos.',
      },
      {
        q: '¿Las cuentas de las tiendas quedan a nuestro nombre?',
        a: 'Sí, y es importante que sea así desde el inicio. Si la app está publicada bajo la cuenta del proveedor, dependes de ese proveedor para cualquier actualización, y traspasar una app publicada entre cuentas es un trámite lento. Las registramos a nombre de tu empresa desde el primer día.',
      },
      {
        q: '¿Se puede conectar con los sistemas que ya tenemos?',
        a: 'Sí, y suele ser el punto principal: la app casi nunca es un sistema nuevo, es una ventana al que ya existe. Qué se puede conectar y cómo se revisa en la primera etapa, antes de cotizar, porque de eso depende buena parte del alcance.',
      },
      {
        q: '¿Quién administra los contenidos después?',
        a: 'Tu equipo, desde un panel web. Contenidos, precios, avisos y parámetros se cambian ahí sin publicar una versión nueva en las tiendas, que es un proceso de días. Lo que sí necesita una actualización publicada es cambiar cómo funciona la app.',
      },
      {
        q: '¿Qué pasa después de publicarla?',
        a: 'Android e iPhone sacan versiones nuevas cada año y las tiendas exigen que la app se mantenga al día para seguir disponible. Eso no es opcional: una app sin mantenimiento termina retirada. El soporte posterior se acuerda aparte y cubre esas actualizaciones y las correcciones que aparezcan.',
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
