import Form from "../../../../../components/form";
import { Password } from "../../../../../assets/svg/Password";
import { Mail } from "../../../../../assets/svg/Mail";
import CardBody from "../../../../../components/card/cardBody";
import { Input, Row, Checkbox, Text } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { Dispatch, SetStateAction, useCallback } from "react";

type connexionCardBodyType = {
  pageType: string;
  setUserData: Dispatch<
    SetStateAction<{
      email: string;
      password: string;
    }>
  >;
  userData: {
    email: string;
    password: string;
  };
};

const ConnexionCardBody = ({
  pageType,
  setUserData,
  userData,
}: connexionCardBodyType) => {
  const { t } = useTranslation();

  const updateUserDataHandler = useCallback(
    (type: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setUserData({ ...userData, [type]: event.target.value });
    },
    [userData]
  );

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
          placeholder={t(
            `${pageType}.card.cardBody.form.inputType.textWithImage`
          )}
          contentLeft={<Mail fill="currentColor" />}
          value={userData.email}
          onChange={updateUserDataHandler("email")}
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
          value={userData.password}
          onChange={updateUserDataHandler("password")}
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
