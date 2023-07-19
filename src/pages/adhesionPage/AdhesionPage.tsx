import { useEffect, useState } from "react";
import {
  Avatar,
  Col,
  Container,
  Input,
  Row,
  Spacer,
  Button,
  Modal,
  Text,
  Checkbox,
} from "@nextui-org/react";
import CardBody from "../../components/card/cardBody";
import CardComponent from "../../components/card";
import CardHeader from "../../components/card/cardHeader";
import { ADHESION } from "../../utils/pageType/pageType";
import { useTranslation } from "react-i18next";
import Form from "../../components/form";
import CardFooter from "../../components/card/cardFooter";
import Maps from "../../components/maps";
import SearchInput from "../../components/searchInput";
import { Location } from "react-iconly";

const AdhesionPage = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  });

  const [visible, setVisible] = useState(false);

  const handleModal = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };

  const itemsCardBody: string[] = t(`${ADHESION}.card.cardBody.items`, {
    returnObjects: true,
  });

  const itemsFormTexts: string[] = t(
    `${ADHESION}.card.cardBody.form.inputType.itemsText`,
    {
      returnObjects: true,
    }
  );

  const itemsFormSearch: string[] = t(
    `${ADHESION}.card.cardBody.form.inputType.search`,
    {
      returnObjects: true,
    }
  );

  const itemsCardTitle: string[] = t(`${ADHESION}.card.cardHeader.title`, {
    returnObjects: true,
  });

  const itemsModalBody: string[] = t(`${ADHESION}.modal.modalBody.items`, {
    returnObjects: true,
  });

  const cssTitle = { lineHeight: "$xs", marginLeft: "15px" };

  return (
    <Container>
      <Row gap={1}>
        <Col>
          <Avatar css={{ size: "$20" }} text="Joe" />
        </Col>
        <Col>
          <CardComponent>
            <CardHeader title={itemsCardTitle[0]} cssTitle={cssTitle} />
            <CardBody cssBody={{ py: "$2", marginLeft: "15px" }}>
              <ul>
                {itemsCardBody.map((item, i) => {
                  return <li key={i}>{item}:</li>;
                })}
              </ul>
            </CardBody>
          </CardComponent>
        </Col>
      </Row>
      <Spacer y={2} />
      <Row gap={1}>
        <Col>
          <CardComponent>
            <CardHeader title={itemsCardTitle[1]} cssTitle={cssTitle} />
            <CardBody cssBody={{ py: "$2" }}>
              <Form>
                <div>
                  {itemsFormTexts.map((item, i) => {
                    return (
                      <Input
                        key={i}
                        css={{ marginBottom: "$9" }}
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder={item}
                      />
                    );
                  })}
                  {itemsFormSearch.map((item, i) => {
                    return (
                      <SearchInput
                        key={i}
                        search={item}
                        icon={<Location set="light" />}
                      />
                    );
                  })}
                </div>
              </Form>
            </CardBody>
            <CardFooter>
              <Button auto flat onPress={handleModal}>
                {t(`${ADHESION}.card.cardFooter.button.title`)}
              </Button>
            </CardFooter>
          </CardComponent>
        </Col>
      </Row>
      <Spacer y={2} />
      <Row gap={1}>
        <Col>
          <CardComponent>
            <CardHeader title={itemsCardTitle[2]} cssTitle={cssTitle} />
            <CardBody>
              <Maps />
            </CardBody>
          </CardComponent>
        </Col>
      </Row>
      <Modal
        blur
        width="600px"
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text b id="modal-title" size={18}>
            {t(`${ADHESION}.modal.modalHeader.title`)}
          </Text>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {itemsModalBody.map((item, i) => {
              return <li key={i}>{item}</li>;
            })}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Row gap={1}>
            <Col>
              <Checkbox color="success">
                {t(`${ADHESION}.modal.modalFooter.row.col.checkbox.text`)}
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
                {t(`${ADHESION}.modal.modalFooter.row.col.button.title`)}
              </Button>
            </Col>
          </Row>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AdhesionPage;
