import styled from "styled-components";
import { device } from "assets/styles/device";

export const ResultsSectionWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px 20px 50px;
  background-color: ${({ theme }) => theme.colors.vinous.original};
  box-shadow: 0px -1px 5px 0px ${({ theme }) => theme.colors.transparent.black_08};

  @media ${device.tablet} {
    padding: 20px 100px 50px;
  }
`;

export const ResultsSectionHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-bottom: 5px solid ${({ theme }) => theme.colors.vinous.dark};

  @media ${device.laptop} {
    justify-content: space-between;
  }
`;

export const MoviesFoundSpan = styled.span`
  display: flex;
  padding: 20px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const NoMovieFoundSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 150px 0;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.white};
`;
