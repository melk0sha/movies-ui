import React from "react";

import { FindMovieSection } from "components/findMovieSection";
import { Results } from "components/results";

const Home = () => {
  return (
    <>
      <FindMovieSection />
      <Results />
    </>
  );
};

export { Home };
