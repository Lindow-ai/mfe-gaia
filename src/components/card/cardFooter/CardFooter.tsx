import { Card } from "@nextui-org/react";

type cardFooter = {
  children?: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
};

const CardFooter = ({ children }: cardFooter) => {
  return <Card.Footer>{children}</Card.Footer>;
};

export default CardFooter;
