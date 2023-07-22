import { Text } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

type cardSubHeaderType = {
  pageType: string;
};

const CardSubHeader = ({ pageType }: cardSubHeaderType) => {
  const { t } = useTranslation();

  return (
    <Text css={{ color: "$accents8" }}>
      {t(`${pageType}.card.cardSubHeader.subTitle`)}
    </Text>
  );
};

export default CardSubHeader;
