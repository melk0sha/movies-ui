import React, { useCallback, useMemo } from "react";
import { generatePath, Link } from "react-router-dom";
import { func } from "prop-types";
import { ACTION_MENU_MOVIE_VALUES, ACTION_MENU_MOVIE_OPTIONS, PATHS } from "consts";
import { movieType } from "types";
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

const Movie = ({ movie = {}, onEditClick, onDeleteClick }) => {
  const { id, image, genres, name, year } = movie;
  const genresText = useMemo(() => genres.join(", "), [genres]);

  const handleOptionClick = useCallback(
    (option) => {
      if (option.id === ACTION_MENU_MOVIE_VALUES.EDIT.id) {
        onEditClick(movie);
      } else if (option.id === ACTION_MENU_MOVIE_VALUES.DELETE.id) {
        onDeleteClick(movie);
      }
    },
    [movie, onEditClick, onDeleteClick]
  );

  return (
    <MovieWrapper>
      <MovieImageWrapper>
        <StyledActionMenu options={ACTION_MENU_MOVIE_OPTIONS} onOptionClick={handleOptionClick} />
        <Link to={generatePath(PATHS.MOVIE, { id })}>
          <MovieImage src={image} alt={name} />
        </Link>
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
  movie: movieType,
  onEditClick: func,
  onDeleteClick: func
};

export { Movie };
