// Flashcards de la sección "el problema": pregunta al frente, respuesta corta
// al dorso. La tarjeta se voltea con una animación para leer la respuesta.
//
// La respuesta es un resumen de dos frases del párrafo largo que ya existe en
// landings.ts; el párrafo completo sigue publicándose entero debajo de las
// tarjetas (en un desplegable), porque ahí vive el contenido que indexa
// Google. Aquí no se afirma nada que no esté ya dicho en ese párrafo.
//
// Están escritas por rubro y en el mismo orden que los párrafos de su landing.
// Si un rubro no aparece, la plantilla cae al modo sin volteo y no se rompe.

export interface Flashcard {
  /** Pregunta que se ve al frente de la tarjeta. */
  q: string;
  /** Respuesta corta al dorso: dos frases, la segunda dice qué lo resuelve. */
  r: string;
}

export const flashcardsProblema: Record<string, readonly Flashcard[]> = {
  pollerias: [
    {
      q: '¿Cuánto de tu venta se está llevando la app de delivery?',
      r: 'Entre 20% y 30% de cada pedido, directo de tu margen. Y el cliente queda registrado en la app, no en tu pollería: ni siquiera puedes avisarle una promoción.',
    },
    {
      q: '¿Te encuentran cuando buscan "pollería" en tu distrito?',
      r: 'Hoy aparecen las cadenas y las apps; tu carta vive en Facebook con precios vencidos. Con web propia entras a esa búsqueda con la carta al día.',
    },
    {
      q: '¿Qué se pierde cada fin de semana sin web propia?',
      r: 'Pedidos que se caen por falta de respuesta y direcciones que llegan en audio. En la web el cliente arma su pedido solo y te llega listo para despachar.',
    },
  ],
  ferreterias: [
    {
      q: '¿Quién puede saberse de memoria tus tres mil códigos?',
      r: 'Nadie: cada consulta obliga a ir al almacén a revisar. Un catálogo en línea responde medida y disponibilidad mientras tú atiendes el mostrador.',
    },
    {
      q: '¿Cómo manejas el precio de público y el de contratista?',
      r: 'Publicando uno solo pierdes por un lado o por el otro. Con precios por tipo de cliente cada quien ve el suyo, y publicar precios te mete en las búsquedas de Google.',
    },
    {
      q: '¿El cliente sabe en qué sucursal sí hay stock?',
      r: 'Hoy no, y un viaje al local equivocado cuesta un cliente completo. La web muestra la disponibilidad por sucursal antes de que salga de su casa.',
    },
  ],
  veterinarias: [
    {
      q: '¿Quién le recuerda al dueño la vacuna que ya toca?',
      r: 'Hoy nadie: el dueño no lleva la cuenta y vuelve recién cuando la mascota se enferma. Un recordatorio automático trae de vuelta esa visita recurrente.',
    },
    {
      q: '¿Cómo entran las citas mientras estás en consulta?',
      r: 'Por WhatsApp con las manos ocupadas, y así se cruzan turnos. La agenda en línea toma la cita sola, sin sacarte de la consulta.',
    },
    {
      q: '¿Quién se está llevando la venta recurrente de alimento?',
      r: 'La tienda online que atiende el domingo a las once de la noche. Tu web puede tomar ese pedido y quedarse con esa compra predecible y de buen margen.',
    },
  ],
  clinicas: [
    {
      q: '¿Cuánta jornada se va contestando el teléfono?',
      r: 'Media jornada de la recepción, mientras el paciente del mostrador espera. La reserva en línea agenda, confirma y reprograma sola.',
    },
    {
      q: '¿Qué pasa con la cita a la que el paciente no llegó?',
      r: 'El bloque queda muerto y no se recupera. Un recordatorio automático antes de la cita baja el ausentismo sin que nadie persiga a nadie.',
    },
    {
      q: '¿Apareces cuando buscan "dentista de urgencia" un domingo?',
      r: 'Esa búsqueda se la lleva quien publica dirección, horario y un botón de reserva. Una página de Facebook con el horario del año pasado no compite.',
    },
  ],
  academias: [
    {
      q: '¿Estás visible en las semanas que definen tu año?',
      r: 'Si los ciclos, horarios y precios no están publicados en esa ventana, la familia compara y elige sin hablar contigo. La web te mete en esa comparación.',
    },
    {
      q: '¿Dónde vive hoy la información de la matrícula?',
      r: 'En un flyer de WhatsApp y una hoja de cálculo que no alcanza. Con matrícula en línea cada pago queda registrado con nombre y cuota.',
    },
    {
      q: '¿Los padres pueden ver tus resultados en algún lado?',
      r: 'Es lo que más pesa al decidir: ingresantes, a qué universidad y en qué proceso. Esa vitrina hoy vive solo en el banner de la fachada.',
    },
  ],
  gimnasios: [
    {
      q: '¿Cómo se está cobrando la mensualidad hoy?',
      r: 'A mano y por WhatsApp, y cada mes se escapan socios que nadie sabe si se fueron. El cobro con recordatorio automático no pierde a nadie por olvido.',
    },
    {
      q: '¿La grilla de clases está publicada o se pregunta por chat?',
      r: 'Cada interesado pregunta lo mismo: horario, cupo y quién dicta. La grilla con cupos en línea llena la sala sin llenar el celular de la recepción.',
    },
    {
      q: '¿Qué ve quien te compara con otros dos gimnasios?',
      r: 'Precio, horario y ubicación en dos minutos. Si tus planes no están publicados, te descartan antes de escribirte.',
    },
  ],
  'talleres-mecanicos': [
    {
      q: '¿Cuántas veces llama el cliente por el mismo carro?',
      r: 'Para traerlo, por el precio y por si ya está listo, y cada llamada saca a un mecánico de abajo de un vehículo. El estado en línea responde sin interrumpir.',
    },
    {
      q: '¿Las cotizaciones se siguen aprobando de palabra?',
      r: 'Sí, y cuando el monto no coincide pierde el taller, porque no hay nada escrito. La cotización digital aprobada por el cliente respalda cada sol.',
    },
    {
      q: '¿Quién documenta cómo llegó el vehículo al taller?',
      r: 'Hoy nadie, y cualquier reclamo es palabra contra palabra. La recepción digital con fotos y kilometraje cuesta menos que un solo reclamo mal resuelto.',
    },
  ],
  farmacias: [
    {
      q: '¿El barrio sabe que tienes mejor precio que la cadena?',
      r: 'No: la cadena aparece primero con app y delivery, y la comparación termina antes de que sepan que existes. Publicar tu catálogo pone tu ventaja a la vista.',
    },
    {
      q: '¿Cómo respondes hoy el "¿tienes tal cosa?"',
      r: 'Dejando el mostrador para ir a mirar el anaquel. Con el catálogo en línea el cliente consulta solo, a cualquier hora, sin desatender a nadie.',
    },
    {
      q: '¿Quién cuida al paciente crónico, tu mejor cliente?',
      r: 'Hoy nadie le recuerda cuando se le acaba el tratamiento, y compra donde le quede a mano. Un recordatorio mensual lo trae de vuelta a tu botica.',
    },
  ],
  panaderias: [
    {
      q: '¿Cómo se toma hoy un encargo de seis datos por chat?',
      r: 'Entre clientes del mostrador, y el dato que falta aparece el día de la entrega. El formulario de encargo pide los siete campos de una, sin olvidos.',
    },
    {
      q: '¿Qué pasa cuando cancelan un encargo sin seña?',
      r: 'La panadería asume insumos, horno y agenda. La seña en línea compromete el encargo antes de comprar un solo insumo.',
    },
    {
      q: '¿Llegas preparado a la temporada que define tu año?',
      r: 'Panetón, rosca y día de la madre se juegan en dos o tres semanas. La web toma pedidos con anticipación y cierra sola cuando el horno se llena.',
    },
  ],
  barberias: [
    {
      q: '¿Cuántos cupos por silla se pierden cada día?',
      r: 'Los que se agendan por WhatsApp mientras estás cortando: o dejas al de la silla o contestas dos horas tarde. La reserva en línea llena los cupos sola.',
    },
    {
      q: '¿Tu día libre es libre de verdad?',
      r: 'No: las reservas del lunes entran el domingo y las contestas tú. Con agenda en línea se agendan solas y el descanso vuelve a ser descanso.',
    },
    {
      q: '¿Qué pasa con el que reservó y nunca vino?',
      r: 'Cuarenta minutos muertos en la mejor hora del sábado, y le dijiste que no a otro. Recordatorio automático y seña hacen que faltar cueste.',
    },
  ],
  opticas: [
    {
      q: '¿Vendes salud visual o moda? ¿Y cómo lo comunica tu óptica?',
      r: 'Son dos conversaciones: monturas como en una tienda y examen como en un consultorio. La web las separa para que cada cliente encuentre lo suyo.',
    },
    {
      q: '¿Cómo le explicas al cliente el precio de montura más luna?',
      r: 'Con precios desde y ejemplos por tipo de luna el cliente llega sabiendo el rango. El "¿cuánto sale?" deja de matar la conversación.',
    },
    {
      q: '¿El paciente sabe qué cubre su seguro contigo?',
      r: 'Casi nunca, y llama a preguntar mientras alguien busca en una carpeta. La óptica que publica sus convenios se lleva a ese paciente sin una llamada.',
    },
  ],
  bodegas: [
    {
      q: '¿Cuántas veces al día respondes "¿tienes...?" por WhatsApp?',
      r: 'Decenas: diez mensajes para una compra de treinta soles. Con catálogo y precios publicados el pedido se arma solo, sin conversación.',
    },
    {
      q: '¿El delivery te deja algo o se hace perdiendo?',
      r: 'Sin monto mínimo ni tarifa por zona, casi siempre pierde. La web cobra el envío por distrito antes de aceptar el pedido.',
    },
    {
      q: '¿El precio vive en la memoria de quien esté atendiendo?',
      r: 'Sí, y cuando cada uno dice un número distinto el cliente lo nota. El precio publicado es uno solo para todos, y esa consistencia es confianza.',
    },
  ],
};
