// Generador del friso. Se ejecuta al compilar: de una semilla sale siempre el
// mismo dibujo, así que nada se escribe a mano y nada cambia entre visitas.
//
// Dos dibujos:
//   - "transito": de piezas sueltas y giradas (desorden) a piezas tejidas (sistema).
//   - "tejido":   la cenefa completa.
// Las medidas están en unidades de módulo: cada casilla mide 10 x 10.
import { nombresDeSigno, type NombreSigno, type TonoSigno } from './signos';

export interface Pieza {
  signo: NombreSigno;
  tono: TonoSigno;
  /** Esquina superior izquierda, en unidades del dibujo. */
  x: number;
  y: number;
  /** La columna de su casilla, desde 0. Una pieza suelta se aparta de ella y gira: con
      la columna, quien recorta el friso (la portada en tableta) puede quitar la que
      asomaría por el borde. */
  col: number;
  /** Giro en grados: 0 en las piezas tejidas. */
  giro: number;
  firme: boolean;
  /** Solo cuenta en las piezas de rescate: si conserva su casilla dorada. En una cenefa
      (tipo "tejido") la conserva una sola; en el tránsito de la portada, todas. */
  oro: boolean;
  /** Solo las firmes: desde dónde llegan en la entrada de la portada. */
  retardo: number;
  dx: number;
  dy: number;
  dr: number;
}

export interface Fila {
  /** Casillas vacías que se dibujan como cuadrícula bajo las piezas sueltas. */
  huecos: { x: number; y: number }[];
  piezas: Pieza[];
}

export interface OpcionesFriso {
  columnas: number;
  filas: number;
  tipo: 'transito' | 'tejido';
  /** En "transito": el orden llega hacia la derecha o hacia abajo. */
  sentido?: 'horizontal' | 'vertical';
  /** Signo que domina el tejido (el de la página). Sin él, los cinco por igual. */
  signo?: NombreSigno;
  semilla?: number;
  /** El color del plano que viene justo debajo. La última fila no usa ese tono, para
      que el borde del tejido no se disuelva en el plano (por ejemplo, 'tinta'). */
  tonoDeAbajo?: TonoSigno;
  /** Un tono que el tejido no usa en ninguna fila: para una cenefa que va entera sobre
      un plano de ese color (la del pie, entre el cierre y el pie, los dos tinta). Con
      `tonoDeAbajo` solo se protege la última fila. */
  sinTono?: TonoSigno;
}

const M = 10;
// Ritmo de color del tejido: mucho rojo, y tinta, papel y arena para que respire.
const RITMO: TonoSigno[] = ['rojo', 'papel', 'tinta', 'rojo', 'arena', 'rojo', 'tinta', 'papel', 'rojo'];

/** Azar con semilla (mulberry32): el mismo número da siempre el mismo friso. */
function azarCon(semilla: number) {
  let a = semilla >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const redondo = (n: number) => Math.round(n * 100) / 100;

export function generarFriso({ columnas, filas, tipo, sentido = 'horizontal', signo, semilla = 7, tonoDeAbajo, sinTono }: OpcionesFriso): Fila[] {
  const azar = azarCon(semilla);
  const entre = (a: number, b: number) => a + (b - a) * azar();
  const horizontal = sentido === 'horizontal';
  // Hasta dónde llega el desorden: la mitad de las columnas o de las filas.
  const corte = tipo === 'tejido' ? 0 : Math.floor((horizontal ? columnas : filas) / 2);

  // El tono de cada casilla ya decidida, por fila: para no repetir el de arriba al cambiar uno.
  const tonos: TonoSigno[][] = [];
  const dibujo = Array.from({ length: filas }, (_, f) => {
    const fila: Fila = { huecos: [], piezas: [] };
    tonos.push([]);
    for (let c = 0; c < columnas; c++) {
      const avance = horizontal ? c : f;
      const nombre = signo && azar() < 0.46 ? signo : nombresDeSigno[(c + f * 2) % nombresDeSigno.length];
      let tono = RITMO[(c * 2 + f * 5) % RITMO.length];
      // El tono que no se puede usar (el del plano de abajo, en la última fila; `sinTono`,
      // en todas) se cambia por arena o por papel: el que no sea ese plano y, si se puede
      // elegir, el que no repita la pieza de al lado ni la de arriba.
      const fuera = sinTono && tono === sinTono ? sinTono : tonoDeAbajo && f === filas - 1 && tono === tonoDeAbajo ? tonoDeAbajo : undefined;
      if (fuera) {
        const otros = (['arena', 'papel'] as TonoSigno[]).filter((t) => t !== fuera && t !== sinTono && t !== tonoDeAbajo);
        const opciones = otros.length ? otros : (['arena', 'papel'] as TonoSigno[]).filter((t) => t !== fuera);
        const alLado = fila.piezas.at(-1)?.tono;
        // La de arriba solo se mira con `sinTono`: sin él, el dibujo sale igual que siempre.
        const arriba = sinTono ? tonos[f - 1]?.[c] : undefined;
        tono = opciones.find((t) => t !== alLado && t !== arriba) ?? opciones.find((t) => t !== alLado) ?? opciones[0];
      }
      tonos[f].push(tono);

      if (avance >= corte) {
        // Tejida. En la entrada llega desde el lado del desorden, cada una con su retardo.
        const paso = (avance - corte) / Math.max(1, (horizontal ? columnas : filas) - corte);
        fila.piezas.push({
          signo: nombre, tono, x: c * M, y: f * M, col: c, giro: 0, firme: true, oro: true,
          retardo: Math.round(paso * 180 + entre(0, 90)),
          dx: redondo(horizontal ? entre(-11, -4) : entre(-3, 3)),
          dy: redondo(horizontal ? entre(-4, 4) : entre(-11, -4)),
          dr: Math.round(entre(-16, 16)),
        });
        continue;
      }

      // Suelta. Cuanto más lejos del tejido, más girada, más desplazada y con más huecos.
      const lejos = 1 - avance / corte;
      fila.huecos.push({ x: c * M, y: f * M });
      if (azar() < 0.18 + lejos * 0.34) continue;
      fila.piezas.push({
        signo: nombre,
        tono: azar() < 0.25 + lejos * 0.55 ? 'piedra' : tono,
        x: redondo(c * M + entre(-1, 1) * (0.5 + lejos * 2.4)),
        y: redondo(f * M + entre(-1, 1) * (0.4 + lejos * 2)),
        giro: redondo(entre(-1, 1) * (3 + lejos * 27)),
        col: c, firme: false, oro: true, retardo: 0, dx: 0, dy: 0, dr: 0,
      });
    }
    return fila;
  });

  // El oro va en dosis mínimas. En una cenefa, de todas las piezas de rescate solo una
  // conserva su casilla dorada: la más cercana al centro, para que no caiga en un borde
  // que la ventana corta (en tableta se ve solo la franja central). Sin esto, con el
  // signo de rescate dominando salían más de veinte en el pie. El tránsito de la portada
  // no se toca: ahí cada pieza recuperada lleva la suya.
  if (tipo === 'tejido') {
    const centro = ((columnas - 1) * M) / 2;
    const deRescate = dibujo.flatMap((fila) => fila.piezas).filter((p) => p.signo === 'rescate');
    const elegida = deRescate.reduce<Pieza | undefined>((a, p) => (!a || Math.abs(p.x - centro) < Math.abs(a.x - centro) ? p : a), undefined);
    for (const p of deRescate) p.oro = p === elegida;
  }
  return dibujo;
}
