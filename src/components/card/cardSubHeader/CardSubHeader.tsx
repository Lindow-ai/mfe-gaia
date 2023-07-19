import { useEffect } from "react";
import { Text } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

type cardSubHeaderType = {
  pageType: string;
};

const CardSubHeader = ({ pageType }: cardSubHeaderType) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  });

  return (
    <Text css={{ color: "$accents8" }}>
      {t(`${pageType}.card.cardSubHeader.subTitle`)}
    </Text>
  );
};

export default CardSubHeader;
