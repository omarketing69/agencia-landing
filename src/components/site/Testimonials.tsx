import { Quote, User } from "lucide-react";
import { useI18n } from "@/i18n";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Testimonials() {
  const { t } = useI18n();

  return (
    <Section id="testimonios" eyebrow={t.testimonials.eyebrow} title={t.testimonials.title}>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {t.testimonials.items.map((item, i) => (
          <Reveal key={item.id} delay={i * 70}>
            <figure className="surface-card flex h-full flex-col p-6">
              <Quote className="size-5 text-primary" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {item.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="grid size-10 place-items-center rounded-full border border-border-strong bg-surface">
                  <User className="size-4 text-muted-foreground" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{item.name}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    {item.role} · {item.company}
                  </p>
                </div>
                <span className="ml-auto rounded-md border border-border px-2 py-1 font-mono text-[0.6rem] text-muted-foreground">
                  {t.testimonials.logoPlaceholder}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
