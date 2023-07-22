import { Row, Col } from "@nextui-org/react";
import CardComponent from "../../../../components/card";
import ConnexionCardHeader from "./connexionCardHeader";
import ConnexionCardBody from "./connexionCardBody";
import ConnexionCardFooter from "./connexionCardFooter";

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
          <ConnexionCardFooter pageType={pageType} />
        </CardComponent>
      </Col>
    </Row>
  );
};

export default ConnexionCard;
