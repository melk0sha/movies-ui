import React from "react";
import { object, string } from "prop-types";
import { StyledInput } from "components/shared/input/input.styled";

const Input = ({ className, ...props }) => {
  return <StyledInput className={className} {...props} />;
};

Input.propTypes = {
  className: string,
  props: object
};

export { Input };
