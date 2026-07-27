// Páginas de aterrizaje por rubro, en la raíz del sitio y con la keyword en el
// slug: /paginas-web-para-pollerias en vez de /proyectos/pollerias-restaurantes.
//
// El contenido de cada una está escrito por separado, a propósito. Una plantilla
// donde solo cambia el nombre del rubro es lo que Google clasifica como doorway
// page y desindexa en bloque: mismo esqueleto, mismas frases, distinta palabra.
// Aquí el esqueleto se comparte —lo pide la estructura editorial— pero no hay
// un solo párrafo reutilizado entre rubros.
//
// El precio y el plazo NO se repiten aquí: se leen de rubros.ts para que exista
// una sola fuente y el Offer del JSON-LD no pueda contradecir al texto visible.

import { rubros } from './rubros';

export interface LandingItem {
  title: string;
  desc: string;
}

export interface LandingFaq {
  q: string;
  a: string;
}

export interface Landing {
  /** Segmento de la URL: /paginas-web-para-{param} */
  param: string;
  /** Rubro de rubros.ts del que hereda precio, plazo y módulos. */
  rubroSlug: string;
  /** Rutas antiguas que deben responder 301 hacia esta página. */
  legacy: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  breadcrumb: string;
  eyebrow: string;
  intro: string;
  problema: { title: string; parrafos: readonly string[] };
  secciones: { title: string; intro: string; items: readonly LandingItem[] };
  funciones: { title: string; intro: string; items: readonly LandingItem[] };
  precio: { title: string; parrafos: readonly string[] };
  faqs: readonly LandingFaq[];
}

export const landings: readonly Landing[] = [
  // ─────────────────────────────────────────────────────────────────────────
  {
    param: 'pollerias',
    rubroSlug: 'pollerias-restaurantes',
    legacy: '/proyectos/pollerias-restaurantes',
    h1: 'Página web para pollerías y restaurantes en Perú',
    metaTitle: 'Página web para pollerías y restaurantes en Perú',
    metaDescription:
      'Carta digital con fotos y precios que actualizas tú, pedidos por WhatsApp con dirección, zona de reparto y reservas. Desde S/1,700 + IGV, entrega en 15 días.',
    breadcrumb: 'Página web para pollerías',
    eyebrow: 'Gastronomía',
    intro:
      'Tu carta en Google, los pedidos en tu WhatsApp y el margen completo para ti. Sin comisiones de apps y sin fotos de carta con precios del año pasado.',
    problema: {
      title: 'Por qué una pollería pierde plata sin web propia',
      parrafos: [
        'Hoy tu pollería vende bien el fin de semana, pero buena parte de esa venta pasa por una app de delivery que se lleva entre 20% y 30% de cada pedido. Ese porcentaje sale directo de tu margen, no del precio del pollo. Y hay algo peor que la comisión: el cliente es de la app, no tuyo. No tienes su número, no sabes cada cuánto pide y no le puedes avisar de una promoción. El día que la app suba su comisión o le dé prioridad al local de al lado, no tienes a dónde ir.',
        'En paralelo, cuando alguien busca "pollería en mi distrito" desde el celular, aparecen las cadenas y las apps. Tú no. Y si tienes presencia, muchas veces es una foto de la carta en Facebook con precios que ya cambiaron. El cliente no sabe si siguen vigentes, escribe por WhatsApp a preguntar, y a las siete de la noche de un sábado nadie alcanza a contestar.',
        'El resultado se repite todos los fines de semana: pedidos que se caen por falta de respuesta, precios que se explican de memoria uno por uno, y direcciones que llegan en audio y terminan mal apuntadas. Nada de eso se arregla poniendo a alguien más en el celular. Se arregla dándole al cliente un lugar donde vea la carta al día, arme su pedido solo y te lo mande listo para despachar.',
      ],
    },
    secciones: {
      title: 'Qué secciones necesita la web de una pollería',
      intro:
        'La web de una pollería no es una web institucional con fotos bonitas: es una carta que vende. Estas son las secciones que mueven la aguja en este rubro, en el orden en que las armamos.',
      items: [
        {
          title: 'Carta por categorías',
          desc: 'Pollos a la brasa, parrillas, criollos, guarniciones, bebidas y postres. Cada plato con foto real, descripción corta, precio y tamaño de porción. Es la sección más visitada y la que decide la compra: si el cliente no ve el precio, se va.',
        },
        {
          title: 'Promociones del fin de semana',
          desc: 'Combos familiares, oferta de martes, promoción de dos por uno. Van arriba y con fecha, porque tu venta se concentra de viernes a domingo y es la sección que cambia cada semana.',
        },
        {
          title: 'Zona de reparto',
          desc: 'El mapa de los distritos que atiendes, con el costo de envío y el monto mínimo de cada uno. Evita el ida y vuelta de "¿llegan a Comas?" y filtra los pedidos que no vas a poder despachar.',
        },
        {
          title: 'Sedes y horarios',
          desc: 'Dirección, referencia, teléfono y horario de cada local, con enlace a Google Maps. Si tienes dos sedes, cada una con su ficha: es lo que Google usa para mostrarte en las búsquedas "cerca de mí".',
        },
        {
          title: 'Reservas de mesa',
          desc: 'Para el salón: fecha, hora, número de personas y confirmación por WhatsApp. Baja la cola del domingo al mediodía y te deja planificar cocina y personal con anticipación.',
        },
        {
          title: 'El local y el contacto',
          desc: 'Corto, con fotos reales del salón y de la brasa. En este rubro la confianza entra por los ojos: el cliente quiere ver dónde está comprando antes de dar su dirección.',
        },
      ],
    },
    funciones: {
      title: 'Funcionalidades propias de una pollería',
      intro:
        'Sobre esa estructura montamos las funciones que solo tienen sentido en un negocio de comida preparada.',
      items: [
        {
          title: 'Carta que actualizas tú',
          desc: 'Cambias el precio del pollo entero desde el celular y en dos minutos está online, en todas las sedes. Sin llamarnos, sin costo por cambio y sin volver a subir una foto de la carta a Facebook.',
        },
        {
          title: 'Pedido por WhatsApp con dirección',
          desc: 'El cliente arma el pedido en la web y a tu WhatsApp llega un mensaje ordenado: platos, cantidades, total, dirección, referencia y medio de pago. Se acabaron las direcciones en audio.',
        },
        {
          title: 'Cobertura y tarifa de envío automática',
          desc: 'Defines los distritos que atiendes y el costo de envío de cada uno. Si el cliente está fuera de zona, la web se lo dice antes de que arme el pedido, no después.',
        },
        {
          title: 'QR para la mesa',
          desc: 'La misma carta digital sirve en el salón: pones el QR en cada mesa y el cliente ve fotos y precios desde su celular. Dejas de reimprimir cartas cada vez que cambia un precio.',
        },
        {
          title: 'Promociones programadas',
          desc: 'Configuras el combo del martes o el descuento de fin de semana con fecha de inicio y de fin. Se publica y se retira solo, sin que nadie tenga que acordarse el lunes.',
        },
        {
          title: 'Búsquedas locales de tu distrito',
          desc: 'Contenido y datos estructurados pensados para "pollería cerca de mí" y para el nombre de tu distrito, que es de donde llega la mayoría de tus pedidos.',
        },
      ],
    },
    precio: {
      title: 'Precio y plazo',
      parrafos: [
        'La página web para pollerías y restaurantes arranca en S/1,700 + IGV y se entrega en 15 días desde que apruebas el diseño. Ese precio incluye el dominio .com y el hosting del primer año, el certificado de seguridad, el correo corporativo, la carta administrable y el pedido por WhatsApp.',
        'El delivery con zona de cobertura, las reservas de mesa, el QR de salón y la facturación electrónica se suman como módulos según lo que tu local necesite. El alcance final se cotiza contigo por escrito antes de empezar, no sobre la marcha.',
        'Se paga 50% para arrancar y 50% contra entrega, con boleta o factura electrónica SUNAT. Incluye 2 rondas de cambios de diseño y 30 días de garantía después de la entrega. El dominio y el código quedan registrados a tu nombre.',
      ],
    },
    faqs: [
      {
        q: '¿Puedo cambiar los precios de la carta yo mismo?',
        a: 'Sí, y es la parte que más vas a usar. Entregamos un panel donde cambias precio, foto, descripción y disponibilidad de cada plato desde el celular, y el cambio se ve online al instante. No tiene costo ni límite de veces. Incluimos una capacitación grabada de 30 minutos para que lo maneje cualquiera de tu equipo y no dependas de una sola persona.',
      },
      {
        q: '¿El pedido me llega con la dirección del cliente?',
        a: 'Sí. El mensaje que entra a tu WhatsApp trae el detalle del pedido, el total, la dirección escrita, la referencia y el medio de pago elegido. Es texto, no audio: lo copias y se lo pasas al motorizado sin transcribir nada ni volver a preguntar.',
      },
      {
        q: '¿Puedo seguir en las apps de delivery y tener mi web al mismo tiempo?',
        a: 'Sí, y al inicio es lo recomendable. La idea no es que apagues las apps de un día para otro, sino que empieces a mover a tus clientes frecuentes hacia tu propio canal, donde no pagas comisión. Lo habitual es mantener las apps para captar gente nueva y usar la web con quienes ya te conocen.',
      },
      {
        q: 'Tengo dos locales, ¿la web sirve para los dos?',
        a: 'Sí. Cada sede va con su dirección, su horario, su teléfono y su zona de reparto, y el cliente elige el local al empezar el pedido: el mensaje llega al WhatsApp de esa sede. Si las cartas o los precios cambian entre locales, también se pueden separar.',
      },
      {
        q: '¿Sirve para el QR de las mesas del salón?',
        a: 'Sí, es la misma carta digital con un QR que imprimes y pones en cada mesa. El cliente escanea con la cámara del celular, sin instalar nada, y ve la carta con fotos y precios actualizados. Cuando cambias un precio en el panel, cambia también en el QR.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    param: 'ferreterias',
    rubroSlug: 'ferreterias',
    legacy: '/proyectos/ferreterias',
    h1: 'Página web para ferreterías en Perú',
    metaTitle: 'Página web para ferreterías en Perú',
    metaDescription:
      'Catálogo con SKU, marca y medida, cotizador por cantidad, precio mayorista y minorista, stock por sucursal y facturación SUNAT. Desde S/2,499 + IGV.',
    breadcrumb: 'Página web para ferreterías',
    eyebrow: 'Retail y comercio',
    intro:
      'Tu catálogo con código, medida y precio; un cotizador que arma la lista sola; y dos tarifas distintas para el contratista y para el mostrador.',
    problema: {
      title: 'El problema de vender ferretería sin catálogo online',
      parrafos: [
        'Una ferretería que mueve dos o tres mil códigos tiene un problema que otros rubros no tienen: nadie puede saberse el catálogo de memoria. El contratista manda la foto borrosa de un codo de PVC preguntando si lo tienes y en qué medida; tú vas al almacén, revisas, contestas, y para cuando respondes ya lo compró en otro lado. Cada cotización se arma a mano en el WhatsApp, sumando con la calculadora del celular.',
        'Al mismo tiempo manejas dos realidades de precio: el público que se lleva una bisagra y el contratista que se lleva veinte. Si publicas un solo precio, o espantas al contratista o regalas margen en el mostrador. Por eso muchas ferreterías terminan sin publicar ningún precio, y sin precio publicado no hay búsqueda de Google que te encuentre: la gente busca "precio de cemento en mi ciudad", no "ferretería".',
        'Y está el stock por sucursal. El cliente pregunta por un producto, le dices que sí, llega al local equivocado y no está. Es la clase de error que no cuesta una venta sino un cliente completo. Nada de esto se resuelve con una web de tres secciones y un formulario de contacto: se resuelve con un catálogo que entienda cómo se vende ferretería de verdad.',
      ],
    },
    secciones: {
      title: 'Qué secciones necesita la web de una ferretería',
      intro:
        'Una web de ferretería se organiza como está organizado tu almacén, no como una web de servicios. Estas son las secciones que la sostienen.',
      items: [
        {
          title: 'Catálogo por rubro',
          desc: 'Gasfitería, eléctrica, pintura, herramientas, construcción, seguridad y ferretería general. La navegación tiene que replicar cómo pregunta el cliente en el mostrador, no cómo está ordenado tu Excel de compras.',
        },
        {
          title: 'Ficha con especificación técnica',
          desc: 'Cada ítem con su código, marca, medida, material y unidad de venta, más foto. En este rubro el detalle es la venta: quien no encuentra la medida exacta no compra "algo parecido", se va a buscarla a otro lado.',
        },
        {
          title: 'Lista de compra y cotizador',
          desc: 'El cliente arma su lista con cantidades y pide la cotización desde la web. Es la sección que reemplaza las horas semanales que hoy se van sumando a mano por WhatsApp, con el margen de error que eso trae.',
        },
        {
          title: 'Precios por tipo de cliente',
          desc: 'Una vista para el público y otra para el contratista registrado. El mayorista entra con su usuario y ve su tarifa; el visitante común ve el precio de mostrador.',
        },
        {
          title: 'Stock por sucursal',
          desc: 'Si tienes más de un local, cada producto indica en cuál está disponible. Evita el viaje en vano, la llamada de reclamo y el "me dijeron que sí había".',
        },
        {
          title: 'Despacho y comprobantes',
          desc: 'Zona de reparto, despacho directo a obra y qué comprobante emites en cada caso. El contratista necesita factura y guía de remisión, y necesita saberlo antes de comprar, no al momento de pagar.',
        },
      ],
    },
    funciones: {
      title: 'Funcionalidades propias de una ferretería',
      intro:
        'Sobre esa base van las funciones que en otro rubro no harían falta y aquí son el negocio.',
      items: [
        {
          title: 'Búsqueda por código, marca o medida',
          desc: 'El buscador entiende "1/2 pulgada", "PVC 4" y el código tal como lo tienes en tu sistema. Es lo primero que usa un contratista y lo que decide si se queda en tu web o vuelve al WhatsApp.',
        },
        {
          title: 'Cotizador por cantidad',
          desc: 'El cliente carga cantidades, la web calcula el total y la cotización te llega formateada, lista para responder. Tú solo confirmas disponibilidad y plazo de entrega.',
        },
        {
          title: 'Dos listas de precio',
          desc: 'Minorista y mayorista, con la tarifa mayorista detrás de un registro que tú apruebas. Así publicas precios para Google sin dejar tu lista de contratista a la vista de la ferretería de al lado.',
        },
        {
          title: 'Carga masiva del catálogo',
          desc: 'No cargas tres mil productos a mano: importamos desde tu Excel o desde lo que exporte tu sistema de caja, y a partir de ahí actualizas por lote y no producto por producto.',
        },
        {
          title: 'Ficha técnica descargable',
          desc: 'Los PDF del fabricante colgados en cada producto. Le ahorra al cliente la consulta previa y te hace aparecer en las búsquedas por especificación, que son las que traen al comprador decidido.',
        },
        {
          title: 'Factura, boleta y guía de remisión',
          desc: 'Factura electrónica para constructoras, boleta para público general y guía para el despacho a obra, conectadas con tu facturación SUNAT.',
        },
      ],
    },
    precio: {
      title: 'Precio y plazo',
      parrafos: [
        'La plataforma web para ferreterías arranca en S/2,499 + IGV y toma alrededor de 25 días desde la aprobación del diseño. Es el más alto de los rubros que trabajamos, y la razón es concreta: el catálogo masivo, la carga inicial de productos y la doble lista de precios son trabajo real, no una plantilla con otro logo.',
        'El precio incluye dominio .com y hosting del primer año, certificado de seguridad, correo corporativo, la estructura del catálogo y la carga inicial a partir de tu archivo. El cotizador, las cuentas de contratista, el stock por sucursal y la integración con SUNAT se definen como módulos según cómo opere tu ferretería.',
        'Se paga 50% al empezar y 50% contra entrega, con factura electrónica, y en proyectos de este tamaño puedes dividirlo en hasta 3 cuotas sin interés. Garantía de 30 días post-entrega, y el dominio y el código a tu nombre.',
      ],
    },
    faqs: [
      {
        q: '¿Tengo que cargar mis tres mil productos a mano?',
        a: 'No. La carga inicial la hacemos nosotros a partir del Excel, el CSV o el reporte que exporte tu sistema de caja. Lo que necesitamos de tu lado es que ese archivo traiga código, descripción, unidad y precio; si además tiene marca y medida, mejor todavía. Después tú actualizas por lote desde el panel, sin volver a tocar producto por producto.',
      },
      {
        q: '¿Puedo mostrar el precio mayorista solo a mis contratistas?',
        a: 'Sí. El contratista se registra en la web, tú apruebas la cuenta desde el panel y recién entonces ve su lista de precios. Quien entra sin cuenta ve la tarifa de mostrador. Es la forma de publicar precios y aparecer en Google sin dejar tu tarifa mayorista al alcance de la competencia.',
      },
      {
        q: '¿Se puede ver el stock de cada sucursal por separado?',
        a: 'Sí, cada producto puede mostrar disponibilidad por local. Qué tan exacto sea depende de si tu sistema de caja permite conectarse: si lo permite, se sincroniza automáticamente; si no, se maneja como stock referencial que tu equipo actualiza por lote. Te decimos cuál de los dos casos aplica al tuyo antes de cotizar, no después de firmar.',
      },
      {
        q: '¿Cómo me llega la cotización que arma el cliente?',
        a: 'Como un mensaje ordenado a tu WhatsApp o a tu correo, con los códigos, las cantidades, el subtotal y los datos de contacto de quien la pidió. La revisas, confirmas stock y respondes. Si quien cotiza es un contratista registrado, la cotización ya sale con su tarifa aplicada.',
      },
      {
        q: '¿Sirve si le vendo sobre todo a constructoras y no al público?',
        a: 'Sí, y en ese caso la web se arma distinto. El catálogo abierto pasa a segundo plano y el peso se lo llevan el cotizador, las cuentas corporativas, el despacho a obra y la facturación. Es la misma base con otro orden de prioridades, y eso se define contigo antes de empezar a desarrollar.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    param: 'veterinarias',
    rubroSlug: 'veterinarias-petshop',
    legacy: '/proyectos/veterinarias-petshop',
    h1: 'Página web para veterinarias y pet shops en Perú',
    metaTitle: 'Página web para veterinarias y pet shops en Perú',
    metaDescription:
      'Reserva de citas por servicio, historial por mascota, recordatorio automático de vacunas, tienda de alimento y urgencias visibles. Desde S/1,700 + IGV.',
    breadcrumb: 'Página web para veterinarias',
    eyebrow: 'Salud y bienestar',
    intro:
      'Citas que se reservan solas, recordatorios de vacuna que salen sin que nadie los escriba y la tienda de alimento abierta a cualquier hora.',
    problema: {
      title: 'Lo que una veterinaria pierde sin sistema de citas ni recordatorios',
      parrafos: [
        'En una veterinaria el problema no es conseguir clientes nuevos: es no perder a los que ya atendiste. La vacuna anual, el refuerzo, la desparasitación cada tres meses. El dueño no lleva la cuenta, y si nadie se la recuerda no vuelve hasta que la mascota se enferma. Esa visita que no ocurre es ingreso recurrente perdido, y es el ingreso más fácil de conseguir que tiene el negocio, porque el cliente ya confía en ti.',
        'A eso se suma la agenda. Las citas entran por WhatsApp mientras estás en consulta, con las manos ocupadas. Alguien contesta tarde, se cruzan dos turnos en el mismo horario, o el dueño no llega y ese espacio queda muerto. El historial de cada mascota vive en un cuaderno o en la memoria del veterinario, así que cuando la atiende otro profesional se empieza de cero: se vuelve a preguntar el peso, las alergias y qué se le puso el año pasado.',
        'Y está la parte comercial: el alimento. Es compra recurrente, predecible y de buen margen, pero hoy se la lleva la tienda online que entrega al día siguiente. No porque cueste menos, sino porque está abierta el domingo a las once de la noche, que es justo cuando el dueño se da cuenta de que se acabó la bolsa.',
      ],
    },
    secciones: {
      title: 'Qué secciones necesita la web de una veterinaria',
      intro:
        'La web de una veterinaria resuelve dos cosas a la vez: que el dueño confíe en quién va a atender a su mascota y que pueda reservar sin escribirle a nadie. Estas son las secciones.',
      items: [
        {
          title: 'Servicios con precio referencial',
          desc: 'Consulta general, vacunación, desparasitación, cirugía, baño y peluquería, hotel. Cada uno con qué incluye, cuánto dura y desde cuánto cuesta. Es la primera pregunta que llega por WhatsApp y la que puedes dejar de contestar a mano.',
        },
        {
          title: 'Reserva de cita',
          desc: 'Por tipo de servicio y con la disponibilidad real de cada profesional. Una consulta médica y un baño no ocupan el mismo cupo ni duran lo mismo, así que van en agendas separadas y no se pisan.',
        },
        {
          title: 'Equipo veterinario',
          desc: 'Nombre, especialidad y foto de cada profesional. En este rubro la decisión es emocional: el dueño quiere saber quién va a atender a su perro antes de dejarlo, y esa sección es la que cierra la duda.',
        },
        {
          title: 'Urgencias',
          desc: 'Si atiendes emergencias, el horario de guardia y el número directo tienen que verse desde el celular sin hacer scroll. Es la búsqueda más urgente de todo el rubro y la que menos paciencia tiene.',
        },
        {
          title: 'Tienda de alimento y accesorios',
          desc: 'Marcas, tamaños de bolsa y filtro por especie, talla y edad. Es la sección que convierte la web en ingreso recurrente en vez de dejarla como un folleto bonito.',
        },
        {
          title: 'Ubicación, horario y estacionamiento',
          desc: 'Con mapa y referencia clara. Quien llega con una mascota enferma en brazos no está para adivinar dónde dejar el auto ni si abren los domingos.',
        },
      ],
    },
    funciones: {
      title: 'Funcionalidades propias de una veterinaria',
      intro:
        'Las funciones que marcan la diferencia en este rubro y que en casi ningún otro tendrían sentido.',
      items: [
        {
          title: 'Recordatorio automático de vacunas',
          desc: 'El sistema sabe qué le aplicaste a cada mascota y cuándo vence. Una semana antes sale el mensaje por WhatsApp, sin que nadie de tu equipo revise una lista. Es la función que más consultas recupera de todo el rubro.',
        },
        {
          title: 'Ficha e historial por mascota',
          desc: 'Peso, edad, raza, alergias, vacunas aplicadas y tratamientos previos, atados a la mascota y no al dueño. Quien atiende hoy ve lo que hizo quien atendió el mes pasado, aunque no sea el mismo profesional.',
        },
        {
          title: 'Agenda por profesional y por servicio',
          desc: 'Cupos distintos para consulta, vacunación y peluquería, cada uno con su duración real. Evita el cruce de turnos y el hueco muerto de media tarde que hoy nadie llena.',
        },
        {
          title: 'Suscripción de alimento',
          desc: 'El dueño programa su bolsa mensual y se le cobra y despacha sola. Es la forma concreta de recuperar la compra recurrente que hoy se está yendo a las tiendas online.',
        },
        {
          title: 'Reserva de baño con foto de referencia',
          desc: 'Al reservar la peluquería, el dueño sube la foto del corte que quiere. Menos reclamos al momento del recojo y menos explicaciones por teléfono antes de la cita.',
        },
        {
          title: 'Botón de urgencias siempre visible',
          desc: 'Acceso directo al WhatsApp o al teléfono de guardia, fijo en pantalla en el celular. En una emergencia nadie navega un menú: llama al primer número que ve.',
        },
      ],
    },
    precio: {
      title: 'Precio y plazo',
      parrafos: [
        'La página web para veterinarias y pet shops arranca en S/1,700 + IGV, con entrega en 18 días desde que apruebas el diseño. Incluye el dominio .com y el hosting del primer año, el certificado de seguridad, el correo corporativo, la sección de servicios, el equipo y la reserva de citas.',
        'La ficha clínica por mascota, los recordatorios automáticos de vacuna, la tienda con cobro en línea y la suscripción de alimento se suman como módulos, porque no toda veterinaria los necesita desde el primer día. Se puede empezar solo con las citas y sumar la tienda cuando el negocio lo pida.',
        'Se paga 50% para empezar y 50% contra entrega, con boleta o factura electrónica SUNAT. Incluye 2 rondas de cambios de diseño y 30 días de garantía. El dominio y el código fuente quedan a tu nombre desde el primer día.',
      ],
    },
    faqs: [
      {
        q: '¿Los recordatorios de vacuna se mandan solos?',
        a: 'Sí. Registras la vacuna aplicada y el sistema calcula el vencimiento según el esquema que uses. Una semana antes sale el mensaje por WhatsApp con el nombre de la mascota y qué le toca. Tu equipo no revisa listas ni escribe uno por uno: solo atiende a los que responden pidiendo cita.',
      },
      {
        q: '¿El dueño puede ver el historial de su mascota?',
        a: 'Se puede configurar de las dos maneras. Lo habitual es que el dueño vea lo suyo —vacunas aplicadas, próxima fecha, peso y servicios realizados— y que las notas clínicas internas queden solo para el equipo. Qué se muestra y qué no lo decides tú antes de que empecemos a desarrollar.',
      },
      {
        q: '¿Puedo vender alimento por la web y cobrar en línea?',
        a: 'Sí. La tienda maneja catálogo por especie, talla y edad, con control de stock y cobro por billetera digital o tarjeta. Encima se le puede sumar la suscripción mensual, que es donde está el ingreso recurrente. También puedes arrancar solo con catálogo y coordinación por WhatsApp, sin pasarela, y sumarla más adelante.',
      },
      {
        q: 'Atiendo urgencias de madrugada, ¿eso se puede mostrar?',
        a: 'Sí, y conviene que sea de lo primero que se vea. Va un bloque con el horario de guardia y un botón directo al teléfono o al WhatsApp de emergencias, fijo en pantalla cuando se navega desde el celular. En una urgencia nadie recorre un menú buscando el contacto.',
      },
      {
        q: '¿Sirve si solo quiero las citas y no la tienda?',
        a: 'Sí, y de hecho es como arranca la mayoría. Se entrega la web con servicios, equipo, ubicación y reserva de citas, y la tienda queda como un módulo que activas cuando lo decidas. No hay que rehacer nada para sumarla después: se construye desde el inicio pensando en que va a crecer.',
      },
    ],
  },
];

export const getLanding = (param: string) => landings.find((l) => l.param === param);

/** Rubros que ya migraron a una landing propia en la raíz del sitio. */
const migrados = new Map(landings.map((l) => [l.rubroSlug, `/paginas-web-para-${l.param}`]));

export const tieneLanding = (rubroSlug: string) => migrados.has(rubroSlug);

/** URL canónica de un rubro: su landing si ya migró, o su página de /proyectos.
 *  Todo enlace interno a un rubro tiene que pasar por aquí; si no, terminaría
 *  apuntando a una ruta que ahora responde 301. */
export const hrefRubro = (rubroSlug: string) =>
  migrados.get(rubroSlug) ?? `/proyectos/${rubroSlug}`;

export const rubroDeLanding = (l: Landing) => {
  const r = rubros.find((x) => x.slug === l.rubroSlug);
  if (!r) throw new Error(`La landing ${l.param} apunta a un rubro inexistente: ${l.rubroSlug}`);
  return r;
};
