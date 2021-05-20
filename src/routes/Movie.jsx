import React from "react";
import { useParams } from "react-router";
import MovieSection from "components/movieSection";
import ResultsSection from "components/resultsSection";

const Movie = () => {
  const { id } = useParams();

  return (
    <>
      <MovieSection movieId={id} />
      <ResultsSection />
    </>
  );
};

export default Movie;
