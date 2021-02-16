import React from "react";
import PropTypes from "prop-types";
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
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
  size: PropTypes.oneOf[(BUTTON_TYPE.SMALL, BUTTON_TYPE.MEDIUM, BUTTON_TYPE.LARGE)]
};

export { Button };
