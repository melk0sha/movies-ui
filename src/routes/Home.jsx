import React, { useCallback } from "react";
import { arrayOf, func } from "prop-types";
import { genreType, modalValues } from "types";

import { FindMovieSection } from "components/findMovieSection";
import { ResultsSection } from "components/resultsSection";

const Home = ({ genres = [], modalValues = {}, defaultModalValues = {}, onModalValuesChange }) => {
  const handleModalValuesChange = useCallback(
    (values) => {
      onModalValuesChange(values);
    },
    [onModalValuesChange]
  );

  return (
    <>
      <FindMovieSection />
      <ResultsSection
        genres={genres}
        modalValues={modalValues}
        defaultModalValues={defaultModalValues}
        onModalValuesChange={handleModalValuesChange}
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
