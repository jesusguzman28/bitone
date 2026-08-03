// Pregunta de cabecera para cada tarjeta de la sección "el problema".
//
// La sección se muestra como tarjetas que se pasan una a una, y cada tarjeta
// abre con una pregunta: es lo que hace que el visitante quiera leer la
// respuesta, que es el párrafo que ya existía en landings.ts. El texto de los
// párrafos no se toca —ahí vive el contenido que indexa Google—, esto solo le
// pone puerta de entrada a cada uno.
//
// Están escritas por rubro y en el mismo orden que los párrafos de su landing:
// la pregunta 1 se responde con el párrafo 1, y así. Si un rubro no aparece
// aquí, la plantilla cae a un rótulo neutro y la página no se rompe.

export const preguntasProblema: Record<string, readonly string[]> = {
  pollerias: [
    '¿Cuánto de tu venta se está llevando la app de delivery?',
    '¿Te encuentran cuando buscan "pollería" en tu distrito?',
    '¿Qué se pierde cada fin de semana sin web propia?',
  ],
  ferreterias: [
    '¿Quién puede saberse de memoria tus tres mil códigos?',
    '¿Cómo manejas el precio de público y el de contratista?',
    '¿El cliente sabe en qué sucursal sí hay stock?',
  ],
  veterinarias: [
    '¿Quién le recuerda al dueño la vacuna que ya toca?',
    '¿Cómo entran las citas mientras estás en consulta?',
    '¿Quién se está llevando la venta recurrente de alimento?',
  ],
  clinicas: [
    '¿Cuánta jornada se va contestando el teléfono?',
    '¿Qué pasa con la cita a la que el paciente no llegó?',
    '¿Apareces cuando buscan "dentista de urgencia" un domingo?',
  ],
  academias: [
    '¿Estás visible en las semanas que definen tu año?',
    '¿Dónde vive hoy la información de la matrícula?',
    '¿Los padres pueden ver tus resultados en algún lado?',
  ],
  gimnasios: [
    '¿Cómo se está cobrando la mensualidad hoy?',
    '¿La grilla de clases está publicada o se pregunta por chat?',
    '¿Qué ve quien te compara con otros dos gimnasios?',
  ],
  'talleres-mecanicos': [
    '¿Cuántas veces llama el cliente por el mismo carro?',
    '¿Las cotizaciones se siguen aprobando de palabra?',
    '¿Quién documenta cómo llegó el vehículo al taller?',
  ],
  farmacias: [
    '¿El barrio sabe que tienes mejor precio que la cadena?',
    '¿Cómo respondes hoy el "¿tienes tal cosa?"',
    '¿Quién cuida al paciente crónico, tu mejor cliente?',
  ],
  panaderias: [
    '¿Cómo se toma hoy un encargo de seis datos por chat?',
    '¿Qué pasa cuando cancelan un encargo sin seña?',
    '¿Llegas preparado a la temporada que define tu año?',
  ],
  barberias: [
    '¿Cuántos cupos por silla se pierden cada día?',
    '¿Tu día libre es libre de verdad?',
    '¿Qué pasa con el que reservó y nunca vino?',
  ],
  opticas: [
    '¿Vendes salud visual o moda? ¿Y cómo lo comunica tu óptica?',
    '¿Cómo le explicas al cliente el precio de montura más luna?',
    '¿El paciente sabe qué cubre su seguro contigo?',
  ],
  bodegas: [
    '¿Cuántas veces al día respondes "¿tienes...?" por WhatsApp?',
    '¿El delivery te deja algo o se hace perdiendo?',
    '¿El precio vive en la memoria de quien esté atendiendo?',
  ],
};
