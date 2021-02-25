import React, { useMemo } from "react";
import { array } from "prop-types";
import { Movie } from "components/resultsSection/movies/movie";
import { MoviesWrapper } from "components/resultsSection/movies/movies.styled";

const Movies = ({ movies = [] }) => {
  const MoviesCards = useMemo(() => movies.map((movie) => <Movie movie={movie} key={movie.id || Math.random()} />));

  return <MoviesWrapper>{MoviesCards}</MoviesWrapper>;
};

Movies.propTypes = {
  movies: array
};

export { Movies };
