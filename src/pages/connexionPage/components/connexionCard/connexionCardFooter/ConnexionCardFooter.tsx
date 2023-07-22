import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CardFooter from "../../../../../components/card/cardFooter";

type connxionCardFooter = {
  pageType: string;
};

const ConnexionCardFooter = ({ pageType }: connxionCardFooter) => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const handleSubmit = () => navigate("/connexion/adhesion");

  return (
    <CardFooter>
      <Button auto flat onPress={handleSubmit}>
        {t(`${pageType}.card.cardFooter.button.title`)}
      </Button>
    </CardFooter>
  );
};

export default ConnexionCardFooter;
