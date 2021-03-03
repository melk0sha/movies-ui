import React from "react";
import { bool, func, node, oneOf } from "prop-types";
import { StyledButton } from "components/shared/button/button.styled";
import { BUTTON_SIZE } from "consts";

const Button = ({ children, primary = false, size = BUTTON_SIZE.sm, onClick }) => {
  return (
    <StyledButton primary={primary} size={size} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: node.isRequired,
  primary: bool,
  size: oneOf([BUTTON_SIZE.xs, BUTTON_SIZE.sm, BUTTON_SIZE.md, BUTTON_SIZE.lg]),
  onClick: func
};

export { Button };
