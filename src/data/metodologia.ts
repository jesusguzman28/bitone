// Contenido de /metodologia/.
//
// Por qué esta página existe y por qué está escrita así:
//
// Un área de sistemas que evalúa proveedores hace siempre la misma pregunta,
// aunque no la formule: "¿y si esto se va de las manos?". La respuesta a eso no
// es una lista de tecnologías ni un portafolio: es el proceso. Es lo que
// separa una fábrica de software de un freelance con RUC.
//
// La regla al escribir esto fue no publicar un manual de Scrum. Cualquiera
// puede copiar los cinco eventos y los tres roles de la guía oficial, y quien
// lo lee lo nota: si la página describe una ceremonia que la empresa no hace,
// se cae en la primera reunión. Lo que va aquí es la ADAPTACIÓN concreta —qué
// se toma de ágil, qué no se toma y por qué—, incluidas las partes donde
// deliberadamente no seguimos el manual.
//
// El bloque más importante es `cambios`. Todo el sitio promete "alcance y
// precio cerrados por escrito" y a la vez "entregas por etapas revisables", y
// esas dos frases se contradicen si nadie explica cómo conviven. Casi ningún
// proveedor publica esa tabla, y es exactamente el documento que un comprador
// necesita para justificar la contratación dentro de su empresa.

export interface Fase {
  /** Número visible. Aquí la numeración SÍ es información: el orden es el del
   *  proceso real y una fase no empieza sin que la anterior esté firmada. */
  n: string;
  nombre: string;
  /** Qué ocurre durante la fase. */
  que: string;
  /** Qué recibe el cliente al terminarla. Si una fase no deja nada en manos del
   *  cliente, no es una fase: es trabajo interno. */
  entregable: string;
  duracion: string;
  /** Nombre del icono en iconos.ts. */
  icono: string;
}

// Aquí vivía `FilaSprint`, el tipo de las filas de la tabla del sprint. La
// tabla se convirtió en calendario y el tipo se quedó sin usar.

export interface TipoCambio {
  tipo: string;
  ejemplo: string;
  /** Qué se hace cuando aparece. */
  tratamiento: string;
  decide: string;
  /** 'no' = no mueve precio ni fecha · 'quizas' = puede moverlos ·
   *  'si' = los mueve siempre. Pinta el semáforo de la tabla. */
  impacto: 'no' | 'quizas' | 'si';
  impactoTexto: string;
}

export interface Modo {
  nombre: string;
  /** Cómo se organiza el trabajo en esa forma de contratar. */
  marco: string;
  porque: string;
  ritmo: string;
  icono: string;
}

export const metodologia = {
  metaTitle: 'Metodología de trabajo: ágil con alcance cerrado',
  metaDescription:
    'Cómo trabajamos: sprints de dos semanas, alcance cerrado por contrato y una vía formal para los cambios. Las cinco fases y qué recibes en cada una.',

  h1: 'Ágil sin renunciar al <span class="gradient-text--warm">alcance cerrado</span>',
  intro:
    'Todo cliente pide dos cosas que sobre el papel no caben juntas: precio cerrado y poder cambiar de opinión. Aquí está, paso a paso, cómo las hacemos convivir.',

  // ---- La tensión: dos frases enfrentadas y la salida ----
  //
  // Esto eran cuatro párrafos largos. El argumento estaba bien, pero nadie lee
  // cuatro párrafos para decidir si te agenda una reunión, y menos en la
  // primera sección de la página. La misma idea son ahora dos frases
  // enfrentadas y una línea de resolución: se entiende de un vistazo, sin
  // leerla entera.
  //
  // Regla para cuando toque añadir algo aquí: si hace falta un párrafo, casi
  // siempre significa que todavía no está claro qué se quería decir.
  tension: {
    title: 'Por qué ágil y precio cerrado chocan',
    agil: {
      rotulo: 'Lo que dice ágil',
      frase: 'Bienvenidos los cambios de requisitos, incluso tarde.',
      pie: 'Nadie conoce del todo un sistema hasta que lo usa.',
    },
    contrato: {
      rotulo: 'Lo que dice el contrato',
      frase: 'Esto se construye, en este plazo y por este precio.',
      pie: 'Nadie aprueba una orden de compra que diga "lo que vaya saliendo".',
    },
    salida:
      'Caben las dos si se separan: <strong>el contrato fija QUÉ se construye; el sprint decide EN QUÉ ORDEN y CÓMO.</strong> Dentro del alcance repriorizas cuantas veces quieras, sin costo. Lo que sale del alcance tiene una puerta, y está en la tabla de más abajo.',
  },

  // ---- El flujo completo ----
  fases: {
    title: 'De la primera reunión a producción',
    intro:
      'Cinco fases. Ninguna empieza sin que la anterior te haya entregado algo en la mano.',
    items: [
      {
        n: '1',
        nombre: 'Análisis',
        que: 'Reuniones con quien conoce la operación. Qué tiene que hacer el sistema, con qué se integra y qué queda fuera. Se puede contratar sola.',
        entregable: 'Alcance, cronograma y precio cerrado.',
        duracion: '1 a 3 semanas',
        icono: 'buscar',
      },
      {
        n: '2',
        nombre: 'Arranque',
        que: 'Se firma el alcance y se monta lo necesario: repositorios a tu nombre, entornos, accesos y el tablero donde verás el avance.',
        entregable: 'Accesos, tablero y primer sprint planificado.',
        duracion: '3 a 5 días',
        icono: 'llave',
      },
      {
        n: '3',
        nombre: 'Construcción',
        que: 'Sprints de dos semanas. Cada uno abre con una planificación donde tú priorizas y cierra con software funcionando, no con diapositivas.',
        entregable: 'Cada dos semanas: incremento probado y desplegado.',
        duracion: 'Según el alcance',
        icono: 'cajas',
      },
      {
        n: '4',
        nombre: 'Estabilización',
        que: 'Un sprint entero sin funcionalidad nueva: pruebas con datos reales, carga si hace falta y corrección. Va planificado desde el principio.',
        entregable: 'Sistema probado y lista de defectos cerrada.',
        duracion: '2 semanas',
        icono: 'escudo',
      },
      {
        n: '5',
        nombre: 'Entrega',
        que: 'Puesta en producción acompañada, capacitación y traspaso técnico a quien lo vaya a mantener, seamos nosotros o no.',
        entregable: 'Producción, documentación, accesos y 30 días de garantía.',
        duracion: '1 semana',
        icono: 'caja',
      },
    ] as readonly Fase[],
  },

  // ---- El sprint por dentro, como calendario ----
  //
  // Esto era una tabla de cinco filas: cuándo, qué pasa, quién. Correcta y
  // completa, y aun así había que leerla entera para entender lo único que
  // importa de un sprint, que es su RITMO —cuántas veces te vamos a interrumpir
  // y cuánto duran esas veces—.
  //
  // Un calendario de diez días lo enseña sin leer: se ven tres marcas en dos
  // semanas y ya está entendido. La tabla decía lo mismo pidiendo trabajo al
  // lector; el calendario lo regala.
  //
  // `dia` es la posición en la rejilla de 10 días laborables (1 = lunes de la
  // primera semana, 10 = viernes de la segunda). `tuyo` marca los hitos en los
  // que participa el cliente, que se pintan en color de marca: de un vistazo se
  // ve que son tres y que dos son opcionales o cortos.
  sprint: {
    title: 'Cómo se ven dos semanas de trabajo',
    intro:
      'Siempre igual, para que sepas qué esperar y cuándo. Tres momentos contigo en diez días laborables; el resto es construcción con el tablero abierto.',
    regla: 'La regla que lo sostiene: una vez empezado, el alcance del sprint no cambia. Lo urgente entra al siguiente — o se para el sprint de forma explícita, que es decisión tuya y queda registrada.',
    hitos: [
      {
        dia: 1,
        titulo: 'Planificación',
        duracion: '1 hora',
        que: 'Tú priorizas, el equipo estima. Sale la lista cerrada de estas dos semanas.',
        quien: 'Tu responsable + el equipo',
        tuyo: true,
      },
      {
        dia: 4,
        titulo: 'Punto de control',
        duracion: '15 min · opcional',
        que: 'Solo para bloqueos que dependen de tu lado. Si no hay ninguno, se cancela.',
        quien: 'Tu responsable + líder técnico',
        tuyo: true,
      },
      {
        dia: 10,
        titulo: 'Demostración',
        duracion: '45 min',
        que: 'Funcionando, en un entorno donde puedes entrar después. Y el acta el mismo día: qué se terminó, qué no y qué entra en el siguiente.',
        quien: 'A quien quieras invitar',
        tuyo: true,
      },
    ],
    /** Lo que ocupa los días entre hitos. Va aparte porque no es un evento con
     *  fecha: es el fondo sobre el que ocurren los tres de arriba. */
    fondo: {
      titulo: 'Construcción',
      que: 'El tablero está abierto y al día: puedes mirar cuando quieras sin pedirle un informe a nadie.',
    },
  },

  // ---- El control de cambios ----
  cambios: {
    title: 'Qué pasa cuando algo cambia',
    intro:
      'Siempre cambia algo. Lo que separa un proyecto que acaba bien de uno que acaba en reclamo no es cuántos cambios hubo, sino si estaba acordado de antemano qué hacer con ellos. Busca tu caso en la tabla.',
    nota: 'Ningún cambio se ejecuta sin aprobación escrita. Tampoco se absorbe en silencio "para no molestar": así es como una fecha se descubre incumplida el día de la entrega.',
    filas: [
      {
        tipo: 'Reordenar prioridades',
        ejemplo: 'Los reportes urgen más que la configuración.',
        tratamiento: 'Se reordena en la siguiente planificación. Sin trámite: es el uso normal del proceso.',
        decide: 'Tú, en la planificación',
        impacto: 'no',
        impactoTexto: 'No mueve nada',
      },
      {
        tipo: 'Detalle de ejecución',
        ejemplo: 'Ese listado va mejor con los filtros arriba.',
        tratamiento: 'Se ajusta dentro del sprint. El alcance dice qué hace la pantalla, no cómo se dibuja.',
        decide: 'Tú y el equipo, en la demo',
        impacto: 'no',
        impactoTexto: 'No mueve nada',
      },
      {
        tipo: 'Defecto en lo entregado',
        ejemplo: 'El cálculo no cuadra en un caso concreto.',
        tratamiento: 'Entra al sprint en curso con prioridad. No es un cambio: no cumple lo acordado.',
        decide: 'Nosotros, sin consultar',
        impacto: 'no',
        impactoTexto: 'Sin costo, en garantía',
      },
      {
        tipo: 'Alcance nuevo',
        ejemplo: 'Además queremos facturación electrónica.',
        tratamiento: 'Solicitud formal. Se estima en 48 h hábiles con su impacto en precio y fecha. No se toca hasta que la apruebes.',
        decide: 'Tú, por escrito',
        impacto: 'si',
        impactoTexto: 'Cotización aparte',
      },
      {
        tipo: 'Alcance que se retira',
        ejemplo: 'El módulo de inventario ya no hace falta.',
        tratamiento: 'Sale del plan y su importe queda a favor: se descuenta o se cambia por alcance nuevo. Tú eliges.',
        decide: 'Tú, por escrito',
        impacto: 'quizas',
        impactoTexto: 'Baja o compensa',
      },
      {
        tipo: 'Cambio en tu lado',
        ejemplo: 'Cambiaron el sistema con el que había que integrarse.',
        tratamiento: 'Se evalúa y se replanifica juntos. No se penaliza, pero la fecha nueva queda por escrito el mismo día.',
        decide: 'Ambas partes',
        impacto: 'quizas',
        impactoTexto: 'Puede mover la fecha',
      },
    ] as readonly TipoCambio[],
  },

  // ---- Los dos marcos ----
  modos: {
    title: 'Un marco distinto según el encargo',
    intro:
      'Aquí no seguimos el manual, y es a propósito: forzar sprints donde no encajan produce reuniones vacías que todos se saltan a la tercera semana.',
    items: [
      {
        nombre: 'Proyecto y apps',
        marco: 'Sprints de dos semanas',
        porque: 'Hay alcance cerrado y fecha comprometida: el trabajo se planifica en bloques y se demuestra en ciclos.',
        ritmo: 'Planificación y demo cada 2 semanas',
        icono: 'tuerca',
      },
      {
        nombre: 'Mantenimiento',
        marco: 'Flujo continuo con prioridades',
        porque: 'El trabajo llega cuando llega: una urgencia de producción no espera al lunes. Cola priorizada con límite de trabajo en curso.',
        ritmo: 'Revisión de cola semanal o quincenal',
        icono: 'soporte',
      },
    ] as readonly Modo[],
  },

  // ---- Definición de terminado ----
  terminado: {
    title: 'Qué significa “terminado”',
    intro:
      'Si no se acuerda antes, "terminado" acaba significando cosas distintas para cada lado — y eso se descubre siempre el día de la entrega. Estas cinco se cumplen o la tarea no se marca como hecha.',
    items: [
      'Revisado por otra persona del equipo, no solo por quien lo escribió.',
      'Lo crítico con pruebas automáticas: cálculos, reglas de negocio e integraciones.',
      'Desplegado donde tú puedes entrar y probarlo.',
      'Documentado lo que otro necesitaría para entenderlo.',
      'La deuda técnica que quede, registrada y visible en el tablero.',
    ],
  },

  // ---- Lo que se pide del lado del cliente ----
  contigo: {
    title: 'Lo que necesitamos de tu lado',
    intro:
      'Cuatro cosas, y ninguna cuesta dinero. Pero si faltan, el ritmo se cae: esto funciona con las dos partes dentro.',
    items: [
      {
        title: 'Una persona que decida',
        desc: 'Con autoridad para priorizar y aprobar, no solo para transmitir. Si cada decisión sube dos niveles y vuelve, el sprint se queda esperando.',
      },
      {
        title: 'Respuesta a bloqueos en 48 h',
        desc: 'Solo a lo que tiene el trabajo detenido. Lo planteamos por escrito y con la decisión ya formulada, para que responder sea rápido.',
      },
      {
        title: 'Los accesos a tiempo',
        desc: 'Entornos, credenciales y documentación de lo que hay que integrar. Es la causa número uno de retraso en el arranque.',
      },
      {
        title: 'Presencia en la demo',
        desc: '45 minutos cada dos semanas. Es el único momento en que corregir el rumbo cuesta barato.',
      },
    ],
  },

  faqs: [
    {
      q: '¿Qué pasa si el sprint no termina lo que se planificó?',
      a: 'Se dice en la demo, con el motivo, y lo que quedó abierto entra primero en la planificación siguiente. No se maquilla ni se da por terminado a medias: un sprint que "cierra" con trabajo sin acabar destruye la única señal de avance fiable que tiene el proyecto. Si eso se repite dos sprints seguidos, la estimación estaba mal y lo hablamos, incluido qué significa para la fecha comprometida.',
    },
    {
      q: '¿Podemos parar el proyecto a mitad?',
      a: 'Sí, y es una de las razones de trabajar por etapas. Se cierra el sprint en curso, se entrega lo construido hasta ahí funcionando y documentado, y se liquida lo ejecutado. No hay penalidad por detener: lo que se paga es lo que se hizo. Como el código y la documentación son tuyos desde el inicio, puedes retomarlo con quien quieras.',
    },
    {
      q: '¿Hacen reuniones diarias con nosotros?',
      a: 'No, y es a propósito. La reunión diaria es una herramienta de coordinación interna del equipo que construye; convertirla en una reunión con el cliente lo termina poniendo de jefe de proyecto, que no es lo que contrató. Tú tienes el tablero abierto todo el día, un punto de control opcional a mitad de sprint y una demo cada dos semanas. Si hace falta más contacto en un momento concreto, se acuerda para ese momento.',
    },
    {
      q: '¿Y si preferimos precio por horas en vez de cerrado?',
      a: 'Se puede, y en dos casos lo recomendamos nosotros: cuando el alcance es genuinamente incierto —una exploración, una prueba de concepto— y en mantenimiento, donde el trabajo no se deja acotar de antemano. En un proyecto con alcance conocido preferimos el precio cerrado porque traslada a nosotros el riesgo de estimación, que es donde debe estar.',
    },
    {
      q: '¿Trabajan con nuestra metodología si ya tenemos una?',
      a: 'Se puede adaptar el ritmo, los formatos de reporte y las herramientas a lo que tu empresa ya use, mientras se mantengan las dos piezas que hacen que el compromiso de fecha signifique algo: alcance del sprint fijo una vez empezado, y cambios fuera de alcance por escrito. Todo lo demás es negociable.',
    },
    {
      q: '¿Cómo sabemos que el avance que reportan es real?',
      a: 'Porque no se reporta con porcentajes. Un "60% avanzado" no es comprobable y por eso es el indicador favorito de los proyectos que van mal. Lo que se enseña cada dos semanas es software funcionando en un entorno donde entras tú, y el tablero está abierto en todo momento. Si algo no se puede demostrar, se cuenta como no empezado.',
    },
  ],
} as const;
