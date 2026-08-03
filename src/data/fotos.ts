// Foto de ambiente para cada landing de rubro.
//
// Son fotos de Unsplash (licencia Unsplash: uso comercial permitido, sin
// atribución obligatoria). Se eligieron con dos reglas propias:
//
//   1. Nada de rostros identificables. La licencia de Unsplash no cubre los
//      derechos de imagen de las personas que aparecen, y una cara en una
//      landing comercial se lee como un cliente o un empleado nuestro.
//   2. Nada de marcas, logos ni precios legibles. Son fotos de otro país y un
//      cartel en euros dentro de una página en soles se nota.
//
// La foto muestra el RUBRO, no un trabajo entregado por nosotros: es ambiente,
// no portafolio. El esquema de la web sigue siendo el <MockupWeb> del hero.
//
// Los archivos viven en public/rubros/<param>.webp (880x600) y
// public/rubros/<param>-sm.webp (560x380) para móvil.

import { landings } from './landings';

export interface FotoRubro {
  /** Texto alternativo. Describe la escena, no repite la keyword de la página. */
  alt: string;
  /** ID de la foto en Unsplash, por si hay que volver al original. */
  unsplash: string;
}

export const fotosRubro: Record<string, FotoRubro> = {
  pollerias: {
    alt: 'Pollo a la brasa entero girando en el espetón sobre la parrilla',
    unsplash: '1712579733874-c3a79f0f9d12',
  },
  bodegas: {
    alt: 'Pasillo de una bodega con los productos ordenados y colgados por categoría',
    unsplash: '1601600576337-c1d8a0d1373c',
  },
  farmacias: {
    alt: 'Interior de una farmacia moderna, con los productos ordenados en estantes iluminados',
    unsplash: '1576602976047-174e57a47881',
  },
  ferreterias: {
    alt: 'Pared de una ferretería con alicates, llaves y herramientas colgadas y ordenadas',
    unsplash: '1519520104014-df63821cb6f9',
  },
  'talleres-mecanicos': {
    alt: 'Tablero de herramientas de un taller mecánico, con llaves y alicates colgados',
    unsplash: '1587583332802-b3ed74239b65',
  },
  panaderias: {
    alt: 'Panes artesanales recién horneados sobre una mesa de trabajo enharinada',
    unsplash: '1509440159596-0249088772ff',
  },
  gimnasios: {
    alt: 'Rack de mancuernas ordenadas por peso en la sala de pesas de un gimnasio',
    unsplash: '1534438327276-14e5300c3a48',
  },
  clinicas: {
    alt: 'Consultorio dental equipado, limpio y ordenado, con el sillón listo para atender',
    unsplash: '1629909613654-28e377c37b09',
  },
  veterinarias: {
    alt: 'Un gato y un perro sentados juntos y tranquilos, como los pacientes de una veterinaria',
    unsplash: '1606098216818-40939b7c98ad',
  },
  opticas: {
    alt: 'Exhibidor de monturas de lentes ordenadas en la vitrina de una óptica',
    unsplash: '1615468822882-4828d2602857',
  },
  barberias: {
    alt: 'Tijeras de barbero sobre una superficie clara, con la sombra proyectada al costado',
    unsplash: '1621446113284-53ca198c7fa7',
  },
  academias: {
    alt: 'Sala de lectura de una biblioteca universitaria llena de estudiantes, vista desde arriba',
    unsplash: '1719954327693-929becbbf207',
  },
};

export function fotoDeRubro(param: string): FotoRubro | undefined {
  return fotosRubro[param];
}

/**
 * La misma foto pero buscada por el slug de rubros.ts, que es como la
 * identifican la grilla de /proyectos y la portada.
 */
export function fotoDeSlug(rubroSlug: string): (FotoRubro & { param: string }) | undefined {
  const landing = landings.find((l) => l.rubroSlug === rubroSlug);
  if (!landing) return undefined;
  const foto = fotosRubro[landing.param];
  return foto && { ...foto, param: landing.param };
}
