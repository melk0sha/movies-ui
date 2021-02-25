import styled from "styled-components";
import { baseColor_1, baseColor_3, baseColor_5 } from "assets/styles/colors";

export const ResultsSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 100px 50px;
  background-color: ${baseColor_3};
`;

export const ResultsSectionHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-bottom: 5px solid ${baseColor_5};
`;

export const MoviesFoundSpan = styled.span`
  display: flex;
  padding: 20px;
  color: ${baseColor_1};
  font-size: 1rem;
`;

export const NoMovieFoundSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 150px 0;
  font-size: 2.5rem;
  color: ${baseColor_1};
`;
