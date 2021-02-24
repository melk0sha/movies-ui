import styled from "styled-components";
import { baseColor_1, baseColor_6, baseColor_5 } from "assets/styles/colors";

export const GenresWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Genre = styled.span`
  position: relative;
  top: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 50px;
  height: 50px;
  padding: ${(props) => (props.active ? "20px" : "20px 20px 23px")};
  text-transform: uppercase;
  color: ${baseColor_1};
  font-size: 1rem;
  border-bottom: ${(props) => props.active && `3px solid ${baseColor_6}`};
  cursor: pointer;

  &:hover {
    background-color: ${baseColor_5};
  }
`;
