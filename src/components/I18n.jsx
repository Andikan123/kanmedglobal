// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Language resources (you can expand this to more languages)
const resources = {
  en: {
    translation: {
      welcome: 'Welcome to our educational website!',
      home: 'Home',
      about: 'About',
      services: 'Services',
      contact: 'Contact',
      language: 'Language',
    },
  },
  fr: {
    translation: {
      welcome: 'Bienvenue sur notre site éducatif!',
      home: 'Accueil',
      about: 'À propos',
      services: 'Services',
      contact: 'Contact',
      language: 'Langue',
    },
  },
  // Add other languages here
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // React already escapes the values
  },
});

export default i18n;
