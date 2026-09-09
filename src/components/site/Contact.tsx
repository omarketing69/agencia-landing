import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createLeadSchema, submitLead, type Lead } from "@/lib/leads";
import { useI18n } from "@/i18n";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const employeeRanges = ["1-10", "11-50", "51-200", "201-500", "500+"];

const textFieldKeys = [
  "name",
  "company",
  "role",
  "email",
  "whatsapp",
  "country",
  "industry",
] as const;

export function Contact() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);
  const schema = useMemo(() => createLeadSchema(t.contact.errors), [t]);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Lead>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: Lead) => {
    await submitLead(values);
    setSent(true);
  };

  return (
    <Section
      id="contacto"
      eyebrow={t.contact.eyebrow}
      title={t.contact.title}
      intro={t.contact.intro}
    >
      <Reveal>
        <div className="surface-card mt-10 p-6 shadow-elev sm:p-9">
          {sent ? (
            <div className="flex flex-col items-center gap-4 py-14 text-center">
              <CheckCircle2 className="size-10 text-primary" />
              <h3 className="text-2xl font-semibold">{t.contact.successTitle}</h3>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                {t.contact.successBody}
              </p>
              <Button variant="quiet" onClick={() => setSent(false)}>
                {t.contact.successAgain}
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-5 sm:grid-cols-2">
              {textFieldKeys.map((key) => (
                <div key={key} className="space-y-2">
                  <Label htmlFor={key}>{t.contact.fields[key].label}</Label>
                  <Input
                    id={key}
                    type={key === "email" ? "email" : "text"}
                    placeholder={t.contact.fields[key].placeholder}
                    aria-invalid={!!errors[key]}
                    {...register(key)}
                  />
                  {errors[key] && (
                    <p className="text-xs text-destructive">{errors[key]?.message}</p>
                  )}
                </div>
              ))}

              <div className="space-y-2">
                <Label htmlFor="employees">{t.contact.employeesLabel}</Label>
                <select
                  id="employees"
                  defaultValue=""
                  aria-invalid={!!errors.employees}
                  {...register("employees")}
                  className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground transition-colors focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
                >
                  <option value="" disabled>
                    {t.contact.selectRange}
                  </option>
                  {employeeRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
                {errors.employees && (
                  <p className="text-xs text-destructive">{errors.employees.message}</p>
                )}
              </div>

              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="area">{t.contact.areaLabel}</Label>
                <select
                  id="area"
                  defaultValue=""
                  aria-invalid={!!errors.area}
                  {...register("area")}
                  className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground transition-colors focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
                >
                  <option value="" disabled>
                    {t.contact.selectArea}
                  </option>
                  {t.contact.areas.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
                {errors.area && <p className="text-xs text-destructive">{errors.area.message}</p>}
              </div>

              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="problem">{t.contact.problemLabel}</Label>
                <Textarea
                  id="problem"
                  rows={5}
                  placeholder={t.contact.problemPlaceholder}
                  aria-invalid={!!errors.problem}
                  {...register("problem")}
                />
                {errors.problem && (
                  <p className="text-xs text-destructive">{errors.problem.message}</p>
                )}
              </div>

              <div className="sm:col-span-2">
                <Button type="submit" variant="hero" size="xl" disabled={isSubmitting}>
                  {isSubmitting ? <Loader2 className="animate-spin" /> : <Send />}
                  {t.contact.submit}
                </Button>
                <p className="mt-3 text-xs text-muted-foreground">{t.contact.privacy}</p>
              </div>
            </form>
          )}
        </div>
      </Reveal>
    </Section>
  );
}
