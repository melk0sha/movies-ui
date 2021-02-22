import styled from "styled-components";
import {
  baseColor_1,
  baseColor_2,
  baseColor_3,
  baseColor_4,
  baseColor_5,
  baseColor_6,
  smallButtonSize,
  mediumButtonSize,
  largeButtonSize
} from "assets/styles/colors";
import { BUTTON_TYPE } from "consts";

const getHeightFromSizeProp = ({ size }) => {
  switch (size) {
    case BUTTON_TYPE.SMALL:
      return smallButtonSize;
    case BUTTON_TYPE.MEDIUM:
      return mediumButtonSize;
    case BUTTON_TYPE.LARGE:
      return largeButtonSize;
  }
};

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => getHeightFromSizeProp(props)};
  margin: 0 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: ${(props) => (props.primary ? baseColor_1 : baseColor_2)};
  background-color: ${(props) => (props.primary ? baseColor_2 : baseColor_1)};
  font-size: ${(props) => (props.size === BUTTON_TYPE.LARGE ? "1.2rem" : "1rem")};
  transition: background-color 0.2s ease-out;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.primary ? baseColor_3 : baseColor_4)};
  }

  &:active {
    background-color: ${(props) => (props.primary ? baseColor_5 : baseColor_6)};
  }
`;
