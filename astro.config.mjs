import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://bitwise.pe',
  // Sin `redirects` aquí a propósito. En un build estático Astro los resuelve
  // generando un HTML con <meta http-equiv="refresh">, que responde 200: para
  // Google es una página duplicada, no una redirección, y no transfiere
  // autoridad. Las redirecciones reales viven en public/_redirects, que
  // Cloudflare sirve como 301 de verdad.
  // Las páginas /mockup-* son pruebas internas: fuera del sitemap
  integrations: [sitemap({ filter: (page) => !page.includes('/mockup-') })],
  vite: {
    plugins: [tailwindcss()],
  },
});
