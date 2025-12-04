/**
 * i18n utility for SignalForge
 * Handles language detection and translation loading
 */

// Import all translation files
import commonEn from '../locales/en/common.json';
import homeEn from '../locales/en/home.json';
import servicesEn from '../locales/en/services.json';
import aboutEn from '../locales/en/about.json';
import contactEn from '../locales/en/contact.json';

import commonRo from '../locales/ro/common.json';
import homeRo from '../locales/ro/home.json';
import servicesRo from '../locales/ro/services.json';
import aboutRo from '../locales/ro/about.json';
import contactRo from '../locales/ro/contact.json';

// Type definitions
export type Language = 'ro' | 'en';
export type PageType = 'home' | 'services' | 'about' | 'contact';

type CommonTranslations = typeof commonEn;
type HomeTranslations = typeof homeEn;
type ServicesTranslations = typeof servicesEn;
type AboutTranslations = typeof aboutEn;
type ContactTranslations = typeof contactEn;

type PageTranslations = {
  home: HomeTranslations;
  services: ServicesTranslations;
  about: AboutTranslations;
  contact: ContactTranslations;
};

type TranslationsResult<T extends PageType> = {
  common: CommonTranslations;
} & PageTranslations[T];

const translations = {
  en: {
    common: commonEn,
    home: homeEn,
    services: servicesEn,
    about: aboutEn,
    contact: contactEn
  },
  ro: {
    common: commonRo,
    home: homeRo,
    services: servicesRo,
    about: aboutRo,
    contact: contactRo
  }
} as const;

/**
 * Get language from URL pathname
 */
export function getLangFromParams(Astro: any): Language {
  return Astro.url.pathname.startsWith('/en') ? 'en' : 'ro';
}

/**
 * Load translations for a specific language and page
 */
export function loadTranslations<T extends PageType>(
  lang: Language,
  page: T
): TranslationsResult<T> {
  const langData = translations[lang] || translations['ro'];

  return {
    common: langData.common,
    ...langData[page]
  } as TranslationsResult<T>;
}

/**
 * Get translation value by key path
 */
export function t(translations: any, keyPath: string): string {
  const keys = keyPath.split('.');
  let value: any = translations;

  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      console.warn(`Translation key not found: ${keyPath}`);
      return keyPath;
    }
  }

  return value;
}

/**
 * Get alternate language path
 */
export function getAlternatePaths(currentLang: Language, currentPath: string) {
  const basePath = currentPath.replace(/^\/en/, '');

  return {
    ro: basePath || '/',
    en: `/en${basePath || ''}`
  };
}

/**
 * Get canonical page URL
 */
export function getPageUrl(lang: Language, path: string): string {
  const baseDomain = 'https://signalforge.ro';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  if (lang === 'en') {
    return `${baseDomain}/en${cleanPath}`;
  }

  return `${baseDomain}${cleanPath}`;
}
