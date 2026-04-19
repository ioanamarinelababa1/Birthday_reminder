import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          title: "Birthday Reminder",
          subtitle: "Manage birthdays and never miss a wish!",
          add_btn: "Add to list",
          placeholder_name: "Person's name...",
          days_left: "⏳ {{count}} days left",
          today: "🌟 It's their birthday today!",
          no_people: "The list is empty. Add someone!",
        }
      },
      ro: {
        translation: {
          title: "Birthday Reminder",
          subtitle: "Gestionează zilele de naștere și nu uita urările!",
          add_btn: "Adaugă în listă",
          placeholder_name: "Numele persoanei...",
          days_left: "⏳ Mai sunt {{count}} zile",
          today: "🌟 Azi e ziua lor!",
          no_people: "Lista este goală. Adaugă pe cineva!",
        }
      }
    },
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18n;
