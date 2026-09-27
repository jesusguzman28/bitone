# Genera public/og-default.jpg: la tarjeta que se ve al compartir cualquier
# página sin portada propia (WhatsApp, Facebook, LinkedIn).
#
#     python scripts/make-og.py
#
# Mismo lenguaje que la portada del sitio: el titular en Archivo ancho y el
# quipu con las cuerdas de los seis proyectos, cada una con tantos nudos como
# tecnologías usa (ver src/components/Hero.astro).
from quipu_img import (RAIZ, W, H, ALGODON, NIEBLA, lienzo, marca, titular,
                       quipu, fuente)

img, d = lienzo()
marca(d)
titular(d, "Fábrica de software en Perú, para empresas.", 72, 150, 760,
        tams=(66, 60, 54), max_lineas=3)

d.text((72, 420), "Sistemas a medida, apps móviles y mantenimiento.",
       font=fuente("texto", 27), fill=(201, 205, 224))

# ApuraY, Quipuy, MindBlock, JMF, AjosyCebollas, Liberalismo Comunal.
cuerdas = [
    ((0, 134, 234), 250, 8),
    ((91, 76, 240), 190, 5),
    ((249, 115, 22), 230, 7),
    ((42, 102, 192), 260, 8),
    ((22, 163, 74), 150, 3),
    ((231, 101, 62), 170, 3),
]
quipu(d, 850, 150, 290, cuerdas)

dom = "bitone.pe"
f = fuente("semi", 26)
bb = d.textbbox((0, 0), dom, font=f)
d.text((72, H - 64 - bb[3]), dom, font=f, fill=NIEBLA)

img.save(RAIZ / "public/og-default.jpg", quality=88, optimize=True, progressive=True)
print("OG guardada:", img.size)
