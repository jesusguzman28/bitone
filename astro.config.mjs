import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://bitwise.pe',
  // /clientes se fusionó con /proyectos en el rediseño 2026
  redirects: {
    '/clientes': '/proyectos',
  },
  // Las páginas /mockup-* son pruebas internas: fuera del sitemap
  integrations: [sitemap({ filter: (page) => !page.includes('/mockup-') })],
  vite: {
    plugins: [tailwindcss()],
  },
});
