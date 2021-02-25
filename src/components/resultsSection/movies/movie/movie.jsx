import React, { useMemo } from "react";
import { object } from "prop-types";
import {
  MovieWrapper,
  MovieImage,
  MovieInfoWrapper,
  MovieTitle,
  MovieGenres,
  MovieYear
} from "components/resultsSection/movies/movie/movie.styled";

const Movie = ({ movie = {} }) => {
  const { image, genres, name, year } = movie;

  const genresString = useMemo(() =>
    genres.map((genre, idx) => (idx === 0 ? genre.name : genre.name.toLowerCase())).join(", ")
  );

  return (
    <MovieWrapper>
      <MovieImage src={image} alt={name} />
      <MovieInfoWrapper>
        <MovieTitle>{name}</MovieTitle>
        <MovieYear>{year}</MovieYear>
      </MovieInfoWrapper>
      <MovieGenres>{genresString}</MovieGenres>
    </MovieWrapper>
  );
};

Movie.propTypes = {
  movie: object
};

export { Movie };
