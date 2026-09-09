import { Workflow } from "lucide-react";
import { serviceIcons } from "@/data/services";
import { useI18n } from "@/i18n";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Services() {
  const { t } = useI18n();

  return (
    <Section
      id="servicios"
      eyebrow={t.services.eyebrow}
      title={t.services.title}
      intro={t.services.intro}
    >
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {t.services.items.map((service, i) => {
          const Icon = serviceIcons[service.id] ?? Workflow;
          return (
            <Reveal key={service.id} delay={i * 50}>
              <article className="surface-card group h-full p-6 transition-all hover:-translate-y-1 hover:border-primary/40">
                <span className="grid size-10 place-items-center rounded-lg border border-border-strong bg-background/50 transition-colors group-hover:border-primary/40">
                  <Icon className="size-[18px] text-primary" />
                </span>
                <h3 className="mt-5 text-base font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
