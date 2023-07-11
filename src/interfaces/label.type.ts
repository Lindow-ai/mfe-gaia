export interface labelsType {
  connexion: connexion;
}

export interface connexion {
  languages: languages;
}

export interface languages {
  french: language;
  english: language;
}

export interface language {
  dropdown: dropdown;
  form: form;
}

export interface dropdown {
  title: string;
  items: item[];
}

export interface item {
  key: number | string;
  item: string;
}

export interface form {
  inputs: input[];
  button: button;
}

export interface input {
  placeholder: string;
}

export interface button {
  title: string;
}
