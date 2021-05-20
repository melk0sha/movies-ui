import { css } from "styled-components";

export const ResetStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    outline: 0; // TODO: Think about accessibility.
    font-family: "Cabin", Arial, sans-serif;
  }
`;
