import React, { useCallback, useMemo } from "react";
import { generatePath } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { func } from "prop-types";
import { ACTION_MENU_MOVIE_VALUES, ACTION_MENU_MOVIE_OPTIONS, PATHS } from "consts";
import { movieType } from "types";
import { getYearFromReleaseDate } from "utils";
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
  const { id, poster_path, genres, title, release_date } = movie;

  const genresText = useMemo(() => genres.join(", "), [genres]);
  const year = useMemo(() => getYearFromReleaseDate(release_date), [release_date]);

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
        <NavHashLink smooth to={generatePath(`${PATHS.MOVIE}#top`, { id })}>
          <MovieImage src={poster_path} alt={title} />
        </NavHashLink>
      </MovieImageWrapper>
      <MovieInfoWrapper>
        <MovieTitle>{title}</MovieTitle>
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
