import React from "react";
import PropTypes from "prop-types";
import { StyledInput } from "components/shared/input/input.styled";

const Input = ({ placeholder }) => {
  return <StyledInput placeholder={placeholder} />;
};

Input.propTypes = {
  placeholder: PropTypes.string
};

export { Input };
