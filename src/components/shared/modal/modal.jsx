import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { bool, element, func } from "prop-types";
import { ModalContainer, ModalWrapper, ModalCloseIcon } from "components/shared/modal/modal.styled";

const Modal = ({ show = false, children, onClose }) => {
  const [modalParentElement, setModalParentElement] = useState(null);

  useEffect(() => {
    const root = document.getElementById("root");

    setModalParentElement(root);
  }, []);

  return createPortal(
    <ModalContainer show={show}>
      <ModalWrapper show={show}>
        {children}
        <ModalCloseIcon onClick={onClose} />
      </ModalWrapper>
    </ModalContainer>,
    modalParentElement
  );
};

Modal.propTypes = {
  show: bool,
  children: element,
  onClose: func
};

export default Modal;
