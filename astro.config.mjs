import { execSync } from 'node:child_process';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import sharp from 'sharp';

// Las imágenes se procesan con un solo hilo. Es más lento, pero la máquina donde
// se diseñó se reinicia con los picos de carga y aquí no hay prisa.
sharp.concurrency(1);

// Fecha del último cambio real de contenido: el último commit que tocó src/. No la
// de compilación: un sitemap que dice "todo cambió hoy" en cada despliegue es lo que
// hace que Google deje de creerle al campo. Sin git (un zip), la fecha del momento.
function ultimoCambio() {
  try {
    return execSync('git log -1 --format=%cI -- src', { encoding: 'utf8' }).trim() || new Date().toISOString();
  } catch {
    return new Date().toISOString();
  }
}

const CAMBIO_SRC = ultimoCambio();

// Direcciones de la web anterior de bitone.pe que ya no existen, cada una a la
// página nueva más cercana. Siguen en Google y en enlaces compartidos: sin esto
// darían 404. GitHub Pages no admite redirecciones de servidor, así que Astro
// genera en cada una un HTML con meta refresh inmediato, noindex y canonical a la
// nueva, que Google trata como redirección permanente.
const redirecciones = {
  '/contacto/': '/',
  '/metodologia/': '/como-trabajamos/',
  '/servicios/': '/',
  '/servicios/desarrollo-de-software-a-medida/': '/sistemas/',
  '/servicios/mantenimiento-de-software/': '/rescate/',
  '/servicios/apps-moviles/': '/apps/',
  '/fabrica-de-software-peru/': '/',
  '/fabrica-de-software-lima/': '/',
  '/fabrica-de-software-ayacucho/': '/',
  '/blog/': '/',
  '/blog/cuanto-cuesta-un-software-a-medida-en-peru/': '/como-trabajamos/',
  '/blog/facturacion-electronica-sunat-integrar-a-tu-sistema/': '/sistemas/',
  '/blog/software-a-medida-o-erp-de-paquete/': '/sistemas/',
  '/blog/heredaste-un-sistema-sin-documentacion/': '/rescate/',
  '/blog/app-nativa-multiplataforma-o-web/': '/apps/',
  '/blog/caso-apuray-plataforma-de-delivery-en-provincia/': '/proyectos/',
  '/blog/caso-quipuy-plataforma-educativa-preuniversitaria/': '/proyectos/',
  '/blog/caso-de-excel-y-google-forms-a-una-intranet/': '/proyectos/',
};

// public/ solo lleva lo que se sirve tal cual: las fuentes, el favicon, robots.txt,
// llms.txt, el CNAME y la verificación de Google. Las imágenes del sitio van por
// src/assets (astro:assets las optimiza).
export default defineConfig({
  site: 'https://bitone.pe',
  devToolbar: { enabled: false },
  trailingSlash: 'always',
  redirects: redirecciones,
  integrations: [
    sitemap({
      // Las redirecciones no van al mapa: solo las páginas que existen.
      filter: (pagina) => !Object.keys(redirecciones).some((r) => pagina === `https://bitone.pe${r}`),
      serialize: (item) => ({ ...item, lastmod: CAMBIO_SRC }),
    }),
  ],
  // host: true para poder abrirlo desde un celular en el mismo wifi.
  server: { port: 4321, host: true },
});
