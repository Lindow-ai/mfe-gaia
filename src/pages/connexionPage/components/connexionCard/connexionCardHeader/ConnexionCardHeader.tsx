import CardHeader from "../../../../../components/card/cardHeader";
import CardSubHeader from "../../../../../components/card/cardSubHeader/CardSubHeader";
import { useTranslation } from "react-i18next";

type ConnexionCardHeader = {
  pageType: string;
};

const ConnexionCardHeader = ({ pageType }: ConnexionCardHeader) => {
  const { t } = useTranslation();

  return (
    <CardHeader
      css={{
        pl: "$6",
        position: "relative",
        display: "flex",
        flexFlow: "column wrap",
        alignItems: "center",
      }}
      cssTitle={{ lineHeight: "$xs" }}
      title={t(`${pageType}.card.cardHeader.title`)}
    >
      <CardSubHeader pageType={pageType} />
    </CardHeader>
  );
};

export default ConnexionCardHeader;
