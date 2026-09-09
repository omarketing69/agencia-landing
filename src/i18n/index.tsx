import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { es } from "@/data/es";
import { en } from "@/data/en";
import type { Dictionary, Lang } from "./types";

const dictionaries: Record<Lang, Dictionary> = { es, en };

const STORAGE_KEY = "site-lang";

type I18nValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dictionary;
};

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "es" || stored === "en") {
      setLang(stored);
      return;
    }
    if (navigator.language?.toLowerCase().startsWith("en")) setLang("en");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const value = useMemo<I18nValue>(
    () => ({ lang, setLang, t: dictionaries[lang] }),
    [lang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n debe usarse dentro de I18nProvider");
  return ctx;
}

export type { Dictionary, Lang };
