// Rubros con su arquitectura por sector. Cada uno genera su propia página
// en /proyectos/[slug] para posicionar "página web para pollería", etc.
// Datos portados desde bitwise.pe (producción).

import { PRECIO_PISO } from './site';

export interface RubroModule {
  emoji: string;
  title: string;
  desc: string;
}

export interface RubroModuleGroup {
  name: string;
  modules: readonly RubroModule[];
}

export interface Rubro {
  slug: string;
  emoji: string;
  title: string;
  tagline: string;
  cat: string;
  short: string;
  keyword: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  pain: string;
  solution: string;
  /** Precio de entrada del rubro, en soles y sin IGV.
   *  Nunca por debajo de PRECIO_PISO: si un solo rubro cotiza menos, el
   *  "desde S/1,700" de la portada, /servicios y llms.txt deja de ser cierto. */
  startingPrice: number;
  deliveryTime: string;
  moduleGroups: readonly RubroModuleGroup[];
}

export const rubroCats = ["Todos los rubros","Gastronomía","Retail y comercio","Salud y bienestar","Belleza","Servicios","Educación"] as const;

// Formato de marca: S/1,700 — sin espacio tras la barra, coma de millares.
export const soles = (n: number) => `S/${n.toLocaleString('en-US')}`;

export const totalModulos = (r: Rubro) =>
  r.moduleGroups.reduce((acc, g) => acc + g.modules.length, 0);

export const rubros: readonly Rubro[] = [
  {
    slug: "pollerias-restaurantes",
    emoji: "🍗",
    title: "Pollerías y Restaurantes",
    tagline: "Vende más sin pagar comisiones a apps de delivery",
    cat: "Gastronomía",
    short: "pollería",
    keyword: "sistema para pollería Perú",
    metaTitle: "Sistema Web y App para Pollerías y Restaurantes en Perú | Bitwise",
    metaDescription: "Plataforma completa para tu pollería o restaurante en Perú: carta QR, delivery propio, reservas y pedidos WhatsApp.",
    summary: "Tu propia plataforma de pedidos: carta QR, delivery propio y reservas — sin comisiones.",
    pain: "Perder 20-30% de margen en cada pedido con apps de delivery externas y no tener la base de datos de tus clientes.",
    solution: "Tu propia carta digital con QR, pedidos por WhatsApp, delivery con zona de cobertura propia y reservas de mesa.",
    startingPrice: 1700,
    deliveryTime: "15 días",
    moduleGroups: [
      {
        name: "Carta & Pedidos",
        modules: [
          { emoji: "📱", title: "Carta digital con QR", desc: "Los clientes escanean el QR de la mesa y ven la carta con fotos y precios actualizados." },
          { emoji: "🛵", title: "Delivery propio", desc: "Sistema de pedidos con cálculo de zona de cobertura y tarifa de envío automática." },
          { emoji: "💬", title: "Pedidos por WhatsApp", desc: "El carrito se envía directo al WhatsApp del local para confirmar y atender." },
          { emoji: "🪑", title: "Reservas de mesa", desc: "Los clientes reservan online con confirmación automática por WhatsApp." },
        ],
      },
      {
        name: "Pagos & Facturación",
        modules: [
          { emoji: "📲", title: "Billeteras digitales y tarjeta", desc: "Cobros digitales integrados con las principales pasarelas peruanas." },
          { emoji: "🧾", title: "Boleta electrónica SUNAT", desc: "Emite comprobantes electrónicos por cada pedido sin papeleo." },
          { emoji: "🎟️", title: "Cupones y combos", desc: "Promociones por día, happy hour y combos familiares configurables." },
        ],
      },
      {
        name: "Gestión & Clientes",
        modules: [
          { emoji: "📊", title: "Reportes de ventas", desc: "Conoce tu plato estrella, horas pico y ventas por día desde tu celular." },
          { emoji: "⭐", title: "Programa de fidelidad", desc: "Cada 10 pollos, el siguiente con descuento. Tracking automático por cliente." },
          { emoji: "📍", title: "SEO local + Google Maps", desc: "Aparece cuando buscan \"pollería cerca de mí\" en Lima o provincias." },
        ],
      },
    ],
  },
  {
    slug: "bodegas-minimarkets",
    emoji: "🏪",
    title: "Bodegas y Minimarkets",
    tagline: "Convierte tu bodega del barrio en un negocio digital",
    cat: "Retail y comercio",
    short: "bodega",
    keyword: "sistema para bodega Perú",
    metaTitle: "Sistema Web y App para Bodegas y Minimarkets Perú | Bitwise",
    metaDescription: "Catálogo online, pedidos WhatsApp, delivery por zona y control de stock para tu bodega o minimarket.",
    summary: "Catálogo WhatsApp con delivery por zona, control de stock y cobros billeteras digitales.",
    pain: "Los vecinos piden por WhatsApp sin precios claros, se pierde stock y no cobras rápido.",
    solution: "Catálogo digital con foto y precio, carrito WhatsApp, delivery por zona y caja con billeteras digitales.",
    startingPrice: 1700,
    deliveryTime: "7 días",
    moduleGroups: [
      {
        name: "Catálogo & Ventas",
        modules: [
          { emoji: "🛒", title: "Catálogo online con fotos", desc: "Todos tus productos con imagen, precio y disponibilidad actualizada al toque." },
          { emoji: "📍", title: "Delivery por zona (Lima/Provincias)", desc: "Cobertura por distrito con tarifas automáticas. Tu personal entrega." },
          { emoji: "💬", title: "Pedido directo WhatsApp", desc: "El vecino escoge, el carrito se envía a tu celular y tú confirmas." },
        ],
      },
      {
        name: "Cobros & Caja",
        modules: [
          { emoji: "📲", title: "Billeteras digitales, efectivo y tarjeta", desc: "Cobros contra entrega o adelantados con QR de billetera dinámico." },
          { emoji: "🧾", title: "Boleta electrónica SUNAT", desc: "Emisión opcional para clientes que la pidan. Cumple con todas las normas." },
          { emoji: "💰", title: "Caja del día", desc: "Reporte al cierre: vendido en efectivo, Billeteras digitales y pendientes." },
        ],
      },
      {
        name: "Stock & Gestión",
        modules: [
          { emoji: "📦", title: "Control de inventario", desc: "Alertas cuando un producto se agota para que no pierdas ventas." },
          { emoji: "🔁", title: "Productos recurrentes", desc: "Clientes frecuentes repiten pedidos con 1 clic desde el historial." },
          { emoji: "🏷️", title: "Ofertas y cupones", desc: "\"2x1 en gaseosas\", descuentos por monto mínimo o por fidelidad." },
        ],
      },
    ],
  },
  {
    slug: "farmacias-boticas",
    emoji: "💊",
    title: "Farmacias y Boticas",
    tagline: "Compite con las grandes cadenas en tu barrio",
    cat: "Salud y bienestar",
    short: "botica",
    keyword: "sistema para farmacia Perú",
    metaTitle: "Sistema Web y Delivery para Farmacias y Boticas Perú | Bitwise",
    metaDescription: "Plataforma para farmacias peruanas: catálogo de medicamentos, delivery por zona, pagos digitales y control DIGEMID.",
    summary: "Catálogo de medicamentos con búsqueda, delivery 24h, pagos digitales y reportes DIGEMID.",
    pain: "Las grandes cadenas te quitan clientes con su app y su delivery rápido, pero tus precios son mejores.",
    solution: "Tu propia farmacia online con buscador de genéricos, delivery por zona, pagos digitales y cumplimiento DIGEMID.",
    startingPrice: 1700,
    deliveryTime: "18 días",
    moduleGroups: [
      {
        name: "Catálogo farmacéutico",
        modules: [
          { emoji: "🔍", title: "Buscador inteligente", desc: "Busca por nombre comercial, genérico o principio activo (paracetamol, ibuprofeno...)." },
          { emoji: "💊", title: "Catálogo con laboratorio", desc: "Cada medicamento con foto, presentación, laboratorio y disponibilidad real." },
          { emoji: "📋", title: "Receta digital", desc: "El cliente sube foto de su receta y confirmas disponibilidad por WhatsApp." },
        ],
      },
      {
        name: "Delivery & Pagos",
        modules: [
          { emoji: "🚴", title: "Delivery 24h", desc: "Zonas de cobertura por distrito con tarifas diferenciadas por urgencia." },
          { emoji: "📲", title: "Pagos billeteras digitales/tarjeta", desc: "Cobros digitales integrados. Pago contra entrega disponible." },
          { emoji: "📱", title: "WhatsApp Business", desc: "Consultas en vivo con el técnico farmacéutico para recomendaciones." },
        ],
      },
      {
        name: "Gestión & Cumplimiento",
        modules: [
          { emoji: "📊", title: "Reportes DIGEMID", desc: "Control de lotes, vencimientos y reportes mensuales para fiscalización." },
          { emoji: "⚠️", title: "Alertas de vencimiento", desc: "Identifica productos próximos a vencer para liquidarlos a tiempo." },
          { emoji: "🔔", title: "Recordatorio de tratamiento", desc: "El cliente recibe recordatorios para comprar su medicación crónica." },
        ],
      },
    ],
  },
  {
    slug: "ferreterias",
    emoji: "🔧",
    title: "Ferreterías y Construcción",
    tagline: "Catálogo de miles de SKUs sin volverte loco",
    cat: "Retail y comercio",
    short: "ferretería",
    keyword: "ecommerce ferretería Perú",
    metaTitle: "Ecommerce para Ferreterías en Perú | Bitwise",
    metaDescription: "Tiendas online para ferreterías con catálogo masivo, precios mayorista/minorista, facturación SUNAT y despacho a obra.",
    summary: "Ecommerce con catálogo masivo, precios mayorista/minorista, facturación electrónica y despacho a obra.",
    pain: "Tienes 3,000 SKUs en stock pero los contratistas te piden cotización por WhatsApp con foto borrosa.",
    solution: "Ecommerce con buscador por rubro, precios diferenciados por tipo de cliente y cotización automática.",
    startingPrice: 2499,
    deliveryTime: "25 días",
    moduleGroups: [
      {
        name: "Catálogo & Cotización",
        modules: [
          { emoji: "🔩", title: "Catálogo por rubro", desc: "Categorías: plomería, eléctrica, pintura, gasfitería, herramientas, construcción." },
          { emoji: "📝", title: "Cotización por WhatsApp", desc: "El cliente arma su lista desde la web y se envía cotización formateada al WhatsApp." },
          { emoji: "💵", title: "Precio mayorista/minorista", desc: "Dos tarifas: retail al público, mayorista a contratistas registrados." },
        ],
      },
      {
        name: "Ventas B2B",
        modules: [
          { emoji: "🏗️", title: "Despacho a obra", desc: "Entrega directo en obra con guía de remisión electrónica." },
          { emoji: "🧾", title: "Facturación SUNAT", desc: "Factura electrónica para constructoras, boleta para público general." },
          { emoji: "👷", title: "Cuentas corporativas", desc: "Contratistas registrados ven precios especiales y acumulan crédito mensual." },
        ],
      },
      {
        name: "Inventario",
        modules: [
          { emoji: "📦", title: "Stock en tiempo real", desc: "Sincronización con tu caja física para que no vendas lo que no tienes." },
          { emoji: "🚚", title: "Integración con proveedores", desc: "Pedidos a Promart/Sodimac mayorista con un solo clic." },
          { emoji: "📊", title: "Reportes de productos estrella", desc: "Sabes cuál es tu SKU más rentable y cuál no rota." },
        ],
      },
    ],
  },
  {
    slug: "barberias-salones-belleza",
    emoji: "💈",
    title: "Barberías y Salones de Belleza",
    tagline: "Reservas online 24/7 sin contestar WhatsApp en tu día libre",
    cat: "Belleza",
    short: "barbería",
    keyword: "reservas online barbería salón Perú",
    metaTitle: "Sistema de Reservas para Barberías y Salones de Belleza Perú | Bitwise",
    metaDescription: "Reservas online para barberías y salones en Perú: agenda 24/7, recordatorios WhatsApp, pagos anticipados y fidelización.",
    summary: "Agenda online 24/7, recordatorios WhatsApp, pagos anticipados y programa de fidelidad.",
    pain: "Contestas reservas por WhatsApp en tu día libre, los clientes no llegan y pierdes el cupo del día.",
    solution: "Agenda online con cupos, recordatorios automáticos y pago adelantado opcional.",
    startingPrice: 1700,
    deliveryTime: "12 días",
    moduleGroups: [
      {
        name: "Reservas & Agenda",
        modules: [
          { emoji: "📅", title: "Calendario online 24/7", desc: "Tus clientes reservan desde su celular sin esperar que abras." },
          { emoji: "💈", title: "Agenda por barbero/estilista", desc: "Cada profesional tiene su calendario. Los clientes eligen con quién." },
          { emoji: "🔔", title: "Recordatorios WhatsApp", desc: "24h antes: \"Tu corte es mañana 3pm con José\". Reduce ausentismo." },
        ],
      },
      {
        name: "Servicios & Pagos",
        modules: [
          { emoji: "✂️", title: "Catálogo de servicios", desc: "Corte, barba, color, alisado — cada uno con duración y precio." },
          { emoji: "📸", title: "Galería de trabajos", desc: "Instagram-style: fotos de cortes recientes para atraer clientes nuevos." },
          { emoji: "💳", title: "Pago anticipado (opcional)", desc: "Cobra S/ 10 de seña por billetera digital para garantizar asistencia." },
        ],
      },
      {
        name: "Fidelización",
        modules: [
          { emoji: "⭐", title: "\"Cada 5 cortes, 1 gratis\"", desc: "Tracking automático por cliente. Sistema de puntos configurable." },
          { emoji: "🎂", title: "Descuento de cumpleaños", desc: "Cupón automático en el mes del cumpleaños del cliente." },
          { emoji: "⭐", title: "Reseñas de clientes", desc: "Calificaciones después de cada corte para destacar a tus estrellas." },
        ],
      },
    ],
  },
  {
    slug: "veterinarias-petshop",
    emoji: "🐾",
    title: "Veterinarias y Pet Shops",
    tagline: "Una plataforma que también amen los dueños de mascotas",
    cat: "Salud y bienestar",
    short: "veterinaria",
    keyword: "sistema veterinaria Perú",
    metaTitle: "Sistema Web para Veterinarias y Pet Shops en Perú | Bitwise",
    metaDescription: "Citas veterinarias online, historial clínico de mascotas, tienda de alimentos y recordatorios de vacunas.",
    summary: "Agenda de citas, historial clínico, tienda de alimentos/accesorios y recordatorios de vacunación.",
    pain: "Los dueños olvidan las vacunas anuales y el control, pierdes visitas recurrentes.",
    solution: "Historial clínico por mascota, recordatorios automáticos de vacunas y tienda online de alimentos.",
    startingPrice: 1700,
    deliveryTime: "18 días",
    moduleGroups: [
      {
        name: "Clínica & Citas",
        modules: [
          { emoji: "📅", title: "Agenda de consultas", desc: "Reserva online por tipo: consulta general, vacuna, baño, peluquería." },
          { emoji: "📋", title: "Historial clínico por mascota", desc: "Cada mascota tiene ficha con peso, vacunas, tratamientos previos." },
          { emoji: "💉", title: "Recordatorios de vacunas", desc: "Automático 1 semana antes del vencimiento por WhatsApp." },
        ],
      },
      {
        name: "Tienda Pet Shop",
        modules: [
          { emoji: "🥫", title: "Catálogo de alimentos y accesorios", desc: "Marca, tamaño, raza. Recomendaciones según la mascota registrada." },
          { emoji: "🚚", title: "Delivery a domicilio", desc: "Tu repartidor entrega croquetas directamente a la casa del cliente." },
          { emoji: "🔁", title: "Suscripción de alimento", desc: "Pedido recurrente mensual con descuento. Nunca se queda sin comida." },
        ],
      },
      {
        name: "Servicios adicionales",
        modules: [
          { emoji: "🛁", title: "Agenda de baño y peluquería", desc: "Cupos separados del veterinario, con upload de foto del corte deseado." },
          { emoji: "🏨", title: "Hotel/guardería de mascotas", desc: "Reserva de días con check-in y reporte fotográfico diario." },
          { emoji: "⭐", title: "Programa de fidelidad", desc: "Puntos acumulables por consulta, baño y compra de alimentos." },
        ],
      },
    ],
  },
  {
    slug: "talleres-mecanicos",
    emoji: "🔧",
    title: "Talleres Mecánicos y Automotriz",
    tagline: "Deja de perder clientes porque no contestas el WhatsApp",
    cat: "Servicios",
    short: "taller",
    keyword: "sistema taller mecánico Perú",
    metaTitle: "Sistema Web para Talleres Mecánicos en Perú | Bitwise",
    metaDescription: "Plataforma para talleres automotrices: citas online, diagnóstico con fotos, cotización y seguimiento del vehículo.",
    summary: "Agenda de citas, ingreso de vehículo con diagnóstico, cotización y seguimiento hasta la entrega.",
    pain: "El cliente llama 5 veces preguntando por su carro, pierdes tiempo y él pierde paciencia.",
    solution: "Panel del cliente donde ve el estado de su vehículo, fotos del diagnóstico y aprueba cotizaciones.",
    startingPrice: 1700,
    deliveryTime: "18 días",
    moduleGroups: [
      {
        name: "Recepción & Diagnóstico",
        modules: [
          { emoji: "📅", title: "Reserva de cita online", desc: "El cliente elige día, hora y tipo de servicio. Check-in rápido." },
          { emoji: "📸", title: "Ingreso con fotos", desc: "Documentas el estado inicial del vehículo. Protege al taller y al cliente." },
          { emoji: "🔧", title: "Diagnóstico digital", desc: "Lista de hallazgos con fotos y recomendaciones del mecánico." },
        ],
      },
      {
        name: "Cotización & Aprobación",
        modules: [
          { emoji: "📝", title: "Cotización online", desc: "El cliente la recibe por WhatsApp con detalle de mano de obra y repuestos." },
          { emoji: "✅", title: "Aprobación digital", desc: "El cliente aprueba por WhatsApp o web antes de empezar el trabajo." },
          { emoji: "💰", title: "Pagos billetera/transferencia", desc: "Anticipo 50% y saldo al retirar. Integrado con todas las pasarelas." },
        ],
      },
      {
        name: "Seguimiento & Fidelización",
        modules: [
          { emoji: "🚗", title: "Panel del cliente", desc: "Ve el estado: \"en diagnóstico\", \"esperando repuesto\", \"listo para retiro\"." },
          { emoji: "📆", title: "Recordatorio de mantenimiento", desc: "A los 5,000 km o 6 meses se recuerda el próximo cambio de aceite." },
          { emoji: "📋", title: "Historial del vehículo", desc: "Cada servicio queda registrado por placa. Útil para reventa o reclamos." },
        ],
      },
    ],
  },
  {
    slug: "panaderias-pastelerias",
    emoji: "🥐",
    title: "Panaderías y Pastelerías",
    tagline: "Vende tortas por pedido y pan caliente por delivery",
    cat: "Gastronomía",
    short: "panadería",
    keyword: "sistema pastelería panadería Perú",
    metaTitle: "Web y Sistema para Panaderías y Pastelerías Perú | Bitwise",
    metaDescription: "Pedidos de tortas personalizadas, delivery de pan, programas de fidelidad y suscripción mensual.",
    summary: "Pedidos de tortas con anticipación, delivery de pan y bollería, y suscripción mensual de canasta.",
    pain: "Los pedidos de tortas se agendan por WhatsApp sin formulario claro y pierdes información clave (fecha, sabor, mensaje).",
    solution: "Formulario online para pedidos personalizados, delivery programado y suscripción de desayuno.",
    startingPrice: 1700,
    deliveryTime: "15 días",
    moduleGroups: [
      {
        name: "Pedidos personalizados",
        modules: [
          { emoji: "🎂", title: "Formulario de torta por pedido", desc: "Tamaño, sabor, relleno, mensaje, tema, fecha de entrega — todo capturado." },
          { emoji: "📸", title: "Galería de diseños", desc: "El cliente escoge un modelo base o sube su inspiración para personalizar." },
          { emoji: "💵", title: "Seña online", desc: "Cobra 50% al confirmar el pedido con billetera digital o tarjeta. Reduce cancelaciones." },
        ],
      },
      {
        name: "Delivery diario",
        modules: [
          { emoji: "🥖", title: "Catálogo de panadería", desc: "Pan del día, bollería, empanadas — con horario de entrega." },
          { emoji: "🚴", title: "Delivery por zona", desc: "Entrega en tu distrito por la mañana y tarde." },
          { emoji: "🔁", title: "Suscripción \"Canasta de la semana\"", desc: "Cada lunes recibes tu canasta de pan + leche + café. Pago mensual." },
        ],
      },
      {
        name: "Fidelización",
        modules: [
          { emoji: "⭐", title: "Programa de puntos", desc: "Cada S/ 10 gastados = 1 punto. Canjea por postre gratis o descuentos." },
          { emoji: "🎂", title: "Recordatorio de cumpleaños", desc: "Detecta cumpleaños cercanos y ofrece torta con descuento." },
          { emoji: "📲", title: "WhatsApp masivo autorizado", desc: "Envía el menú del día solo a clientes que aceptaron recibir novedades." },
        ],
      },
    ],
  },
  {
    slug: "gimnasios-crossfit",
    emoji: "💪",
    title: "Gimnasios y Box de CrossFit",
    tagline: "Membresías, reservas de clase y app del miembro",
    cat: "Salud y bienestar",
    short: "gimnasio",
    keyword: "sistema gimnasio Perú",
    metaTitle: "Sistema Web y App para Gimnasios en Perú | Bitwise",
    metaDescription: "Plataforma para gimnasios peruanos: reservas de clases, membresías online, cobros recurrentes y app del miembro.",
    summary: "Reserva de clases con cupos, membresías online y cobros automáticos mensuales.",
    pain: "Clases llenas sin aviso, membresías gestionadas por Excel y cobros perseguidos por WhatsApp.",
    solution: "Sistema de reservas con cupos, cobros recurrentes automáticos y app del miembro.",
    startingPrice: 1700,
    deliveryTime: "20 días",
    moduleGroups: [
      {
        name: "Clases & Reservas",
        modules: [
          { emoji: "📅", title: "Horario de clases con cupos", desc: "CrossFit, spinning, yoga — cada clase con profesor, hora y cupo máximo." },
          { emoji: "📲", title: "Reserva desde la app", desc: "Los miembros reservan su cupo desde el celular. Lista de espera automática." },
          { emoji: "✅", title: "Check-in con QR", desc: "En la puerta, el miembro escanea su QR y valida su asistencia." },
        ],
      },
      {
        name: "Membresías & Cobros",
        modules: [
          { emoji: "💳", title: "Cobro recurrente mensual", desc: "Auto-débito con tarjeta o billetera digital suscrita. Nunca más persigas pagos." },
          { emoji: "🎟️", title: "Planes diferenciados", desc: "Básico, premium, pareja, estudiante — cada uno con beneficios distintos." },
          { emoji: "⏸️", title: "Pausa de membresía", desc: "Por viaje o enfermedad, el miembro pausa desde la app sin perder su plan." },
        ],
      },
      {
        name: "App del miembro",
        modules: [
          { emoji: "📊", title: "Tracking de progreso", desc: "Peso, medidas, PR de CrossFit (back squat, deadlift) registrados en su perfil." },
          { emoji: "🥗", title: "Plan nutricional", desc: "El nutricionista envía el plan semanal al miembro desde el panel." },
          { emoji: "🏆", title: "Ranking del box", desc: "Leaderboard mensual para motivar competencia sana entre miembros." },
        ],
      },
    ],
  },
  {
    slug: "clinicas-consultorios",
    emoji: "🦷",
    title: "Clínicas y Consultorios",
    tagline: "Citas online y SEO local para aparecer cuando te buscan",
    cat: "Salud y bienestar",
    short: "clínica",
    keyword: "página web clínica dental Perú",
    metaTitle: "Página Web para Clínicas y Consultorios en Perú | Bitwise",
    metaDescription: "Citas online, historia clínica digital y SEO local para clínicas, consultorios dentales y veterinarias.",
    summary: "Citas online con recordatorios, historia clínica digital y SEO para aparecer en Google Maps.",
    pain: "La recepcionista pierde 50% del día en WhatsApp agendando citas y el 30% no llega porque olvida.",
    solution: "Agenda online 24/7 con confirmación automática, recordatorios por WhatsApp y SEO local.",
    startingPrice: 1700,
    deliveryTime: "18 días",
    moduleGroups: [
      {
        name: "Agenda & Pacientes",
        modules: [
          { emoji: "📅", title: "Citas online 24/7", desc: "El paciente reserva desde el celular sin llamar. Confirmación automática." },
          { emoji: "👨‍⚕️", title: "Agenda por especialista", desc: "Cada doctor tiene su calendario con disponibilidad real." },
          { emoji: "🔔", title: "Recordatorios WhatsApp", desc: "\"Tu cita es mañana 3pm con Dra. Pérez\". Reduce 40% las ausencias." },
        ],
      },
      {
        name: "Historia clínica digital",
        modules: [
          { emoji: "📋", title: "Ficha digital del paciente", desc: "Datos, antecedentes, alergias, tratamientos — todo centralizado y seguro." },
          { emoji: "📸", title: "Radiografías/fotos clínicas", desc: "Almacén seguro de imágenes vinculadas al paciente." },
          { emoji: "📝", title: "Notas de evolución", desc: "El doctor documenta cada consulta con plantillas por tipo de procedimiento." },
        ],
      },
      {
        name: "SEO & Marketing Local",
        modules: [
          { emoji: "📍", title: "SEO \"dentista cerca de mí\"", desc: "Aparece en las primeras posiciones de Google en tu distrito." },
          { emoji: "⭐", title: "Perfil de empresa optimizado", desc: "Reseñas gestionadas, horarios, fotos y preguntas frecuentes en buscadores." },
          { emoji: "💬", title: "Chat WhatsApp en la web", desc: "El visitante pregunta y se convierte en cita sin salir de la web." },
        ],
      },
    ],
  },
  {
    slug: "opticas",
    emoji: "👓",
    title: "Ópticas",
    tagline: "Catálogo de monturas y agenda de exámenes de vista",
    cat: "Retail y comercio",
    short: "óptica",
    keyword: "sistema óptica Perú",
    metaTitle: "Sistema Web para Ópticas en Perú | Bitwise",
    metaDescription: "Catálogo de monturas, agenda de exámenes visuales, órdenes de lentes y pagos en cuotas para ópticas peruanas.",
    summary: "Catálogo de monturas, examen visual agendado, órdenes con medidas y pagos en cuotas.",
    pain: "El cliente ve la montura en tu Instagram pero no sabe si la tienes en stock ni el precio final con medida.",
    solution: "Catálogo con precio base + simulador de medida, agenda de examen y pago en cuotas.",
    startingPrice: 1700,
    deliveryTime: "18 días",
    moduleGroups: [
      {
        name: "Catálogo & Exámenes",
        modules: [
          { emoji: "👓", title: "Catálogo de monturas", desc: "Foto, marca, género, material y precio base. Filtros por estilo." },
          { emoji: "📅", title: "Agenda de examen visual", desc: "El cliente reserva su examen online y confirma por WhatsApp." },
          { emoji: "🧪", title: "Prueba virtual (opcional)", desc: "Con realidad aumentada el cliente ve cómo le queda la montura." },
        ],
      },
      {
        name: "Órdenes & Entrega",
        modules: [
          { emoji: "📋", title: "Orden con medidas", desc: "Registro de medida (esf, cil, eje), adición y tratamiento (antireflejo, fotocromático)." },
          { emoji: "🚚", title: "Notificación de recojo", desc: "Cuando los lentes están listos, se avisa automáticamente por WhatsApp." },
          { emoji: "💳", title: "Pago en cuotas sin interés", desc: "3, 6 o 12 cuotas con tarjeta Visa/Mastercard. Ideal para lentes progresivos." },
        ],
      },
      {
        name: "Fidelización",
        modules: [
          { emoji: "🛡️", title: "Garantía registrada", desc: "Cada par de lentes tiene garantía vinculada al cliente en el sistema." },
          { emoji: "♻️", title: "Revisión anual gratis", desc: "Recordatorio automático al año para revisión + descuento de renovación." },
          { emoji: "⭐", title: "Programa de fidelidad", desc: "Descuento progresivo por compra recurrente de lentes de contacto." },
        ],
      },
    ],
  },
  {
    slug: "academias-preuniversitarios",
    emoji: "🎓",
    title: "Academias y Pre-universitarios",
    tagline: "Matrícula online, clases virtuales y simulacros",
    cat: "Educación",
    short: "academia",
    keyword: "sistema academia preuniversitaria Perú",
    metaTitle: "Plataforma Web para Academias Pre-universitarias Perú | Bitwise",
    metaDescription: "Sistema para academias peruanas: matrícula online, plataforma de clases, simulacros, pagos en cuotas y reportes.",
    summary: "Matrícula online, plataforma de clases virtuales, simulacros tipo San Marcos/UNI y pagos en cuotas.",
    pain: "Recibes matrículas por WhatsApp sin control, cobras por billetera digital manual y no sabes qué alumno sabe qué.",
    solution: "Matrícula y pagos online, plataforma LMS básica, simulacros con ranking y reporte para padres.",
    startingPrice: 1999,
    deliveryTime: "25 días",
    moduleGroups: [
      {
        name: "Matrícula & Pagos",
        modules: [
          { emoji: "📝", title: "Inscripción online", desc: "Formulario completo del alumno, carrera objetivo y ciclo de ingreso." },
          { emoji: "💳", title: "Pago en cuotas (billetera/tarjeta)", desc: "Cuotas mensuales con recordatorios automáticos si se atrasa." },
          { emoji: "🎫", title: "Beca por mérito", desc: "Descuentos automáticos por nota del primer simulacro." },
        ],
      },
      {
        name: "Plataforma de Clases",
        modules: [
          { emoji: "📺", title: "Clases grabadas por tema", desc: "Biblioteca de videos por materia y nivel. El alumno repasa cuando quiera." },
          { emoji: "📚", title: "Material descargable", desc: "Separatas, formularios y solucionarios por tema en PDF." },
          { emoji: "💬", title: "Foro de consultas", desc: "El alumno pregunta al profesor y la respuesta queda visible para todos." },
        ],
      },
      {
        name: "Evaluación & Padres",
        modules: [
          { emoji: "📝", title: "Simulacros online estilo UNI/San Marcos", desc: "Con cronómetro, calificación automática y ranking del ciclo." },
          { emoji: "📊", title: "Reporte de progreso", desc: "Por alumno: nota por materia, asistencia y posición en el ranking." },
          { emoji: "👨‍👩‍👧", title: "Portal de padres", desc: "Papá/mamá ven asistencia, notas y pagos sin intermediarios." },
        ],
      },
    ],
  },
];

export const getRubro = (slug: string) => rubros.find((r) => r.slug === slug);

// Guardia de build. Si alguien vuelve a bajar un rubro por debajo del piso, el
// build falla en vez de publicar un "desde S/1,700" que ya no es verdad.
const bajoPiso = rubros.filter((r) => r.startingPrice < PRECIO_PISO);
if (bajoPiso.length > 0) {
  throw new Error(
    `Rubros por debajo del piso de ${soles(PRECIO_PISO)}: ` +
      bajoPiso.map((r) => `${r.slug} (${soles(r.startingPrice)})`).join(', '),
  );
}
