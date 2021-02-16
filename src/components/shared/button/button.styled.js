import styled from "styled-components";
import { BUTTON_TYPE } from "consts";

const getHeightFromSizeProp = ({ size }) => {
  switch (size) {
    case BUTTON_TYPE.SMALL:
      return "30px";
    case BUTTON_TYPE.MEDIUM:
      return "40px";
    case BUTTON_TYPE.LARGE:
      return "50px";
  }
};

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => getHeightFromSizeProp(props)};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: ${(props) => (props.primary ? "#ffffff" : "#000000")};
  background-color: ${(props) => (props.primary ? "#000000" : "#ffffff")};
`;
