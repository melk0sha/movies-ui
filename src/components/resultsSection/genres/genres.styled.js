import styled, { css } from "styled-components";

export const GenresWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Genre = styled.span`
  ${({ active, theme }) => css`
    position: relative;
    top: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 50px;
    height: 50px;
    padding: ${active ? "20px" : "20px 20px 23px"};
    text-transform: uppercase;
    color: ${theme.colors.white};
    font-size: 1rem;
    border-bottom: ${active && `3px solid ${theme.colors.beige.light}`};
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.vinous.dark};
    }
  `}
`;
