import styled, { css } from "styled-components";
import { BUTTON_SIZE } from "consts";

export const StyledButton = styled.button`
  ${({ size, theme, primary, rounded }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    ${theme.buttonSizes[BUTTON_SIZE[size]]}
    margin: 0 10px;
    border: none;
    border-radius: ${rounded ? "40px" : "3px"};
    white-space: nowrap;
    ${primary ? theme.buttonColors.primary : theme.buttonColors.secondary}
    transition: background-color 0.2s ease-out;
    cursor: pointer;
    box-shadow: 0px 0px 5px -1px ${theme.colors.transparent.black_08};
  `}
`;
