import { useState } from "react";
import { Avatar, Col, Container, Row, Spacer } from "@nextui-org/react";

import { ADHESION } from "../../utils/pageType/pageType";
import AdhesionMembershipCard from "./components/adhesionMembershipCard";
import AdhesionMembershipDetailCard from "./components/adhesionMembershipDetailCard";
import AdhesionGpsCard from "./components/adhesionGpsCard";
import AdhesionModal from "./components/adhesionModal";

const AdhesionPage = () => {
  const [visible, setVisible] = useState(false);

  const handleModal = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };

  const cssTitle = { lineHeight: "$xs", marginLeft: "15px" };

  return (
    <Container>
      <Row gap={1}>
        <Col>
          <Avatar css={{ size: "$20" }} text="Joe" />
        </Col>
        <Col>
          <AdhesionMembershipCard pageType={ADHESION} cssTitle={cssTitle} />
        </Col>
      </Row>
      <Spacer y={2} />
      <Row gap={1}>
        <Col>
          <AdhesionMembershipDetailCard
            handleModal={handleModal}
            pageType={ADHESION}
            cssTitle={cssTitle}
          />
        </Col>
      </Row>
      <Spacer y={2} />
      <Row gap={1}>
        <Col>
          <AdhesionGpsCard pageType={ADHESION} />
        </Col>
      </Row>
      <AdhesionModal
        closeHandler={closeHandler}
        pageType={ADHESION}
        visible={visible}
      />
    </Container>
  );
};

export default AdhesionPage;
