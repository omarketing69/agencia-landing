import { Languages } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n, type Lang } from "@/i18n";

const options: { value: Lang; short: string }[] = [
  { value: "es", short: "ES" },
  { value: "en", short: "EN" },
];

/** Selector de idioma español / inglés. */
export function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang, t } = useI18n();

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-border bg-surface/70 p-1",
        className,
      )}
      role="group"
      aria-label={t.header.languageLabel}
    >
      <Languages className="ml-1.5 size-3.5 text-muted-foreground" aria-hidden="true" />
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => setLang(option.value)}
          aria-pressed={lang === option.value}
          className={cn(
            "rounded-full px-2.5 py-1 font-mono text-[0.68rem] tracking-[0.08em] transition-colors",
            lang === option.value
              ? "bg-primary/15 text-primary"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {option.short}
        </button>
      ))}
    </div>
  );
}
