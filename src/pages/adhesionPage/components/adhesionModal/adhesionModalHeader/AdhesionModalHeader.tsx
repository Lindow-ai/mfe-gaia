import { Modal, Text } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

type adhesionModalHeaderType = {
  pageType: string;
};

const AdhesionModalHeader = ({ pageType }: adhesionModalHeaderType) => {
  const { t } = useTranslation();

  return (
    <Modal.Header>
      <Text b id="modal-title" size={18}>
        {t(`${pageType}.modal.modalHeader.title`)}
      </Text>
    </Modal.Header>
  );
};

export default AdhesionModalHeader;
