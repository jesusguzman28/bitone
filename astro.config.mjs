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
  // Ya no hace falta filtrar /mockup-*: esas dos páginas de prueba se borraron.
  // Estaban publicadas y respondían 200 en bitwise.pe —fuera del sitemap, pero
  // accesibles para cualquiera con el enlace—, enseñando trabajo interno a medio
  // hacer. Si vuelven a hacer falta, están en el historial de git.
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
