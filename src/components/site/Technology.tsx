import { useI18n } from "@/i18n";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Technology() {
  const { t } = useI18n();

  return (
    <Section
      id="tecnologias"
      eyebrow={t.technology.eyebrow}
      title={t.technology.title}
      intro={t.technology.intro}
    >
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {t.technology.groups.map((group, i) => (
          <Reveal key={group.group} delay={i * 60}>
            <div className="surface-card h-full p-6">
              <p className="font-mono text-[0.68rem] tracking-[0.14em] text-primary uppercase">
                {group.group}
              </p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-surface/70 px-2.5 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
