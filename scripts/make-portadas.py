# Genera las portadas del blog a partir de src/data/blog.ts.
#
#     python scripts/make-portadas.py
#
# Cada artículo lleva tres: <slug>.jpg para compartir, public/blog/<slug>.webp (1200x630, la medida que
# piden WhatsApp, Facebook y LinkedIn al compartir) y <slug>-sm.webp (640x336,
# para las tarjetas y el celular). Mismo estilo que og-default.jpg, así el
# blog se reconoce como parte del sitio. Si se agrega un artículo, se vuelve a
# correr este script.
import re
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter

RAIZ = Path(__file__).resolve().parent.parent
fuente = (RAIZ / "src/data/blog.ts").read_text(encoding="utf-8")

# slug, title y category de cada entrada, en orden.
posts = re.findall(r"slug: '([^']+)',\s*title: '([^']+)',.*?category: '([^']+)'", fuente, re.S)
if not posts:
    raise SystemExit("No se encontraron artículos en src/data/blog.ts")

W, H = 1200, 630
BOLD = "C:/Windows/Fonts/segoeuib.ttf"
SEMI = "C:/Windows/Fonts/seguisb.ttf"

# Un acento distinto por categoría, dentro de la paleta de la marca.
ACENTOS = {
    "Presupuesto": (232, 163, 23),
    "Sistemas": (59, 130, 246),
    "Decidir": (217, 16, 35),
    "Mantenimiento": (22, 163, 74),
    "Apps móviles": (139, 92, 246),
    "Casos": (0, 134, 234),
}


def partir(d, texto, fuente, ancho):
    lineas, actual = [], ""
    for palabra in texto.split():
        prueba = (actual + " " + palabra).strip()
        if d.textbbox((0, 0), prueba, font=fuente)[2] <= ancho:
            actual = prueba
        else:
            lineas.append(actual)
            actual = palabra
    lineas.append(actual)
    return lineas


salida = RAIZ / "public/blog"
salida.mkdir(parents=True, exist_ok=True)

for slug, titulo, categoria in posts:
    acento = ACENTOS.get(categoria, (217, 16, 35))
    img = Image.new("RGB", (W, H), (10, 15, 28))
    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    g = ImageDraw.Draw(glow)
    g.ellipse([W - 560, -280, W + 260, 520], fill=acento + (120,))
    g.ellipse([-320, H - 420, 460, H + 280], fill=(232, 163, 23, 70))
    glow = glow.filter(ImageFilter.GaussianBlur(150))
    img = Image.alpha_composite(img.convert("RGBA"), glow).convert("RGB")
    d = ImageDraw.Draw(img, "RGBA")

    marca = ImageFont.truetype(BOLD, 40)
    d.text((72, 62), "BIT-ONE", font=marca, fill=(255, 255, 255))
    mb = d.textbbox((72, 62), "BIT-ONE", font=marca)
    d.ellipse([mb[2] + 8, 72, mb[2] + 27, 91], fill=(217, 16, 35))

    pf = ImageFont.truetype(SEMI, 22)
    etiqueta = categoria.upper()
    bb = d.textbbox((0, 0), etiqueta, font=pf)
    d.rounded_rectangle([72, 170, 72 + bb[2] + 44, 170 + bb[3] + 26], radius=100,
                        fill=acento + (45,), outline=acento + (150,), width=2)
    d.text((94, 183), etiqueta, font=pf, fill=(255, 255, 255))

    # El titular se achica hasta caber en tres renglones.
    for tam in (64, 58, 52, 46):
        tf = ImageFont.truetype(BOLD, tam)
        lineas = partir(d, titulo, tf, W - 160)
        if len(lineas) <= 3:
            break
    y = 250
    for linea in lineas:
        d.text((72, y), linea, font=tf, fill=(255, 255, 255))
        y += int(tam * 1.18)

    df = ImageFont.truetype(SEMI, 26)
    dom = "bitone.pe/blog"
    db = d.textbbox((0, 0), dom, font=df)
    d.text((W - 72 - db[2], H - 70 - db[3]), dom, font=df, fill=(203, 213, 225))

    img.save(salida / f"{slug}.webp", "WEBP", quality=82, method=6)
    img.resize((640, 336), Image.LANCZOS).save(salida / f"{slug}-sm.webp", "WEBP", quality=80, method=6)
    # JPG solo para la tarjeta al compartir: WhatsApp y algunas redes no
    # siempre muestran una og:image en WebP.
    img.save(salida / f"{slug}.jpg", "JPEG", quality=86, optimize=True, progressive=True)
    print("portada", slug)
