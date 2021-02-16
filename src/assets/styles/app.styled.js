import styled, { createGlobalStyle } from "styled-components";

import { ResetStyles } from "assets/styles/reset.styled";
import { BaseStyles } from "assets/styles/base.styled";

export const GlobalStyles = createGlobalStyle`
    ${ResetStyles}
    ${BaseStyles}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

export const Main = styled.main`
  flex: 1 0 auto;
`;
