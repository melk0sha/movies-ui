import React from "react";
import { GlobalStyles, Main, Wrapper } from "assets/styles";

import { Footer } from "components/shared/footer";
import { Header } from "components/shared/header";
import { FindMovieSection } from "components/findMovieSection/FindMovieSection";

const App = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <Main>
          <FindMovieSection />
        </Main>
        <Footer />
      </Wrapper>
      <GlobalStyles />
    </>
  );
};

export default App;
