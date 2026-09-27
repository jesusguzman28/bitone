// ---- Cobertura nacional: las 25 regiones del Perú ----
//
// Alimenta /fabrica-de-software-peru/: una sola página que dice, región por
// región, que se atiende todo el país. Es la forma segura de aparecer en
// búsquedas como "software a medida Arequipa" sin crear una página por ciudad
// con el mismo texto, que Google trata como "doorway pages" y castiga en todo
// el sitio.
//
// `pagina` enlaza a la página propia de la región cuando la hay (ver
// ciudades.ts). Una región solo pasa a tener página propia cuando hay algo real
// que contar de ella: un cliente, un proyecto, una sede.
//
// `zona` agrupa por geografía porque es lo que cambia el diseño de un sistema:
// la conectividad y la distancia no son las mismas en la costa que en la sierra
// o la selva.

export type Zona = 'costa' | 'sierra' | 'selva';

export interface Region {
  nombre: string;
  ciudades: readonly string[];
  zona: Zona;
  pagina?: string;
}

export const regiones: readonly Region[] = [
  { nombre: 'Amazonas', ciudades: ['Chachapoyas', 'Bagua'], zona: 'selva' },
  { nombre: 'Áncash', ciudades: ['Huaraz', 'Chimbote'], zona: 'sierra' },
  { nombre: 'Apurímac', ciudades: ['Abancay', 'Andahuaylas'], zona: 'sierra' },
  { nombre: 'Arequipa', ciudades: ['Arequipa', 'Camaná'], zona: 'costa' },
  { nombre: 'Ayacucho', ciudades: ['Huamanga', 'Huanta', 'Coracora', 'Puquio'], zona: 'sierra', pagina: '/fabrica-de-software-ayacucho/' },
  { nombre: 'Cajamarca', ciudades: ['Cajamarca', 'Jaén'], zona: 'sierra' },
  { nombre: 'Callao', ciudades: ['Callao'], zona: 'costa' },
  { nombre: 'Cusco', ciudades: ['Cusco', 'Sicuani'], zona: 'sierra' },
  { nombre: 'Huancavelica', ciudades: ['Huancavelica'], zona: 'sierra' },
  { nombre: 'Huánuco', ciudades: ['Huánuco', 'Tingo María'], zona: 'sierra' },
  { nombre: 'Ica', ciudades: ['Ica', 'Chincha', 'Pisco'], zona: 'costa' },
  { nombre: 'Junín', ciudades: ['Huancayo', 'Tarma'], zona: 'sierra' },
  { nombre: 'La Libertad', ciudades: ['Trujillo'], zona: 'costa' },
  { nombre: 'Lambayeque', ciudades: ['Chiclayo'], zona: 'costa' },
  { nombre: 'Lima', ciudades: ['Lima', 'Huacho', 'Cañete'], zona: 'costa', pagina: '/fabrica-de-software-lima/' },
  { nombre: 'Loreto', ciudades: ['Iquitos', 'Yurimaguas'], zona: 'selva' },
  { nombre: 'Madre de Dios', ciudades: ['Puerto Maldonado'], zona: 'selva' },
  { nombre: 'Moquegua', ciudades: ['Moquegua', 'Ilo'], zona: 'costa' },
  { nombre: 'Pasco', ciudades: ['Cerro de Pasco'], zona: 'sierra' },
  { nombre: 'Piura', ciudades: ['Piura', 'Sullana', 'Talara'], zona: 'costa' },
  { nombre: 'Puno', ciudades: ['Puno', 'Juliaca'], zona: 'sierra' },
  { nombre: 'San Martín', ciudades: ['Tarapoto', 'Moyobamba'], zona: 'selva' },
  { nombre: 'Tacna', ciudades: ['Tacna'], zona: 'costa' },
  { nombre: 'Tumbes', ciudades: ['Tumbes'], zona: 'costa' },
  { nombre: 'Ucayali', ciudades: ['Pucallpa'], zona: 'selva' },
];

export const zonas: readonly { id: Zona; titulo: string; texto: string }[] = [
  {
    id: 'costa',
    titulo: 'Costa',
    texto:
      'Conectividad buena y operaciones grandes: agroexportación, pesca, comercio, industria. Lo que más se pide son integraciones —facturación electrónica, ERP, bancos— y sistemas que junten sedes y almacenes.',
  },
  {
    id: 'sierra',
    titulo: 'Sierra',
    texto:
      'Distancias largas y señal que va y viene. Los sistemas se diseñan para trabajar sin conexión y sincronizar después, y las apps para el personal en campo pesan más que la oficina. Es lo que aprendimos construyendo ApuraY en Coracora.',
  },
  {
    id: 'selva',
    titulo: 'Selva',
    texto:
      'Conectividad más limitada y logística por río o por carreteras largas. Aplica lo mismo que en la sierra, con más razón: todo lo que se pueda hacer sin señal, se hace sin señal.',
  },
];
