import React, { useCallback, useMemo } from "react";
import { bindActionCreators } from "redux";
import { generatePath } from "react-router-dom";
import { connect } from "react-redux";
import { HashLink } from "react-router-hash-link";
import { func } from "prop-types";
import { ACTION_MENU_MOVIE_VALUES, ACTION_MENU_MOVIE_OPTIONS, PATHS, MODAL_TYPES } from "consts";
import { movieType } from "types";
import { updateModalValueField } from "actions";
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
import noImagePicture from "assets/images/no_picture.jpg";

const Movie = ({ movie = {}, onOptionClick, onMovieChoose }) => {
  const { id, poster_path, genres, title, release_date } = movie;

  const genresText = useMemo(() => genres.join(", "), [genres]);
  const year = useMemo(() => getYearFromReleaseDate(release_date), [release_date]);

  const handleOptionClick = useCallback(
    (option) => {
      const type = option.id === ACTION_MENU_MOVIE_VALUES.EDIT.id ? MODAL_TYPES.EDIT_MOVIE : MODAL_TYPES.DELETE_MOVIE;

      onMovieChoose(movie.id, type, "id");
      onOptionClick(type);
    },
    [movie]
  );

  const handleSrcError = useCallback(({ target }) => {
    target.src = noImagePicture;
  }, []);

  return (
    <MovieWrapper>
      <MovieImageWrapper>
        <StyledActionMenu options={ACTION_MENU_MOVIE_OPTIONS} onOptionClick={handleOptionClick} />
        <HashLink smooth to={generatePath(`${PATHS.MOVIE}#`, { id })}>
          <MovieImage src={poster_path} alt={title} onError={handleSrcError} />
        </HashLink>
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
  onOptionClick: func,
  onMovieChoose: func
};

const mapDispatchToProps = (dispatch) => ({
  onMovieChoose: bindActionCreators(updateModalValueField, dispatch)
});

export default connect(null, mapDispatchToProps)(Movie);
