import { site, whatsappUrlFor } from "@/data/site";
import { useI18n } from "@/i18n";
import { Logo } from "./Logo";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <Logo />
              <span className="font-display text-base font-semibold">{site.brand}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {t.site.tagline}. {t.footer.about}
            </p>
          </div>

          <nav aria-label={t.footer.navLabel}>
            <p className="font-mono text-[0.65rem] tracking-[0.16em] text-muted-foreground uppercase">
              {t.footer.navTitle}
            </p>
            <ul className="mt-4 space-y-2.5">
              {t.site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-[0.65rem] tracking-[0.16em] text-muted-foreground uppercase">
              {t.footer.contactTitle}
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-foreground">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrlFor(t.site.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="#contacto" className="transition-colors hover:text-foreground">
                  {t.site.ctaPrimary}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.brand}. {t.footer.rights}
          </p>
          <p>{t.footer.note}</p>
        </div>
      </div>
    </footer>
  );
}
