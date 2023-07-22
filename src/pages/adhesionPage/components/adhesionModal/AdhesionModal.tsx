import { Modal } from "@nextui-org/react";
import AdhesionModalHeader from "./adhesionModalHeader";
import AdhesionModalBody from "./adhesionModalBody";
import AdhesionModalFooter from "./adhesionModalFooter";

type adhesionModalType = {
  visible: boolean;
  closeHandler: () => void;
  pageType: string;
};

const AdhesionModal = ({
  visible,
  closeHandler,
  pageType,
}: adhesionModalType) => {
  return (
    <Modal
      blur
      width="600px"
      closeButton
      aria-labelledby="modal-title"
      open={visible}
      onClose={closeHandler}
    >
      <AdhesionModalHeader pageType={pageType} />
      <AdhesionModalBody pageType={pageType} />
      <AdhesionModalFooter pageType={pageType} closeHandler={closeHandler} />
    </Modal>
  );
};

export default AdhesionModal;
