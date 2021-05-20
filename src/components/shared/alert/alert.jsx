import React from "react";
import { bool, func } from "prop-types";
import Button from "components/shared/button";
import { AlertContainer, AlertWrapper, AlertText, StyledButton } from "components/shared/alert/alert.styled";

const ERROR_MESSAGE = "Oops! Something went wrong.";
const SUCCESS_MESSAGE = "Operation completed successfully.";

const Alert = ({ show, isError, onClose: handleClose }) => (
  <AlertContainer show={show}>
    <AlertWrapper>
      <AlertText>{isError ? ERROR_MESSAGE : SUCCESS_MESSAGE}</AlertText>
      <Button onClick={handleClose}>OK</Button>
    </AlertWrapper>
  </AlertContainer>
);

Alert.propTypes = {
  isError: bool,
  show: bool,
  onClose: func
};

export default Alert;
