import { routerType } from "../../interfaces/router.type";
import { ADHESION, CONNEXION } from "../../utils/pageType/pageType";
import AdhesionPage from "../adhesionPage";
import ConnexionPage from "../connexionPage";

const pageData: routerType[] = [
  {
    path: "/",
    element: <ConnexionPage />,
    title: CONNEXION,
  },
  {
    path: "connexion/adhesion",
    element: <AdhesionPage />,
    title: ADHESION,
  },
];

export default pageData;
