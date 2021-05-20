import styled from "styled-components";

export const ErrorBoundaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20%;
  background-color: ${({ theme }) => theme.colors.vinous.original};
  color: ${({ theme }) => theme.colors.white};
`;

export const ErrorBoundaryTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

export const ErrorBoundarySpan = styled.span`
  padding: 10px;
  font-size: 1rem;
  text-align: center;
`;
