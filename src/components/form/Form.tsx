import { Text, Input, Row, Checkbox } from "@nextui-org/react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

type formType = {
  children?: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
};

const Form = ({ children }: formType) => {
  return <div>{children}</div>;
};

export default Form;
