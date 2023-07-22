import { Button } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

import CardFooter from "../../../../../components/card/cardFooter";

type adhesionMembershipDetailCardFooterType = {
  pageType: string;
  handleModal: () => void;
};

const AdhesionMembershipDetailCardFooter = ({
  pageType,
  handleModal,
}: adhesionMembershipDetailCardFooterType) => {
  const { t } = useTranslation();

  return (
    <CardFooter>
      <Button auto flat onPress={handleModal}>
        {t(`${pageType}.card.cardFooter.button.title`)}
      </Button>
    </CardFooter>
  );
};

export default AdhesionMembershipDetailCardFooter;
