import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import ko from './locales/ko.json';
import es from './locales/es.json';

const detectLanguage = async () => {
  try {
    const res = await fetch('https://ipapi.co/json/');
    const data = await res.json();
    if (data.country_code === "KR") return "ko";
    if (data.languages) {
      const lang = data.languages.split(',')[0].slice(0, 2);
      if (["ko", "en", "es"].includes(lang)) return lang;
    }
    return "en";
  } catch (e) {
    return "en";
  }
};

export const initI18n = async () => {
  const lng = await detectLanguage();
  await i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: en },
        ko: { translation: ko },
        es: { translation: es }
      },
      lng,
      fallbackLng: 'en',
      interpolation: { escapeValue: false }
    });
};

export default i18n;
