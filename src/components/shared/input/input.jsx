import React from "react";
import { object } from "prop-types";
import { StyledInput } from "components/shared/input/input.styled";

const Input = (props) => {
  return <StyledInput {...props} />;
};

Input.propTypes = {
  props: object
};

export { Input };
