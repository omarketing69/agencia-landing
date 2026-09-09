/**
 * Configuración global editable del sitio (no traducible).
 * Los textos están en src/data/es.ts y src/data/en.ts.
 */
export const site = {
  brand: "[NOMBRE DE LA EMPRESA]",
  brandShort: "[EMPRESA]",
  whatsapp: {
    // Reemplazar por el número real en formato internacional sin signos.
    number: "0000000000",
  },
  email: "contacto@[empresa].com",
} as const;

/** Enlace de WhatsApp con el mensaje en el idioma activo. */
export function whatsappUrlFor(message: string) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
