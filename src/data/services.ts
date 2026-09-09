import {
  Bot,
  Boxes,
  Gauge,
  LayoutDashboard,
  Plug,
  Rocket,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";

/** Icono por servicio. Los títulos y descripciones están en src/data/es.ts y en.ts. */
export const serviceIcons: Record<string, LucideIcon> = {
  "automatizacion-ia": Workflow,
  "agentes-ia": Bot,
  "software-personalizado": Boxes,
  integraciones: Plug,
  dashboards: LayoutDashboard,
  digitalizacion: Gauge,
  prototipos: Rocket,
  "ai-transformation": Sparkles,
};
