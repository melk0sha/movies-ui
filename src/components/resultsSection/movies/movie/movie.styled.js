import styled from "styled-components";
import { baseColor_1, baseColor_5 } from "assets/styles/colors";

export const MovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  padding: 25px;
  color: ${baseColor_1};

  &:hover {
    background-color: ${baseColor_5};
  }
`;

export const MovieImage = styled.img`
  height: 320px;
  cursor: pointer;
`;

export const MovieInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const MovieTitle = styled.h3`
  max-width: 165px;
  font-size: 1.6rem;
  color: ${baseColor_1};
`;

export const MovieYear = styled.span`
  font-size: 1rem;
  color: ${baseColor_1};
`;

export const MovieGenres = styled.span`
  max-width: 200px;
  margin-top: 10px;
  font-size: 1rem;
  color: ${baseColor_1};
`;
