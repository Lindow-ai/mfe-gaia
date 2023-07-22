import { Modal } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

type adhesionModalBody = {
  pageType: string;
};

const AdhesionModalBody = ({ pageType }: adhesionModalBody) => {
  const { t } = useTranslation();

  const itemsModalBody: string[] = t(`${pageType}.modal.modalBody.items`, {
    returnObjects: true,
  });

  return (
    <Modal.Body>
      <ul>
        {itemsModalBody.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </Modal.Body>
  );
};

export default AdhesionModalBody;
