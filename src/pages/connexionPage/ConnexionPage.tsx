import Form from "../../components/form";
import {
  Image,
  Input,
  Row,
  Checkbox,
  Text,
  Card,
  Button,
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

const ConnexionPage = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);

  const navigate = useNavigate();

  const handleSubmit = () => navigate("/connexion/adhesion");

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

        <div
          style={{
            width: "100vw",
            position: "relative",
            display: "flex",
            flexFlow: "column wrap",
            alignItems: "center",
            marginTop: "30px",
          }}
        >
          <CardComponent>
            <CardHeader pageType={CONNEXION} />
            <CardBody>
              <Form>
                <Input
                  css={{ marginBottom: "$9" }}
                  clearable
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  placeholder={t(`${CONNEXION}.form.inputType.text`)}
                />
                <Input
                  css={{ marginBottom: "$9" }}
                  clearable
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  placeholder={t(`${CONNEXION}.form.inputType.textWithImage`)}
                  contentLeft={<Mail fill="currentColor" />}
                />
                <Input.Password
                  css={{ marginBottom: "$9" }}
                  clearable
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  placeholder={t(`${CONNEXION}.form.inputType.password`)}
                  contentLeft={<Password fill="currentColor" />}
                />
                <Row justify="space-between">
                  <Checkbox>
                    <Text size={14}>
                      {t(`${CONNEXION}.form.row.checkbox.text`)}
                    </Text>
                  </Checkbox>
                  <Text size={14}>{t(`${CONNEXION}.form.row.text`)}</Text>
                </Row>
              </Form>
            </CardBody>
            <CardFooter>
              <Button auto flat onPress={handleSubmit}>
                {t(`${CONNEXION}.card.button.title`)}
              </Button>
            </CardFooter>
          </CardComponent>
        </div>
      </div>
    </div>
  );
};

export default ConnexionPage;
