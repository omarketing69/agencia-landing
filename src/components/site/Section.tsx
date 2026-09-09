import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className,
  align = "left",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <section id={id} className={cn("section-y relative", className)}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        {(eyebrow || title || intro) && (
          <Reveal>
            <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
              {eyebrow && <p className="eyebrow">{eyebrow}</p>}
              {title && (
                <h2 className="mt-4 text-3xl leading-[1.15] font-semibold text-balance sm:text-4xl">
                  {title}
                </h2>
              )}
              {intro && (
                <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {intro}
                </p>
              )}
            </div>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
