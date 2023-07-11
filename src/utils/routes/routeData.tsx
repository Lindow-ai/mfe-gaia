import { routerType } from "../../interfaces/router.type";
import ConnexionPage from "../../pages/connexionPage";

export const routeData: routerType[] = [
  {
    path: "app/vigil",
    title: "Login",
    element: <ConnexionPage />,
  },
  // {
  //   path: "app/gaia",
  //   title: "Gaïa",
  //   users: "rlf",
  //   element:
  // },
];
