import { Col, Row, Spacer, Button, Modal, Checkbox } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

type adhesionModalFooterType = {
  pageType: string;
  closeHandler: () => void;
};

const AdhesionModalFooter = ({
  pageType,
  closeHandler,
}: adhesionModalFooterType) => {
  const { t } = useTranslation();

  return (
    <Modal.Footer>
      <Row gap={1}>
        <Col>
          <Checkbox color="success">
            {t(`${pageType}.modal.modalFooter.row.col.checkbox.text`)}
          </Checkbox>
        </Col>
      </Row>
      <Spacer y={1} />
      <Row gap={1}>
        <Col
          css={{
            position: "relative",
            display: "flex",
            flexFlow: "column wrap",
            alignItems: "center",
          }}
        >
          <Button color="warning" auto onPress={closeHandler}>
            {t(`${pageType}.modal.modalFooter.row.col.button.title`)}
          </Button>
        </Col>
      </Row>
    </Modal.Footer>
  );
};

export default AdhesionModalFooter;
