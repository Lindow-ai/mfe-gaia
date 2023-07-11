import DropdownMenu from "../../components/dropdown";
import { CONNEXION } from "../../utils/pageType/pageType";

const ConnexionPage = () => {
  return (
    <div>
      <DropdownMenu pageType={CONNEXION} defaultValue="french" />
    </div>
  );
};

export default ConnexionPage;
