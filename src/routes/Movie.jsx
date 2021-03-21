import React from "react";
import { useParams } from "react-router";
import MovieSection from "components/movieSection";

const Movie = () => {
  const { id } = useParams();

  return <MovieSection movieId={id} />;
};

export default Movie;
