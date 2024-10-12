
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import EN from './locales/en.json';
import AR from './locales/ar.json';


const savedLanguage = localStorage.getItem('language') || 'en';

const resources = {
  en: { translation: EN },
  ar: { translation: AR }
};

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage, 
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false
  }
});

export default i18n;