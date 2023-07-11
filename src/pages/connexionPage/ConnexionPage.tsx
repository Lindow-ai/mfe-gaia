import DropdownMenu from "../../components/dropdown";
import { CONNEXION } from "../../utils/pageType/pageType";

const ConnexionPage = () => {
  return (
    <div>
      <DropdownMenu pageType={CONNEXION} />
    </div>
  );
};

export default ConnexionPage;
