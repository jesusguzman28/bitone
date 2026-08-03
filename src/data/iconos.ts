// Iconos usados en las listas de "qué incluye" y en las tarjetas de servicio.
//
// - Los de trazo son iconos genéricos (celular, tablero, carrito…) y heredan
//   el color del contenedor con currentColor.
// - `google` y `whatsapp` son los logotipos oficiales de esas marcas, con sus
//   colores propios: se marcan como `brand` para que la UI no los tiña.

export interface Icono {
  /** Contenido del <svg>. */
  d: string;
  /** true = logotipo de marca a todo color, no se recolorea. */
  brand?: boolean;
  /** viewBox propio (por defecto 0 0 24 24). */
  vb?: string;
}

export const iconos: Record<string, Icono> = {
  celular: { d: '<rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M11 18.5h2"/>' },
  tablero: { d: '<rect x="3" y="3" width="18" height="18" rx="2.5"/><path d="M3 9h18M9 21V9"/>' },
  www: { d: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18Z"/>' },
  correo: { d: '<rect x="2" y="4" width="20" height="16" rx="2.5"/><path d="m22 7-10 6L2 7"/>' },
  carrito: { d: '<circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2 3h3l2.4 11.2a2 2 0 0 0 2 1.6h8.4a2 2 0 0 0 2-1.6L21.5 7H6"/>' },
  tarjeta: { d: '<rect x="2" y="5" width="20" height="14" rx="2.5"/><path d="M2 10h20"/>' },
  documento: { d: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M8 13h8M8 17h5"/>' },
  grafico: { d: '<path d="M3 3v18h18"/><path d="M7 15l3.5-4 3 2.5L20 7"/>' },
  video: { d: '<rect x="2" y="4" width="20" height="16" rx="3"/><path d="m10 9 5 3-5 3V9Z"/>' },
  cajas: { d: '<rect x="3" y="8" width="8" height="7" rx="1.5"/><rect x="13" y="8" width="8" height="7" rx="1.5"/><rect x="8" y="16" width="8" height="6" rx="1.5"/><path d="M7 8V4h10v4"/>' },
  enchufe: { d: '<path d="M9 2v6M15 2v6"/><path d="M6 8h12v3a6 6 0 0 1-12 0V8Z"/><path d="M12 17v5"/>' },
  tuerca: { d: '<circle cx="12" cy="12" r="3.2"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 8.9 19a1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 8.4a1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V2a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/>' },
  soporte: { d: '<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="2" y="14" width="5" height="6" rx="2"/><rect x="17" y="14" width="5" height="6" rx="2"/><path d="M20 20v.5a2.5 2.5 0 0 1-2.5 2.5H13"/>' },
  codigo: { d: '<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>' },
  campana: { d: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 8-3 8h18s-3-1-3-8"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>' },
  llave: { d: '<circle cx="8" cy="15" r="4"/><path d="m10.8 12.2 8.2-8.2 3 3-2 2-2-2-2 2 2 2-3 3"/>' },
  tienda: { d: '<path d="M3 9 4.5 4h15L21 9"/><path d="M3 9h18v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9Z"/><path d="M9 21v-6h6v6"/>' },
  escudo: { d: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>' },

  // ---- Ampliación para las landings por rubro ----
  // El icono de cada punto se elige por lo que dice su título (ver iconoPara),
  // así que aquí hay que cubrir el vocabulario real de esos textos.
  calendario: { d: '<rect x="3" y="5" width="18" height="16" rx="2.5"/><path d="M3 10h18M8 3v4M16 3v4"/>' },
  reloj: { d: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>' },
  mapa: { d: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>' },
  estrella: { d: '<path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6-5.4-2.9-5.4 2.9 1-6L3.2 9.4l6.1-.9L12 3Z"/>' },
  chat: { d: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/><path d="M8 9h8M8 13h5"/>' },
  usuarios: { d: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/>' },
  buscar: { d: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>' },
  foto: { d: '<rect x="3" y="5" width="18" height="14" rx="2.5"/><circle cx="9" cy="11" r="2"/><path d="m21 17-5-5-4 4-2-2-4 4"/>' },
  moto: { d: '<circle cx="5.5" cy="17" r="3.5"/><circle cx="18.5" cy="17" r="3.5"/><path d="M5.5 17h6l4-8h3M12 9h4M9 9h3l3 8"/>' },
  etiqueta: { d: '<path d="M12 2H2v10l9.3 9.3a1 1 0 0 0 1.4 0l8.3-8.3a1 1 0 0 0 0-1.4L12 2Z"/><path d="M7 7h.01"/>' },
  campanaAlerta: { d: '<path d="M12 2v3M4.2 6.2 6.3 8.3M2 14h3M19 14h3M17.7 8.3l2.1-2.1"/><path d="M8 20a4 4 0 0 0 8 0"/><path d="M6 14a6 6 0 0 1 12 0v6H6Z"/>' },
  caja: { d: '<path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="m3.3 7 8.7 5 8.7-5M12 22V12"/>' },
  candado: { d: '<rect x="4" y="10" width="16" height="11" rx="2.5"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>' },
  libro: { d: '<path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v18H6.5A2.5 2.5 0 0 0 4 22.5Z"/><path d="M8 7h8M8 11h6"/>' },
  corazon: { d: '<path d="M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 1 0-7.1 7.1L12 21.5l8.8-8.8a5 5 0 0 0 0-7.1Z"/>' },
  llamada: { d: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/>' },

  // ---- Logotipos de marca (color propio) ----
  google: {
    brand: true,
    vb: '0 0 48 48',
    d: `<path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
      <path fill="#FF3D00" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
      <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
      <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>`,
  },
  whatsapp: {
    brand: true,
    d: '<path fill="#25D366" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413"/>',
  },
};

export const getIcono = (nombre: string): Icono | undefined => iconos[nombre];

// ---------------------------------------------------------------------------
// Elección de icono a partir del texto del punto.
//
// Las landings por rubro tienen ~150 puntos entre secciones y funcionalidades.
// Etiquetar cada uno a mano en los datos era ruido puro y quedaba desactualizado
// al primer cambio de copy, así que el icono se deduce de lo que dice el título.
// El orden importa: gana la primera coincidencia, y las reglas más específicas
// van antes que las genéricas ("carta digital" antes que "digital").
// ---------------------------------------------------------------------------
const REGLAS: readonly (readonly [RegExp, string])[] = [
  [/whatsapp/i, 'whatsapp'],
  [/google|buscador|seo|posicion/i, 'google'],
  [/urgencia|emergencia|alerta|aviso|recordatorio|notificaci/i, 'campanaAlerta'],
  [/cita|reserva|agenda|turno|horario|calendario|ciclo|fecha|check-?in|anticipaci|capacidad/i, 'calendario'],
  [/delivery|reparto|env[íi]o|zona|moto/i, 'moto'],
  [/pago|cobro|yape|plin|tarjeta|pasarela|checkout|caja|se[ñn]a/i, 'tarjeta'],
  [/factur|boleta|sunat|comprobante|convenio|seguro|formulario/i, 'documento'],
  [/b[úu]squeda|busca|filtro|equivalencia|gen[ée]rico|estado del|seguimiento/i, 'buscar'],
  // La carta o el menú es un impreso que se hojea: libro, no carrito.
  [/carta|men[úu]/i, 'libro'],
  [/cat[áa]logo|producto|stock|inventario|tienda|lista de compra|del d[íi]a/i, 'carrito'],
  [/foto|galer[íi]a|imagen/i, 'foto'],
  [/rese[ñn]a|opini[óo]n|testimoni|estrella|valoraci/i, 'estrella'],
  [/reporte|venta|estad[íi]stica|m[ée]trica|resultado|ingresante/i, 'grafico'],
  [/panel|administrable|autogesti|editar|portal/i, 'tablero'],
  [/ubicaci|mapa|direcci|sede|sucursal|local\b/i, 'mapa'],
  [/cliente|paciente|alumno|miembro|socio|equipo|profesional|entrenador|docente|plana|padre/i, 'usuarios'],
  [/llamada|tel[ée]fono|contacto directo/i, 'llamada'],
  [/seguridad|ssl|certificado|privacidad|dato/i, 'candado'],
  [/qr\b|m[óo]vil|celular|responsive/i, 'celular'],
  [/cotizad|cotizaci|presupuesto|precio/i, 'etiqueta'],
  [/paquete|pedido|orden|encargo/i, 'caja'],
  [/historia|ficha|registro|expediente|curso|clase|matr[íi]cula|inscripci|especialidad|servicio|tratamiento|indicaci|luna/i, 'libro'],
  // Una promoción es un precio especial: etiqueta. El corazón queda para lo
  // que sí es relación con el cliente (fidelidad, membresías).
  [/promoci|descuento|cup[óo]n|oferta|combo|campa[ñn]a|temporada/i, 'etiqueta'],
  [/fidelid|membres|suscripci/i, 'corazon'],
  [/garant[íi]a/i, 'escudo'],
  [/tiempo|plazo|24|horario de atenci/i, 'reloj'],
  [/correo|email|mail/i, 'correo'],
  [/web|sitio|p[áa]gina|dominio|hosting/i, 'www'],
  [/sistema|integraci|api|automatiza|ajuste/i, 'tuerca'],
];

/** Devuelve el nombre de icono que mejor describe un título. */
export function iconoPara(texto: string, respaldo = 'escudo'): string {
  for (const [patron, icono] of REGLAS) {
    if (patron.test(texto)) return icono;
  }
  return respaldo;
}
