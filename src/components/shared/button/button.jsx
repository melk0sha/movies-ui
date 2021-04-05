import React from "react";
import { bool, func, node, oneOf } from "prop-types";
import { BUTTON_SIZE } from "consts";
import { StyledButton } from "components/shared/button/button.styled";

const Button = ({ children, primary = false, rounded = false, size = BUTTON_SIZE.sm, onClick, ...props }) => (
  <StyledButton primary={primary} rounded={rounded} size={size} onClick={onClick} {...props}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  children: node.isRequired,
  primary: bool,
  rounded: bool,
  size: oneOf([BUTTON_SIZE.xs, BUTTON_SIZE.sm, BUTTON_SIZE.md, BUTTON_SIZE.lg]),
  onClick: func
};

export default Button;
