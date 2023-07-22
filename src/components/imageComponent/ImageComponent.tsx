import { Image, Row, Col } from "@nextui-org/react";

type imageComponentType = {
  src: string;
};

const ImageComponent = ({ src }: imageComponentType) => {
  return (
    <Row gap={1}>
      <Col>
        <Image
          width={"29vw"}
          height={"9vw"}
          src={src}
          alt="Default Image"
          objectFit="cover"
        />
      </Col>
    </Row>
  );
};

export default ImageComponent;
