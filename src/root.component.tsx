import { BrowserRouter } from "react-router-dom";
import { NextUIProvider, createTheme, Button, Spacer } from "@nextui-org/react";
import ConnexionPage from "./pages/connexionPage";
import { useDarkMode } from "usehooks-ts";
import { Moon } from "./assets/svg/Moon";
import { Sun } from "./assets/svg/Sun";

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
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "start-end",
          marginLeft: "25px",
        }}
      >
        <Button
          css={!isDarkMode && { background: "black" }}
          shadow
          size="xs"
          icon={
            isDarkMode ? (
              <Sun fill="currentColor" filled />
            ) : (
              <Moon fill="currentColor" filled />
            )
          }
          onPress={toggle}
        />
      </div>
      <NextUIProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <ConnexionPage />
      </NextUIProvider>
    </BrowserRouter>
  );
}
