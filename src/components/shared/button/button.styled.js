import styled, { css } from "styled-components";
import { BUTTON_SIZE } from "consts";

export const StyledButton = styled.button`
  ${({ size, theme, primary }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    ${theme.buttonSizes[BUTTON_SIZE[size]]}
    margin: 0 10px;
    border: none;
    border-radius: 5px;
    white-space: nowrap;
    ${primary ? theme.buttonColors.primary : theme.buttonColors.secondary}
    transition: background-color 0.2s ease-out;
    cursor: pointer;
  `}
`;
