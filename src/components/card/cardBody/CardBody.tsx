import { Card } from "@nextui-org/react";

type cardBodyType = {
  children?: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
  cssBody?: any;
};

const CardBody = ({ children, cssBody }: cardBodyType) => {
  return <Card.Body css={cssBody}>{children}</Card.Body>;
};

export default CardBody;
