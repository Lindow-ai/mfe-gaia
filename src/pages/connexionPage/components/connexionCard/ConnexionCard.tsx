import { Row, Col } from "@nextui-org/react";
import CardComponent from "../../../../components/card";
import ConnexionCardHeader from "./connexionCardHeader";
import ConnexionCardBody from "./connexionCardBody";
import ConnexionCardFooter from "./connexionCardFooter";
import { ApiPostDataProvider } from "../../../../context/ApiPostDataContext";

type connexionCardType = {
  pageType: string;
};

const ConnexionCard = ({ pageType }: connexionCardType) => {
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
          <ConnexionCardBody pageType={pageType} />
          <ApiPostDataProvider>
            <ConnexionCardFooter pageType={pageType} />
          </ApiPostDataProvider>
        </CardComponent>
      </Col>
    </Row>
  );
};

export default ConnexionCard;
