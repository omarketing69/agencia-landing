import { ArrowDown } from "lucide-react";
import { useI18n } from "@/i18n";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const rowKeys = ["industry", "problem", "solution", "result"] as const;

export function CaseStudies() {
  const { t } = useI18n();

  return (
    <Section id="casos" eyebrow={t.cases.eyebrow} title={t.cases.title} intro={t.cases.intro}>
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {t.cases.items.map((item, i) => (
          <Reveal key={item.id} delay={i * 70}>
            <article className="surface-card flex h-full flex-col p-6">
              <div className="flex items-center justify-between gap-3">
                <p className="font-display text-lg font-semibold">{item.client}</p>
                <span className="rounded-md border border-border bg-surface px-2 py-0.5 font-mono text-[0.62rem] tracking-[0.12em] text-muted-foreground uppercase">
                  {t.cases.pending}
                </span>
              </div>

              <dl className="mt-5 space-y-3 text-sm">
                {rowKeys.map((key) => (
                  <div key={key}>
                    <dt className="font-mono text-[0.65rem] tracking-[0.14em] text-primary uppercase">
                      {t.cases.rows[key]}
                    </dt>
                    <dd className="mt-1 text-muted-foreground">{item[key]}</dd>
                  </div>
                ))}
                <div>
                  <dt className="font-mono text-[0.65rem] tracking-[0.14em] text-primary uppercase">
                    {t.cases.techLabel}
                  </dt>
                  <dd className="mt-1.5 flex flex-wrap gap-1.5">
                    {item.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border bg-surface/70 px-2 py-1 font-mono text-[0.68rem] text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>

              <div className="mt-6 space-y-2 border-t border-border pt-5">
                {[
                  { tag: t.cases.beforeLabel, value: item.before },
                  { tag: t.cases.afterLabel, value: item.after },
                ].map((stage, idx) => (
                  <div key={stage.tag}>
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-[0.65rem] tracking-[0.14em] text-muted-foreground uppercase">
                        {stage.tag}
                      </span>
                      <span className="text-sm">{stage.value}</span>
                    </div>
                    {idx === 0 && (
                      <ArrowDown className="my-1 ml-1 size-3.5 text-primary" aria-hidden="true" />
                    )}
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
