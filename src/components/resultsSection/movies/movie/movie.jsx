import React, { useCallback, useMemo } from "react";
import { arrayOf, number, shape, string } from "prop-types";
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

const Movie = ({ movie = {}, genres = [] }) => {
  const { image, genreIds, name, year } = movie;

  const genresText = useMemo(
    () => genreIds.map((genreId) => genres.find((genre) => genre.id === genreId).name).join(", "),
    [genreIds, genres]
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
      <MovieGenres>{genresText}</MovieGenres>
    </MovieWrapper>
  );
};

Movie.propTypes = {
  movie: shape({
    id: number,
    name: string,
    genreIds: arrayOf(number),
    year: string,
    image: string
  }),
  genres: arrayOf(
    shape({
      id: number,
      name: string
    })
  )
};

export { Movie };
