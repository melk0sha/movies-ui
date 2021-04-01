import React, { useCallback, useMemo } from "react";
import { bindActionCreators } from "redux";
import { generatePath } from "react-router-dom";
import { connect } from "react-redux";
import { HashLink } from "react-router-hash-link";
import { func } from "prop-types";
import { ACTION_MENU_MOVIE_VALUES, ACTION_MENU_MOVIE_OPTIONS, PATHS, MODAL_TYPES } from "consts";
import { modalsDefaultState } from "reducers/defaultStates";
import { movieType } from "types";
import { setModalValuesForEdit } from "actions";
import { getYearFromReleaseDate, getHashCodeFromString } from "utils";
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

const Movie = ({ movie = {}, onOptionClick, onModalValuesUpdate }) => {
  const { id, poster_path, genres, title, release_date, overview, runtime } = movie;

  const genresText = useMemo(() => genres.join(", "), [genres]);
  const year = useMemo(() => getYearFromReleaseDate(release_date), [release_date]);

  const handleOptionClick = useCallback(
    (option) => {
      const type = option.id === ACTION_MENU_MOVIE_VALUES.EDIT.id ? MODAL_TYPES.EDIT_MOVIE : MODAL_TYPES.DELETE_MOVIE;

      if (type === MODAL_TYPES.EDIT_MOVIE) {
        const genresList = genres.map((genre) => ({ id: getHashCodeFromString(genre), value: genre }));

        onModalValuesUpdate({
          id,
          title: title || modalsDefaultState[type].title,
          poster_path: poster_path || modalsDefaultState[type].poster_path,
          release_date: release_date || modalsDefaultState[type].release_date,
          genres: genresList || modalsDefaultState[type].genres,
          overview: overview || modalsDefaultState[type].overview,
          runtime: (runtime && String(runtime)) || modalsDefaultState[type].runtime
        });
      }

      onOptionClick(type, id);
    },
    [movie, onModalValuesUpdate]
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
  onModalValuesUpdate: func
};

const mapStateToProps = (_state, ownProps) => ({
  movie: ownProps.movie
});

const mapDispatchToProps = (dispatch) => ({
  onModalValuesUpdate: bindActionCreators(setModalValuesForEdit, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
