// Los cinco signos de Bit One. Cada uno cabe en un módulo de 10 x 10 con un
// margen de 1, solo con ángulos rectos. Inventados para la marca: no copian
// ninguna pieza textil.

export type NombreSigno = 'medida' | 'app' | 'greca' | 'enlace' | 'rescate';

/** Combinaciones de fondo y trazo. El oro nunca es fondo, salvo como "pieza corregida". */
export type TonoSigno = 'rojo' | 'tinta' | 'papel' | 'arena' | 'oro' | 'piedra';

export interface Signo {
  /** Qué representa, para quien lea el código. */
  idea: string;
  /** Trazo principal (se pinta con currentColor). */
  trazo: string;
  /** Pieza dorada opcional: solo el signo de rescate la tiene. */
  oro?: string;
}

export const signos: Record<NombreSigno, Signo> = {
  medida: {
    idea: 'Cuadrados concéntricos: un marco hecho alrededor de tu negocio.',
    trazo: 'M1 1L9 1L9 9L1 9ZM2 2L2 8L8 8L8 2ZM3 3L7 3L7 7L3 7Z',
  },
  app: {
    idea: 'Rombo escalonado con centro: lo que cabe en la mano.',
    trazo: 'M4 1L6 1L6 2L7 2L7 3L8 3L8 4L9 4L9 6L8 6L8 7L7 7L7 8L6 8L6 9L4 9L4 8L3 8L3 7L2 7L2 6L1 6L1 4L2 4L2 3L3 3L3 2L4 2ZM4 4L4 6L6 6L6 4Z',
  },
  greca: {
    idea: 'Greca: lo que da la vuelta solo.',
    trazo: 'M1 1L9 1L9 9L1 9L1 3L7 3L7 7L3 7L3 5L4 5L4 6L6 6L6 4L2 4L2 8L8 8L8 2L1 2Z',
  },
  enlace: {
    idea: 'Dos cuadrados enlazados: tu negocio y su sistema, unidos.',
    trazo: 'M1 1L6 1L6 4L9 4L9 9L4 9L4 6L1 6ZM2 2L2 5L4 5L4 4L5 4L5 2ZM6 5L6 6L5 6L5 8L8 8L8 5Z',
  },
  rescate: {
    idea: 'Damero con una casilla dorada: un patrón con una pieza recuperada.',
    trazo: 'M1 1L3 1L3 3L1 3ZM5 1L7 1L7 3L5 3ZM7 3L9 3L9 5L7 5ZM7 5L7 7L5 7L5 5ZM1 5L3 5L3 7L1 7ZM3 7L5 7L5 9L3 9ZM7 7L9 7L9 9L7 9Z',
    oro: 'M3 3h2v2h-2Z',
  },
};

export const nombresDeSigno = Object.keys(signos) as NombreSigno[];
