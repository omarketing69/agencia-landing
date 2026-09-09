import { Check } from "lucide-react";
import { useI18n } from "@/i18n";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Solution() {
  const { t } = useI18n();

  return (
    <Section
      id="solucion"
      eyebrow={t.solution.eyebrow}
      title={t.solution.title}
      intro={t.solution.intro}
    >
      <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <ol className="grid gap-3 sm:grid-cols-2">
          {t.solution.steps.map((step, i) => (
            <Reveal key={step} delay={i * 50}>
              <li className="surface-card flex h-full items-center gap-3 p-4">
                <span className="grid size-7 shrink-0 place-items-center rounded-full border border-primary/40 bg-primary/10">
                  <Check className="size-3.5 text-primary" />
                </span>
                <span className="text-sm">
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>{" "}
                  {step}
                </span>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={150}>
          <div className="surface-card flex h-full flex-col justify-center p-8 shadow-elev">
            <p className="font-display text-2xl leading-snug font-semibold text-balance">
              {t.solution.cardTitle}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {t.solution.cardBody}
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
