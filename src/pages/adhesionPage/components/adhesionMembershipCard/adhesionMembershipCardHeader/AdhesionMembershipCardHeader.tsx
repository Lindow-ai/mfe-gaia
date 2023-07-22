import CardHeader from "../../../../../components/card/cardHeader";
import { useTranslation } from "react-i18next";

type adhesionMembershipCardHeader = {
  pageType: string;
  cssTitle?: {};
};

const AdhesionMembershipCardHeader = ({
  pageType,
  cssTitle,
}: adhesionMembershipCardHeader) => {
  const { t } = useTranslation();

  const itemsCardTitle: string[] = t(`${pageType}.card.cardHeader.title`, {
    returnObjects: true,
  });

  return <CardHeader title={itemsCardTitle[0]} cssTitle={cssTitle} />;
};

export default AdhesionMembershipCardHeader;
