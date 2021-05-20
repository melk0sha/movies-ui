import styled from "styled-components";

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-top: -70px;
  padding: 70px 10% 0;
  background-color: ${({ theme }) => theme.colors.vinous.light};
`;

export const NotFoundTitle = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: 8rem;
  padding: 10px;
`;

export const NotFoundSpan = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  padding: 5px;
`;
