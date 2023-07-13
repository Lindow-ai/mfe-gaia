import { BrowserRouter } from "react-router-dom";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import ConnexionPage from "./pages/connexionPage";
import { useDarkMode } from "usehooks-ts";
import Theme from "./components/theme";
import "./languages/i18n";
import { CONNEXION } from "./utils/pageType/pageType";
import DropdownLanguages from "./components/dropdownLanguages";

const lightTheme = createTheme({
  type: "light",
});

const darkTheme = createTheme({
  type: "dark",
});

export default function Root(props) {
  const { isDarkMode, toggle, enable, disable } = useDarkMode();

  return (
    <BrowserRouter>
      <p>Current theme: {isDarkMode ? "dark" : "light"}</p>
      <Theme isDarkMode={isDarkMode} toggle={toggle} />
      <DropdownLanguages />
      <NextUIProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <ConnexionPage />
      </NextUIProvider>
    </BrowserRouter>
  );
}
