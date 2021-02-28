import React, { useMemo } from "react";
import { arrayOf, number, shape, string } from "prop-types";
import { Movie } from "components/resultsSection/movies/movie";
import { MoviesWrapper } from "components/resultsSection/movies/movies.styled";

const Movies = ({ movies = [], genres = [] }) => {
  const MoviesCards = useMemo(
    () => movies.map((movie) => <Movie movie={movie} key={movie.id || Math.random()} genres={genres} />),
    [movies]
  );

  return <MoviesWrapper>{MoviesCards}</MoviesWrapper>;
};

Movies.propTypes = {
  movies: arrayOf(
    shape({
      id: number,
      name: string,
      genreIds: arrayOf(number),
      year: string,
      image: string
    })
  ),
  genres: arrayOf(
    shape({
      id: number,
      name: string
    })
  )
};

export { Movies };
