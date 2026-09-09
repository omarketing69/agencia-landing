import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useI18n } from "@/i18n";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Faq() {
  const { t } = useI18n();

  return (
    <Section id="faq" eyebrow={t.faq.eyebrow} title={t.faq.title}>
      <Reveal>
        <div className="mt-10 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {t.faq.items.map((faq, i) => (
              <AccordionItem key={faq.question} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-base font-medium hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Reveal>
    </Section>
  );
}
