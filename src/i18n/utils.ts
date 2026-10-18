// Simple i18n utility for Astro
import es from '../../public/locales/es/translation.json';
import en from '../../public/locales/en/translation.json';

export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

const translations = {
  es,
  en,
};

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as keyof typeof translations;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof translations = defaultLang) {
  return function t(key: string) {
    const keys = key.split('.');
    let value: any = translations[lang];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value ?? key;
  };
}

export function getLocalePath(path: string, lang: string) {
  if (lang === defaultLang) return path;
  return `/${lang}${path}`;
}
