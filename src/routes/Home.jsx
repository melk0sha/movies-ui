import React, { useCallback } from "react";
import { arrayOf, func } from "prop-types";
import { genreType, movieType, modalValues } from "types";

import { FindMovieSection } from "components/findMovieSection";
import { ResultsSection } from "components/resultsSection";

const Home = ({
  genres = [],
  movies = [],
  modalValues = {},
  defaultModalValues = {},
  onModalValuesChange,
  onMovieUpdate
}) => {
  const handleModalValuesChange = useCallback(
    (values) => {
      onModalValuesChange(values);
    },
    [onModalValuesChange]
  );

  const handleMovieUpdate = useCallback(
    (newMovies) => {
      onMovieUpdate(newMovies);
    },
    [onMovieUpdate]
  );

  return (
    <>
      <FindMovieSection />
      <ResultsSection
        genres={genres}
        movies={movies}
        modalValues={modalValues}
        defaultModalValues={defaultModalValues}
        onModalValuesChange={handleModalValuesChange}
        onMovieUpdate={handleMovieUpdate}
      />
    </>
  );
};

Home.propTypes = {
  genres: arrayOf(genreType),
  movies: arrayOf(movieType),
  modalValues: modalValues,
  defaultModalValues: modalValues,
  onModalValuesChange: func,
  onMovieUpdate: func
};

export { Home };
