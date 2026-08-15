from PIL import Image, ImageDraw, ImageFont, ImageFilter

W, H = 1200, 630
img = Image.new("RGB", (W, H), (10, 15, 28))  # #0a0f1c
d = ImageDraw.Draw(img, "RGBA")

# --- soft brand glows (red top-right, amber bottom-left) on a blur layer ---
glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gd = ImageDraw.Draw(glow)
gd.ellipse([W - 520, -260, W + 240, 500], fill=(217, 16, 35, 120))     # red
gd.ellipse([-300, H - 420, 460, H + 260], fill=(232, 163, 23, 90))     # amber
gd.ellipse([300, -200, 900, 260], fill=(59, 130, 246, 45))            # subtle blue
glow = glow.filter(ImageFilter.GaussianBlur(150))
img = Image.alpha_composite(img.convert("RGBA"), glow).convert("RGB")
d = ImageDraw.Draw(img, "RGBA")

def font(path, size):
    return ImageFont.truetype(path, size)

BOLD = "C:/Windows/Fonts/segoeuib.ttf"
SEMI = "C:/Windows/Fonts/seguisb.ttf"
REG = "C:/Windows/Fonts/segoeui.ttf"

# --- brand wordmark ---
# El punto rojo se coloca a partir del ancho medido del nombre, no en una
# coordenada fija. Estaba clavado en x=210, que era la medida de "Bitwise": con
# la marca nueva —más ancha, por las mayúsculas y el guion— el punto caía encima
# de la última letra. Medido, cualquier cambio de nombre lo recoloca solo.
marca = "BIT-ONE"
mf = font(BOLD, 46)
d.text((72, 66), marca, font=mf, fill=(255, 255, 255))
mb = d.textbbox((72, 66), marca, font=mf)
d.ellipse([mb[2] + 8, 78, mb[2] + 30, 100], fill=(217, 16, 35))

# eyebrow pill
eb = "HECHO EN PERÚ"
ebf = font(SEMI, 22)
bb = d.textbbox((0, 0), eb, font=ebf)
pw, ph = bb[2] - bb[0], bb[3] - bb[1]
d.rounded_rectangle([72, 200, 72 + pw + 44, 200 + ph + 26], radius=100,
                    fill=(217, 16, 35, 40), outline=(217, 16, 35, 120), width=2)
d.text((72 + 22, 200 + 13), eb, font=ebf, fill=(252, 165, 176))

# headline
hf = font(BOLD, 76)
d.text((72, 270), "Páginas web para", font=hf, fill=(255, 255, 255))
# second line with accent word gradient-ish (amber)
d.text((72, 356), "tu ", font=hf, fill=(255, 255, 255))
w_tu = d.textbbox((72, 356), "tu ", font=hf)[2]
d.text((w_tu, 356), "negocio.", font=hf, fill=(232, 163, 23))

# subtitle
# El precio tiene que ser el mismo piso que anuncia todo el sitio (PRECIO_PISO
# en src/data/site.ts). Decía "desde S/499", que no existe en ninguna otra
# pantalla: era la cifra que veía quien recibía el enlace por WhatsApp, justo
# antes de entrar y encontrarse con S/1,500.
sf = font(REG, 34)
d.text((72, 470), "MYPEs y pymes  -  desde S/1,500  -  factura SUNAT", font=sf, fill=(148, 163, 184))

# domain bottom-right
df = font(SEMI, 30)
dom = "bitwise.pe"
db = d.textbbox((0, 0), dom, font=df)
d.text((W - 72 - (db[2] - db[0]), H - 72 - (db[3] - db[1])), dom, font=df, fill=(226, 232, 240))

img.save("public/og-default.jpg", quality=88, optimize=True, progressive=True)
print("OG saved:", img.size)
