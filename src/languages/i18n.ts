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
              cardHeader: {
                title: "Connection",
              },
              cardSubHeader: {
                subTitle: "proxiad.com",
              },
              cardBody: {
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
              cardFooter: {
                button: {
                  title: "Connexion",
                },
              },
            },
          },
          adhesion: {
            card: {
              cardHeader: {
                title: [
                  "Membership data reminder",
                  "Please enter your membership details",
                  "Please indicate the gps coordinates of your home address on the map :",
                ],
              },
              cardBody: {
                items: [
                  "Home address",
                  "Phone",
                  "Email",
                  "Preferred zone",
                  "Home GPS coordinates",
                ],
                form: {
                  inputType: {
                    itemsText: ["Home address", "Phone", "Email"],
                    search: ["Preferred zone", "Preferred stopping point"],
                  },
                },
              },
              cardFooter: {
                button: {
                  title: "Validate",
                },
              },
            },
            modal: {
              modalHeader: {
                title: "Service usage rule",
              },
              modalBody: {
                items: [
                  "Members are required to carry a badge proving their eligibility for the service at all times.",
                  "The minimum number of validants required for a shuttle is one.",
                  "...",
                ],
              },
              modalFooter: {
                row: {
                  col: {
                    checkbox: {
                      text: "I have read and understood",
                    },
                    button: {
                      title: "Validate",
                    },
                  },
                },
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
              cardHeader: {
                title: "Connexion",
              },
              cardSubHeader: {
                subTitle: "proxiad.com",
              },
              cardBody: {
                form: {
                  inputType: {
                    text: "Matricule",
                    textWithImage: "Login",
                    password: "Mot de passe",
                  },
                  row: {
                    checkbox: {
                      text: "Se souvenir",
                    },
                    text: "Mot de passe oublier ?",
                  },
                },
              },
              cardFooter: {
                button: {
                  title: "Connection",
                },
              },
            },
          },
          adhesion: {
            card: {
              cardHeader: {
                title: [
                  "Rappel des données d'adhésion",
                  "Veuillez saisir vos données d'adhésion",
                  "Veuillez indiquer sur la carte les coordonnées gps de l'adresse de votre domicile :",
                ],
              },
              cardBody: {
                items: [
                  "Adresse de domicile",
                  "Téléphone",
                  "Email",
                  "Zone préférée",
                  "Coordonées GPS du domicile",
                ],
                form: {
                  inputType: {
                    itemsText: ["Adresse du domicile", "Téléphone", "Email"],
                    search: ["Zone préférée", "Point d'arret préféré"],
                  },
                },
              },
              cardFooter: {
                button: {
                  title: "Valider",
                },
              },
            },
            modal: {
              modalHeader: {
                title: "Règle d'utilisation du service",
              },
              modalBody: {
                items: [
                  "Les adhérents sont tenus d'être toujours munis d'un badge justifiant leur éligibilité à la prestation.",
                  "Le nombre minimal de validant donnant lieu à une navette est d'un validant.",
                  "...",
                ],
              },
              modalFooter: {
                row: {
                  col: {
                    checkbox: {
                      text: "Je valide avoir pris connaissance",
                    },
                    button: {
                      title: "Valider",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  });

export default i18n;
