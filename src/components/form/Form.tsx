import {
  Text,
  Input,
  Row,
  Checkbox,
} from "@nextui-org/react";
import { Password } from "../../assets/svg/Password";
import { Mail } from "../../assets/svg/Mail";

type formType = {
  pageType: string
}

const Form = ({ pageType }: formType) => {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexFlow: "column wrap",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <Input
          css={{ marginBottom: "$9" }}
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Matricule"
        />
        <Input
          css={{ marginBottom: "$9" }}
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Email"
          contentLeft={<Mail fill="currentColor" />}
        />
        <Input.Password
          css={{ marginBottom: "$9" }}
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Mot de passe"
          contentLeft={<Password fill="currentColor" />}
        />
        <Row justify="space-between">
          <Checkbox>
            <Text size={14}>Se souvenir</Text>
          </Checkbox>
          <Text size={14}>Mot de passe oublier ?</Text>
        </Row>
    </div>
  );
};

export default Form;
