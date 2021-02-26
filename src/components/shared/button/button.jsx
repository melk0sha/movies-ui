import React from "react";
import { bool, node, oneOf } from "prop-types";
import { StyledButton } from "components/shared/button/button.styled";
import { BUTTON_SIZE } from "consts";

const Button = ({ children, primary = false, size = BUTTON_SIZE.sm }) => {
  return (
    <StyledButton primary={primary} size={size}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: node.isRequired,
  primary: bool,
  size: oneOf([BUTTON_SIZE.xs, BUTTON_SIZE.sm, BUTTON_SIZE.md, BUTTON_SIZE.lg])
};

export { Button };
