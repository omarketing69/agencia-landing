import { Building2, AlertTriangle, Cpu, Workflow, TrendingUp } from "lucide-react";
import { useI18n } from "@/i18n";

const icons = [Building2, AlertTriangle, Cpu, Workflow, TrendingUp];

/** Representación visual del recorrido: Empresa → Problema → IA + Software → Automatización → Resultados */
export function PipelineDiagram() {
  const { t } = useI18n();
  const nodes = t.pipeline.nodes;

  return (
    <div className="surface-card relative overflow-hidden p-6 shadow-elev sm:p-8">
      <div
        className="pointer-events-none absolute -top-24 -right-16 size-64 rounded-full opacity-40 blur-3xl"
        style={{ background: "var(--gradient-signal)" }}
        aria-hidden="true"
      />
      <div className="relative">
        <p className="font-mono text-[0.7rem] tracking-[0.18em] text-muted-foreground uppercase">
          {t.pipeline.label}
        </p>

        <ol className="mt-6 space-y-1">
          {nodes.map((node, i) => {
            const Icon = icons[i] ?? Workflow;
            return (
              <li key={node.label}>
                <div className="flex items-center gap-4 rounded-lg border border-transparent px-2 py-2.5 transition-colors hover:border-border hover:bg-surface/70">
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-border-strong bg-background/60">
                    <Icon className="size-[18px] text-primary" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium">{node.label}</p>
                    <p className="truncate text-xs text-muted-foreground">{node.detail}</p>
                  </div>
                  <span className="ml-auto font-mono text-[0.7rem] text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>
                {i < nodes.length - 1 && (
                  <div className="ml-7 h-5" aria-hidden="true">
                    <svg viewBox="0 0 2 20" className="h-5 w-[2px]" preserveAspectRatio="none">
                      <line
                        x1="1"
                        y1="0"
                        x2="1"
                        y2="20"
                        stroke="currentColor"
                        className="animate-flow text-primary"
                        strokeWidth="2"
                        strokeDasharray="4 6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
