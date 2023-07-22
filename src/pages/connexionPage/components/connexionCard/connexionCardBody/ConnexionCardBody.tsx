import Form from "../../../../../components/form";
import { Password } from "../../../../../assets/svg/Password";
import { Mail } from "../../../../../assets/svg/Mail";
import CardBody from "../../../../../components/card/cardBody";
import { Input, Row, Checkbox, Text } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

type connexionCardBodyType = {
  pageType: string;
};

const ConnexionCardBody = ({ pageType }: connexionCardBodyType) => {
  const { t } = useTranslation();

  return (
    <CardBody cssBody={{ py: "$2" }}>
      <Form>
        <Input
          css={{ marginBottom: "$9" }}
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder={t(`${pageType}.card.cardBody.form.inputType.text`)}
        />
        <Input
          css={{ marginBottom: "$9" }}
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder={t(
            `${pageType}.card.cardBody.form.inputType.textWithImage`
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
          placeholder={t(`${pageType}.card.cardBody.form.inputType.password`)}
          contentLeft={<Password fill="currentColor" />}
        />
        <Row justify="space-between">
          <Checkbox>
            <Text size={14}>
              {t(`${pageType}.card.cardBody.form.row.checkbox.text`)}
            </Text>
          </Checkbox>
          <Text size={14}>{t(`${pageType}.card.cardBody.form.row.text`)}</Text>
        </Row>
      </Form>
    </CardBody>
  );
};

export default ConnexionCardBody;
