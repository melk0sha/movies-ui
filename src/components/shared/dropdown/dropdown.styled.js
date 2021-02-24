import styled from "styled-components";
import { baseColor_1, baseColor_2, baseColor_3, baseColor_5 } from "assets/styles/colors";

export const DropdownWrapper = styled.div`
  position: relative;
  display: flex;
`;

export const DropdownHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 20px;
  background-color: transparent;
  color: ${baseColor_1};
  text-transform: uppercase;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${baseColor_5};
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  margin-top: 50px;
  border: 2px solid ${baseColor_2};
  border-radius: 5px;
`;

export const ListItem = styled.li`
  padding: 20px;
  color: ${baseColor_1};
  background-color: ${baseColor_3};
  text-transform: uppercase;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${baseColor_5};
  }
`;
