import Form from "../../components/form";
import { Image } from "@nextui-org/react";
import { CONNEXION } from "../../utils/pageType/pageType";
import CardComponent from "../../components/card";

const ConnexionPage = () => {
  return (
    <div>
      <div style={{ marginTop: "9vw" }}>
        <Image
          width={"29vw"}
          height={"9vw"}
          src="https://see.proxiad.com/app/themes/2021/static/media/logo-dark.9c35dfbd.png"
          alt="Default Image"
          objectFit="cover"
        />
        <CardComponent pageType={CONNEXION}>
          <Form pageType={CONNEXION} />
        </CardComponent>
      </div>
    </div>
  );
};

export default ConnexionPage;
