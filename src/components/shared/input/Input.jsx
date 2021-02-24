import React from "react";
import { string } from "prop-types";
import { StyledInput } from "components/shared/input/input.styled";

const Input = ({ placeholder }) => {
  return <StyledInput placeholder={placeholder} />;
};

Input.propTypes = {
  placeholder: string
};

Input.defaultProps = {
  placeholder: ""
};

export { Input };
