import React, { Component } from "react";
import { createPortal } from "react-dom";
import { bool, element, func } from "prop-types";
import { ModalContainer, ModalWrapper, ModalCloseIcon } from "components/shared/modal/modal.styled";

const modalParentElement = document.getElementById("root");

class Modal extends Component {
  static defaultProps = {
    show: false
  };

  render() {
    const { show, children, onClose } = this.props;

    return createPortal(
      <ModalContainer show={show}>
        <ModalWrapper show={show}>
          {children}
          <ModalCloseIcon onClick={onClose} />
        </ModalWrapper>
      </ModalContainer>,
      modalParentElement
    );
  }
}

Modal.propTypes = {
  show: bool,
  children: element,
  onClose: func
};

export { Modal };
