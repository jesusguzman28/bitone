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
      'Catálogo con código, marca y medida, cotizador por cantidad, precio mayorista y minorista, stock por sucursal y facturación SUNAT. Desde S/2,499 + IGV.',
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
        'El precio incluye dominio .com y hosting del primer año, certificado de seguridad, correo corporativo y la estructura del catálogo. La migración de tu catálogo se cotiza aparte, según el estado del archivo con que llegues. El cotizador, las cuentas de contratista, el stock por sucursal y la conexión con SUNAT se definen como módulos según cómo opere tu ferretería.',
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
        a: 'Sí, cada producto puede mostrar disponibilidad por local. La sincronización con tu sistema de caja se evalúa caso por caso: si tu sistema permite conectarse, se conecta; si no —que es lo más común en el mercado peruano—, el stock se maneja como referencial y tu equipo lo actualiza por lote. Revisamos tu sistema y te decimos cuál aplica antes de cotizar, no después de firmar.',
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
      'Ciclos y horarios claros, matrícula que se llena sola y tu vitrina de ingresantes a San Marcos, UNI, Villarreal o Católica donde los padres la ven antes de decidir.',
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
  // ─────────────────────────────────────────────────────────────────────────
  {
    param: 'talleres-mecanicos',
    rubroSlug: 'talleres-mecanicos',
    legacy: '/proyectos/talleres-mecanicos',
    h1: 'Página web para talleres mecánicos en Perú',
    metaTitle: 'Página web para talleres mecánicos en Perú',
    metaDescription:
      'Agenda de servicio en línea, cotización por tipo de vehículo, aprobación digital del presupuesto e historial por placa. Desde S/1,700 + IGV, entrega en 18 días.',
    breadcrumb: 'Página web para talleres mecánicos',
    eyebrow: 'Servicios',
    intro:
      'La cita reservada sin llamadas, el presupuesto aprobado por escrito y el cliente viendo en qué va su carro sin marcar cinco veces al taller.',
    problema: {
      title: 'El taller pierde horas en el teléfono, no en el motor',
      parrafos: [
        'La escena se repite todos los días: el cliente llama para preguntar si puede traer el carro mañana, llama otra vez para saber cuánto va a salir, y llama tres veces más para saber si ya está listo. Cada llamada saca a alguien de debajo de un vehículo. En un taller de tres mecánicos, esa interrupción constante cuesta más que cualquier repuesto: cuesta horas facturables que nunca se cobran a nadie.',
        'Después está la cotización. Se arma de memoria, se dicta por teléfono y se aprueba de palabra. Cuando el cliente viene a recoger y el monto no coincide con lo que él recuerda, no hay nada por escrito que respalde al taller. La discusión se resuelve casi siempre a favor del cliente, porque el taller no puede probar qué autorizó y cuándo. Ese descuento improvisado sale del margen del trabajo.',
        'Y está el ingreso del vehículo. Si nadie documenta cómo llegó el carro —el rayón del guardafango, el espejo suelto, el kilometraje—, cualquier reclamo posterior es palabra contra palabra. Un solo reclamo mal resuelto por un daño que ya venía cuesta más que digitalizar la recepción completa del taller.',
      ],
    },
    secciones: {
      title: 'Qué secciones necesita la web de un taller mecánico',
      intro:
        'Aquí no se compra por impulso: se busca a alguien confiable a quien dejarle un bien caro. La web tiene que construir esa confianza y quitarte el teléfono de encima.',
      items: [
        {
          title: 'Servicios y especialidad',
          desc: 'Mantenimiento preventivo, afinamiento, frenos, suspensión, planchado y pintura, diagnóstico electrónico. Con qué marcas trabajas y cuáles no. Filtrar es tan valioso como captar: te ahorra el trabajo que no puedes hacer.',
        },
        {
          title: 'Reserva de cita',
          desc: 'Día, hora y tipo de servicio, con la carga real del taller. Un cambio de aceite y un trabajo de suspensión no ocupan el mismo espacio ni el mismo elevador, así que la duración se configura por servicio.',
        },
        {
          title: 'Precios referenciales por servicio',
          desc: 'Desde cuánto sale un afinamiento o un cambio de pastillas, aclarando que el monto final depende del diagnóstico. Publicarlo evita la llamada de tanteo y te posiciona frente a quien no publica nada.',
        },
        {
          title: 'El taller por dentro',
          desc: 'Fotos del local, los elevadores, el equipo de diagnóstico y los mecánicos trabajando. Quien va a dejar su carro quiere ver dónde lo va a dejar, y esa foto vale más que cualquier frase sobre experiencia.',
        },
        {
          title: 'Ubicación y horario',
          desc: 'Dirección con referencia clara, horario por día y si hay servicio de grúa o recojo. Un carro varado no llega solo, y esa es la primera pregunta de una emergencia.',
        },
        {
          title: 'Garantía del trabajo',
          desc: 'Qué cubre, por cuánto tiempo y qué la anula. Es la sección que más pesa cuando el cliente compara dos talleres con precios parecidos, y casi nadie la publica.',
        },
      ],
    },
    funciones: {
      title: 'Funcionalidades propias de un taller',
      intro:
        'Sobre eso van las funciones que convierten la web en la recepción digital del taller.',
      items: [
        {
          title: 'Cotización por tipo de vehículo',
          desc: 'El cliente indica marca, modelo y año, y recibe un estimado por servicio en vez de un "depende". El precio se ajusta después del diagnóstico, pero la conversación arranca con un número y no con una llamada.',
        },
        {
          title: 'Ingreso documentado con fotos',
          desc: 'Al recibir el vehículo se registran fotos del estado inicial, el kilometraje y los daños previos. Protege al taller de reclamos por golpes que ya venían y protege al cliente de que aparezcan nuevos.',
        },
        {
          title: 'Aprobación digital del presupuesto',
          desc: 'El diagnóstico llega al cliente con detalle de mano de obra y repuestos, y él aprueba desde el celular antes de que alguien toque una llave. Queda registrado quién autorizó qué y a qué hora.',
        },
        {
          title: 'Estado del vehículo en línea',
          desc: 'El cliente entra y ve en qué va: en diagnóstico, esperando repuesto, en trabajo, listo para retiro. Las cinco llamadas diarias se convierten en cero, sin que nadie tenga que contestar nada.',
        },
        {
          title: 'Historial por placa',
          desc: 'Cada servicio queda registrado contra la placa del vehículo, no contra el nombre del dueño. Sirve para el próximo mantenimiento, para un reclamo y para el valor de reventa del carro.',
        },
        {
          title: 'Recordatorio de mantenimiento',
          desc: 'A los kilómetros o los meses que definas, sale el aviso del próximo cambio de aceite o revisión. Es la forma de que el cliente vuelva sin que tengas que salir a buscarlo.',
        },
      ],
    },
    precio: {
      title: 'Precio y plazo',
      parrafos: [
        'La página web para talleres mecánicos arranca en S/1,700 + IGV, con entrega en 18 días desde que apruebas el diseño. Incluye dominio .com y hosting del primer año, certificado de seguridad, correo corporativo, los servicios con precios referenciales, la reserva de cita y la sección de garantía.',
        'El ingreso documentado con fotos, la aprobación digital de presupuesto, el panel de estado del vehículo y el historial por placa se suman como módulos. Conviene ordenarlos por lo que más te duele hoy: si el problema son las llamadas, el panel de estado; si son los reclamos, el ingreso con fotos.',
        'Se paga 50% de adelanto y 50% contra entrega, con boleta o factura electrónica SUNAT. Incluye 2 rondas de cambios de diseño y 30 días de garantía sobre el desarrollo. El dominio y el código quedan a tu nombre.',
      ],
    },
    faqs: [
      {
        q: '¿Puedo dar un precio si no he visto el carro?',
        a: 'Puedes dar un rango, que es lo que el cliente necesita para decidir si te llama. El cotizador pide marca, modelo y año, y devuelve un estimado por servicio con la aclaración de que el monto final depende del diagnóstico. Es más honesto que un precio cerrado y mucho más útil que un "depende" que obliga a llamar.',
      },
      {
        q: '¿Cómo me protege el ingreso con fotos?',
        a: 'Al recibir el vehículo se registran fotos del estado inicial, el kilometraje y los daños que ya traía, y ese registro queda con fecha y hora. Cuando aparece un reclamo por un rayón, hay evidencia de si estaba antes o no. Es la función que más rápido se paga sola, porque un solo reclamo mal resuelto cuesta más que el módulo completo.',
      },
      {
        q: '¿El cliente puede ver en qué va su carro sin llamar?',
        a: 'Sí, con el panel de estado. Entra con la placa o con un enlace que le mandas al confirmar el ingreso, y ve el avance: en diagnóstico, esperando repuesto, en trabajo, listo para retiro. Si quieres, cada cambio de estado dispara un aviso por WhatsApp para que ni siquiera tenga que entrar.',
      },
      {
        q: '¿La aprobación del presupuesto tiene validez?',
        a: 'Queda registrada con fecha, hora y el detalle exacto que se aprobó, lo cual es muchísimo más de lo que respalda una autorización por teléfono. No sustituye a un contrato ni te vamos a decir que lo hace, pero en la práctica cierra la discusión de "yo no autoricé eso" antes de que empiece.',
      },
      {
        q: '¿Sirve si soy un taller chico de dos mecánicos?',
        a: 'Sí, y probablemente te sirve más que a uno grande: cuando son dos personas, cada llamada atendida es un trabajo detenido. Se puede arrancar solo con los servicios, la reserva de cita y el cotizador, que es lo que corta el teléfono, y sumar el ingreso con fotos y el historial cuando el volumen lo justifique.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    param: 'farmacias',
    rubroSlug: 'farmacias-boticas',
    legacy: '/proyectos/farmacias-boticas',
    h1: 'Página web para farmacias y boticas en Perú',
    metaTitle: 'Página web para farmacias y boticas en Perú',
    metaDescription:
      'Buscador por principio activo, catálogo con presentación y laboratorio, delivery por zona y receta enviada por WhatsApp. Desde S/1,700 + IGV, entrega en 18 días.',
    breadcrumb: 'Página web para farmacias',
    eyebrow: 'Salud y bienestar',
    intro:
      'Que el vecino encuentre su genérico en tu botica antes que en la cadena, y que pueda pedirlo sin salir de casa a las once de la noche.',
    problema: {
      title: 'Contra qué compite realmente una botica de barrio',
      parrafos: [
        'La botica independiente casi siempre tiene mejor precio que la cadena, sobre todo en genéricos. El problema es que nadie lo sabe. La cadena tiene app, delivery en una hora y aparece primera cuando alguien busca un medicamento por su nombre. Tu ventaja real —el precio y que conoces a tu clientela— no llega a competir, porque la comparación termina antes de que el cliente sepa que existes.',
        'Al mismo tiempo, la consulta más frecuente que recibe una botica es la peor de contestar: "¿tienes tal cosa?". Llega por teléfono, por WhatsApp, a veces con la foto de una caja. Alguien deja el mostrador, busca en el anaquel, vuelve y contesta. Si en ese rato entró otro cliente, se atendió mal a los dos. Y si el producto no estaba, la consulta no dejó nada.',
        'Está también el paciente crónico, que es el cliente más valioso del rubro: compra lo mismo todos los meses y no se cambia de botica si lo atienden bien. Pero si nadie le recuerda cuando se le acaba el tratamiento, compra donde le quede a mano ese día. Sin un canal propio para recordarle, esa recurrencia se pierde por pura falta de contacto.',
      ],
    },
    secciones: {
      title: 'Qué secciones necesita la web de una botica',
      intro:
        'Quien busca un medicamento tiene apuro y una pregunta concreta: si lo tienes, cuánto cuesta y qué tan rápido llega. Todo lo demás sobra.',
      items: [
        {
          title: 'Buscador de productos',
          desc: 'Es la sección principal, no un adorno del encabezado. Tiene que encontrar por nombre comercial, por genérico y por principio activo, porque el paciente llega con cualquiera de los tres según quién se lo recetó.',
        },
        {
          title: 'Ficha del producto',
          desc: 'Presentación, concentración, laboratorio, precio y disponibilidad. Sin esos datos el cliente no puede confirmar que es lo que le recetaron, y ante la duda va a la cadena en vez de arriesgarse.',
        },
        {
          title: 'Zona de reparto y tiempos',
          desc: 'Qué distritos cubres, cuánto cuesta el envío y en cuánto llega. Frente a una cadena que promete una hora, tu tiempo real y honesto compite mejor que no decir nada.',
        },
        {
          title: 'Envío de receta',
          desc: 'Un canal claro para que el paciente mande la foto de su receta y tu químico farmacéutico confirme disponibilidad y precio antes de que salga de casa.',
        },
        {
          title: 'Categorías de venta libre',
          desc: 'Dermocosmética, cuidado del bebé, ortopedia, vitaminas, higiene. Es donde está el margen y donde el cliente navega sin apuro, a diferencia del medicamento, que se busca y se compra.',
        },
        {
          title: 'Horario y atención',
          desc: 'Horario por día, si atiendes de madrugada y cómo contactar al químico farmacéutico. En este rubro el horario extendido es una ventaja competitiva concreta y tiene que verse de inmediato.',
        },
      ],
    },
    funciones: {
      title: 'Funcionalidades propias de una botica',
      intro:
        'Las funciones pensadas para cómo se vende de verdad en una botica peruana.',
      items: [
        {
          title: 'Búsqueda por principio activo',
          desc: 'El cliente escribe "paracetamol" o el nombre de marca que le recetaron y encuentra las dos cosas, con las presentaciones que tienes. Es la función que convierte tu ventaja de precio en genéricos en una venta concreta.',
        },
        {
          title: 'Equivalencias de genérico',
          desc: 'Junto al producto de marca aparece el genérico equivalente que tienes en stock, con su precio. El ahorro se ve en pantalla, que es la única forma de que el cliente se entere de que existe.',
        },
        {
          title: 'Receta por WhatsApp',
          desc: 'El paciente sube la foto de su receta desde la web y llega a tu WhatsApp junto con sus datos de entrega. Tu químico farmacéutico revisa, confirma qué hay y cotiza antes de que el pedido avance.',
        },
        {
          title: 'Delivery por zona con tarifa',
          desc: 'Cobertura por distrito, costo de envío y monto mínimo definidos por ti. El cliente sabe antes de armar el pedido si le llega y cuánto le cuesta.',
        },
        {
          title: 'Recordatorio de tratamiento crónico',
          desc: 'Para el paciente que compra lo mismo cada mes, un aviso cuando se le está por acabar. Es la función que asegura la recompra en el cliente más rentable que tiene una botica.',
        },
        {
          title: 'Alerta de vencimiento por lote',
          desc: 'Control interno de lotes próximos a vencer para liquidarlos a tiempo en vez de perderlos. Es plata que hoy se va al tacho por no tener el dato a la vista.',
        },
      ],
    },
    precio: {
      title: 'Precio y plazo',
      parrafos: [
        'La página web para farmacias y boticas arranca en S/1,700 + IGV, con entrega en 18 días desde la aprobación del diseño. Incluye dominio .com y hosting del primer año, certificado de seguridad, correo corporativo, el buscador, la estructura del catálogo y el canal de envío de receta.',
        'La carga del catálogo se cotiza aparte según el archivo con que llegues: no es lo mismo una exportación limpia de tu sistema que una lista suelta. El delivery por zona, los recordatorios de tratamiento y el control de lotes se suman como módulos.',
        'Una aclaración necesaria: la web es tu canal de catálogo, consulta y coordinación de entrega. Qué se puede vender por internet y bajo qué condiciones lo define la normativa sanitaria y es responsabilidad de tu dirección técnica; nosotros construimos la herramienta para que operes dentro de las reglas que tú manejas, no te asesoramos sobre ellas.',
        'Se paga 50% de adelanto y 50% contra entrega, con boleta o factura electrónica SUNAT. 2 rondas de cambios de diseño, 30 días de garantía, y el dominio y el código a tu nombre.',
      ],
    },
    faqs: [
      {
        q: '¿El buscador encuentra por nombre genérico y por marca?',
        a: 'Sí, y esa es la función más importante de toda la web. El paciente llega con lo que le dijeron: a veces el nombre de marca, a veces el principio activo, a veces mal escrito. El buscador resuelve las tres entradas y muestra las presentaciones que tienes, con su precio. Sin eso, tu ventaja en genéricos no llega a la pantalla del cliente.',
      },
      {
        q: '¿Puedo recibir recetas por la web?',
        a: 'Sí, mediante un formulario donde el paciente sube la foto de su receta y sus datos de entrega, y todo llega a tu WhatsApp. Es un canal de consulta y coordinación: tu químico farmacéutico revisa y decide qué corresponde según la receta y la normativa. La herramienta ordena el flujo, la decisión sanitaria sigue siendo tuya.',
      },
      {
        q: '¿Tengo que cargar todo mi inventario?',
        a: 'No de entrada, y en general conviene no hacerlo. Muchas boticas arrancan publicando lo que más rota y lo de venta libre, que es donde está el margen, y dejan el resto como consulta por WhatsApp. La carga masiva se cotiza aparte según el estado de tu archivo; si tu sistema exporta una lista limpia, es rápido.',
      },
      {
        q: '¿Cómo compito con el delivery en una hora de las cadenas?',
        a: 'No compitiendo en velocidad, que es donde ellas ganan por estructura. Compites con precio visible, con cercanía real a tu barrio y con atención de una persona que conoce al cliente. La web hace visibles esas tres cosas; el tiempo de entrega lo publicas tal como es, porque prometer una hora y no cumplirla cuesta más que decir dos.',
      },
      {
        q: '¿Sirve para el paciente que compra su medicación todos los meses?',
        a: 'Es exactamente para él. Con el módulo de recordatorio de tratamiento, el sistema avisa cuando se le está por acabar y le deja el pedido a un clic. Ese paciente es el más rentable del rubro y hoy se pierde por algo tan simple como que nadie le escribió a tiempo.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    param: 'panaderias',
    rubroSlug: 'panaderias-pastelerias',
    legacy: '/proyectos/panaderias-pastelerias',
    h1: 'Página web para panaderías y pastelerías en Perú',
    metaTitle: 'Página web para panaderías y pastelerías en Perú',
    metaDescription:
      'Pedido de torta por encargo con todos los datos, catálogo de temporada, seña en línea y puntos de venta. Desde S/1,700 + IGV, entrega en 15 días.',
    breadcrumb: 'Página web para panaderías',
    eyebrow: 'Gastronomía',
    intro:
      'El pedido de torta con fecha, sabor, tamaño y dedicatoria capturado de una sola vez, y la seña cobrada antes de encender el horno.',
    problema: {
      title: 'Un pedido de torta mal tomado cuesta la torta entera',
      parrafos: [
        'Un encargo de pastelería se define por seis o siete datos: tamaño, sabor del bizcocho, relleno, cobertura, dedicatoria, tema y fecha exacta de recojo. Cuando eso se toma por WhatsApp entre clientes que entran al mostrador, siempre falta uno. Y el dato que falta no se descubre al tomar el pedido: se descubre el día de la entrega, cuando ya no hay margen para corregir. Una torta rehecha es materia prima, horas de trabajo y un cliente molesto, todo perdido de golpe.',
        'El segundo problema es la cancelación. Sin seña, un encargo confirmado por WhatsApp no compromete a nadie. Se compran los insumos, se reserva el horno y se bloquea la agenda de un sábado; si el cliente no aparece, la panadería asume todo. En temporada alta —julio, diciembre, el día de la madre— cada espacio de horno que se pierde así es uno que se le negó a alguien que sí habría pagado.',
        'Y está la temporada, que es donde este rubro se juega el año. Panetón, rosca, torta del día de la madre. Son ventanas de dos o tres semanas en las que hay que anunciar, tomar pedidos con anticipación y cerrar cuando la capacidad del horno se acaba. Hacer eso con historias de Instagram significa repetir el mismo mensaje cincuenta veces y aun así perder pedidos por no contestar a tiempo.',
      ],
    },
    secciones: {
      title: 'Qué secciones necesita la web de una panadería',
      intro:
        'Esta web tiene dos trabajos distintos: vender el pan del día, que es volumen y cercanía, y tomar encargos de pastelería, que es ticket alto y detalle. Las secciones se ordenan según eso.',
      items: [
        {
          title: 'Formulario de torta por encargo',
          desc: 'Es la sección que justifica la web entera. Tamaño, número de porciones, bizcocho, relleno, cobertura, dedicatoria, tema, fecha y hora de recojo. Todos los campos obligatorios, para que ningún pedido entre incompleto.',
        },
        {
          title: 'Galería de diseños',
          desc: 'Modelos de torta con su precio según tamaño, y la opción de que el cliente suba su propia referencia. Es lo que hoy vive en Instagram sin orden ni precio, y donde el cliente pasa más tiempo antes de decidir.',
        },
        {
          title: 'Catálogo de temporada',
          desc: 'Panetón, rosca de reyes, tortas del día de la madre, bocaditos para fiestas. Con fecha de cierre de pedidos, porque en este rubro la venta se concentra en pocas semanas y la capacidad del horno tiene tope.',
        },
        {
          title: 'Panadería del día',
          desc: 'Pan francés, ciabatta, integral, bollería, empanadas. Con horarios de horneada, que es el dato que decide a qué hora va el cliente y el que nadie publica.',
        },
        {
          title: 'Puntos de venta',
          desc: 'Dónde te compran además del local: bodegas, cafeterías, ferias. Cada punto con dirección y horario. Sirve para venta y sirve para que otros negocios te encuentren como proveedor.',
        },
        {
          title: 'Anticipación y condiciones',
          desc: 'Con cuántos días hay que pedir cada tipo de producto, cuánto es la seña y qué pasa si se cancela. Escrito una vez, deja de explicarse cincuenta.',
        },
      ],
    },
    funciones: {
      title: 'Funcionalidades propias de una pastelería',
      intro:
        'Las funciones que resuelven lo específico de trabajar por encargo y por temporada.',
      items: [
        {
          title: 'Encargo con todos los datos obligatorios',
          desc: 'El formulario no deja enviar si falta la fecha, el sabor o la dedicatoria. El pedido llega completo a la primera y desaparece la ronda de mensajes para completar lo que faltó.',
        },
        {
          title: 'Calendario de capacidad',
          desc: 'Defines cuántos encargos aceptas por día. Cuando un sábado se llena, deja de ofrecerse solo. Nadie promete una torta que el horno no va a poder hacer.',
        },
        {
          title: 'Seña en línea al confirmar',
          desc: 'Un porcentaje del total cobrado por billetera digital o tarjeta al momento de encargar. El pedido pasa a estar comprometido de verdad y las cancelaciones de última hora dejan de salir de tu bolsillo.',
        },
        {
          title: 'Campaña de temporada con cierre',
          desc: 'El panetón o la torta del día de la madre con su propia página, su fecha límite de pedido y su cupo. Cuando se agota el cupo o pasa la fecha, se cierra sola.',
        },
        {
          title: 'Aviso de recojo',
          desc: 'Un mensaje automático el día anterior recordando fecha, hora y lugar de recojo, y otro cuando el pedido está listo. Las tortas que se quedan sin recoger se vuelven la excepción.',
        },
        {
          title: 'Suscripción de canasta o desayuno',
          desc: 'Pedido recurrente semanal de pan, con cobro automático. Convierte al cliente de barrio en ingreso predecible en vez de en una visita que depende de si pasó por la puerta.',
        },
      ],
    },
    precio: {
      title: 'Precio y plazo',
      parrafos: [
        'La página web para panaderías y pastelerías arranca en S/1,700 + IGV, con entrega en 15 días desde que apruebas el diseño. Incluye dominio .com y hosting del primer año, certificado de seguridad, correo corporativo, la galería de diseños, el catálogo del día y el formulario de encargo con todos sus campos.',
        'La seña en línea, el calendario de capacidad, las campañas de temporada y la suscripción semanal se suman como módulos. De todos ellos, la seña es el que más rápido se nota: cada encargo que hoy se cae sin costo pasa a estar comprometido con dinero.',
        'Si tu venta fuerte es diciembre o el día de la madre, cierra el desarrollo con al menos un mes de anticipación a la campaña. Entrar a temporada estrenando web es la peor forma de estrenarla. Se paga 50% de adelanto y 50% contra entrega, con boleta o factura SUNAT, 2 rondas de cambios y 30 días de garantía.',
      ],
    },
    faqs: [
      {
        q: '¿El formulario me asegura que no falten datos del pedido?',
        a: 'Sí, porque los campos que definas como obligatorios bloquean el envío. No entra un encargo sin fecha de recojo, sin tamaño ni sin sabor. Ese es todo el punto: hoy el dato que falta no aparece al tomar el pedido, aparece el día de la entrega, y ahí ya no hay cómo arreglarlo.',
      },
      {
        q: '¿Puedo cobrar una seña por la web?',
        a: 'Sí, con el módulo de pago. Defines qué porcentaje del total se cobra al confirmar —lo habitual es la mitad— y se cobra por billetera digital o tarjeta en el momento. El pedido queda comprometido y las cancelaciones de última hora, que hoy las pagas tú en insumos y horno reservado, se reducen solas.',
      },
      {
        q: '¿Cómo manejo la temporada de panetón sin quedarme corto?',
        a: 'Con el calendario de capacidad y la campaña con cierre. Defines cuántas unidades o encargos aceptas por día, la campaña se publica con su fecha límite, y cuando el cupo se llena deja de ofrecerse automáticamente. No prometes lo que el horno no puede hacer y no pierdes pedidos por contestar tarde.',
      },
      {
        q: '¿Sirve si vendo sobre todo pan del día y pocas tortas?',
        a: 'Sí, pero la web se arma al revés: el peso se lo llevan el catálogo diario con horarios de horneada, los puntos de venta y la suscripción semanal, y el encargo de torta queda como sección secundaria. Es la misma base con otras prioridades, y eso se define contigo antes de empezar a diseñar.',
      },
      {
        q: '¿Puedo vender a bodegas y cafeterías desde la web?',
        a: 'Sí. Se agrega una sección de venta al por mayor con el pedido mínimo, los plazos de entrega y un formulario aparte para negocios. Muchas panaderías descubren ahí un canal que ya tenían a medias y que nunca habían ordenado ni promocionado.',
      },
    ],
  },
  // ─────────────────────────────────────────────────────────────────────────
  {
    param: 'barberias',
    rubroSlug: 'barberias-salones-belleza',
    legacy: '/proyectos/barberias-salones-belleza',
    h1: 'Página web para barberías y salones de belleza en Perú',
    metaTitle: 'Página web para barberías y salones de belleza en Perú',
    metaDescription:
      'Reserva por servicio y por profesional, galería de trabajos, lista de precios y recordatorio por WhatsApp. Desde S/1,700 + IGV, entrega en 12 días.',
    breadcrumb: 'Página web para barberías',
    eyebrow: 'Belleza',
    intro:
      'La agenda llena sin que contestes WhatsApp en tu día libre, tus cortes en una galería que vende sola y los precios claros antes de que alguien se siente en la silla.',
    problema: {
      title: 'Una barbería vende horas, y las horas vacías no se recuperan',
      parrafos: [
        'Cada silla tiene un número finito de cupos al día, y el que no se llena no vuelve nunca. El problema es que esos cupos se agendan por WhatsApp, y el WhatsApp lo contesta la misma persona que está cortando. O dejas al cliente esperando con la máquina en la mano, o contestas dos horas después, cuando quien preguntaba ya reservó en la barbería de la otra cuadra.',
        'El día libre tampoco termina siendo libre. Las reservas del lunes entran el domingo, y si nadie responde se pierden. Terminas revisando el celular en tu día de descanso porque cada mensaje sin contestar es una silla vacía mañana. Es el costo invisible del rubro: no aparece en ninguna cuenta, pero se paga con el único día que tenías.',
        'Y está el que reservó y no vino. No avisó, y ese bloque de cuarenta minutos quedó muerto en la hora más pedida del sábado. Sin recordatorio ni seña, faltar no le cuesta nada al cliente; el que pierde eres tú, que además le dijiste que no a otro que sí quería ese horario.',
      ],
    },
    secciones: {
      title: 'Qué secciones necesita la web de una barbería',
      intro:
        'Quien entra a la web de una barbería quiere tres cosas en este orden: ver cómo cortan, saber cuánto cuesta y reservar sin hablar con nadie. Todo lo demás es relleno.',
      items: [
        {
          title: 'Lista de precios por servicio',
          desc: 'Corte, corte y barba, barba sola, diseño, color, alisado, tratamiento. Cada uno con precio y duración. Publicarlo le da seguridad a quien va a venir: nadie quiere preguntar cuánto cuesta ya sentado en la silla.',
        },
        {
          title: 'Reserva por servicio y profesional',
          desc: 'El cliente elige qué se va a hacer y con quién, y solo ve los horarios reales de ese barbero. Un corte de niño y un color no ocupan el mismo bloque, así que la duración se configura por servicio.',
        },
        {
          title: 'Galería de trabajos',
          desc: 'Fotos reales de cortes recientes, ordenadas por tipo. Es lo que más se mira antes de reservar y lo que reemplaza a la carpeta de imágenes que hoy vive en Instagram sin orden, sin filtro y sin precio al lado.',
        },
        {
          title: 'El equipo',
          desc: 'Cada barbero o estilista con foto, especialidad y estilo. En este rubro el cliente es fiel a la persona antes que al local, y ese nombre propio es lo que lo trae de vuelta cada tres semanas.',
        },
        {
          title: 'El local por dentro',
          desc: 'Fotos del espacio, las sillas, la ambientación. Una barbería también se elige por cómo se siente pasar ahí una hora, y eso no se transmite con texto.',
        },
        {
          title: 'Ubicación y horario',
          desc: 'Mapa, referencia, horario por día y si hay dónde estacionar. Es un negocio de cercanía: la distancia pesa más que el precio en la decisión final.',
        },
      ],
    },
    funciones: {
      title: 'Funcionalidades propias de una barbería',
      intro:
        'Las funciones que convierten la web en la agenda del local y te devuelven el celular.',
      items: [
        {
          title: 'Agenda 24/7 sin que contestes',
          desc: 'El cliente reserva a la hora que sea, incluso a medianoche o en tu día de descanso. Los cupos se bloquean solos y tú abres con la agenda del día ya armada.',
        },
        {
          title: 'Recordatorio por WhatsApp',
          desc: 'Mensaje el día anterior con hora y profesional, y opción de cancelar. Quien iba a faltar avisa con tiempo, y ese cupo vuelve a estar disponible en vez de morirse.',
        },
        {
          title: 'Seña opcional al reservar',
          desc: 'Un monto pequeño que se descuenta del servicio, activable solo en los horarios donde más duele la ausencia. Es la forma más directa de que la reserva comprometa a alguien.',
        },
        {
          title: 'Agenda separada por profesional',
          desc: 'Cada barbero con sus días, su horario y los servicios que hace. Si uno no hace color, el sistema no lo ofrece en su agenda ni por error.',
        },
        {
          title: 'Fidelidad automática',
          desc: 'Conteo de visitas por cliente para el corte gratis o el descuento cada tantas veces. Sin tarjetita de cartón que se pierde ni discusión sobre cuántas lleva.',
        },
        {
          title: 'Galería que subes desde el celular',
          desc: 'Terminas un corte, tomas la foto y la publicas en el momento. La sección que más vende deja de depender de que alguien se siente a actualizar la web.',
        },
      ],
    },
    precio: {
      title: 'Precio y plazo',
      parrafos: [
        'La página web para barberías y salones de belleza arranca en S/1,700 + IGV y se entrega en 12 días desde que apruebas el diseño. Es el plazo más corto de los rubros que trabajamos porque la estructura es acotada: precios, equipo, galería y agenda.',
        'Incluye dominio .com y hosting del primer año, certificado de seguridad, correo corporativo, la lista de precios, el equipo y la galería administrable. La reserva en línea con agenda por profesional, los recordatorios, la seña al reservar y el programa de fidelidad se suman como módulos.',
        'Si vas a arrancar por uno solo, que sea la agenda: es la que te devuelve el día libre. Se paga 50% de adelanto y 50% contra entrega, con boleta o factura electrónica SUNAT, 2 rondas de cambios de diseño y 30 días de garantía.',
      ],
    },
    faqs: [
      {
        q: '¿Puedo tener una agenda distinta por cada barbero?',
        a: 'Sí, y es como debería estar armado. Cada profesional tiene sus días, su horario y los servicios que hace: si uno no hace color, el sistema no lo ofrece en su agenda. El cliente elige con quién quiere atenderse y ve solo los cupos reales de esa persona, no un horario genérico del local que después hay que cuadrar a mano.',
      },
      {
        q: '¿Cómo evito que reserven y no vengan?',
        a: 'Con dos cosas que funcionan mejor juntas. El recordatorio del día anterior con opción de cancelar hace que quien no va a venir avise, y ese cupo se libera para otro. Y en los horarios más pedidos puedes activar una seña pequeña que se descuenta del servicio. No elimina las faltas, pero las baja bastante y no te obliga a cobrar seña siempre.',
      },
      {
        q: '¿Tengo que dejar de usar WhatsApp?',
        a: 'No, y no conviene. La agenda en línea se lleva las reservas rutinarias, que son la mayoría, y el WhatsApp queda para lo que sí necesita conversación: una consulta de color, un evento, un cliente nuevo con dudas. Lo que cambia es que dejas de usar el celular como sistema de agenda mientras tienes las manos ocupadas.',
      },
      {
        q: '¿La galería la puedo actualizar yo?',
        a: 'Sí, desde el celular y en el momento. Terminas un corte, tomas la foto y la subes con su categoría. Que sea así importa: la galería es lo primero que mira quien está por reservar, y una llena de fotos de hace ocho meses transmite exactamente lo contrario de lo que quieres transmitir.',
      },
      {
        q: '¿Sirve si soy un solo barbero con una silla?',
        a: 'Sí, y proporcionalmente te sirve más: cuando trabajas solo, cada mensaje que contestas es un corte detenido. Se puede entregar solo con precios, galería y agenda, sin sección de equipo ni fidelidad, y sumar lo demás el día que abras una segunda silla.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    param: 'opticas',
    rubroSlug: 'opticas',
    legacy: '/proyectos/opticas',
    h1: 'Página web para ópticas en Perú',
    metaTitle: 'Página web para ópticas en Perú',
    metaDescription:
      'Catálogo de monturas con filtros y precio, agenda de examen de vista, convenios con seguros y aviso de lentes listos. Desde S/1,700 + IGV, entrega en 18 días.',
    breadcrumb: 'Página web para ópticas',
    eyebrow: 'Retail y comercio',
    intro:
      'El catálogo de monturas con precio real, el examen de vista agendado en línea y el paciente sabiendo qué le cubre su seguro antes de cruzar la puerta.',
    problema: {
      title: 'Una óptica vende dos cosas y suele confundirlas',
      parrafos: [
        'Por un lado vende un servicio de salud visual, por otro un producto de moda, y en la comunicación las mezcla. Quien llega por la montura quiere ver estilos, marcas y precios como en cualquier tienda de accesorios. Quien llega por el examen quiere saber si hay optómetra, cuánto cuesta y cuándo puede ir. Si la web pone las dos conversaciones en el mismo lugar, ninguno de los dos encuentra lo que fue a buscar.',
        'El precio es el otro nudo. Nadie compra "unos lentes": compra una montura más una luna con su medida, su material y sus tratamientos. Como el total depende de la receta, muchas ópticas terminan no publicando nada, y el cliente asume lo peor. La consulta muere en un "¿cuánto sale?" por WhatsApp que no se puede responder sin ver la medida, y ahí se acaba la conversación.',
        'Y está el seguro. Buena parte de la demanda depende de qué cubre la EPS o el seguro del paciente, y esa información casi nunca está publicada en ningún lado. El cliente llama, pregunta, alguien busca en una carpeta y contesta a medias. La óptica que sí publica sus convenios se lleva a ese paciente sin haber hablado con él ni una vez.',
      ],
    },
    secciones: {
      title: 'Qué secciones necesita la web de una óptica',
      intro:
        'La estructura tiene que separar limpiamente las dos entradas: la del que viene a mirar monturas y la del que viene a medirse la vista.',
      items: [
        {
          title: 'Catálogo de monturas',
          desc: 'Con filtros por género, material, forma y rango de precio. Es la parte que se navega sin apuro y la que atrae al visitante que todavía no había decidido cambiar de lentes.',
        },
        {
          title: 'Agenda de examen de vista',
          desc: 'Día, hora y profesional, con la duración real del examen. Va separada del catálogo, porque quien viene a medirse la vista todavía no está comprando y no hay que tratarlo como si lo estuviera.',
        },
        {
          title: 'Tipos de luna y tratamientos',
          desc: 'Monofocal, bifocal, progresiva; antirreflejo, fotocromático, filtro para pantallas. Qué es cada uno y para quién sirve, explicado en lenguaje que se entienda sin ser óptico.',
        },
        {
          title: 'Convenios y seguros',
          desc: 'Qué EPS y seguros atiendes y qué cubre cada uno en examen, montura y lunas. Es de las secciones que más consultas ahorra y casi ninguna óptica del país la tiene publicada.',
        },
        {
          title: 'Cómo funciona el proceso',
          desc: 'Del examen a la entrega: cuántas visitas son, cuánto demora el laboratorio y qué pasa si la medida no acomoda. Baja la ansiedad del cliente primerizo, que es el que más pregunta y el que más duda.',
        },
        {
          title: 'Garantía y ajustes',
          desc: 'Qué cubre la garantía de la montura y de las lunas, y si los ajustes posteriores tienen costo. Te diferencia de la óptica de galería y publicarlo no cuesta nada.',
        },
      ],
    },
    funciones: {
      title: 'Funcionalidades propias de una óptica',
      intro:
        'Las funciones que acompañan el ciclo real del rubro: examen, orden, entrega y renovación al año.',
      items: [
        {
          title: 'Catálogo con precio de montura',
          desc: 'Cada modelo con su precio base y la aclaración de que las lunas se cotizan según la receta. Es más honesto que no publicar nada y desarma la sospecha de que va a salir carísimo.',
        },
        {
          title: 'Reserva de examen con recordatorio',
          desc: 'El paciente agenda en línea y recibe el aviso el día anterior. El examen es la puerta de entrada a toda la venta, así que cada cita que no se pierde es una venta que no se pierde.',
        },
        {
          title: 'Cobertura consultada al agendar',
          desc: 'El paciente indica su seguro al reservar y ve qué le cubre. Llega sabiendo aproximadamente cuánto va a poner de su bolsillo, que es la mitad del trabajo de venta ya resuelto.',
        },
        {
          title: 'Orden con medidas guardadas',
          desc: 'Esfera, cilindro, eje, adición y los tratamientos elegidos, asociados al cliente. Cuando vuelve al año siguiente no se empieza de cero ni hay que buscar en un cuaderno.',
        },
        {
          title: 'Aviso de lentes listos',
          desc: 'Mensaje automático por WhatsApp cuando el laboratorio entrega. Se acaba la llamada de "¿ya están?" y bajan los días que los lentes pasan guardados sin que nadie los recoja.',
        },
        {
          title: 'Recordatorio de control anual',
          desc: 'Al año del último examen sale el aviso de revisión. La renovación de medida es la venta recurrente del rubro y hoy depende de que el paciente se acuerde por su cuenta.',
        },
      ],
    },
    precio: {
      title: 'Precio y plazo',
      parrafos: [
        'La página web para ópticas arranca en S/1,700 + IGV, con entrega en 18 días desde que apruebas el diseño. Incluye dominio .com y hosting del primer año, certificado de seguridad, correo corporativo, el catálogo de monturas con filtros, la sección de tipos de luna y la de convenios.',
        'La agenda de examen con recordatorio, la consulta de cobertura, el registro de órdenes con medidas y el aviso de lentes listos se suman como módulos. La carga del catálogo depende de cuántos modelos publiques y de si ya tienes las fotos; si hay que fotografiar monturas, esa sesión se cotiza aparte.',
        'El esquema de pago es 50% al empezar y 50% contra entrega, con boleta o factura electrónica SUNAT. Van incluidas 2 rondas de cambios sobre el diseño y 30 días de garantía tras la entrega, y tanto el dominio como el código quedan registrados a tu nombre.',
      ],
    },
    faqs: [
      {
        q: '¿Publico el precio si depende de la receta?',
        a: 'Publicas el precio de la montura, que sí es fijo, y aclaras que las lunas se cotizan según la medida y los tratamientos. Es lo que hace cualquier óptica seria. No publicar nada no evita la pregunta: solo hace que el cliente asuma que es caro y no llegue nunca a hacerla.',
      },
      {
        q: '¿Puedo mostrar qué cubre cada seguro?',
        a: 'Sí, y es de lo que más rinde en este rubro. Se lista cada EPS o seguro con qué cubre en examen, montura y lunas. Además, al agendar el paciente indica cuál tiene y ve su cobertura estimada, así que llega sabiendo cuánto va a poner de su bolsillo y la venta no se cae en caja.',
      },
      {
        q: '¿La agenda de examen es distinta de la venta de montura?',
        a: 'Sí, y conviene que lo sea. El examen tiene duración fija y depende del profesional disponible; ver monturas no necesita cita. Mezclarlas hace que quien solo quería mirar modelos crea que tiene que agendar algo, y ahí se pierde la visita antes de que ocurra.',
      },
      {
        q: '¿Se guarda la medida de cada cliente?',
        a: 'Con el módulo de órdenes, sí: esfera, cilindro, eje, adición y los tratamientos que eligió, asociados a su ficha. Sirve para el control del año siguiente, para reponer un lente roto sin repetir el examen y para saber a quién toca invitar a renovar y cuándo.',
      },
      {
        q: '¿Tengo que fotografiar todas mis monturas?',
        a: 'Necesitas foto de cada modelo que quieras publicar, porque sin imagen una montura no vende. Pero no hace falta el inventario completo: lo práctico es empezar por los modelos que más rotan y los de mayor margen, y sumar el resto después. Si no tienes las fotos, la sesión se cotiza aparte y te decimos cuánto antes de empezar.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    param: 'bodegas',
    rubroSlug: 'bodegas-minimarkets',
    legacy: '/proyectos/bodegas-minimarkets',
    h1: 'Página web para bodegas y minimarkets en Perú',
    metaTitle: 'Página web para bodegas y minimarkets en Perú',
    metaDescription:
      'Catálogo con precios, carrito que arma el pedido, delivery por zona con monto mínimo y cobro con billeteras digitales. Desde S/1,700 + IGV, entrega en 7 días.',
    breadcrumb: 'Página web para bodegas',
    eyebrow: 'Retail y comercio',
    intro:
      'El catálogo con precios que el vecino consulta solo, el pedido armado sin diez mensajes de ida y vuelta, y el delivery cobrando lo que corresponde en cada zona.',
    problema: {
      title: 'Diez mensajes para vender treinta soles',
      parrafos: [
        'El pedido por WhatsApp de una bodega es siempre la misma conversación: "¿tienes leche?", "¿a cuánto?", "¿y el arroz de cinco kilos?", "¿cuánto sale todo?". Diez mensajes para armar una compra de treinta soles. Multiplicado por veinte vecinos al día, eso es el turno completo de una persona contestando el celular en vez de atender el mostrador o reponer la góndola.',
        'Después está el delivery, que casi siempre se hace perdiendo. Se acepta cualquier pedido a cualquier distancia sin cobrar envío, porque cobrarlo en plena conversación incomoda. Un pedido de quince soles a seis cuadras cuesta más en tiempo del repartidor de lo que deja de margen. Sin monto mínimo ni tarifa por zona, el reparto no es un servicio: es una fuga que no se ve porque nunca se mide.',
        'Y el precio, que cambia seguido y vive en la memoria de quien esté atendiendo. Cuando cada persona del mostrador dice un número distinto por el mismo producto, el cliente lo nota. En un negocio de barrio, donde todos se conocen y todos comentan, esa inconsistencia cuesta algo más caro que el margen: cuesta confianza.',
      ],
    },
    secciones: {
      title: 'Qué secciones necesita la web de una bodega',
      intro:
        'Aquí no hay que impresionar a nadie: hay que responder rápido qué tienes, a cuánto y si lo llevas. La web se arma alrededor de eso.',
      items: [
        {
          title: 'Catálogo con precio y foto',
          desc: 'Abarrotes, bebidas, limpieza, cuidado personal, congelados. Cada producto con imagen, presentación y precio al día. Es la sección que reemplaza los diez mensajes por pedido.',
        },
        {
          title: 'Zona de reparto y monto mínimo',
          desc: 'Qué calles o urbanizaciones cubres, cuánto cobras de envío en cada una y desde qué monto haces delivery. Publicado deja de ser una negociación incómoda en cada pedido.',
        },
        {
          title: 'Ofertas de la semana',
          desc: 'Los productos con descuento y hasta cuándo. Es lo que hace que el vecino entre a mirar aunque no necesitara nada, que en un negocio de barrio es casi la única forma de generar una visita.',
        },
        {
          title: 'Formas de pago',
          desc: 'Qué billeteras aceptas, si cobras contra entrega y si emites comprobante. El pago digital ya es lo normal en este rubro y no decirlo genera una duda que no hace falta generar.',
        },
        {
          title: 'Horario real',
          desc: 'Por día, incluidos domingos y feriados, que es justo cuando más se necesita una bodega y cuando menos claro está quién abre y hasta qué hora.',
        },
        {
          title: 'Productos por encargo',
          desc: 'Lo que no tienes en anaquel pero puedes conseguir: balón de gas, bidón de agua, marcas específicas. Es venta que hoy se pierde porque nadie sabe que la puedes traer.',
        },
      ],
    },
    funciones: {
      title: 'Funcionalidades propias de una bodega',
      intro:
        'Funciones simples y directas, porque el margen por pedido es chico y nada puede agregar fricción.',
      items: [
        {
          title: 'Carrito que arma el pedido solo',
          desc: 'El vecino elige, la web suma, y a tu WhatsApp llega un mensaje con productos, cantidades, total, dirección y forma de pago. La conversación de diez mensajes se convierte en uno.',
        },
        {
          title: 'Tarifa de envío por zona',
          desc: 'Cada zona con su costo y su monto mínimo, calculado al armar el pedido. Dejas de regalar el reparto por no querer cobrarlo en medio de la conversación.',
        },
        {
          title: 'Precio único y actualizable',
          desc: 'Cambias el precio desde el celular y todos ven el mismo. Se termina la diferencia entre lo que dice uno y lo que dice otro en el mostrador.',
        },
        {
          title: 'Repetir el último pedido',
          desc: 'El cliente frecuente vuelve a pedir lo mismo con un toque. En una bodega la compra es repetitiva, y esa función sola sube la frecuencia sin que hagas nada más.',
        },
        {
          title: 'Alerta de quiebre de stock',
          desc: 'Aviso cuando un producto se está acabando, para reponer antes de que el vecino lo encuentre agotado y se acostumbre a ir al minimarket de la esquina.',
        },
        {
          title: 'Cierre de caja del día',
          desc: 'Cuánto entró en efectivo, cuánto por billetera y qué pedidos quedaron pendientes. El dato que hoy se arma a mano al cerrar, si es que alguien lo arma.',
        },
      ],
    },
    precio: {
      title: 'Precio y plazo',
      parrafos: [
        'La página web para bodegas y minimarkets arranca en S/1,700 + IGV y se entrega en 7 días, el plazo más corto de todos los rubros, porque la estructura es simple y el grueso del trabajo es cargar el catálogo.',
        'Vale decir con claridad para quién tiene sentido, porque no es para toda bodega. Si tu venta es casi toda de mostrador y no haces reparto, una web difícilmente se paga y preferimos decírtelo antes que cobrarte. Donde sí rinde es en el minimarket con reparto propio, en la bodega que ya recibe pedidos por WhatsApp todos los días y en la que atiende un edificio o una urbanización cerrada: ahí el catálogo y la tarifa por zona se recuperan en pocas semanas.',
        'Incluye dominio .com y hosting del primer año, certificado de seguridad, correo corporativo y el catálogo con carrito a WhatsApp. El delivery por zona, el cobro en línea, el control de stock y el cierre de caja se suman como módulos. Se paga 50% de adelanto y 50% contra entrega, con boleta o factura SUNAT, y con 30 días de garantía.',
      ],
    },
    faqs: [
      {
        q: '¿Vale la pena para una bodega chica?',
        a: 'Depende de si haces delivery. Si tu venta es casi toda del que pasa por la puerta, la web no te va a cambiar el negocio y preferimos decírtelo antes de cobrarte. Donde se paga sola es cuando ya recibes pedidos por WhatsApp a diario, tienes reparto propio o atiendes un edificio o condominio: ahí el ahorro de tiempo y el cobro correcto del envío se notan desde el primer mes.',
      },
      {
        q: '¿Tengo que subir todos mis productos?',
        a: 'No, y no conviene arrancar así. Lo práctico es publicar entre cien y doscientos: lo que más rota, lo que más te preguntan y lo de mejor margen. El resto se sigue pidiendo por WhatsApp como siempre. Un catálogo corto y actualizado vende bastante más que uno enorme con precios viejos.',
      },
      {
        q: '¿Cómo cobro el delivery sin incomodar al cliente?',
        a: 'Publicándolo. Defines la tarifa de cada zona y el monto mínimo, y la web lo calcula sola al armar el pedido. El cliente lo ve antes de confirmar, así que no hay que negociarlo en la conversación, que es exactamente lo que hoy hace que muchas bodegas terminen regalando el envío por no incomodar.',
      },
      {
        q: '¿Puedo cobrar por billetera desde la web?',
        a: 'Sí, de dos maneras. La simple es mostrar tu QR para que el cliente pague y adjunte la constancia al pedido. La otra es integrar una pasarela para que el cobro sea automático. Para el volumen típico de una bodega, arrancar con el QR suele alcanzar y no tiene comisión por transacción.',
      },
      {
        q: '¿Los precios los actualizo yo?',
        a: 'Sí, desde el celular y sin costo ni límite. Es lo más importante de todo en este rubro: los precios de abarrotes se mueven seguido y un catálogo desactualizado genera reclamos justo en el momento de la entrega. Por eso se entrega con capacitación grabada, para que lo pueda manejar cualquiera de tu familia o de tu personal.',
      },
    ],
  },
];

export const getLanding = (param: string) => landings.find((l) => l.param === param);

/** Rubros que ya migraron a una landing propia en la raíz del sitio. */
const migrados = new Map(landings.map((l) => [l.rubroSlug, `/paginas-web-para-${l.param}`]));

export const tieneLanding = (rubroSlug: string) => migrados.has(rubroSlug);

/** URL canónica de un rubro. Todo enlace interno tiene que pasar por aquí.
 *  Ya no hay fallback a /proyectos/[slug]: esa ruta se eliminó cuando los 12
 *  rubros pasaron a tener landing propia, así que un slug sin landing sería un
 *  enlace interno a 404. Preferimos romper el build a publicarlo. */
export const hrefRubro = (rubroSlug: string) => {
  const href = migrados.get(rubroSlug);
  if (!href) throw new Error(`El rubro ${rubroSlug} no tiene landing: /proyectos/[slug] ya no existe`);
  return href;
};

// Guardia de build: los 12 rubros tienen que tener landing.
const sinLanding = rubros.filter((r) => !migrados.has(r.slug));
if (sinLanding.length > 0) {
  throw new Error(`Rubros sin landing propia: ${sinLanding.map((r) => r.slug).join(', ')}`);
}

export const rubroDeLanding = (l: Landing) => {
  const r = rubros.find((x) => x.slug === l.rubroSlug);
  if (!r) throw new Error(`La landing ${l.param} apunta a un rubro inexistente: ${l.rubroSlug}`);
  return r;
};
