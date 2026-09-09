import { cn } from "@/lib/utils";

/** Marcador de logo profesional: nodo + señal. Reemplazable por el logo definitivo. */
export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "grid size-8 shrink-0 place-items-center rounded-lg border border-border-strong bg-surface",
        className,
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="size-5" fill="none">
        <path
          d="M4 17.5 9.2 9l3.4 5 2.3-3.4L20 17.5"
          stroke="currentColor"
          className="text-primary"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="9.2" cy="9" r="1.8" className="fill-primary" />
      </svg>
    </span>
  );
}
