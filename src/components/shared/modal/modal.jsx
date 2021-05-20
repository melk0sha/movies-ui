import React from "react";
import { createPortal } from "react-dom";
import { bool, element, func } from "prop-types";
import { ModalContainer, ModalWrapper, ModalCloseIcon } from "components/shared/modal/modal.styled";

const modalParentElement = document.getElementById("root");

const Modal = ({ show = false, children, onClose }) => {
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
