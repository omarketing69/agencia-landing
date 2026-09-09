import { User } from "lucide-react";
import { useI18n } from "@/i18n";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function About() {
  const { t } = useI18n();

  return (
    <Section id="nosotros" eyebrow={t.about.eyebrow}>
      <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <div className="surface-card bg-grid grid aspect-[4/5] place-items-center overflow-hidden">
            <div className="flex flex-col items-center gap-3 text-muted-foreground">
              <User className="size-8" />
              <span className="font-mono text-[0.65rem] tracking-[0.16em] uppercase">
                {t.about.photoPlaceholder}
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div>
            <h2 className="text-3xl leading-[1.15] font-semibold text-balance sm:text-4xl">
              {t.about.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{t.about.body}</p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {t.about.highlights.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-surface/70 px-3.5 py-1.5 text-sm text-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
