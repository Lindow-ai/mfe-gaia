import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CardFooter from "../../../../../components/card/cardFooter";
import { useApiPostDataContext } from "../../../../../hook/useApiPostDataContext";
import { PostBodyData } from "../../../../../interfaces/dataInterface/postBodyInterface.type";

type connxionCardFooter = {
  pageType: string;
};

const ConnexionCardFooter = ({ pageType }: connxionCardFooter) => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const { isLoading, error, successMessage, postApiData } =
    useApiPostDataContext();

  const handleSubmit = () => {
    const dataToSend: PostBodyData = {
      data: {
        email: "test@gmail.com",
        password: "test",
      },
    };
    postApiData(pageType, dataToSend);
    // navigate("/connexion/adhesion");
  };

  return (
    <CardFooter>
      <Button auto flat onPress={handleSubmit}>
        {t(`${pageType}.card.cardFooter.button.title`)}
      </Button>
    </CardFooter>
  );
};

export default ConnexionCardFooter;
