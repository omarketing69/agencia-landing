import { z } from "zod";

export type LeadErrorMessages = {
  name: string;
  company: string;
  role: string;
  email: string;
  whatsapp: string;
  country: string;
  industry: string;
  employees: string;
  area: string;
  problem: string;
};

/** Crea el esquema de validación con los mensajes del idioma activo. */
export function createLeadSchema(m: LeadErrorMessages) {
  return z.object({
    name: z.string().min(2, m.name),
    company: z.string().min(2, m.company),
    role: z.string().min(2, m.role),
    email: z.string().email(m.email),
    whatsapp: z.string().min(7, m.whatsapp),
    country: z.string().min(2, m.country),
    industry: z.string().min(2, m.industry),
    employees: z.string().min(1, m.employees),
    area: z.string().min(1, m.area),
    problem: z.string().min(10, m.problem),
  });
}

export type Lead = z.infer<ReturnType<typeof createLeadSchema>>;

/**
 * Punto único de envío de leads.
 * Hoy solo simula el envío. Aquí se conectará después el correo (Resend/Gmail),
 * WhatsApp, el CRM o la base de datos, sin tocar la interfaz.
 */
export async function submitLead(lead: Lead): Promise<{ ok: true }> {
  await new Promise((resolve) => setTimeout(resolve, 700));
  if (import.meta.env.DEV) {
    console.info("[lead] pendiente de conectar backend", lead);
  }
  return { ok: true };
}
