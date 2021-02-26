import React from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyles, Main, Wrapper } from "assets/styles";
import { theme } from "assets/styles/theme";
import { ErrorBoundary } from "components/errorBoundary";
import { Footer } from "components/shared/footer";
import { Header } from "components/shared/header";
import { Home } from "containers";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <Wrapper>
          <Header />
          <Main>
            <Home />
          </Main>
          <Footer />
        </Wrapper>
      </ErrorBoundary>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
