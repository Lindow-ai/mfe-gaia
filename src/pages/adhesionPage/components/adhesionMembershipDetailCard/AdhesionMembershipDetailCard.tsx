import CardComponent from "../../../../components/card";
import AdhesionMembershipCardDetailHeader from "./adhesionMembershipDetailCardHeader";
import AdhesionMembershipDetailCardBody from "./adhesionMembershipDetailCardBody";
import AdhesionMembershipDetailCardFooter from "./adhesionMembershipDetailCardFooter";

type AdhesionMembershipDetailCard = {
  pageType: string;
  cssTitle?: {};
  handleModal: () => void;
};

const AdhesionMembershipDetailCard = ({
  pageType,
  handleModal,
  cssTitle,
}: AdhesionMembershipDetailCard) => {
  return (
    <CardComponent>
      <AdhesionMembershipCardDetailHeader
        pageType={pageType}
        cssTitle={cssTitle}
      />
      <AdhesionMembershipDetailCardBody pageType={pageType} />
      <AdhesionMembershipDetailCardFooter
        pageType={pageType}
        handleModal={handleModal}
      />
    </CardComponent>
  );
};

export default AdhesionMembershipDetailCard;
