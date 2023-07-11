import { BrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import ConnexionPage from "./pages/connexionPage";

export default function Root(props) {
  return (
    <BrowserRouter>
      <NextUIProvider>
        <ConnexionPage />
      </NextUIProvider>
    </BrowserRouter>
  );
}
