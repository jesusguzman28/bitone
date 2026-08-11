// Reseñas de clientes.
//
// Están vacías a propósito: `resenas` es una lista sin elementos y el componente
// no dibuja nada mientras siga así. Preferimos una portada sin reseñas a una con
// reseñas inventadas: si alguien pregunta por un cliente que no existe, el daño
// es mucho mayor que el beneficio de rellenar un hueco.
//
// Para publicar una, descomenta el ejemplo de abajo y cámbialo por lo que te
// dijo el cliente de verdad. Con tres ya vale la pena que la sección salga.
//
// Cómo conseguirlas sin incomodar: después de entregar, un mensaje corto por
// WhatsApp —"¿me dejas una línea de cómo te fue?"— y se copia tal cual. Se
// pueden pedir también como reseña en tu ficha de Google, que además suma para
// aparecer en las búsquedas del barrio.

export interface Resena {
  /** Lo que dijo, tal cual. Sin arreglarle la redacción: se nota. */
  texto: string;
  /** Nombre de quien lo dijo. */
  autor: string;
  /** Negocio y, si se puede, distrito: "Pollería El Rancho, Surco". */
  negocio: string;
  /** Servicio que se le entregó. Sirve para mostrar la reseña junto a él. */
  servicio: string;
}

export const resenas: readonly Resena[] = [
  // {
  //   texto: 'Antes contestaba el mismo precio veinte veces al día. Ahora entran los pedidos con todo puesto y yo solo despacho.',
  //   autor: 'Nombre del cliente',
  //   negocio: 'Negocio, distrito',
  //   servicio: 'Tienda online',
  // },
];
