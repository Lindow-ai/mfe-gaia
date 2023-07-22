import CardHeader from "../../../../../components/card/cardHeader";
import { useTranslation } from "react-i18next";

type adhesionMembershipCardDetailHeader = {
  pageType: string;
  cssTitle?: {};
};

const AdhesionMembershipCardDetailHeader = ({
  pageType,
  cssTitle,
}: adhesionMembershipCardDetailHeader) => {
  const { t } = useTranslation();

  const itemsCardTitle: string[] = t(`${pageType}.card.cardHeader.title`, {
    returnObjects: true,
  });

  return <CardHeader title={itemsCardTitle[1]} cssTitle={cssTitle} />;
};

export default AdhesionMembershipCardDetailHeader;
