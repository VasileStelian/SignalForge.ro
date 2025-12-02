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
};

/**
 * Get language from URL pathname
 * @param {object} Astro - Astro global object
 * @returns {string} - Language code (ro or en)
 */
export function getLangFromParams(Astro) {
  return Astro.url.pathname.startsWith('/en') ? 'en' : 'ro';
}

/**
 * Load translations for a specific language and page
 * @param {string} lang - Language code
 * @param {string} page - Page name (home, services, about, contact)
 * @returns {object} - Combined translations object
 */
export function loadTranslations(lang, page) {
  const langData = translations[lang] || translations['ro'];

  return {
    common: langData.common,
    ...langData[page]
  };
}

/**
 * Get translation value by key path
 * @param {object} translations - Translations object
 * @param {string} keyPath - Dot notation key path (e.g., "hero.title")
 * @returns {string} - Translation value
 */
export function t(translations, keyPath) {
  const keys = keyPath.split('.');
  let value = translations;

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
 * @param {string} currentLang - Current language
 * @param {string} currentPath - Current path without lang prefix
 * @returns {object} - Object with ro and en paths
 */
export function getAlternatePaths(currentLang, currentPath) {
  const basePath = currentPath.replace(/^\/en/, '');

  return {
    ro: basePath || '/',
    en: `/en${basePath || ''}`
  };
}
