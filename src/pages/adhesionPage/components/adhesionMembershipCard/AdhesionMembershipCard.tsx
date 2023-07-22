import CardComponent from "../../../../components/card";
import AdhesionMembershipCardHeader from "./adhesionMembershipCardHeader";
import AdhesionMembershipCardBody from "./adhesionMembershipCardBody";

type adhesionMemberShipCard = {
  pageType: string;
  cssTitle?: {};
};

const AdhesionMembershipCard = ({
  pageType,
  cssTitle,
}: adhesionMemberShipCard) => {
  return (
    <CardComponent>
      <AdhesionMembershipCardHeader pageType={pageType} cssTitle={cssTitle} />
      <AdhesionMembershipCardBody pageType={pageType} />
    </CardComponent>
  );
};

export default AdhesionMembershipCard;
