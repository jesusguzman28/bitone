# BIT-ONE — bitone.pe

Web de BIT-ONE, marca de Bitone E.I.R.L. (RUC 20615736261): empresa de
desarrollo de software en Perú. Sitio estático hecho con Astro y Tailwind,
publicado en GitHub Pages.

## Trabajar en la PC

```bash
npm install
npm run dev          # http://localhost:4321
```

En Windows también sirve `iniciar-web.bat` (se reinicia solo si el servidor se
cae) o `iniciar-web-4322.bat` (abre la red local para probar desde el celular).

## Antes de subir

```bash
npm run verificar
```

Compila, revisa títulos, descripciones, H1 y enlaces, y levanta el servidor de
desarrollo para comprobar que arranca. Si no dice "TODO EN ORDEN", no se sube.

## Publicar

Cada `git push` a `main` publica solo: el flujo `.github/workflows/publicar.yml`
compila y sube `dist` a GitHub Pages. El dominio lo fija `public/CNAME`.

Para comprobar la web ya publicada:

```bash
npm run revisar-produccion
```

## Dónde se cambia cada cosa

- Contenido, datos de contacto, RUC, redes, FAQ: `src/data/site.ts`
- Servicios y sus páginas: `src/data/servicios.ts`
- Proyectos y apps publicadas: `src/data/proyectos.ts`, `src/data/apps.ts`
- Política de seguridad (CSP): meta en `src/layouts/BaseLayout.astro`
- Imagen al compartir el enlace: `scripts/make-og.py` → `public/og-default.jpg`
