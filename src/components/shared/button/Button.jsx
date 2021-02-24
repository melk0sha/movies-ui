import React from "react";
import { bool, node, oneOf } from "prop-types";
import { StyledButton } from "components/shared/button/button.styled";
import { BUTTON_TYPE } from "consts";

const Button = ({ children, primary, size }) => {
  return (
    <StyledButton primary={primary} size={size}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: node.isRequired,
  primary: bool,
  size: oneOf([(BUTTON_TYPE.SMALL, BUTTON_TYPE.MEDIUM, BUTTON_TYPE.LARGE)])
};

Button.defaultProps = {
  primary: false,
  size: BUTTON_TYPE.MEDIUM
};

export { Button };
