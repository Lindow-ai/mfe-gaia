import { labelsType } from "../../interfaces/label.type";

export const Labels: labelsType = {
  connexion: {
    languages: {
      french: {
        dropdown: {
          title: "Language",
          items: [
            {
              key: "french",
              item: "Français",
            },
            {
              key: "english",
              item: "Anglais",
            },
          ],
        },
        form: {
          inputs: [
            {
              placeholder: "Matricule",
            },
            {
              placeholder: "Login",
            },
            {
              placeholder: "Mot de passe",
            },
          ],
          button: {
            title: "Connexion",
          },
        },
      },
      english: {
        dropdown: {
          title: "Language",
          items: [
            {
              key: "french",
              item: "French",
            },
            {
              key: "english",
              item: "English",
            },
          ],
        },
        form: {
          inputs: [
            {
              placeholder: "Code number",
            },
            {
              placeholder: "Login",
            },
            {
              placeholder: "Password",
            },
          ],
          button: {
            title: "Connection",
          },
        },
      },
    },
  },
};
