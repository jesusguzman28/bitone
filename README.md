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
compila y sube `dist` a GitHub Pages.

Mientras bitone.pe no esté activo, la web sale en
https://jesusguzman28.github.io/bitone/ (con `noindex`, para que Google no la
tome como la definitiva). Para pasar al dominio:

1. Apuntar los DNS de bitone.pe a GitHub Pages.
2. Crear `public/CNAME` con la línea `bitone.pe` y subirlo.
3. En Settings → Pages → Custom domain poner `bitone.pe` y activar HTTPS.

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

## Identidad visual

El sitio se construye alrededor del **quipu**, el sistema de cuerdas y nudos con
que los incas registraban información. No es adorno: en la portada cada cuerda
es un proyecto en producción y cada nudo una tecnología con la que se hizo
(`src/components/Hero.astro`); en Metodología las fases son nudos de una misma
cuerda.

- Colores: añil `#1A2044`, grana `#D91023`, maíz `#E8A317` (solo sobre añil),
  piedra `#5B6272`, hilo `#D5D8E0`. Definidos en `src/styles/global.css`.
- Letra: una sola familia, Archivo (variable). Titulares anchos y pesados
  (`font-stretch` 118–125 %), texto en ancho normal.
- Todo alineado a la izquierda sobre la misma rejilla de 1120 px.
- Lo que se evita a propósito: pastillas, texto con degradado, etiquetas en
  mayúsculas espaciadas, sombras difusas, íconos en cuadritos de color,
  flechas pegadas a los enlaces y animaciones al hacer scroll. La única
  animación es la caída de las cuerdas del quipu.
- Las imágenes para compartir y las portadas del blog salen de
  `scripts/make-og.py` y `scripts/make-portadas.py` con el mismo estilo.
