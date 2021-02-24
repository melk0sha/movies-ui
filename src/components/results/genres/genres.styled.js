import styled from "styled-components";
import { baseColor_1, baseColor_5 } from "assets/styles/colors";

export const GenresWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Genre = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 50px;
  height: 50px;
  padding: 20px;
  text-transform: uppercase;
  color: ${baseColor_1};
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${baseColor_5};
  }
`;
