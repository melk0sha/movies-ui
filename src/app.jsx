import React from "react";
import { GlobalStyles, Main, Wrapper } from "assets/styles";

import { Footer } from "components/shared/footer";
import { Header } from "components/shared/header";
import { Home } from "containers";

const App = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <Main>
          <Home />
        </Main>
        <Footer />
      </Wrapper>
      <GlobalStyles />
    </>
  );
};

export default App;
