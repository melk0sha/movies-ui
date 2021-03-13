import React from "react";
import { arrayOf, func } from "prop-types";
import { genreType, movieType, modalValues } from "types";

import { FindMovieSection } from "components/findMovieSection";
import { ResultsSection } from "components/resultsSection";

const Home = ({
  genres = [],
  movies = [],
  modalValues = {},
  defaultModalValues = {},
  onModalValuesChange: handleModalValuesChange,
  onMovieUpdate: handleMovieUpdate
}) => {
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
