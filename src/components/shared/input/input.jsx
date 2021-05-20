import React from "react";
import { bool, object, string } from "prop-types";
import { StyledInput } from "components/shared/input/input.styled";

const Input = ({ className, primary = false, rounded = false, ...props }) => (
  <StyledInput className={className} primary={primary} rounded={rounded} {...props} />
);

Input.propTypes = {
  className: string,
  primary: bool,
  rounded: bool,
  props: object
};

export default Input;
