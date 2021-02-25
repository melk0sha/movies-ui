import React from "react";
import { GlobalStyles, Main, Wrapper } from "assets/styles";

import { ErrorBoundary } from "components/errorBoundary";
import { Footer } from "components/shared/footer";
import { Header } from "components/shared/header";
import { Home } from "containers";

const App = () => {
  return (
    <>
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
    </>
  );
};

export default App;
