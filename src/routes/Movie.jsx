import React from "react";
import { arrayOf, func } from "prop-types";
import { genreType, movieType, modalValues } from "types";

import { MovieSection } from "components/movieSection";
import { ResultsSection } from "components/resultsSection";

const Movie = ({
  genres = [],
  movies = [],
  modalValues = {},
  defaultModalValues = {},
  onModalValuesChange: handleModalValuesChange,
  onMovieUpdate: handleMovieUpdate
}) => {
  return (
    <>
      <MovieSection />
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

Movie.propTypes = {
  genres: arrayOf(genreType),
  movies: arrayOf(movieType),
  modalValues: modalValues,
  defaultModalValues: modalValues,
  onModalValuesChange: func,
  onMovieUpdate: func
};

export { Movie };
