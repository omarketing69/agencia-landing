export type ProjectMeta = {
  id: string;
  tech: string[];
  /** URL absoluta o ruta de imagen. Si está vacío se muestra un marcador visual. */
  image?: string;
  projectUrl?: string;
  demoUrl?: string;
  /** Marcador para futuros proyectos aún sin contenido. */
  placeholder?: boolean;
};

/**
 * Portafolio (estructura). Los textos de cada proyecto están en src/data/es.ts y en.ts.
 */
export const projects: ProjectMeta[] = [
  { id: "whatsorder", tech: ["WhatsApp API", "React", "Node.js", "PostgreSQL", "IA"] },
  { id: "pass2one", tech: ["React", "QR", "PostgreSQL", "Cloud", "Webhooks"] },
  { id: "cielo", tech: ["IA", "Agentes", "APIs", "Python", "Cloud"] },
  { id: "nuevo-proyecto", tech: ["[TECNOLOGÍA]"], placeholder: true },
];
