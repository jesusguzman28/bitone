// Aplicaciones publicadas en Google Play bajo la cuenta de desarrollador de
// Bitone E.I.R.L.
//
// Por qué esta lista vive aparte de proyectos.ts:
//
// `proyectos` describe trabajos completos —una plataforma, un sistema—, y una
// app suele ser una pieza de uno de ellos, no un proyecto por su cuenta.
// ApuraY, por ejemplo, tiene dos apps publicadas: la del cliente que pide y la
// del negocio que recibe el pedido. Meterlas como dos proyectos separados
// contaría dos veces el mismo trabajo; no listarlas desperdicia lo único de
// este portafolio que un tercero puede verificar sin pedirnos nada.
//
// Y esa es la razón de fondo por la que esta sección existe: cualquiera puede
// escribir "tenemos experiencia en apps móviles". Un enlace a la ficha de Play
// Store, bajo un nombre de desarrollador que coincide con la razón social que
// aparece en el pie de este sitio y con el RUC que declara el JSON-LD, es una
// afirmación comprobable en diez segundos.
//
// REGLA AL EDITAR: aquí solo entra lo que esté publicado y accesible. Nada de
// apps retiradas, en pruebas cerradas o "por salir". El día que una se retire
// de la tienda, sale también de aquí: un enlace roto en el portafolio hace más
// daño que la ausencia de la app.

export interface AppPublicada {
  /** Nombre exacto tal como aparece en la ficha de Play Store. */
  nombre: string;
  /** Identificador del paquete. Es lo que arma la dirección de la ficha y,
   *  de paso, lo que hace verificable la lista. */
  paquete: string;
  /** Proyecto del que forma parte. Varias apps pueden compartir proyecto. */
  proyecto: string;
  /** Qué hace, en una línea. Sale de lo que la app hace de verdad, no de lo
   *  que nos gustaría que pareciera. */
  que: string;
  /** Puntuación en Play Store, o null si todavía no tiene suficientes votos
   *  como para que la tienda la muestre. No se inventa ni se redondea hacia
   *  arriba: es un dato que cualquiera puede comprobar en un clic. */
  rating: number | null;

  /** Archivo del icono en public/apps/<icono>.webp, 256x256.
   *
   *  Son los iconos REALES de cada ficha, descargados de Play Store y servidos
   *  desde nuestro propio dominio. Antes había en su lugar una baldosa de color
   *  con la inicial del nombre, y era exactamente el tipo de sustituto genérico
   *  que resta en un portafolio: quien mira apps reconoce el icono de una app
   *  al instante, y una letra dentro de un cuadrado de color no la reconoce
   *  nunca.
   *
   *  No se enlazan desde googleusercontent.com aunque sea más cómodo: sería
   *  una petición a un servidor ajeno dentro de la portada, y esas direcciones
   *  cambian sin avisar. Los cuatro juntos pesan 29 KB. */
  icono: string;

  /** Color dominante del propio icono, extraído de la imagen y no elegido a
   *  mano. Se usa solo para el halo al pasar el cursor, así que la tarjeta se
   *  ilumina del color de su app en vez de un acento inventado. */
  color: string;
}

/** Ficha del desarrollador: todas las apps de la empresa en una página. */
export const playDeveloper =
  'https://play.google.com/store/apps/developer?id=BITONE+E.I.R.L';

/** Dirección de la ficha de una app a partir de su paquete. */
export const hrefApp = (paquete: string) =>
  `https://play.google.com/store/apps/details?id=${paquete}`;

export const apps: readonly AppPublicada[] = [
  {
    nombre: 'Apuray',
    paquete: 'pe.apuray.river',
    proyecto: 'ApuraY',
    que: 'La app del pasajero: pide mototaxi, comida, envíos y compras de mercado en Coracora, Ayacucho.',
    rating: 4.6,
    icono: 'apuray',
    color: '#0086EA',
  },
  {
    nombre: 'Mi Tienda AP',
    paquete: 'pe.apuray.negocio',
    proyecto: 'ApuraY',
    que: 'El otro lado del mismo sistema: la app con la que el negocio recibe y despacha los pedidos.',
    rating: null,
    icono: 'mi-tienda-ap',
    color: '#0086EA',
  },
  {
    nombre: 'TiniBot',
    paquete: 'pe.mindblock.tinibotapp',
    proyecto: 'MindBlock',
    que: 'La app del robot TiniBot: los niños programan por bloques y el robot ejecuta lo que armaron.',
    rating: null,
    icono: 'tinibot',
    color: '#2E6BB8',
  },
  {
    nombre: 'JMF',
    paquete: 'com.jmf.app',
    proyecto: 'Grupo JMF',
    que: 'El lado móvil de la intranet de Grupo JMF: lleva al celular el sistema interno que el equipo usa a diario.',
    rating: null,
    icono: 'jmf',
    color: '#2A66C0',
  },
];
