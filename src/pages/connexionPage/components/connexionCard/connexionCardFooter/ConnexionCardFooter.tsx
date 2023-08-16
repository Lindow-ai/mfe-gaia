import { Button, Loading } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CardFooter from "../../../../../components/card/cardFooter";
import { useApiPostDataContext } from "../../../../../hook/useApiPostDataContext";
import { PostBodyData } from "../../../../../interfaces/dataInterface/postBodyInterface.type";
import { useCallback } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { REGISTER } from "../../../../../utils/keyType/keyType";

type connxionCardFooter = {
  pageType: "connexion";
  userData: {
    email: string;
    password: string;
  };
};

const ConnexionCardFooter = ({ pageType, userData }: connxionCardFooter) => {
  const { t } = useTranslation();

  const { isLoading, postApiData } = useApiPostDataContext();

  const handleSubmit = useCallback(() => {
    const dataToSend: PostBodyData[typeof pageType] = userData;
    postApiData(pageType, REGISTER, dataToSend, "/connexion/adhesion");
  }, [userData, isLoading]);

  return (
    <CardFooter>
      {!isLoading ? (
        <Button auto flat onPress={handleSubmit}>
          {t(`${pageType}.card.cardFooter.button.title`)}
        </Button>
      ) : (
        <Button disabled auto bordered color="primary" css={{ px: "$13" }}>
          <Loading type="points-opacity" color="currentColor" size="sm" />
        </Button>
      )}
    </CardFooter>
  );
};

export default ConnexionCardFooter;
