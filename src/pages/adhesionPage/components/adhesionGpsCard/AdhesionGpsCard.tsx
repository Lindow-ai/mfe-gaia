import CardComponent from "../../../../components/card";
import AdhesionGpsCardHeader from "./adhesionGpsCardHeader";
import AdhesionGpsCardBody from "./adhesionGpsCardBody";

type AdhesionGpsCardType = {
  pageType: string;
  cssTitle?: {};
};

const AdhesionGpsCard = ({ pageType, cssTitle }: AdhesionGpsCardType) => {
  return (
    <CardComponent>
      <AdhesionGpsCardHeader pageType={pageType} cssTitle={cssTitle} />
      <AdhesionGpsCardBody />
    </CardComponent>
  );
};

export default AdhesionGpsCard;
