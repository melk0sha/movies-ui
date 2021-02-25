import React, { useCallback, useMemo } from "react";
import { object } from "prop-types";
import { ACTION_MENU_MOVIE_VALUES, ACTION_MENU_MOVIE_OPTIONS } from "consts";
import {
  MovieWrapper,
  MovieImageWrapper,
  MovieImage,
  MovieInfoWrapper,
  MovieTitle,
  MovieGenres,
  MovieYear,
  StyledActionMenu
} from "components/resultsSection/movies/movie/movie.styled";

const Movie = ({ movie = {} }) => {
  const { image, genres, name, year } = movie;

  const genresString = useMemo(
    () => genres.map((genre, idx) => (idx === 0 ? genre.name : genre.name.toLowerCase())).join(", "),
    [genres]
  );

  const handleOptionClick = useCallback((option) => {
    if (option.id === ACTION_MENU_MOVIE_VALUES.EDIT.id) {
      console.log("Edit was clicked");
    }

    if (option.id === ACTION_MENU_MOVIE_VALUES.DELETE.id) {
      console.log("Delete was clicked");
    }
  }, []);

  return (
    <MovieWrapper>
      <MovieImageWrapper>
        <StyledActionMenu options={ACTION_MENU_MOVIE_OPTIONS} onOptionClick={handleOptionClick} />
        <MovieImage src={image} alt={name} />
      </MovieImageWrapper>
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
