import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";
import { useI18n } from "@/i18n";
import { Logo } from "./Logo";
import { LanguageToggle } from "./LanguageToggle";

export function Header() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-xl" : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#inicio" className="flex items-center gap-2.5" aria-label={site.brand}>
          <Logo />
          <span className="font-display text-sm font-semibold tracking-tight sm:text-base">
            {site.brand}
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label={t.header.navLabel}>
          {t.site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <Button variant="hero" size="sm" className="hidden sm:inline-flex" asChild>
            <a href="#contacto">{t.site.ctaPrimary}</a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={open ? t.header.closeMenu : t.header.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex w-full max-w-6xl flex-col px-5 py-3 sm:px-8">
            {t.site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <Button variant="hero" className="mt-3" asChild>
              <a href="#contacto" onClick={() => setOpen(false)}>
                {t.site.ctaPrimary}
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
