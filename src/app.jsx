import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { getGenres } from "api";

import { GlobalStyles, Main, Wrapper } from "assets/styles";
import { theme } from "assets/styles/theme";
import { ErrorBoundary } from "components/errorBoundary";
import { Footer } from "components/footer";
import { Header } from "components/header";
import { Home } from "routes";

const App = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const genresData = getGenres();

    setGenres(genresData);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <Wrapper>
          <Header genres={genres} />
          <Main>
            <Home genres={genres} />
          </Main>
          <Footer />
        </Wrapper>
      </ErrorBoundary>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
