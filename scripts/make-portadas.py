# Genera las portadas del blog a partir de src/data/blog.ts.
#
#     python scripts/make-portadas.py
#
# Cada artículo lleva tres: <slug>.jpg para compartir (WhatsApp y algunas redes
# no siempre muestran una og:image en WebP), <slug>.webp (1200x630) y
# <slug>-sm.webp (640x336) para las tarjetas y el celular.
#
# Mismo lenguaje que el sitio (ver quipu_img.py): añil liso, titular en Archivo
# ancho y un quipu pequeño cuyas cuerdas toman el color de la categoría. Si se
# agrega un artículo, se vuelve a correr este script.
import re
from PIL import Image
from quipu_img import (RAIZ, W, H, MAIZ, GRANA, ALGODON, NIEBLA, lienzo,
                       marca, titular, quipu, fuente)

fuente_ts = (RAIZ / "src/data/blog.ts").read_text(encoding="utf-8")
posts = re.findall(r"slug: '([^']+)',\s*title: '([^']+)',.*?category: '([^']+)'", fuente_ts, re.S)
if not posts:
    raise SystemExit("No se encontraron artículos en src/data/blog.ts")

# Un color de cuerda por categoría, dentro de la paleta de tintes.
COLORES = {
    "Presupuesto": MAIZ,
    "Sistemas": (91, 124, 255),
    "Decidir": GRANA,
    "Mantenimiento": (22, 163, 74),
    "Apps móviles": (139, 92, 246),
    "Casos": (0, 134, 234),
}

salida = RAIZ / "public/blog"
salida.mkdir(parents=True, exist_ok=True)

for i, (slug, titulo, categoria) in enumerate(posts):
    color = COLORES.get(categoria, GRANA)
    img, d = lienzo()
    marca(d)
    d.text((72, 150), categoria, font=fuente("semi", 26), fill=MAIZ)
    titular(d, titulo, 72, 200, 820, tams=(58, 52, 46, 42), max_lineas=4)

    # Tres cuerdas; el largo varía con el artículo para que no sean todas iguales.
    largos = [(170 + 23 * ((i + k) % 4)) for k in range(3)]
    quipu(d, 960, 150, 170, [(color, largos[0], 4), (ALGODON, largos[1], 2), (color, largos[2], 5)])

    dom = "bitone.pe/blog"
    f = fuente("semi", 24)
    bb = d.textbbox((0, 0), dom, font=f)
    d.text((72, H - 60 - bb[3]), dom, font=f, fill=NIEBLA)

    img.save(salida / f"{slug}.webp", "WEBP", quality=84, method=6)
    img.resize((640, 336), Image.LANCZOS).save(salida / f"{slug}-sm.webp", "WEBP", quality=82, method=6)
    img.save(salida / f"{slug}.jpg", "JPEG", quality=86, optimize=True, progressive=True)
    print("portada", slug)
