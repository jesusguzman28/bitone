// Las puertas de entrada: una sola oferta (software para tu negocio) vista
// desde cinco lados. Textos de brief/02-oferta.md, secciones 1 y 6.
import type { NombreSigno, TonoSigno } from '../lib/signos';
import { mensajes } from './empresa';
import { paginas, type Pagina } from './navegacion';

export interface Servicio {
  pagina: Pagina;
  signo: NombreSigno;
  /** Color del módulo cuando el signo va grande. */
  tono: TonoSigno;
  /** La promesa, en una frase. */
  promesa: string;
  /** El problema de hoy, dicho como lo dice el dueño. */
  hoy: string;
  /** Mensaje de WhatsApp de esta puerta. */
  mensaje: string;
}

export const servicios: Servicio[] = [
  {
    pagina: paginas.sistemas,
    signo: 'medida',
    tono: 'rojo',
    promesa: 'Pedidos, almacén, ventas o cobranzas en un solo sistema, hecho para cómo trabajas.',
    hoy: 'Para saber cómo va el negocio, preguntas.',
    mensaje: mensajes.sistema,
  },
  {
    pagina: paginas.apps,
    signo: 'app',
    tono: 'tinta',
    promesa: 'Para tu equipo en la calle o para tus clientes. Y si no hace falta, te lo decimos antes.',
    hoy: 'Tu equipo anota pedidos en papel o por WhatsApp.',
    mensaje: mensajes.app,
  },
  {
    pagina: paginas.automatizacion,
    signo: 'greca',
    tono: 'arena',
    promesa: 'Lo que hoy haces a mano, se hace solo. Un proceso a la vez.',
    hoy: 'Entre un sistema y otro hay una persona copiando.',
    mensaje: mensajes.automatizacion,
  },
  {
    pagina: paginas.rescate,
    signo: 'rescate',
    tono: 'rojo',
    promesa: 'Tienes un sistema y quien lo hizo ya no está. Lo revisamos, lo arreglamos y lo dejamos explicado.',
    hoy: 'El sistema funciona, y por eso nadie lo toca.',
    mensaje: mensajes.rescate,
  },
];

/** El acceso por tipo de negocio. No es un servicio más: es otra forma de entrar,
    y por eso en la portada no se parece a las cuatro puertas. */
export const porNegocio = {
  pagina: paginas.negocios,
  signo: 'enlace' as NombreSigno,
  tono: 'tinta' as TonoSigno,
  // El orden es el de /negocios/ (data/negocios.ts): la distribuidora primero, que es el
  // ejemplo de la portada, y la bodega al final.
  rubros: ['Distribuidora', 'Ferretería', 'Restaurante', 'Bodega'],
  pregunta: '¿Distribuidora, ferretería, restaurante o bodega?',
  /** Lo que se lee cuando la página /negocios/ existe y la franja es un enlace. */
  promesa: 'Mira cómo queda en el tuyo',
  /** Lo que se lee mientras esa página no existe. */
  sinPagina: 'El sistema se arma para tu rubro.',
};

/** La franqueza de la casa. Texto del dueño (brief 02, sección 4.3). */
export const cuandoNo = {
  titulo: ['A veces no nos necesitas.', 'Y te lo decimos.'],
  texto: 'Si te basta un programa ya hecho, te lo decimos en la primera conversación.',
};
