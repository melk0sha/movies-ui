import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ThemeProvider } from "styled-components";
import { getMovies } from "api";
import { GlobalStyles, Wrapper, Main } from "assets/styles";
import { theme } from "assets/styles/theme";
import { ErrorBoundary } from "components/errorBoundary";
import { Footer } from "components/footer";
import { Header } from "components/header";
import { ResultsSection } from "components/resultsSection";
import { Routes } from "routes";
import { getUniqueGenres } from "utils";
import { modalValuesDefaultState, updateMovieModalDefaultValues } from "./app.constants";

const App = () => {
  const [movies, setMovies] = useState(null);
  const [modalValues, setModalValues] = useState(modalValuesDefaultState);

  useEffect(() => {
    const moviesData = getMovies();
    setMovies(moviesData);
  }, [setMovies]);

  const genres = useMemo(() => getUniqueGenres(movies), [movies]);

  const handleMovieUpdate = useCallback(
    (newMovies) => {
      setMovies(newMovies);
    },
    [setMovies]
  );

  const handleModalValuesChange = useCallback(
    ({ values, type }) => {
      setModalValues((prevState) => ({ ...prevState, [type]: values }));
    },
    [setModalValues]
  );

  const updateMovieModalValues = useMemo(() => {
    const { editMovie, deleteMovie } = modalValues;
    return {
      editMovie,
      deleteMovie
    };
  }, [modalValues]);

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
            <Routes movies={movies} />
            <ResultsSection
              genres={genres}
              movies={movies}
              modalValues={updateMovieModalValues}
              defaultModalValues={updateMovieModalDefaultValues}
              onModalValuesChange={handleModalValuesChange}
              onMovieUpdate={handleMovieUpdate}
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
