// Contenido largo de cada servicio, para su página propia.
//
// Por qué existe este archivo: hasta ahora los cuatro servicios vivían en una
// sola dirección, /servicios, repartidos en pestañas donde tres quedaban
// ocultas. Google indexa una página, así que "tienda online", "ERP" y "app
// móvil" competían entre sí dentro del mismo documento y ninguna podía
// posicionar por su cuenta. Con una página por servicio cada una compite por
// su propia búsqueda.
//
// `serviciosTabs` en site.ts sigue siendo la fuente del precio, el plazo y la
// lista de lo que incluye. Aquí va solo lo que una página propia necesita y
// una pestaña no tenía: el problema que resuelve, cómo funciona por dentro,
// las preguntas frecuentes y las fotos.
//
// Regla al escribir esto: nada de cifras de resultados ni casos de clientes.
// Lo que se afirma es lo que el servicio hace, no lo que promete lograr.

export interface PasoServicio {
  /** Título corto del paso. */
  titulo: string;
  desc: string;
  /** Nombre del icono en iconos.ts. */
  icono: string;
  /** Archivo en public/servicios/ sin extensión, o null si el paso no lleva foto. */
  foto: string | null;
  alt: string;
}

export interface Servicio {
  /** Última parte de la dirección: /servicios/<slug>/ */
  slug: string;
  /** Id en serviciosTabs de site.ts, de donde salen precio, plazo y features. */
  tabId: string;

  h1: string;
  metaTitle: string;
  metaDescription: string;
  breadcrumb: string;
  eyebrow: string;
  intro: string;

  /** Foto principal, en public/servicios/<hero>.webp y <hero>-sm.webp */
  hero: string;
  heroAlt: string;

  problema: { title: string; parrafos: readonly string[] };
  comoFunciona: { title: string; intro: string; pasos: readonly PasoServicio[] };
  precio: { title: string; parrafos: readonly string[] };
  faqs: readonly { q: string; a: string }[];
}

export const servicios: readonly Servicio[] = [
  {
    slug: 'tienda-online',
    tabId: 'tienda',

    h1: 'Tienda online para tu negocio en Perú',
    // Sin "| Bitwise" al final: BaseLayout ya lo agrega con titleTemplate.
    metaTitle: 'Tienda online en Perú desde S/3,000',
    metaDescription:
      'Tienda virtual con catálogo, control de stock y cobro automático por Yape, Plin y tarjetas. Dominio, hosting y capacitación incluidos. Entrega en 4 a 6 semanas.',
    breadcrumb: 'Tienda online',
    eyebrow: 'Comercio electrónico',
    intro:
      'Tu catálogo publicado, el stock al día y el cobro resuelto sin que tengas que contestar cada precio por mensaje. El cliente elige, paga y tú recibes el pedido listo para despachar.',

    hero: 'tienda-online',
    heroAlt:
      'Interior de una tienda pequeña con ropa colgada y productos ordenados en repisas de madera',

    problema: {
      title: 'Vender por WhatsApp funciona hasta que deja de funcionar',
      parrafos: [
        'Al inicio alcanza: llega el mensaje, respondes el precio, coordinas el pago y anotas el pedido. El problema aparece cuando el negocio crece. Las mismas tres preguntas —cuánto cuesta, si hay stock, cómo se paga— se repiten decenas de veces al día, y cada una se responde a mano.',
        'Lo que se pierde no siempre se nota. El cliente que escribió a las once de la noche y no tuvo respuesta hasta el día siguiente. El pedido que se confirmó cuando ya no quedaba stock. El precio que se dijo distinto en dos conversaciones. Nada de eso queda registrado en ningún lado, así que tampoco se puede revisar después.',
        'Una tienda online no reemplaza el WhatsApp: le quita el trabajo repetitivo. El catálogo responde el precio y la disponibilidad a cualquier hora, el cobro se hace solo, y el WhatsApp queda para lo que de verdad necesita una persona atendiendo.',
      ],
    },

    comoFunciona: {
      title: 'Cómo funciona por dentro',
      intro:
        'Tres momentos: lo que ve tu cliente, cómo te paga y qué te llega a ti. El resto lo maneja la tienda sola.',
      pasos: [
        {
          titulo: 'Tu catálogo, con precios y stock reales',
          desc:
            'Cada producto con su foto, su descripción y su precio. Cuando algo se agota, deja de aparecer disponible: no se venden productos que ya no tienes. Los cambias desde un panel, sin depender de nosotros para subir una foto o corregir un precio.',
          icono: 'carrito',
          foto: 'tienda-online-catalogo',
          alt: 'Catálogo de productos abierto en una tableta, sobre una mesa con artículos alrededor',
        },
        {
          titulo: 'Te paga como ya está acostumbrado',
          desc:
            'Yape, Plin, tarjeta de débito o crédito y transferencia. El cobro se confirma solo y el pedido queda registrado con lo que compró, cuánto pagó y a dónde va. Sin captura de pantalla que revisar ni pago que verificar a mano.',
          icono: 'tarjeta',
          foto: 'tienda-online-pago',
          alt: 'Pago sin contacto acercando un celular a un terminal de cobro',
        },
        {
          titulo: 'El pedido te llega listo para despachar',
          desc:
            'Entra a tu panel con los datos completos y el pago ya confirmado. Puedes emitir boleta o factura electrónica SUNAT si lo activas, y revisar en cualquier momento qué se vendió, cuánto y qué producto se mueve más.',
          icono: 'documento',
          foto: 'tienda-online-despacho',
          alt: 'Caja de cartón cerrada y sellada, lista para ser enviada',
        },
      ],
    },

    precio: {
      title: 'Precio y plazo',
      parrafos: [
        'Una tienda online parte en S/3,000 y se entrega entre 4 y 6 semanas. Ese precio incluye el diseño, el catálogo cargado, las pasarelas de pago configuradas, el dominio y el hosting del primer año, y una capacitación grabada para que puedas administrarla tú.',
        'Lo que mueve el precio hacia arriba es el tamaño del catálogo y lo que tenga que hacer la tienda además de vender: facturación electrónica SUNAT, integración con un sistema que ya uses, o reglas de despacho por zona. Eso se conversa antes y queda por escrito en la cotización, no aparece a mitad del proyecto.',
        'El pago va 50% al empezar y 50% contra entrega, con boleta o factura en cada uno. En proyectos grandes se puede dividir hasta en tres cuotas sin interés.',
      ],
    },

    faqs: [
      {
        q: '¿Puedo cambiar precios y productos yo mismo?',
        a: 'Sí. La tienda viene con un panel donde subes productos, cambias precios, actualizas fotos y marcas lo que se agotó. Se entrega con una capacitación grabada, así que la puedes volver a ver cuando entre alguien nuevo a tu equipo. No dependes de nosotros para la operación diaria.',
      },
      {
        q: '¿Qué formas de pago acepta?',
        a: 'Yape, Plin, tarjetas de débito y crédito, y transferencia bancaria. Son las que más usa el comprador peruano. Las pasarelas cobran su propia comisión por transacción, que va directo al proveedor de pago y no pasa por nosotros.',
      },
      {
        q: '¿Emite boleta y factura electrónica?',
        a: 'Se puede integrar facturación electrónica SUNAT, y se cotiza aparte porque depende del proveedor de facturación que uses y de cómo esté dado de alta tu RUC. Si todavía no facturas electrónicamente, la tienda funciona igual y lo puedes activar después.',
      },
      {
        q: '¿Sirve si vendo pocos productos?',
        a: 'Sí, y en ese caso el catálogo se arma más rápido. Si vendes menos de una docena de productos vale la pena conversarlo primero: a veces una página web con catálogo y pedido por WhatsApp resuelve lo mismo por menos, y te lo decimos antes de cotizar.',
      },
      {
        q: '¿Qué pasa con el dominio y el hosting después del primer año?',
        a: 'El primer año va incluido. Desde el segundo se renueva anualmente y el costo depende del dominio y del plan de hosting que tengas. Te avisamos antes del vencimiento con el monto exacto. El dominio queda a tu nombre, así que es tuyo aunque decidas trabajar con otra empresa.',
      },
      {
        q: '¿Se ve bien en celular?',
        a: 'Se diseña primero para celular y después para pantalla grande, porque ahí es donde compra la mayoría en Perú. Eso incluye el proceso de pago completo, que es donde más se abandonan las compras cuando la tienda no está pensada para móvil.',
      },
    ],
  },
];

export function getServicio(slug: string): Servicio | undefined {
  return servicios.find((s) => s.slug === slug);
}

/**
 * Busca el servicio que corresponde a una pestaña de /servicios.
 * Devuelve undefined mientras ese servicio todavía no tenga página propia, así
 * el índice puede enlazar solo los que ya existen.
 */
export function servicioDeTab(tabId: string): Servicio | undefined {
  return servicios.find((s) => s.tabId === tabId);
}

/** Dirección pública de un servicio. */
export function hrefServicio(slug: string): string {
  return `/servicios/${slug}/`;
}
