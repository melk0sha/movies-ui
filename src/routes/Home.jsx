import React from "react";

import { FindMovieSection } from "components/findMovieSection";
import { ResultsSection } from "components/resultsSection";

const Home = () => {
  return (
    <>
      <FindMovieSection />
      <ResultsSection />
    </>
  );
};

export { Home };
