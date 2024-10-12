
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import EN from './locales/en.json';
import AR from './locales/ar.json';

// Define the resources (translations)
const resources = {
  en: { translation: EN },
  ar: { translation: AR }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // react already safe from XSS
  },
});

export default i18n;