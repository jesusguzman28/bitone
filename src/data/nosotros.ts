// Los textos de /nosotros/. Todo sale de brief/01-empresa.md: las personas (sección 2),
// cómo trabajan (secciones 2, 3 y 5), para qué no son (brief 02, sección 4.3) y lo
// formal (secciones 1 y 3). De las personas el brief solo respalda nombre, rol y
// LinkedIn: no hay biografías, estudios, años ni parentesco, y no se inventan.
// Las personas están en data/empresa.ts (`cofundadores`). La razón social y el RUC no
// se escriben aquí: los dice el pie, una vez. El correo y las redes, tampoco: ya están
// en el pie (el correo es un Gmail y el brief pide no darle protagonismo).
import { empresa, clausulas } from './empresa';
import { enlaceA } from './navegacion';

export const nosotros = {
  pestana: 'Nosotros: quiénes hacen tu sistema',
  descripcion:
    'Bit One es una empresa de software de Lima, Perú. Conoce a los tres cofundadores y cómo trabajan: hablas directo con quien hace tu sistema.',

  /** La frase de la casa (brief 01, sección 3, "Trato", y el título de pestaña de la página
      Nosotros publicada: "quiénes hacen tu sistema"). Cada renglón cabe solo en un celular de 360 px. */
  portada: {
    titulo: ['Hablas directo', 'con quien hace', 'tu sistema.'],
    /** Para lector de pantalla: el encabezado de la lista de personas. */
    personas: 'Los cofundadores',
    boton: 'Escríbenos por WhatsApp',
    dato: empresa.respuesta,
    // El encuadre de cada retrato está en data/empresa.ts (`cofundadores`): lo comparte la portada.
  },

  /** Cómo es trabajar con ellos, en el orden en que pasa. Cada título tiene 16 letras
      como mucho: va a tamaño de título y no debe partirse. Cada texto cabe en dos
      renglones al lado de su título. El detalle (pasos, precio y garantía) vive en
      /como-trabajamos/.
      La fila 1 dice que ese paso se paga y la 2, que el precio sale de ahí: leídas
      seguidas no deben parecer "reuniones gratis y precio antes de pagar nada"
      (brief 01, sección 10: gratis es la primera conversación, no el paso 1). */
  trato: {
    rotulo: 'Así trabajamos contigo',
    momentos: [
      // "Primero", no "Paso 1": los cuatro rótulos son momentos, y esta página no explica
      // qué es el paso 1.
      { cuando: 'Primero', titulo: 'Te escuchamos.', texto: 'Nos reunimos con quienes hacen el trabajo cada día. Es un trabajo pagado, de 1 a 3\u00A0semanas.' },
      { cuando: 'Antes de construir', titulo: 'Te lo firmamos.', texto: 'De ahí sale qué incluye el sistema, las fechas y el precio fijo por\u00A0escrito.' },
      // "Mostramos", no "enseñamos": aquí enseñar se entiende primero como dar clases.
      { cuando: 'Cada dos semanas', titulo: 'Te lo mostramos.', texto: 'Ves una parte funcionando, no diapositivas.' },
      // Dice lo que pasa al terminar, que es lo que anuncia su rótulo: la entrega (paso 5,
      // "Queda a tu nombre"). Antes decía "todo está a tu nombre desde el inicio" bajo "Al
      // terminar". No dice que el programa sea tuyo recién al final: no habla de cuándo
      // empieza a serlo. Cabe en dos renglones junto a su título, como las otras tres.
      { cuando: 'Al terminar', titulo: 'Y es tuyo.', texto: 'Recibes el programa completo y una guía. Si\u00A0mañana sigues con otro proveedor, puedes.' },
    ],
    enlaces: {
      proceso: enlaceA.comoTrabajamos,
      proyectos: enlaceA.proyectos,
    },
  },

  /** Para qué no son. Solo lo que el sitio publicado ya dice: lo que hacen son sistemas,
      no páginas que muestran información (brief 02, pregunta "¿Qué diferencia hay con una
      página web?"), y cuándo conviene un programa ya hecho (brief 02, sección 4.3).
      No va la comparativa ("un proyecto de 20 personas"): no está publicada y roza el
      tamaño del equipo, que el brief pide no afirmar. */
  franca: {
    titulo: ['No somos para todo.', 'Mejor saberlo antes.'],
    texto: 'Si no somos lo que necesitas, te lo decimos en la primera conversación, que es gratis.',
    listas: {
      a: {
        rotulo: 'No somos tu equipo si',
        puntos: [
          'Solo necesitas una página web que muestre información.',
          'Te basta un programa ya hecho.',
          'Necesitas empezar esta semana, con un costo mensual bajo.',
        ],
      },
      b: {
        rotulo: 'Sí lo somos si',
        puntos: [
          'Quieres que el sistema se adapte a tu negocio, y no tu negocio al sistema.',
          'Quieres hablar con quien lo construye.',
          'Quieres que todo quede a nombre de tu empresa.',
        ],
      },
    },
  },

  /** Lo formal, con lo que el pie no dice. Sin razón social ni RUC (los dice el pie),
      sin correo y sin redes (también están ahí). */
  ficha: {
    titulo: 'Empresa formal, en Lima.',
    datos: [
      { rotulo: 'Factura', texto: 'Factura electrónica por cada parte entregada.' },
      // Compromiso escrito por el dueño (brief 01, sección 3, "Trato"), que hoy no se ve
      // en el sitio publicado: pendiente de que lo confirme.
      { rotulo: 'Confidencialidad', texto: 'Si lo pides, firmamos un acuerdo de confidencialidad antes de empezar.' },
      // El horario ya está en el pie y en el menú: aquí va un dato que el pie no dice.
      // Es la cláusula 02 de la hoja, tal cual.
      { rotulo: 'Pago', texto: clausulas[1].texto },
    ],
  },
};
