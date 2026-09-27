# Piezas comunes para las imágenes del sitio (og-default.jpg y portadas del
# blog). Mismo lenguaje que la web: fondo añil liso, letra Archivo y un quipu
# —cuerda madre con cuerdas colgantes y nudos— como único adorno.
#
# Las fuentes son instancias estáticas de public/fonts/archivo.woff2 (PIL no
# lee fuentes variables en woff2): ancha = 800/125 %, semi = 650/110 %,
# texto = 500/100 %.
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

RAIZ = Path(__file__).resolve().parent.parent
FUENTES = Path(__file__).resolve().parent / "fuentes"

ANIL = (26, 32, 68)
GRANA = (217, 16, 35)
MAIZ = (232, 163, 23)
ALGODON = (233, 227, 210)
NIEBLA = (155, 162, 192)

W, H = 1200, 630


def fuente(tipo, tam):
    return ImageFont.truetype(str(FUENTES / f"archivo-{tipo}.ttf"), tam)


def lienzo():
    img = Image.new("RGB", (W, H), ANIL)
    return img, ImageDraw.Draw(img)


def marca(d, x=72, y=58):
    f = fuente("ancha", 34)
    d.text((x, y), "BIT", font=f, fill=(255, 255, 255))
    x2 = d.textbbox((x, y), "BIT", font=f)[2]
    d.text((x2, y), "-", font=f, fill=MAIZ)
    x3 = d.textbbox((x2, y), "-", font=f)[2]
    d.text((x3, y), "ONE", font=f, fill=(255, 255, 255))


def partir(d, texto, f, ancho):
    lineas, actual = [], ""
    for palabra in texto.split():
        prueba = (actual + " " + palabra).strip()
        if d.textbbox((0, 0), prueba, font=f)[2] <= ancho:
            actual = prueba
        else:
            lineas.append(actual)
            actual = palabra
    lineas.append(actual)
    return lineas


def titular(d, texto, x, y, ancho, tams=(72, 64, 56, 50, 44), max_lineas=3):
    for tam in tams:
        f = fuente("ancha", tam)
        lineas = partir(d, texto, f, ancho)
        if len(lineas) <= max_lineas:
            break
    for linea in lineas:
        d.text((x, y), linea, font=f, fill=(255, 255, 255))
        y += int(tam * 1.06)
    return y


def quipu(d, x0, y0, ancho, cuerdas):
    """cuerdas: lista de (color, largo, nudos). Dibuja la cuerda madre y las
    colgantes repartidas a lo ancho."""
    d.rounded_rectangle([x0, y0, x0 + ancho, y0 + 6], radius=3, fill=ALGODON)
    paso = ancho / (len(cuerdas) + 0.5)
    for i, (color, largo, nudos) in enumerate(cuerdas):
        cx = int(x0 + paso * (i + 0.6))
        d.rounded_rectangle([cx - 3, y0 + 4, cx + 3, y0 + 4 + largo], radius=3, fill=color)
        for k in range(nudos):
            ny = y0 + 28 + k * 25
            d.ellipse([cx - 7, ny - 5, cx + 7, ny + 5], fill=MAIZ if color != MAIZ else ALGODON)
