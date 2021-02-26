import styled from "styled-components";

export const ResultsSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 100px 50px;
  background-color: ${({ theme }) => theme.colors.vinous.original};
`;

export const ResultsSectionHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-bottom: 5px solid ${({ theme }) => theme.colors.vinous.dark};
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
