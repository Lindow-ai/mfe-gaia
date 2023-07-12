import DropdownMenu from "../../components/dropdown";
import Form from "../../components/form";
import { CONNEXION } from "../../utils/pageType/pageType";
import { Image } from "@nextui-org/react";

const ConnexionPage = () => {
  return (
    <div>
      <DropdownMenu pageType={CONNEXION} defaultValue="french" />
      <div style={{ marginTop: "9vw" }}>
        <Image
          width={"29vw"}
          height={"9vw"}
          src="https://see.proxiad.com/app/themes/2021/static/media/logo-dark.9c35dfbd.png"
          alt="Default Image"
          objectFit="cover"
        />
        <Form />
      </div>
    </div>
  );
};

export default ConnexionPage;
