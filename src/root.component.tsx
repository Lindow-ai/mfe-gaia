import { BrowserRouter } from "react-router-dom";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import { useDarkMode } from "usehooks-ts";
import Theme from "./components/theme";
import "./languages/i18n";
import DropdownLanguages from "./components/dropdownLanguages";
import Router from "./router";

const lightTheme = createTheme({
  type: "light",
});

const darkTheme = createTheme({
  type: "dark",
});

export default function Root(props) {
  const { isDarkMode, toggle, enable, disable } = useDarkMode();

  return (
    // <BrowserRouter>
    //   <p>Current theme: {isDarkMode ? "dark" : "light"}</p>
    //   <Theme isDarkMode={isDarkMode} toggle={toggle} />
    //   <DropdownLanguages />
    //   <NextUIProvider theme={isDarkMode ? darkTheme : lightTheme}>
    //     <ConnexionPage />
    //   </NextUIProvider>
    // </BrowserRouter>
    <NextUIProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <p>Current theme: {isDarkMode ? "dark" : "light"}</p>
      <Theme isDarkMode={isDarkMode} toggle={toggle} />
      <DropdownLanguages />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </NextUIProvider>
  );
}
