import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

import en from './locales/en.json';
import fr from './locales/fr.json';
import nl from './locales/nl.json';

export type Locale = 'en' | 'fr' | 'nl';

const translations: Record<Locale, Record<string, any>> = { en, fr, nl };

type TranslationContext = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, params?: Record<string, string>) => string;
};

const LanguageContext = createContext<TranslationContext>({
  locale: 'en',
  setLocale: () => {},
  t: (key) => key,
});

function getNestedValue(obj: any, path: string): string | undefined {
  const keys = path.split('.');
  let current = obj;
  for (const key of keys) {
    if (current == null || typeof current !== 'object') return undefined;
    current = current[key];
  }
  return typeof current === 'string' ? current : undefined;
}

function detectLocale(): Locale {
  if (typeof window === 'undefined') return 'en';

  const stored = localStorage.getItem('portfolio-lang');
  if (stored === 'en' || stored === 'fr' || stored === 'nl') return stored;

  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('fr')) return 'fr';
  if (browserLang.startsWith('nl')) return 'nl';
  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    const detected = detectLocale();
    setLocaleState(detected);
    document.documentElement.lang = detected;
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('portfolio-lang', newLocale);
    document.documentElement.lang = newLocale;
  }, []);

  const t = useCallback((key: string, params?: Record<string, string>): string => {
    let value = getNestedValue(translations[locale], key);
    if (!value) {
      value = getNestedValue(translations.en, key);
    }
    if (!value) return key;

    if (params) {
      return value.replace(/\{(\w+)\}/g, (_, name) => params[name] ?? `{${name}}`);
    }
    return value;
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  return useContext(LanguageContext);
}
