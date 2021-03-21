import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, Wrapper, Main } from "assets/styles";
import { theme } from "assets/styles/theme";
import ErrorBoundary from "components/errorBoundary";
import Footer from "components/footer";
import Header from "components/header";
import ResultsSection from "components/resultsSection";
import Routes from "routes";

const App = () => (
  <ThemeProvider theme={theme}>
    <ErrorBoundary>
      <Wrapper>
        <Header />
        <Main>
          <Routes />
          <ResultsSection />
        </Main>
        <Footer />
      </Wrapper>
    </ErrorBoundary>
    <GlobalStyles />
  </ThemeProvider>
);

export default App;
