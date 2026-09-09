import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n";
import { Reveal } from "./Reveal";

export function FinalCta() {
  const { t } = useI18n();

  return (
    <section className="section-y relative overflow-hidden">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="surface-card bg-hero-glow relative overflow-hidden px-6 py-16 text-center shadow-elev sm:px-14">
            <div
              className="bg-grid pointer-events-none absolute inset-0 opacity-60"
              aria-hidden="true"
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl leading-[1.15] font-semibold text-balance sm:text-4xl">
                {t.finalCta.title}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                {t.finalCta.body}
              </p>
              <Button variant="hero" size="xl" className="mt-9" asChild>
                <a href="#contacto">
                  {t.site.ctaPrimary}
                  <ArrowRight />
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
