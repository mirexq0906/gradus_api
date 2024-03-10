import React from "react";
import { useSelector } from "react-redux";
import Modal from "./modal/Modal";

function ModalInfo({children}) {
  const activeModal = useSelector(state => state.modals.ModalInfo);
  return (
    <Modal modalClass={"modal-info"} active={activeModal.name}>
        {activeModal.desc}
    </Modal>
  );
}

export default ModalInfo;