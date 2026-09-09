import { useI18n } from "@/i18n";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Problem() {
  const { t } = useI18n();

  return (
    <Section id="problema" eyebrow={t.problem.eyebrow} title={t.problem.title}>
      <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {t.problem.items.map((problem, i) => (
          <Reveal key={problem} delay={i * 60}>
            <div className="surface-card h-full p-5 transition-colors hover:border-border-strong">
              <span className="font-mono text-[0.7rem] text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 text-sm leading-relaxed">{problem}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <p className="mt-12 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {t.problem.closing}
        </p>
      </Reveal>
    </Section>
  );
}
