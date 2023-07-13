import { Text, Input, Row, Checkbox } from "@nextui-org/react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

type formType = {
  children?: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
};

const Form = ({ children }: formType) => {
  return (
    <div>
      {children}
      {/* {
        itemsInput.map((text: string, i) => {
          return (
            <Input 
            css={{ marginBottom: "$9" }}
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder={text}
            key={i} />
          )
        })
      } */}
      {/* <Row justify="space-between">
          <Checkbox>
            <Text size={14}>Se souvenir</Text>
          </Checkbox>
          <Text size={14}>Mot de passe oublier ?</Text>
        </Row> */}
    </div>
  );
};

export default Form;
