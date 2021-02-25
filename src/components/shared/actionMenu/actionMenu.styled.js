import styled from "styled-components";
import { baseColor_1, baseColor_4, baseColor_6, baseColor_8, transparentColor_3 } from "assets/styles/colors";

export const ActionMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ActionMenuCircleWrapper = styled.div`
  display: ${(props) => (props.hidden ? "none" : "flex")};
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

export const ActionMenuOptions = styled.ul`
  display: ${(props) => (props.hidden ? "none" : "flex")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  min-width: 50px;
  padding-top: 30px;
  border-radius: 5px;
  color: ${baseColor_8};
  background-color: ${baseColor_1};
`;

export const ActionMenuOption = styled.li`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 6px 15px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${baseColor_4};
  }

  &:active {
    background-color: ${baseColor_6};
  }
`;

export const Close = styled.span`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 15px;
  height: 15px;
  opacity: 0.3;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &::before,
  &::after {
    position: absolute;
    left: 6px;
    content: "";
    height: 15px;
    width: 2px;
    background-color: black;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;
