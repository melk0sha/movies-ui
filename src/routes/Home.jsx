import React from "react";
import { arrayOf } from "prop-types";
import { genreType } from "types";

import { FindMovieSection } from "components/findMovieSection";
import { ResultsSection } from "components/resultsSection";

const Home = ({ genres = [] }) => {
  return (
    <>
      <FindMovieSection />
      <ResultsSection genres={genres} />
    </>
  );
};

Home.propTypes = {
  genres: arrayOf(genreType)
};

export { Home };
