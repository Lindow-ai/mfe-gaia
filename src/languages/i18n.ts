import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    returnObjects: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          dropdownLanguage: {
            title: "Language",
            items: [
              {
                key: "fr",
                title: "French",
              },
              {
                key: "en",
                title: "English",
              },
            ],
          },
          connexion: {
            card: {
              title: "Connexion",
              button: {
                title: "Connexion",
              },
            },
            form: {
              inputType: {
                text: "Code number",
                textWithImage: "Login",
                password: "Password",
              },
              row: {
                checkbox: {
                  text: "Remember me",
                },
                text: "Forgot password ?",
              },
            },
          },
        },
      },
      fr: {
        translation: {
          dropdownLanguage: {
            title: "Language",
            items: [
              {
                key: "fr",
                title: "Français",
              },
              {
                key: "en",
                title: "Anglais",
              },
            ],
          },
          connexion: {
            card: {
              title: "Connection",
              button: {
                title: "Connection",
              },
            },
            form: {
              inputType: {
                text: "Matricule",
                textWithImage: "Login",
                password: "Password",
              },
              row: {
                checkbox: {
                  text: "Se souvenir",
                },
                text: "Mot de passe oublier ?",
              },
            },
          },
        },
      },
    },
  });

export default i18n;
