import Form from "../../components/form";
import {
  Image,
  Input,
  Row,
  Checkbox,
  Text,
  Button,
  Container,
  Col,
  Spacer,
} from "@nextui-org/react";
import { CONNEXION } from "../../utils/pageType/pageType";
import CardComponent from "../../components/card";
import { Password } from "../../assets/svg/Password";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Mail } from "../../assets/svg/Mail";
import CardHeader from "../../components/card/cardHeader";
import CardBody from "../../components/card/cardBody";
import CardFooter from "../../components/card/cardFooter";
import { useNavigate } from "react-router-dom";
import CardSubHeader from "../../components/card/cardSubHeader/CardSubHeader";

const ConnexionPage = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  });

  const navigate = useNavigate();

  const handleSubmit = () => navigate("/connexion/adhesion");

  return (
    <Container>
      <Spacer y={5} />
      <Row gap={1}>
        <Col>
          <Image
            width={"29vw"}
            height={"9vw"}
            src="https://see.proxiad.com/app/themes/2021/static/media/logo-dark.9c35dfbd.png"
            alt="Default Image"
            objectFit="cover"
          />
        </Col>
      </Row>
      <Spacer y={2} />
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
            <CardHeader
              css={{
                pl: "$6",
                position: "relative",
                display: "flex",
                flexFlow: "column wrap",
                alignItems: "center",
              }}
              cssTitle={{ lineHeight: "$xs" }}
              title={t(`${CONNEXION}.card.cardHeader.title`)}
            >
              <CardSubHeader pageType={CONNEXION} />
            </CardHeader>
            <CardBody cssBody={{ py: "$2" }}>
              <Form>
                <Input
                  css={{ marginBottom: "$9" }}
                  clearable
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  placeholder={t(
                    `${CONNEXION}.card.cardBody.form.inputType.text`
                  )}
                />
                <Input
                  css={{ marginBottom: "$9" }}
                  clearable
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  placeholder={t(
                    `${CONNEXION}.card.cardBody.form.inputType.textWithImage`
                  )}
                  contentLeft={<Mail fill="currentColor" />}
                />
                <Input.Password
                  css={{ marginBottom: "$9" }}
                  clearable
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  placeholder={t(
                    `${CONNEXION}.card.cardBody.form.inputType.password`
                  )}
                  contentLeft={<Password fill="currentColor" />}
                />
                <Row justify="space-between">
                  <Checkbox>
                    <Text size={14}>
                      {t(`${CONNEXION}.card.cardBody.form.row.checkbox.text`)}
                    </Text>
                  </Checkbox>
                  <Text size={14}>
                    {t(`${CONNEXION}.card.cardBody.form.row.text`)}
                  </Text>
                </Row>
              </Form>
            </CardBody>
            <CardFooter>
              <Button auto flat onPress={handleSubmit}>
                {t(`${CONNEXION}.card.cardFooter.button.title`)}
              </Button>
            </CardFooter>
          </CardComponent>
        </Col>
      </Row>
    </Container>
  );
};

export default ConnexionPage;
