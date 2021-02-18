import React from "react";
import { GlobalStyles, Main, Wrapper } from "assets/styles";

import { Footer } from "components/shared/footer";
import { Header } from "components/shared/header";
import { FindMovieSection } from "components/findMovieSection/FindMovieSection";

const App = () => {
  /**
   * You will see 'development' mode in console in your browser via development starting.
   * But you can't see 'production' mode now, since it is will be shown only on deployed version of app.
   */
  console.log(`process.env.NODE_ENV = ${process.env.NODE_ENV}`);

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
