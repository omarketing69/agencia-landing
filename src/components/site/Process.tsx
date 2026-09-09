import { useI18n } from "@/i18n";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Process() {
  const { t } = useI18n();

  return (
    <Section
      id="proceso"
      eyebrow={t.process.eyebrow}
      title={t.process.title}
      intro={t.process.intro}
    >
      <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {t.process.phases.map((phase, i) => (
          <Reveal key={phase.step} delay={i * 60}>
            <div className="group relative h-full bg-card p-7 transition-colors hover:bg-surface">
              <span className="font-mono text-xs text-primary">{phase.step}</span>
              <h3 className="mt-4 text-lg font-semibold">{phase.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {phase.description}
              </p>
              <span
                className="absolute inset-x-0 bottom-0 h-px scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                style={{ background: "var(--gradient-signal)" }}
                aria-hidden="true"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
