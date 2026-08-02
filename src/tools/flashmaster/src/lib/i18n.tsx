/**
 * Lightweight i18n system for FlashMaster.
 * Uses React context + a flat key-value translation dictionary.
 */

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

import en from './translations/en';
import de from './translations/de';
import zh from './translations/zh';
import hi from './translations/hi';
import fr from './translations/fr';
import ar from './translations/ar';
import es from './translations/es';

export type Locale = 'en' | 'de' | 'zh' | 'hi' | 'fr' | 'ar' | 'es';

export interface LocaleInfo {
  code: Locale;
  label: string;
  nativeLabel: string;
  dir: 'ltr' | 'rtl';
}

export const LOCALES: LocaleInfo[] = [
  { code: 'en', label: 'English',   nativeLabel: 'English',   dir: 'ltr' },
  { code: 'de', label: 'German',    nativeLabel: 'Deutsch',   dir: 'ltr' },
  { code: 'zh', label: 'Mandarin',  nativeLabel: '中文',       dir: 'ltr' },
  { code: 'hi', label: 'Hindi',     nativeLabel: 'हिन्दी',     dir: 'ltr' },
  { code: 'fr', label: 'French',    nativeLabel: 'Français',  dir: 'ltr' },
  { code: 'ar', label: 'Arabic',    nativeLabel: 'العربية',    dir: 'rtl' },
  { code: 'es', label: 'Spanish',   nativeLabel: 'Español',   dir: 'ltr' },
];

type Dict = Record<string, string>;

const translations: Record<Locale, Dict> = { en, de, zh, hi, fr, ar, es };

// ── Storage ──

const LOCALE_KEY = 'flashmaster-locale';

export function getSavedLocale(): Locale {
  const saved = localStorage.getItem(LOCALE_KEY);
  if (saved && LOCALES.some(l => l.code === saved)) return saved as Locale;
  // Try to detect from browser
  const browserLang = navigator.language.slice(0, 2);
  const match = LOCALES.find(l => l.code === browserLang);
  return match ? match.code : 'de';
}

export function saveLocale(locale: Locale): void {
  localStorage.setItem(LOCALE_KEY, locale);
}

// ── Context ──

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
  dir: 'ltr' | 'rtl';
}

const I18nContext = createContext<I18nContextValue>({
  locale: 'en',
  setLocale: () => {},
  t: (key) => key,
  dir: 'ltr',
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getSavedLocale);

  const setLocale = useCallback((newLocale: Locale) => {
    saveLocale(newLocale);
    setLocaleState(newLocale);
    // Apply text direction
    const info = LOCALES.find(l => l.code === newLocale);
    document.documentElement.dir = info?.dir || 'ltr';
  }, []);

  const t = useCallback((key: string, vars?: Record<string, string | number>): string => {
    const dict = translations[locale];
    let text = dict[key];
    // Fallback to English
    if (text === undefined && locale !== 'en') {
      text = translations.en[key];
    }
    // Fallback to key itself
    if (text === undefined) return key;
    // Interpolate variables: {varName}
    if (vars) {
      for (const [k, v] of Object.entries(vars)) {
        text = text.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v));
      }
    }
    return text;
  }, [locale]);

  const dir = LOCALES.find(l => l.code === locale)?.dir || 'ltr';

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, dir }}>
      {children}
    </I18nContext.Provider>
  );
}

/** Hook to access translations */
export function useT() {
  const ctx = useContext(I18nContext);
  return ctx;
}
