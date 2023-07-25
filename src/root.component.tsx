import { BrowserRouter } from "react-router-dom";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import { useDarkMode } from "usehooks-ts";
import Theme from "./components/theme";
import "./languages/i18n";
import DropdownLanguages from "./components/dropdownLanguages";
import Router from "./router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const querryClient = new QueryClient();

const lightTheme = createTheme({
  type: "light",
});

const darkTheme = createTheme({
  type: "dark",
});

export default function Root() {
  const { isDarkMode, toggle } = useDarkMode();

  return (
    <NextUIProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <p>Current theme: {isDarkMode ? "dark" : "light"}</p>
      <Theme isDarkMode={isDarkMode} toggle={toggle} />
      <DropdownLanguages />
      <QueryClientProvider client={querryClient}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </QueryClientProvider>
    </NextUIProvider>
  );
}
