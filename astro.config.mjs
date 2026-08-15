import { execSync } from 'node:child_process';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { blog } from './src/data/site.ts';

// Fecha del último cambio real de contenido: el último commit que tocó src/.
//
// NO se usa la fecha de compilación. Un sitemap que dice "todas las páginas
// cambiaron hoy" cada vez que se despliega es exactamente lo que hace que
// Google deje de creerle al campo y lo ignore para todo el sitio. Con el
// commit, si se despliega sin tocar contenido la fecha no se mueve, que es la
// verdad.
//
// Si no hay git —una compilación desde un zip, por ejemplo— se cae a la fecha
// del momento: es la mejor aproximación disponible y es preferible a romper la
// compilación por un dato accesorio.
function ultimoCambio() {
  try {
    return execSync('git log -1 --format=%cI -- src', { encoding: 'utf8' }).trim() || new Date().toISOString();
  } catch {
    return new Date().toISOString();
  }
}

const CAMBIO_SRC = ultimoCambio();

// Las entradas del blog sí tienen fecha propia y publicada en la página. Se usa
// esa: es más precisa que la del repositorio y coincide con el `datePublished`
// del JSON-LD, así que las dos señales dicen lo mismo.
const FECHA_POST = new Map(blog.map((p) => [`/blog/${p.slug}/`, new Date(p.date + 'T12:00:00Z').toISOString()]));

// https://astro.build/config
export default defineConfig({
  site: 'https://bitwise.pe',

  // Cada página se compila como una carpeta con su index.html, y el canonical
  // que emite BaseLayout declara la barra final. Con esto declarado, el
  // servidor de desarrollo se comporta igual que producción: un enlace interno
  // sin barra da 404 aquí en vez de pasar desapercibido hasta que Cloudflare lo
  // resuelve con un 307 en la web publicada. Es el guardia que evita que
  // vuelvan los enlaces sin barra. Ver la nota sobre el 307 en src/data/site.ts.
  trailingSlash: 'always',
  build: { format: 'directory' },

  // Sin `redirects` aquí a propósito. En un build estático Astro los resuelve
  // generando un HTML con <meta http-equiv="refresh">, que responde 200: para
  // Google es una página duplicada, no una redirección, y no transfiere
  // autoridad. Las redirecciones reales viven en public/_redirects, que
  // Cloudflare sirve como 301 de verdad.
  // Ya no hace falta filtrar /mockup-*: esas dos páginas de prueba se borraron.
  // Estaban publicadas y respondían 200 en bitwise.pe —fuera del sitemap, pero
  // accesibles para cualquiera con el enlace—, enseñando trabajo interno a medio
  // hacer. Si vuelven a hacer falta, están en el historial de git.
  integrations: [
    sitemap({
      // Fuera del sitemap todo lo que va con `noindex`.
      //
      // Ahora mismo eso es el blog entero: sus seis entradas son del negocio
      // anterior —páginas web y tiendas para negocios pequeños— y se apartaron
      // del índice para que no arrastren la relevancia temática del dominio en
      // la dirección equivocada. El porqué completo está en blog/index.astro.
      //
      // Listarlas en el sitemap y a la vez pedirle a Google que no las indexe
      // son dos instrucciones que se contradicen: el sitemap es una invitación
      // explícita a rastrear e indexar. Cuando el blog vuelva a indexarse, se
      // quita este filtro y el `noindex` de las dos plantillas a la vez.
      filter: (page) => !new URL(page).pathname.startsWith('/blog'),

      // El sitemap salía con 29 direcciones y ninguna fecha. Sin `lastmod`, un
      // rastreador no tiene forma de saber qué cambió desde la última visita y
      // acaba repasándolo todo o casi nada.
      //
      // Sin `changefreq` ni `priority`: Google dice desde hace años que los
      // ignora, y son dos campos que hay que mantener a cambio de nada.
      serialize: (item) => ({
        ...item,
        lastmod: FECHA_POST.get(new URL(item.url).pathname) ?? CAMBIO_SRC,
      }),
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
