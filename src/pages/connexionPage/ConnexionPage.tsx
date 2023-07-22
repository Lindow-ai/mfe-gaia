import { Container, Spacer } from "@nextui-org/react";
import { CONNEXION } from "../../utils/pageType/pageType";
import { useTranslation } from "react-i18next";
import ImageComponent from "../../components/imageComponent";
import ConnexionCard from "./components/connexionCard";

const ConnexionPage = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Spacer y={5} />
      <ImageComponent src={t(`${CONNEXION}.row.col.image`)} />
      <Spacer y={2} />
      <ConnexionCard pageType={CONNEXION} />
    </Container>
  );
};

export default ConnexionPage;
