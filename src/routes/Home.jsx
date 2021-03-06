import React from "react";
import { arrayOf, func } from "prop-types";
import { genreType, modalValues } from "types";

import { FindMovieSection } from "components/findMovieSection";
import { ResultsSection } from "components/resultsSection";

const Home = ({ genres = [], modalValues = {}, defaultModalValues = {}, onModalValuesChange }) => {
  return (
    <>
      <FindMovieSection />
      <ResultsSection
        genres={genres}
        modalValues={modalValues}
        defaultModalValues={defaultModalValues}
        onModalValuesChange={onModalValuesChange}
      />
    </>
  );
};

Home.propTypes = {
  genres: arrayOf(genreType),
  modalValues: modalValues,
  defaultModalValues: modalValues,
  onModalValuesChange: func
};

export { Home };
