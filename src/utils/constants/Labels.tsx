import { labelsType } from "../../interfaces/label.type";

export const Labels: labelsType = {
  connexion: {
    languages: {
      french: {
        dropdown: {
          title: "Language",
          items: [
            {
              key: 1,
              item: "Français",
            },
            {
              key: 2,
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
              key: 1,
              item: "French",
            },
            {
              key: 2,
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
