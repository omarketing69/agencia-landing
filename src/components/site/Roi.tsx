import { useMemo, useState } from "react";
import { Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useI18n } from "@/i18n";
import { calculateRoi, formatMoney } from "@/lib/roi";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const fieldKeys = ["employees", "hoursPerWeek", "costPerHour", "implementationCost"] as const;

export function Roi() {
  const { t } = useI18n();
  const [values, setValues] = useState({
    employees: 3,
    hoursPerWeek: 8,
    costPerHour: 12,
    implementationCost: 4000,
  });

  const result = useMemo(() => calculateRoi({ ...values, automationRate: 70 }), [values]);

  return (
    <Section id="roi" eyebrow={t.roi.eyebrow} title={t.roi.title} intro={t.roi.intro}>
      <div className="mt-12 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <ul className="grid h-full gap-2 sm:grid-cols-2 lg:grid-cols-1">
            {t.roi.outcomes.map((outcome) => (
              <li
                key={outcome}
                className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3"
              >
                <Check className="size-4 shrink-0 text-primary" />
                <span className="text-sm">{outcome}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <div className="surface-card p-6 shadow-elev sm:p-8">
            <p className="font-mono text-[0.68rem] tracking-[0.16em] text-primary uppercase">
              {t.roi.calcTitle}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">{t.roi.calcNote}</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {fieldKeys.map((key) => (
                <div key={key} className="space-y-2">
                  <Label htmlFor={key} className="text-xs text-muted-foreground">
                    {t.roi.fields[key].label}
                  </Label>
                  <div className="relative">
                    <Input
                      id={key}
                      type="number"
                      min={0}
                      value={values[key]}
                      onChange={(e) =>
                        setValues((v) => ({ ...v, [key]: Number(e.target.value) || 0 }))
                      }
                      className="pr-20"
                    />
                    <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center font-mono text-[0.65rem] text-muted-foreground">
                      {t.roi.fields[key].suffix}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <dl className="mt-7 grid gap-3 border-t border-border pt-6 sm:grid-cols-3">
              {[
                { label: t.roi.stats.hours, value: formatMoney(result.hoursSavedPerMonth) },
                {
                  label: t.roi.stats.annual,
                  value: `$${formatMoney(result.annualSavings)}`,
                },
                {
                  label: t.roi.stats.payback,
                  value:
                    result.paybackMonths === null
                      ? "—"
                      : `${result.paybackMonths.toFixed(1)} ${t.roi.stats.months}`,
                },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt className="text-xs text-muted-foreground">{stat.label}</dt>
                  <dd className="mt-1 font-display text-2xl font-semibold text-primary">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
