import { useTranslation } from "react-i18next";

import CardHeader from "../../../../../components/card/cardHeader";

type adhesionGpsCardHeaderType = {
  pageType: string;
  cssTitle?: {};
};

const AdhesionGpsCardHeader = ({
  pageType,
  cssTitle,
}: adhesionGpsCardHeaderType) => {
  const { t } = useTranslation();

  const itemsCardTitle: string[] = t(`${pageType}.card.cardHeader.title`, {
    returnObjects: true,
  });

  return <CardHeader title={itemsCardTitle[2]} cssTitle={cssTitle} />;
};

export default AdhesionGpsCardHeader;
