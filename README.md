# Bit One — bitone.pe

Web de Bit One, marca de Bitone E.I.R.L. (RUC 20615736261): sistemas a medida,
apps y automatización para negocios del Perú. Sitio estático hecho con Astro,
con CSS a mano (sin Tailwind ni frameworks de interfaz), publicado en GitHub
Pages.

## Trabajar en la PC

```bash
npm install
npm run dev          # http://localhost:4321
```

En Windows también sirve `iniciar-web.bat` (se reinicia solo si el servidor se
cae) o `iniciar-web-4322.bat` (un segundo servidor, abierto a la red local para
probar desde el celular).

## Antes de subir

```bash
npm run verificar
```

Compila y revisa `dist/` página por página: un solo h1, título y descripción,
enlaces e imágenes internos, anclas, que no diga "Bitwise", que las direcciones
de la web anterior redirijan a una página que existe y que el sitemap liste las
nueve páginas. Si no termina con "Todo en orden", no se sube.

Para revisar el diseño, con el servidor de desarrollo abierto:

```bash
node tools/set.mjs http://localhost:4321/apps/ revision/apps/set
```

Toma el juego completo de capturas de una página (escritorio, celular y la
primera pantalla en ocho tamaños). `tools/shot.mjs` toma una captura suelta.

## Publicar

Cada `git push` a `main` publica solo: el flujo `.github/workflows/publicar.yml`
compila y sube `dist` a GitHub Pages, en bitone.pe (`public/CNAME`).

`public/google87408e12b36fb90e.html` es la verificación de Search Console: no
se borra.

## Dónde se cambia cada cosa

- Marca, contacto, RUC, redes y mensajes de WhatsApp: `src/data/empresa.ts`
- Textos de cada página: `src/data/` (un archivo por página) y el mapa en
  `src/data/navegacion.ts`
- Logo: `src/lib/logo.ts` (la palabra "Bit One" va en trazos, en Archivo 800 al
  125 % de ancho)
- Imagen al compartir el enlace: `src/assets/marca/tarjeta.png` (1200 x 630)
- Direcciones de la web anterior y a dónde llevan: `astro.config.mjs`
- Resumen para buscadores con IA: `public/llms.txt`

## Identidad visual

Dirección "Tocapu": módulos y signos geométricos propios dentro de una
cuadrícula, como los bits. Hueso, tinta y rojo `#D91023`, con el oro al mínimo.
Letras: Archivo (expandida en titulares) y Martian Mono para rótulos. Las
variables están en `src/styles/tokens.css`.

- Un signo por servicio y un friso que pasa del desorden al tejido.
- El botón principal siempre lleva a WhatsApp, y WhatsApp nunca tapa texto.
- Solo datos reales de la empresa: sin clientes, cifras ni reseñas inventados.
