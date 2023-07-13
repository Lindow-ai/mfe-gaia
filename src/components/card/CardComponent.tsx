import { Card } from "@nextui-org/react";

type cardComponentType = {
  children?: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
};

const CardComponent = ({ children }: cardComponentType) => {
  return <Card css={{ p: "$6", mw: "400px" }}>{children}</Card>;
};

export default CardComponent;
