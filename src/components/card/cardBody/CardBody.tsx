import { Card } from "@nextui-org/react";

type cardBodyType = {
  children?: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
};

const CardBody = ({ children }: cardBodyType) => {
  return <Card.Body css={{ py: "$2" }}>{children}</Card.Body>;
};

export default CardBody;
