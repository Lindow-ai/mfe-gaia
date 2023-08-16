import { Row, Col } from "@nextui-org/react";
import CardComponent from "../../../../components/card";
import ConnexionCardHeader from "./connexionCardHeader";
import ConnexionCardBody from "./connexionCardBody";
import ConnexionCardFooter from "./connexionCardFooter";
import { ApiPostDataProvider } from "../../../../context/ApiPostDataContext";
import { PostBodyData } from "../../../../interfaces/dataInterface/postBodyInterface.type";
import { useState } from "react";

type connexionCardType = {
  pageType: "connexion";
};

const ConnexionCard = ({ pageType }: connexionCardType) => {
  const initialUserState: PostBodyData[typeof pageType] = {
    email: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialUserState);

  return (
    <Row gap={1}>
      <Col
        css={{
          position: "relative",
          display: "flex",
          flexFlow: "column wrap",
          alignItems: "center",
        }}
      >
        <CardComponent css={{ p: "$6", mw: "400px" }}>
          <ConnexionCardHeader pageType={pageType} />
          <ConnexionCardBody
            setUserData={setUserData}
            userData={userData}
            pageType={pageType}
          />
          <ApiPostDataProvider>
            <ConnexionCardFooter userData={userData} pageType={pageType} />
          </ApiPostDataProvider>
        </CardComponent>
      </Col>
    </Row>
  );
};

export default ConnexionCard;
