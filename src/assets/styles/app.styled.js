import { createGlobalStyle } from "styled-components";

import { ResetStyles } from "./reset.styled";
import { BaseStyles } from "./base.styled";

export const GlobalStyles = createGlobalStyle`
    ${ResetStyles}
    ${BaseStyles}
`;
