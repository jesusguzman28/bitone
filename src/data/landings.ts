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
          desc: 'No cargas tres mil productos a mano: se importan desde tu Excel o desde lo que exporte tu sistema de caja, y a partir de ahí actualizas por lote. Revisamos tu archivo y cotizamos la migración antes de empezar.',
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
        'El precio incluye dominio .com y hosting del primer año, certificado de seguridad, correo corporativo y la estructura del catálogo. La migración de tu catálogo se cotiza aparte, según el estado del archivo con que llegues. El cotizador, las cuentas de contratista, el stock por sucursal y la integración con SUNAT se definen como módulos según cómo opere tu ferretería.',
        'Se paga 50% al empezar y 50% contra entrega, con factura electrónica, y en proyectos de este tamaño puedes dividirlo en hasta 3 cuotas sin interés. Garantía de 30 días post-entrega, y el dominio y el código a tu nombre.',
      ],
    },
    faqs: [
      {
        q: '¿Tengo que cargar mis tres mil productos a mano?',
        a: 'No producto por producto. La carga inicial la cotizamos aparte según el estado de tu archivo: si tienes un Excel o una exportación de tu sistema con código, descripción, unidad y precio, la migración es directa y rápida; si el catálogo está incompleto o en varios archivos sueltos, primero lo revisamos y te decimos qué implica. Una vez cargado, tú actualizas por lote desde el panel.',
      },
      {
        q: '¿Puedo mostrar el precio mayorista solo a mis contratistas?',
        a: 'Sí. El contratista se registra en la web, tú apruebas la cuenta desde el panel y recién entonces ve su lista de precios. Quien entra sin cuenta ve la tarifa de mostrador. Es la forma de publicar precios y aparecer en Google sin dejar tu tarifa mayorista al alcance de la competencia.',
      },
      {
        q: '¿Se puede ver el stock de cada sucursal por separado?',
        a: 'Sí, cada producto puede mostrar disponibilidad por local. La sincronización con tu sistema de caja se evalúa caso por caso: si tu sistema expone una integración, se conecta; si no —que es lo más común en el mercado peruano—, el stock se maneja como referencial y tu equipo lo actualiza por lote. Revisamos tu sistema y te decimos cuál aplica antes de cotizar, no después de firmar.',
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
  // ─────────────────────────────────────────────────────────────────────────
  {
    param: 'clinicas',
    rubroSlug: 'clinicas-consultorios',
    legacy: '/proyectos/clinicas-consultorios',
    h1: 'Página web para clínicas y consultorios en Perú',
    metaTitle: 'Página web para clínicas y consultorios en Perú',
    metaDescription:
      'Citas online por especialidad y por profesional, perfil de cada médico, convenios con seguros y entrega de resultados. Desde S/1,700 + IGV, entrega en 18 días.',
    breadcrumb: 'Página web para clínicas',
    eyebrow: 'Salud y bienestar',
    intro:
      'Citas que entran sin ocupar a recepción, el perfil de cada profesional visible antes de reservar y los convenios de seguro claros desde el primer clic.',
    problema: {
      title: 'Dónde se va el tiempo y la facturación de un consultorio',
      parrafos: [
        'En un consultorio, la recepción termina funcionando como un centro de llamadas. Media jornada se va agendando por teléfono y WhatsApp, confirmando, reprogramando y explicando por décima vez si atienden tal seguro. Mientras eso ocurre, el paciente que está parado en el mostrador espera. Es trabajo administrativo que no atiende a nadie y que se paga igual que el que sí.',
        'El segundo problema es la ausencia. Se agenda una cita, el paciente no llega, y ese bloque queda muerto: no se revende ni se recupera. En una especialidad con lista de espera cuesta el doble, porque además había alguien que sí habría ido. Sin un recordatorio que salga solo, el ausentismo depende de que el paciente se acuerde por su cuenta.',
        'Y está la búsqueda. Quien tiene dolor de muelas un domingo escribe "dentista de urgencia" y el nombre de su distrito, no el nombre de tu clínica. Si tu presencia digital es una página de Facebook con el horario del año pasado, esa consulta se la lleva quien sí aparece con dirección, especialidades, horario y un botón para reservar ahí mismo.',
      ],
    },
    secciones: {
      title: 'Qué secciones necesita la web de una clínica',
      intro:
        'En salud el visitante llega con una duda concreta y poca paciencia. La web tiene que responderla antes de pedirle nada a cambio. Estas son las secciones, en orden de lo que más se consulta.',
      items: [
        {
          title: 'Especialidades',
          desc: 'Cada especialidad con qué atiende, qué procedimientos cubre y desde cuánto cuesta la consulta. Es la sección que hoy contesta recepción por teléfono y la que Google usa para entender de qué trata tu clínica.',
        },
        {
          title: 'Perfil de cada profesional',
          desc: 'Nombre, especialidad, número de colegiatura, formación y foto. En salud la confianza se deposita en la persona antes que en el local: el paciente quiere saber quién lo va a atender antes de reservar.',
        },
        {
          title: 'Reserva de cita',
          desc: 'Por especialidad y por profesional, sobre la disponibilidad real de cada agenda. Una limpieza dental y una endodoncia no ocupan el mismo bloque, así que la duración se configura por tipo de procedimiento.',
        },
        {
          title: 'Convenios y formas de pago',
          desc: 'Qué seguros y EPS atiendes, qué cubre cada convenio y qué queda de copago. Es la segunda consulta más frecuente del rubro y evita la conversación incómoda en caja.',
        },
        {
          title: 'Sedes, horarios y urgencias',
          desc: 'Dirección con referencia, horario por día y qué ocurre fuera de horario. Si atiendes emergencias, va arriba y visible desde el celular sin hacer scroll.',
        },
        {
          title: 'Indicaciones previas',
          desc: 'Qué traer, si hay que venir en ayunas, cuánto dura el procedimiento y con cuánta anticipación llegar. Reduce las llamadas previas y las citas que se pierden porque el paciente llegó sin cumplir la indicación.',
        },
      ],
    },
    funciones: {
      title: 'Funcionalidades propias de una clínica',
      intro:
        'Las funciones que sostienen la operación diaria de un consultorio, más allá de la vitrina.',
      items: [
        {
          title: 'Agenda por especialista y procedimiento',
          desc: 'Cada profesional con su calendario real y cada procedimiento con su duración. La agenda deja de cruzarse y los bloques largos dejan de ocuparse con consultas de quince minutos.',
        },
        {
          title: 'Recordatorio de cita por WhatsApp',
          desc: 'Mensaje automático el día anterior con fecha, hora y profesional, y opción de confirmar o reprogramar. Si el paciente reprograma, el bloque se libera y otro lo puede tomar.',
        },
        {
          title: 'Ficha de paciente con acceso por rol',
          desc: 'Datos, antecedentes, alergias y evolución, con permisos separados: recepción ve la agenda, el profesional ve la ficha. Los datos de salud son sensibles bajo la ley peruana de protección de datos personales y eso se diseña desde el inicio, no después.',
        },
        {
          title: 'Entrega de resultados en línea',
          desc: 'El paciente descarga su informe desde un enlace privado, sin volver al local ni pedirlo por WhatsApp. Menos viajes para él y menos gestión para recepción.',
        },
        {
          title: 'Convenio declarado al reservar',
          desc: 'El paciente indica su seguro al agendar y ve qué cubre y qué copago le corresponde. La caja deja de ser el lugar donde aparecen las sorpresas.',
        },
        {
          title: 'Presencia local por especialidad',
          desc: 'Contenido y datos estructurados por especialidad y por distrito, que es exactamente como se busca en salud: "ortodoncista en Surco", no "clínica dental".',
        },
      ],
    },
    precio: {
      title: 'Precio y plazo',
      parrafos: [
        'La página web para clínicas y consultorios arranca en S/1,700 + IGV, con entrega en 18 días desde que apruebas el diseño. Incluye dominio .com y hosting del primer año, certificado de seguridad, correo corporativo, las especialidades, los perfiles del equipo y la reserva de citas.',
        'La ficha de paciente con accesos por rol, la entrega de resultados en línea, la declaración de convenio y los recordatorios automáticos se suman como módulos. En este rubro conviene definirlos con calma: cada uno toca datos de paciente, y el alcance se acuerda por escrito antes de escribir código.',
        'Se paga 50% de adelanto y 50% contra entrega, con boleta o factura electrónica SUNAT. Incluye 2 rondas de cambios de diseño y 30 días de garantía. El dominio y el código fuente quedan a tu nombre.',
      ],
    },
    faqs: [
      {
        q: '¿La agenda se puede separar por especialidad y por doctor?',
        a: 'Sí, y es la base del sistema. Cada profesional tiene su calendario con sus días y horas reales, y cada procedimiento su propia duración: una consulta de control no ocupa lo mismo que una cirugía menor. El paciente elige especialidad, después profesional, y solo ve los bloques que existen de verdad.',
      },
      {
        q: '¿Qué pasa con los datos de los pacientes?',
        a: 'Los datos de salud son datos sensibles bajo la ley peruana de protección de datos personales, así que el acceso se define por rol y acordamos contigo qué se guarda y qué no antes de desarrollar. Nada del paciente se publica ni se comparte sin su registro. Si prefieres que la ficha clínica siga en tu sistema actual, la web se queda solo con la agenda.',
      },
      {
        q: '¿Puedo mostrar con qué seguros y EPS trabajo?',
        a: 'Sí, y conviene que sea de lo primero que se vea: es una de las razones más frecuentes por las que un paciente descarta una clínica. Se lista cada convenio con qué cubre y qué queda de copago, y al reservar el paciente declara su seguro para llegar a caja sin sorpresas.',
      },
      {
        q: '¿Los recordatorios reducen las ausencias?',
        a: 'Ayudan, pero no te vamos a prometer un porcentaje que no podemos garantizar. Lo concreto es que el aviso sale el día anterior con opción de confirmar o reprogramar, y que cuando alguien reprograma el bloque se libera para otro paciente. Ese bloque recuperado es la ganancia medible.',
      },
      {
        q: '¿Puedo entregar resultados por la web?',
        a: 'Sí, con un enlace privado por paciente desde donde descarga su informe o su imagen. Se define contigo cuánto tiempo queda disponible y quién del equipo puede subirlo. Si prefieres seguir entregando en mostrador, el módulo simplemente no se activa y no lo pagas.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    param: 'academias',
    rubroSlug: 'academias-preuniversitarios',
    legacy: '/proyectos/academias-preuniversitarios',
    h1: 'Página web para academias preuniversitarias en Perú',
    metaTitle: 'Página web para academias preuniversitarias en Perú',
    metaDescription:
      'Ciclos y horarios publicados, matrícula en línea con pago en cuotas, vitrina de ingresantes y portal de padres. Desde S/1,999 + IGV, entrega en 25 días.',
    breadcrumb: 'Página web para academias',
    eyebrow: 'Educación',
    intro:
      'Ciclos y horarios claros, matrícula que se llena sola y tus ingresantes donde los padres los ven antes de decidir.',
    problema: {
      title: 'La matrícula se gana en las semanas previas al ciclo',
      parrafos: [
        'El negocio de una academia se define en pocas semanas al año. Entre que termina el ciclo escolar y arranca el nuevo, las familias comparan tres o cuatro opciones y eligen. Si en esa ventana tu información no está publicada —qué ciclos abren, qué días, a qué hora, cuánto cuesta y cuándo empieza—, esa comparación la pierdes sin haber hablado con nadie.',
        'Hoy toda esa información vive en un flyer de WhatsApp y en la cabeza de quien contesta el celular. La matrícula entra por mensaje, el pago llega por billetera sin referencia clara, y alguien anota a mano quién pagó qué cuota. Con doscientos alumnos matriculados esa hoja de cálculo deja de alcanzar, y las cuotas atrasadas terminan persiguiéndose una por una.',
        'Y falta lo que más pesa en la decisión: los resultados. Los padres quieren ver ingresantes, a qué universidad y en qué proceso. Si esa vitrina no existe en tu web, se quedan con la de la academia de al lado, que sí la publicó. Es el activo más valioso que tienes y en la mayoría de los casos vive solo en un banner impreso en la fachada.',
      ],
    },
    secciones: {
      title: 'Qué secciones necesita la web de una academia',
      intro:
        'Aquí decide un padre, no el alumno, y decide comparando. La web tiene que dejar cerrada la comparación sin que nadie tenga que escribir por WhatsApp.',
      items: [
        {
          title: 'Ciclos abiertos y fechas',
          desc: 'Qué ciclos hay, cuándo empiezan, cuánto duran y hasta cuándo se matricula. Con la fecha límite visible, porque en este rubro la decisión es estacional y llega con plazo encima.',
        },
        {
          title: 'Horarios por turno',
          desc: 'Mañana, tarde, noche y fin de semana, con los cursos de cada turno. Es la variable que define si una familia puede inscribirse o no, y hoy se responde de a un mensaje por vez.',
        },
        {
          title: 'Precio y forma de pago',
          desc: 'Costo del ciclo, matrícula, cuántas cuotas y de cuánto es cada una. Publicarlo le ahorra la consulta a quien sí puede pagar y te ahorra la conversación con quien no.',
        },
        {
          title: 'Ingresantes y resultados',
          desc: 'Tu vitrina: quiénes ingresaron, a qué universidad y en qué proceso. Es la sección que cierra la decisión del padre y la que más se comparte por WhatsApp entre familias.',
        },
        {
          title: 'Plana docente',
          desc: 'Quién dicta cada curso y con qué formación. En preuniversitaria el profesor de física con nombre y apellido convence más que cualquier adjetivo sobre la institución.',
        },
        {
          title: 'Inscripción en línea',
          desc: 'Formulario con los datos del alumno, la carrera objetivo y el turno elegido. Lo que hoy se arma en cinco mensajes de ida y vuelta queda capturado en un solo paso.',
        },
      ],
    },
    funciones: {
      title: 'Funcionalidades propias de una academia',
      intro:
        'Las funciones que convierten la web en el canal de matrícula y no solo en un folleto con horarios.',
      items: [
        {
          title: 'Matrícula en línea',
          desc: 'El alumno o el padre completa sus datos, elige ciclo y turno y queda inscrito. Recibes el registro completo en vez de reconstruirlo leyendo una conversación de WhatsApp.',
        },
        {
          title: 'Pago del ciclo en cuotas',
          desc: 'Cuotas configurables con billetera digital o tarjeta, cada pago asociado al alumno. Se termina el cruce manual entre el comprobante que llegó al celular y la lista de matriculados.',
        },
        {
          title: 'Aviso de cuota por vencer',
          desc: 'Mensaje automático antes del vencimiento y otro si la cuota no llegó. Perseguir pagos deja de ocupar a alguien del equipo todos los meses.',
        },
        {
          title: 'Vitrina de ingresantes administrable',
          desc: 'Cargas los resultados de cada proceso desde el panel, con foto, universidad y carrera. Se actualiza el mismo día que salen, no cuando alguien pueda tocar el código.',
        },
        {
          title: 'Página propia por convocatoria',
          desc: 'Cada ciclo con su página y su fecha de cierre, lista para la campaña de temporada. Cuando la convocatoria vence, se archiva sin que nadie tenga que acordarse de bajarla.',
        },
        {
          title: 'Portal de padres',
          desc: 'Asistencia, notas de simulacro y estado de pagos en un solo lugar. Reduce las llamadas de "¿cómo va mi hijo?" y hace visible un servicio que ya estás dando gratis.',
        },
      ],
    },
    precio: {
      title: 'Precio y plazo',
      parrafos: [
        'La plataforma web para academias y preuniversitarios arranca en S/1,999 + IGV y toma alrededor de 25 días desde la aprobación del diseño. Incluye dominio .com y hosting del primer año, certificado de seguridad, correo corporativo, la estructura de ciclos y horarios, la plana docente y la vitrina de ingresantes.',
        'La matrícula en línea con pago en cuotas, los avisos de cobranza y el portal de padres se cotizan como módulos, porque dependen de cuántos alumnos manejas y de si ya usas algún sistema académico que haya que respetar.',
        'Conviene arrancar con anticipación: si el ciclo empieza en enero, el desarrollo debería estar cerrado en noviembre para que la campaña de matrícula corra sobre la web y no sobre un flyer. Se paga 50% de adelanto y 50% contra entrega, con hasta 3 cuotas sin interés, factura electrónica, 30 días de garantía y el código a tu nombre.',
      ],
    },
    faqs: [
      {
        q: '¿Puedo cobrar la matrícula y las cuotas por la web?',
        a: 'Sí. Se configura el costo del ciclo, cuántas cuotas y en qué fechas vencen, con cobro por billetera digital o tarjeta. Cada pago queda asociado al alumno, así que dejas de cruzar a mano el comprobante que llegó por WhatsApp contra la lista de matriculados.',
      },
      {
        q: '¿Cómo publico los resultados de ingresantes?',
        a: 'Desde el panel y tú mismo: foto, nombre, universidad, carrera y proceso. Es la sección que más pesa en la decisión de un padre, así que tiene que poder actualizarse el mismo día que salen los resultados, sin depender de nosotros ni esperar turno.',
      },
      {
        q: 'Abro varios ciclos al año, ¿hay que rehacer la web cada vez?',
        a: 'No. Cada ciclo se crea desde el panel con sus fechas, turnos y precio, y puede tener su propia página de campaña para pautar. Cuando la convocatoria cierra, se archiva y deja de mostrarse sin que nadie tenga que borrar nada a mano.',
      },
      {
        q: '¿Los padres pueden ver cómo va su hijo?',
        a: 'Con el módulo de portal de padres, sí: asistencia, notas de simulacro y estado de pagos, y tú decides qué se muestra y qué no. Sin ese módulo la web queda como vitrina y canal de matrícula, que ya resuelve la parte comercial del problema.',
      },
      {
        q: '¿Cuánto antes del ciclo debería tener la web lista?',
        a: 'El desarrollo toma unos 25 días desde que apruebas el diseño, así que lo sano es empezar dos meses antes del inicio de la campaña de matrícula, no del ciclo. Si llegas justo, se puede priorizar ciclos e inscripción para el lanzamiento y dejar la vitrina y el portal para después del arranque.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    param: 'gimnasios',
    rubroSlug: 'gimnasios-crossfit',
    legacy: '/proyectos/gimnasios-crossfit',
    h1: 'Página web para gimnasios en Perú',
    metaTitle: 'Página web para gimnasios y boxes de CrossFit en Perú',
    metaDescription:
      'Horario de clases con cupos, planes y membresías publicados, cobro recurrente automático y perfil de entrenadores. Desde S/1,700 + IGV, entrega en 20 días.',
    breadcrumb: 'Página web para gimnasios',
    eyebrow: 'Salud y bienestar',
    intro:
      'El horario de clases publicado y al día, los planes claros para quien te está comparando, y la mensualidad cobrándose sola en vez de perseguirse por WhatsApp.',
    problema: {
      title: 'Un gimnasio no vive de la venta, vive de la renovación',
      parrafos: [
        'La mensualidad se cobra a mano y ahí está el agujero. Alguien revisa quién venció, escribe por WhatsApp, espera el comprobante de la billetera y lo anota. Cada mes se repite y cada mes se escapan algunos. El socio que no recibió el mensaje simplemente deja de venir, y meses después nadie sabe si se fue o si solo nunca le llegó el recordatorio. La cobranza manual no cuesta solo tiempo: pierde socios que no se habían ido.',
        'Después está la grilla de clases. Si no está publicada, cada interesado pregunta lo mismo: a qué hora hay funcional, si queda cupo, quién la dicta. Y si está publicada en una foto de Instagram de hace tres semanas es peor, porque el socio llega a una clase que ya no existe. Sin cupos en línea, o la sala queda a medio llenar o entran veinte personas a un espacio para doce.',
        'En captación, además, compites contra la comparación fría. Quien busca "gimnasio en mi distrito" abre tres pestañas y compara precio, horario y ubicación en dos minutos. Si tus planes no están publicados no entras a esa comparación: te descartan antes de escribirte, y ni siquiera te enteras de que existió la oportunidad.',
      ],
    },
    secciones: {
      title: 'Qué secciones necesita la web de un gimnasio',
      intro:
        'Quien entra a la web de un gimnasio ya decidió que quiere entrenar; está eligiendo dónde. La web tiene que ganar esa comparación en menos de dos minutos.',
      items: [
        {
          title: 'Planes y precios',
          desc: 'Mensual, trimestral, anual, pareja, estudiante. Cada uno con qué incluye y qué no. Es lo primero que compara quien te está evaluando y lo que decide si te escribe o cierra la pestaña.',
        },
        {
          title: 'Horario de clases',
          desc: 'La grilla de la semana con disciplina, hora, entrenador y cupo. Publicada y al día, porque es la información que más se consulta y la que más rápido queda desactualizada.',
        },
        {
          title: 'Entrenadores',
          desc: 'Quién dicta cada clase, su especialidad y sus certificaciones. En este rubro el socio elige por el entrenador tanto como por las máquinas, y ese nombre propio es difícil de copiar.',
        },
        {
          title: 'El local por dentro',
          desc: 'Fotos reales de las máquinas, la sala de clases, los vestidores y el estacionamiento. Quien está por comprometerse a una mensualidad quiere ver el espacio antes de ir a verlo.',
        },
        {
          title: 'Clase de prueba',
          desc: 'Con formulario y fecha. Es la conversión más fácil del rubro porque no estás vendiendo la membresía todavía: estás vendiendo la primera visita, que es donde se cierra sola.',
        },
        {
          title: 'Ubicación y horario del local',
          desc: 'Mapa, referencia y horario por día, feriados incluidos. La cercanía es un factor decisivo en gimnasios y tiene que quedar resuelta en la primera pantalla.',
        },
      ],
    },
    funciones: {
      title: 'Funcionalidades propias de un gimnasio',
      intro:
        'Lo que convierte la web en la operación del gimnasio, y no en un folleto con fotos del local.',
      items: [
        {
          title: 'Cobro recurrente de la membresía',
          desc: 'La mensualidad se cobra sola a la tarjeta o billetera suscrita, en la fecha que corresponde y con aviso previo. Deja de perseguirse por WhatsApp y deja de perderse por olvido.',
        },
        {
          title: 'Reserva de clase con cupo',
          desc: 'El socio reserva desde el celular, el cupo se descuenta y al llenarse entra lista de espera. Si alguien cancela, el siguiente recibe el aviso sin que nadie lo gestione.',
        },
        {
          title: 'Pausa de membresía',
          desc: 'Por viaje, lesión o enfermedad, el socio congela su plan desde su perfil y se reanuda solo. Es la diferencia entre una pausa de un mes y una baja definitiva.',
        },
        {
          title: 'Check-in con QR',
          desc: 'En la puerta el socio escanea y se valida su asistencia y el estado de su plan. Sin cuaderno de firmas y sin discutir en recepción quién está al día.',
        },
        {
          title: 'Perfil del socio con progreso',
          desc: 'Peso, medidas y marcas personales guardadas en su cuenta. Es lo que hace que el socio vuelva a abrir la plataforma entre clase y clase, y no solo cuando le toca pagar.',
        },
        {
          title: 'Página por promoción',
          desc: 'La promoción de enero o el plan de verano con su propia página y su fecha de cierre, lista para pautar. Cuando vence, deja de mostrarse sola.',
        },
      ],
    },
    precio: {
      title: 'Precio y plazo',
      parrafos: [
        'La página web para gimnasios y boxes de CrossFit arranca en S/1,700 + IGV, con entrega en 20 días desde que apruebas el diseño. Incluye dominio .com y hosting del primer año, certificado de seguridad, correo corporativo, los planes, la grilla de horarios y el perfil de los entrenadores.',
        'El cobro recurrente, la reserva de clases con cupo, el check-in con QR y el perfil del socio se suman como módulos. El cobro recurrente suele ser el primero que se paga solo: cada renovación que hoy se cae por falta de seguimiento es una mensualidad completa que no vuelve.',
        'Se paga 50% de adelanto y 50% contra entrega, con boleta o factura electrónica SUNAT. Incluye 2 rondas de cambios de diseño y 30 días de garantía. El dominio y el código quedan a tu nombre.',
      ],
    },
    faqs: [
      {
        q: '¿La mensualidad se cobra sola?',
        a: 'Con el módulo de cobro recurrente, sí: el socio suscribe su tarjeta o billetera una vez y el cargo se hace en la fecha que corresponde, con aviso previo. Si el cobro falla, el sistema reintenta y notifica. Lo que hoy es una tarea manual de fin de mes pasa a ser una excepción que atiendes solo cuando algo no funcionó.',
      },
      {
        q: '¿Puedo poner cupos por clase?',
        a: 'Sí. Cada clase se configura con disciplina, hora, entrenador y cupo máximo. Cuando se llena entra lista de espera, y si alguien cancela el siguiente recibe el aviso automáticamente. Así dejas de tener veinte personas en una sala pensada para doce, que es el reclamo más común del rubro.',
      },
      {
        q: '¿Qué pasa si un socio se va de viaje un mes?',
        a: 'Con la pausa de membresía la congela desde su perfil por el plazo máximo que tú definas, y se reanuda sola al vencer. Es la función que evita que una ausencia temporal termine en baja: cuando hay que llamar y pedir permiso para pausar, mucha gente prefiere cancelar y ya.',
      },
      {
        q: '¿Sirve para un box de CrossFit y no solo para un gimnasio de máquinas?',
        a: 'Sí, y en un box pesa más. Las clases tienen horario fijo, cupo limitado y entrenador asignado, que es exactamente lo que resuelve la reserva con cupos. El perfil del socio además sirve para registrar marcas personales, que en CrossFit es parte de la experiencia y no un extra.',
      },
      {
        q: '¿Tengo que publicar mis precios en la web?',
        a: 'Obligatorio no es, pero en este rubro conviene. Quien busca gimnasio compara tres opciones en dos minutos y descarta las que no muestran precio, porque asume que es caro o que va a tener que negociar. Si prefieres no publicarlo, se reemplaza por la clase de prueba con formulario, que convierte casi igual y te deja el contacto.',
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
