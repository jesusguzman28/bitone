import { execSync } from 'node:child_process';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

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

// https://astro.build/config
export default defineConfig({
  site: 'https://bitone.pe',

  // Cada página se compila como una carpeta con su index.html, y el canonical
  // que emite BaseLayout declara la barra final. Con esto declarado, el
  // servidor de desarrollo se comporta igual que producción: un enlace interno
  // sin barra da 404 aquí en vez de pasar desapercibido hasta que el servidor lo
  // resuelve con una redirección en la web publicada. Es el guardia que evita que
  // vuelvan los enlaces sin barra. Ver la nota sobre el 307 en src/data/site.ts.
  trailingSlash: 'always',
  // Astro 7 compacta el HTML quitando el espacio entre un texto y el enlace
  // que lo sigue en el renglón de abajo ("están todas en<a>…"), y las frases
  // salían pegadas en todo el sitio. Sin compactar se ve como se escribió.
  compressHTML: false,
  build: { format: 'directory' },

  // Sin `redirects` aquí a propósito. En un build estático Astro los resuelve
  // generando un HTML con <meta http-equiv="refresh">, que responde 200: para
  // Google es una página duplicada, no una redirección, y no transfiere
  // autoridad. Con el dominio nuevo (bitone.pe) no hay
  // direcciones antiguas que redirigir, y GitHub Pages no admite reglas de
  // redirección: si algún día hacen falta, se resuelven en el DNS o con un
  // proxy delante, no aquí.
  // Ya no hace falta filtrar /mockup-*: esas dos páginas de prueba se borraron.
  // Estaban publicadas y respondían 200 en la web anterior —fuera del sitemap, pero
  // accesibles para cualquiera con el enlace—, enseñando trabajo interno a medio
  // hacer. Si vuelven a hacer falta, están en el historial de git.
  integrations: [
    sitemap({
      // El sitemap salía con 29 direcciones y ninguna fecha. Sin `lastmod`, un
      // rastreador no tiene forma de saber qué cambió desde la última visita y
      // acaba repasándolo todo o casi nada.
      //
      // Sin `changefreq` ni `priority`: Google dice desde hace años que los
      // ignora, y son dos campos que hay que mantener a cambio de nada.
      serialize: (item) => ({
        ...item,
        lastmod: CAMBIO_SRC,
      }),
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
