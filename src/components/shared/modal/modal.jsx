import React, { Component } from "react";
import { createPortal } from "react-dom";
import { bool, element, func } from "prop-types";
import { ModalWrapper, ModalCloseIcon } from "components/shared/modal/modal.styled";

const modalParentElement = document.getElementById("root");

class Modal extends Component {
  static defaultProps = {};

  render() {
    const { show, children, onClose } = this.props;

    return createPortal(
      <ModalWrapper show={show}>
        {children}
        <ModalCloseIcon onClick={onClose} />
      </ModalWrapper>,
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
