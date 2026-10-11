// Textos de /como-trabajamos/: la única página que habla de dinero y fechas a fondo.
// Todo sale de brief/01-empresa.md (secciones 3, 4, 5 y 7) y de brief/02-oferta.md (5.1).
// Los cinco pasos (nombre, duración, qué pasa y qué recibes) y los plazos están en
// data/empresa.ts: son los mismos textos que pinta la portada. Aquí se ordenan para esta
// página y se les añade lo que solo ella cuenta: la conversación de antes y el dinero.
import { pasos, cambios, compromisos, deTuLado, loQueCobranOtros, pagoDelRescate, type Paso, type Cambio } from './empresa';
import { enlaceA } from './navegacion';

/* ---------- Portada ---------- */

export const portada = {
  // "Antes de construir", no "antes de empezar": para un dueño, empezar es contratar, y
  // una pantalla más abajo se lee que primero se paga el paso 1. Es la misma palabra de
  // la portada ("Precio fijo. Por escrito. Antes de construir.") y de /nosotros/.
  titulo: 'Sabes cuánto cuesta antes de construir.',
  entrada: 'Aquí está qué es gratis, qué se paga y cuándo sabes el precio.',
};

/* ---------- El recorrido: seis momentos en tres tramos de dinero ---------- */

export interface Momento extends Paso {
  /** "Antes", "Paso 1"... */
  etiqueta: string;
}

export interface Tramo {
  id: 'gratis' | 'paso1' | 'fijo';
  /** Lo que se paga en este tramo, en una o dos palabras. */
  palabra: string;
  /** A qué pasos se refiere. Completa el encabezado para quien usa lector de pantalla. */
  lector: string;
  texto: string;
  momentos: Momento[];
}

// Antes del paso 1 hay una conversación, y es lo único gratis (brief 01, secciones 3 y 10).
// Lo que deja es una respuesta: "de ahí sale si conviene o no hacer la etapa de análisis"
// (brief 02, 5.1) y "te lo decimos en la primera reunión" (brief 01, sección 7, pregunta 8).
// No dice cuándo ni cómo se comunica el precio del paso 1: ningún brief lo trae.
const conversacion: Momento = {
  etiqueta: 'Antes',
  duracion: 'Una conversación',
  titulo: 'Nos escribes',
  pasa: 'Nos cuentas qué haces a mano. Hablas directo con quien haría tu sistema.',
  recibes: 'Una respuesta clara. Si te basta un programa ya hecho, te lo decimos.',
};

// Los cinco pasos, tal como están en data/empresa.ts (`pasos`): un solo texto para la
// portada y para esta página. Aquí solo se les pone su etiqueta.
const cincoPasos: Momento[] = pasos.map((p, i) => ({ ...p, etiqueta: `Paso ${i + 1}` }));

export const recorrido = {
  // Sin rótulo ni entrada: el título y los tres bloques ya dicen de qué va la sección.
  titulo: ['Cada paso', 'te deja algo.'],
  // Tres tramos: lo gratis, lo que se paga para saber el precio y lo que ya va a precio fijo.
  // El paso 1 es un trabajo pagado, con su propio precio por escrito, y puede contratarse
  // solo (eso lo responde la pregunta "¿Puedo contratar solo el paso 1?"). No dice cuándo se
  // paga ni en qué momento se comunica ese precio: el brief no lo trae.
  tramos: [
    {
      id: 'gratis',
      palabra: 'Gratis',
      lector: 'antes del paso 1',
      texto: 'La primera conversación.',
      momentos: [conversacion],
    },
    {
      id: 'paso1',
      palabra: 'Se paga',
      lector: 'el paso 1',
      // Se entiende sola: en celular esta franja va antes del paso 1.
      texto: 'El paso 1 tiene su propio precio por escrito.',
      momentos: [cincoPasos[0]],
    },
    {
      id: 'fijo',
      palabra: 'Precio fijo',
      lector: 'del paso 2 al 5',
      // Aquí va, entera, la frase de la casa: "precio fijo por escrito". Cómo se paga lo
      // dice la hoja, que está justo debajo.
      texto: 'Al terminar el paso 1 tienes el precio fijo por escrito de todo el sistema.',
      momentos: cincoPasos.slice(1),
    },
  ] satisfies Tramo[],
};

/* ---------- El acuerdo: el campo rojo ---------- */

export const acuerdo = {
  // Cuatro renglones: en escritorio el titular va a cartel menor en media página, junto a
  // la hoja ("medio camino." no cabe en siete módulos a ese tamaño). En tableta y celular
  // los renglones se sueltan y queda en dos.
  // No lleva entrada: la salvedad ("solo sube si pides algo nuevo") es la cláusula 01
  // de la hoja, que está al lado.
  titulo: ['El precio', 'no sube', 'a medio', 'camino.'],
  // Lo único que no entra en el precio fijo ni le pagas a Bit One: va fuera de la hoja,
  // bajo la frase, para que se vea. (Lo que Bit One no cobra lo dice la nota de la hoja.)
  aparte: { rotulo: 'Aparte', texto: loQueCobranOtros },
  // Segunda nota de la hoja: cómo se paga un rescate, que no va por partes entregadas.
  // /rescate/ manda aquí desde su paso 1.
  rescate: pagoDelRescate,
};

/* ---------- Si pides algo nuevo ---------- */

export interface GrupoDeCambios {
  rotulo: string;
  /** El grupo que mueve el precio: su punto va lleno y el caso que lo sube, en rojo. */
  mueve: boolean;
  casos: Cambio[];
}

export const nuevo = {
  // Sin rótulo: el título y los dos grupos ya dicen de qué va.
  titulo: ['Siempre aparece', 'algo nuevo.'],
  entrada: 'Desde el inicio sabes qué pasa en cada caso.',
  // Los cuatro casos del brief (01, sección 5.2), en dos grupos: dos no tocan el precio y dos sí.
  grupos: [
    { rotulo: 'No cambia el precio', mueve: false, casos: cambios.slice(0, 2) },
    { rotulo: 'Cambia el precio, y lo sabes antes', mueve: true, casos: cambios.slice(2) },
  ] satisfies GrupoDeCambios[],
};

/* ---------- Los dos lados ---------- */

// Las dos firmas de la hoja, en cifras: lo que firma Bit One (tres plazos) y lo que
// hace falta de quien contrata (cuatro cosas). Brief 01, secciones 4, 5.2 y 7.
export const lados = {
  titulo: 'Cada lado pone lo suyo.',
  nuestro: {
    rotulo: 'De nuestro lado, tres plazos',
    // Los mismos tres plazos de la portada (data/empresa.ts): el del medio dice, leído
    // solo, que esas semanas son el paso 1 y que ese paso se paga.
    cifras: compromisos,
  },
  tuyo: {
    rotulo: 'De tu lado, cuatro cosas',
    cifras: deTuLado,
    nota: 'Ninguna cuesta dinero. Pero si faltan, el ritmo se cae.',
  },
};

/* ---------- El remate, bajo las preguntas ---------- */

// Quien ya leyó las condiciones quiere ver el trabajo: el remate abre /proyectos/.
// Es el mismo texto con que todo el sitio manda ahí.
export const remate = {
  proyectos: enlaceA.proyectos,
};
