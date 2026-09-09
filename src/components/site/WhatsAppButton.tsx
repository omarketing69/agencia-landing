import { MessageCircle } from "lucide-react";
import { whatsappUrlFor } from "@/data/site";
import { useI18n } from "@/i18n";

export function WhatsAppButton() {
  const { t } = useI18n();

  return (
    <a
      href={whatsappUrlFor(t.site.whatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsapp.aria}
      className="fixed right-4 bottom-4 z-50 inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/90 px-4 py-3 text-sm font-medium shadow-elev backdrop-blur transition-all hover:border-primary/60 hover:text-primary sm:right-6 sm:bottom-6"
    >
      <MessageCircle className="size-4 text-primary" />
      <span className="hidden sm:inline">{t.whatsapp.label}</span>
    </a>
  );
}
