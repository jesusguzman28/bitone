// Todo lo que cuenta /rescate/. Los hechos salen de brief/02-oferta.md (sección 2.5):
// se reescribe el estilo, no el hecho.
// Reglas de esta página:
//  - El visitante YA tiene un sistema. No se le vende uno nuevo: se le dice en qué
//    orden se abre el suyo. "Primero entender, después dejarlo escrito, y recién al
//    final tocar" es del dueño ("Cómo funciona"), y ese es el orden de los pasos.
//  - El damero es el sistema del visitante, y la entrada de la sección lo dice con
//    palabras. Dieciséis casillas que pasan de no verse a estar cada una con su nombre
//    y en su sitio. La casilla dorada son las reglas de su negocio que estaban solo
//    dentro del programa: aparece cuando quedan escritas (paso 3), una por dibujo.
//  - Los cuatro pasos: revisar, informe, dejar explicado y arreglar lo urgente. Los
//    plazos son los de la tabla de fases del brief. "Lo dejamos explicado" no tiene
//    plazo ahí: no se le inventa uno y su rótulo va sin segundo renglón.
//  - Dinero, solo lo que dice el brief ("Precio"): la revisión, con su informe, tiene
//    precio fijo por escrito; arreglar y mejorar se paga por horas o con un contrato
//    mensual. Se dice una vez en cada sitio y el resto (pagos y garantía) se enlaza a
//    /como-trabajamos/ desde el paso 1, que es donde está el precio fijo. NO se dice
//    que el arreglo urgente tenga precio fijo ni a qué paso va pegada la garantía:
//    el brief no lo dice así (hay que confirmarlo con el dueño).
//  - Cada idea abstracta lleva un ejemplo de negocio, rotulado "Por ejemplo": qué es
//    un riesgo (paso 1) y qué es una regla del negocio (paso 3). Son ejemplos, no datos.
//  - Sin "código", "accesos", "documentación" ni "soporte": "el programa completo",
//    "entrar", "una guía", "mejoras mes a mes".
// En los textos, " " es un espacio que no se parte: evita renglones huérfanos y
// titulares partidos a media frase.
import { quePasaDespues, type Pregunta } from './empresa';
import { enlaceA } from './navegacion';

/** Un paso del rescate. */
export interface PasoDeRescate {
  titulo: string;
  /** El plazo del brief. Si el brief no lo trae, no se pone. */
  duracion?: string;
  /** Qué pasa en este paso. */
  pasa: string;
  /** Lo que te queda en la mano. */
  recibes: string;
  /** Qué se ve en el damero en este paso: va al pie del dibujo. Veinte letras como
      mucho: con su paso delante ("Paso 3 · …") es lo que cabe junto a "Ejemplo" a
      1024 px, y sola cabe bajo el damero chico en un celular de 360 px. */
  pie: string;
  /** La leyenda del damero chico (tableta y celular), si no puede ser la misma: el chico
      no lleva nombres escritos, así que no puede decir "Todo con su nombre". Dice lo que
      sí se ve en él. Veinte letras como mucho. */
  pieChico?: string;
  /** Texto del enlace a /como-trabajamos/. Solo en el paso que habla del precio fijo.
      Veinticuatro letras como mucho: es lo que cabe en un renglón a 1024 px. */
  enlace?: string;
}

export const rescate = {
  portada: {
    // "por eso" y "lo toca" no se parten: el titular no queda cortado a media frase.
    titulo: 'Tu sistema funciona, y por eso nadie lo toca.',
    // El orden es el de los pasos: se revisa, se deja escrito y recién entonces se toca.
    entrada: 'Quien lo hizo ya no está y no dejó nada escrito. Lo revisamos, lo dejamos explicado y lo arreglamos.',
    boton: 'Revisar mi sistema',
    /** Lo que se añade al mensaje del cierre: "Me interesa: …". */
    interes: 'revisar un sistema que ya tengo',
  },

  /* La cabeza del momento propio. El título es del dueño (brief 02, 2.5, "Cómo funciona").
     La entrada dice qué es el dibujo: no repite lo que ya dice la franqueza. */
  como: {
    rotulo: 'Cómo se rescata',
    titulo: ['Primero entender.', 'Al final, tocar.'],
    entrada: 'Este cuadro es tu sistema. Se aclara en cuatro pasos.',
  },

  /* El damero: cómo está hoy, los cuatro pasos y lo que viene después. */
  damero: {
    hoy: {
      rotulo: 'Hoy',
      titulo: 'Mejor no tocarlo.',
      texto: 'Es la respuesta cada vez que alguien propone un cambio. Las mejoras se postergan y, el día que falle, nadie sabe por dónde entrar.',
      pie: 'Nadie ve qué tiene',
    },
    pasos: [
      {
        titulo: 'Revisamos tu sistema',
        duracion: '1 semana',
        // brief 02, 2.5, "Precio": "La revisión inicial se cotiza aparte y tiene precio fijo."
        // En "Cómo funciona" la revisión incluye el informe: un solo precio para los dos pasos.
        pasa: 'Miramos el programa, los datos y dónde está instalado, sin tocar nada. La revisión y su informe (pasos 1 y 2) tienen un solo precio fijo por escrito.',
        recibes: 'Una primera lista de lo que está en riesgo y de lo que está viejo. Por ejemplo: no hay copia de tus datos, o solo funciona en una computadora vieja.',
        pie: 'Se mira sin tocar',
        // Corto a propósito: a 1024 px la columna del paso mide cinco módulos (280 px) y
        // un enlace más largo se parte en dos renglones, con la flecha suelta a la derecha.
        // El nombre corto del enlace de todo el sitio: no promete "garantía", porque el
        // dueño no ha dicho a qué va pegada en un rescate. Cómo se paga un rescate está
        // allá, al pie de la hoja (`pagoDelRescate`, en data/empresa.ts).
        enlace: enlaceA.comoTrabajamosCorto,
      },
      {
        titulo: 'Te decimos qué conviene',
        duracion: '1 semana',
        pasa: 'Qué tiene, qué está viejo, qué puede fallar y qué tan difícil es cambiarlo.',
        // brief 02, 2.5: "Sabes qué tiene tu sistema y dónde falla" y "Ese informe es tuyo,
        // aunque decidas no seguir con nosotros". Sin precio de lo urgente: ver arriba.
        recibes: 'Un informe por escrito: qué tiene tu sistema, dónde falla y qué es lo urgente. Es tuyo, sigas o no con nosotros.',
        pie: 'En rojo, lo urgente',
      },
      {
        titulo: 'Lo dejamos explicado',
        // El brief no le pone plazo a este paso: no se inventa.
        pasa: 'Escribimos cómo funciona tu sistema y qué reglas de tu negocio tiene adentro. Por ejemplo: a qué cliente le das crédito o cómo se calcula el descuento por caja.',
        recibes: 'Una guía para que lo mantenga cualquier equipo: el tuyo o el que elijas.',
        pie: 'Todo con su nombre',
        pieChico: 'Dorado: tus reglas',
      },
      {
        titulo: 'Arreglamos lo urgente',
        duracion: '2 a 4 semanas',
        // brief 02, 2.5, "Cómo funciona", 3: "Con el mapa completo decidimos juntos qué va
        // primero […] Se paga por horas o por un contrato mensual".
        pasa: 'Con todo escrito, decidimos juntos qué va primero: lo que puede fallar y lo que destraba trabajo pendiente. Se paga por horas o con un contrato mensual.',
        // brief 02, 2.5, "Qué te llevas": "Lo urgente arreglado y funcionando".
        recibes: 'Lo urgente arreglado y funcionando.',
        pie: 'Todo en su sitio',
      },
    ] satisfies PasoDeRescate[],
    /* Lo que sigue, si el cliente quiere: no es un paso del rescate. Aquí no va el
       enlace del precio fijo: juntos se contradecían. Cómo se paga ya lo dijo el paso 4
       (por horas o con un contrato mensual); aquí solo va lo que es cierto en los dos
       casos: brief 01, sección 3, "Lo nuevo se cotiza antes de hacerse" y "Nada se hace
       sin tu aprobación por escrito". */
    despues: {
      rotulo: 'Después',
      duracion: 'Cada mes',
      titulo: 'Y si quieres, seguimos.',
      texto: 'Con mejoras mes a mes. Ves la lista de lo hecho y en qué se usó el tiempo. Cuánto cuesta y cómo se paga queda por escrito antes de empezar.',
    },
    /** Cómo se llama el último estado del dibujo, al pie: es el "al final" del título. */
    final: 'Al final',
    /** El dibujo es un ejemplo, y lo dice. */
    ejemplo: 'Ejemplo',
    /** Los nombres de las ocho casillas llenas, en orden de lectura: un sistema de
        ventas y almacén cualquiera. Una palabra de ocho letras como mucho; la tercera
        es la casilla dorada y va en dos renglones. */
    nombres: ['Ventas', 'Precios', 'Tus reglas', 'Clientes', 'Almacén', 'Caja', 'Reportes', 'Compras'],
  },

  /* brief 02, 2.5, pregunta "¿No sería mejor hacerlo de nuevo?". No lleva las dos
     listas de las otras páginas: el brief no dice cuándo sí conviene rehacer. */
  franca: {
    titulo: ['Rehacerlo casi nunca', 'es lo primero.'],
    texto: 'Un sistema viejo guarda años de reglas de tu negocio que no están escritas en otro sitio. Hacerlo de nuevo las pierde. Si conviene rehacer una parte, te lo decimos después de revisarlo.',
    /** La prueba: lo que sí hemos construido se puede abrir. */
    enlace: enlaceA.proyectos,
  },

  dudas: [
    {
      pregunta: 'El sistema lo hizo otra empresa. ¿Igual lo toman?',
      // "El programa completo" es como este sitio dice "el código" (manual, sección 10).
      respuesta: 'Sí, es el caso más común. Necesitamos entrar al programa, a los datos y al lugar donde está instalado. Si no te dejaron el programa completo, con los archivos para cambiarlo, ese es el primer problema. También te ayudamos a resolverlo.',
    },
    {
      // brief 01, sección 3: "Nada se hace sin tu aprobación por escrito" (cambios) y
      // "Si lo prefieres, firmamos confidencialidad antes" (trato).
      pregunta: '¿Qué pasa con mis datos mientras lo revisan?',
      respuesta: 'En la revisión solo miramos: no se cambia nada. Después, nada se hace sin tu aprobación por escrito. Si lo prefieres, firmamos confidencialidad antes.',
    },
    {
      pregunta: '¿Quedamos atados a ustedes?',
      respuesta: 'No. Todo lo que escribimos sobre tu sistema es tuyo. Sirve para que lo tome cualquier equipo: el tuyo o el que elijas.',
    },
    {
      pregunta: '¿Atienden urgencias?',
      respuesta: 'Con contrato mensual, sí: el tiempo de respuesta queda acordado por escrito. Sin contrato no prometemos urgencias. Prometerlo y no cumplir es peor que no ofrecerlo.',
    },
  ] satisfies Pregunta[],

  /* El cierre pregunta por el sistema, no por lo que se hace a mano: título, ejemplo
     y arranque del mensaje dicen lo mismo. */
  cierre: {
    titulo: ['Cuéntanos qué', 'sistema tienes.'],
    ejemplo: 'Por ejemplo: es el de ventas y almacén, tiene años y quien lo hizo ya no está.',
    /** Lo que va delante de lo que escribe la persona: "… Mi sistema: es el de ventas…". */
    prefijo: 'Mi sistema:',
    /** "Qué pasa después", con el renglón 3 de esta página: aquí el primer paso es la
        revisión, y el brief (02, 2.5, "Precio") dice que se cotiza aparte y tiene precio
        fijo. No dice en qué momento se comunica ese precio: el dueño no lo ha confirmado. */
    despues: [
      quePasaDespues[0],
      quePasaDespues[1],
      'Si te conviene seguir, la revisión se paga y tiene su precio fijo por\u00A0escrito.',
    ],
  },
};
