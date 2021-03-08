import styled, { createGlobalStyle } from "styled-components";

import { ResetStyles } from "assets/styles/reset.styled";
import { BaseStyles } from "assets/styles/base.styled";

export const GlobalStyles = createGlobalStyle`
    ${ResetStyles}
    ${BaseStyles}
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  z-index: 0;
`;

export const Main = styled.main`
  flex: 1 0 auto;
`;
