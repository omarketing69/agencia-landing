import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n";
import { Reveal } from "./Reveal";
import { PipelineDiagram } from "./PipelineDiagram";

export function Hero() {
  const { t } = useI18n();

  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="bg-hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/60 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur">
              <span className="size-1.5 rounded-full bg-primary" />
              {t.hero.badge}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl leading-[1.08] font-semibold text-balance sm:text-5xl lg:text-6xl">
              {t.hero.titleStart} <span className="text-gradient">{t.hero.titleHighlight}</span>.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {t.hero.subtitle}
            </p>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-4 max-w-xl border-l-2 border-primary/50 pl-4 text-base text-muted-foreground">
              {t.hero.note}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button variant="hero" size="xl" asChild>
                <a href="#contacto">
                  {t.site.ctaPrimary}
                  <ArrowRight />
                </a>
              </Button>
              <Button variant="quiet" size="xl" asChild>
                <a href="#proceso">{t.hero.secondaryCta}</a>
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={260}>
          <PipelineDiagram />
        </Reveal>
      </div>
    </section>
  );
}
