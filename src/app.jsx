import React, { useCallback, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { getGenres } from "api";
import { GlobalStyles, Main, Wrapper } from "assets/styles";
import { theme } from "assets/styles/theme";
import { ErrorBoundary } from "components/errorBoundary";
import { Footer } from "components/footer";
import { Header } from "components/header";
import { Home } from "routes";
import { modalValuesDefaultState } from "./app.constants";

const App = () => {
  const [genres, setGenres] = useState(null);
  const [modalValues, setModalValues] = useState(modalValuesDefaultState);

  useEffect(() => {
    const genresData = getGenres();
    setGenres(genresData);
  }, [setGenres]);

  const handleModalValuesChange = useCallback(
    ({ values, type }) => {
      setModalValues((prevState) => ({ ...prevState, [type]: values }));
    },
    [setModalValues]
  );

  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <Wrapper>
          <Header
            genres={genres}
            modalValues={modalValues.addMovie}
            defaultModalValues={modalValuesDefaultState.addMovie}
            onModalValuesChange={handleModalValuesChange}
          />
          <Main>
            <Home
              genres={genres}
              modalValues={modalValues}
              defaultModalValues={modalValuesDefaultState}
              onModalValuesChange={handleModalValuesChange}
            />
          </Main>
          <Footer />
        </Wrapper>
      </ErrorBoundary>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
