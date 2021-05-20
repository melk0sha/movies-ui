import React, { useCallback, useMemo, useState } from "react";
import { connect } from "react-redux";
import { arrayOf } from "prop-types";
import { MODAL_TYPES } from "consts";
import { movieType } from "types";
import Modal from "components/shared/modal";
import EditMovieModal from "components/modals/editMovieModal";
import DeleteMovieModal from "components/modals/deleteMovieModal";
import Movie from "components/resultsSection/movies/movie";
import { MoviesWrapper } from "components/resultsSection/movies/movies.styled";

const Movies = ({ movies = [] }) => {
  const [isModalShown, setModalShown] = useState({
    [MODAL_TYPES.EDIT_MOVIE]: false,
    [MODAL_TYPES.DELETE_MOVIE]: false
  });

  const handleModalShowingChange = useCallback(
    (type) => {
      setModalShown((prevState) => ({ ...prevState, [type]: !prevState[type] }));
    },
    [setModalShown]
  );

  const handleOptionClick = useCallback(
    (type) => {
      handleModalShowingChange(type);
    },
    [handleModalShowingChange]
  );

  const handleMovieUpdatingSubmit = useCallback(
    (type) => {
      handleModalShowingChange(type);
    },
    [handleModalShowingChange]
  );

  const MoviesCards = useMemo(
    () =>
      movies.map((movie, index) => (
        <Movie key={movie.id || index} movie={movie} onOptionClick={(type) => handleOptionClick(type)} />
      )),
    [movies, handleOptionClick]
  );

  return (
    <MoviesWrapper>
      {MoviesCards}

      <Modal show={isModalShown.editMovie} onClose={() => handleModalShowingChange(MODAL_TYPES.EDIT_MOVIE)}>
        <EditMovieModal onEditingSubmit={() => handleMovieUpdatingSubmit(MODAL_TYPES.EDIT_MOVIE)} />
      </Modal>

      <Modal show={isModalShown.deleteMovie} onClose={() => handleModalShowingChange(MODAL_TYPES.DELETE_MOVIE)}>
        <DeleteMovieModal onDeletionSubmit={() => handleMovieUpdatingSubmit(MODAL_TYPES.DELETE_MOVIE)} />
      </Modal>
    </MoviesWrapper>
  );
};

Movies.propTypes = {
  movies: arrayOf(movieType)
};

const mapStateToProps = (state) => ({
  movies: state.movies.movieList
});

export default connect(mapStateToProps)(Movies);
