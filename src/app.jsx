import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, Wrapper, Main } from "assets/styles";
import { theme } from "assets/styles/theme";
import ErrorBoundary from "components/errorBoundary";
import Footer from "components/footer";
import Header from "components/header";
import Routes from "routes";

const App = () => (
  <ThemeProvider theme={theme}>
    <ErrorBoundary>
      <Wrapper>
        <Header />
        <Main>
          <Routes />
        </Main>
        <Footer />
      </Wrapper>
    </ErrorBoundary>
    <GlobalStyles />
  </ThemeProvider>
);

export default App;
