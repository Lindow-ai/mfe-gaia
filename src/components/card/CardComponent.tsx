import { Card } from "@nextui-org/react";

type cardComponentType = {
  children?: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
  css?: any;
};

const CardComponent = ({ children, css }: cardComponentType) => {
  return <Card css={css}>{children}</Card>;
};

export default CardComponent;
