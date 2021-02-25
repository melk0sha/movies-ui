import styled from "styled-components";
import { baseColor_8, transparentColor_3 } from "assets/styles/colors";

export const ActionMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: ${transparentColor_3};
  cursor: pointer;
`;

export const ActionMenuCircle = styled.div`
  width: 5px;
  height: 5px;
  margin: 1px;
  border-radius: 50%;
  background-color: ${baseColor_8};
`;
