import React, { useCallback, useMemo, useState } from "react";
import { arrayOf, func } from "prop-types";
import { MODAL_TYPES } from "consts";
import { genreType, movieType, modalValues } from "types";
import { Modal } from "components/shared/modal";
import { EditMovieModal } from "components/modals/editMovieModal";
import { DeleteMovieModal } from "components/modals/deleteMovieModal";
import { Movie } from "components/resultsSection/movies/movie";
import { MoviesWrapper } from "components/resultsSection/movies/movies.styled";

const Movies = ({
  movies = [],
  genres = [],
  modalValues = {},
  defaultModalValues = {},
  onModalValuesChange: handleModalValuesChange,
  onMovieDelete
}) => {
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
    (movie, type) => {
      handleModalShowingChange(type);
      handleModalValuesChange({ values: { ...modalValues[type], id: movie.id }, type });
    },
    [handleModalShowingChange, modalValues, handleModalValuesChange]
  );

  const handleMovieDelete = useCallback(
    (movieId) => {
      onMovieDelete(movieId);
      handleModalShowingChange(MODAL_TYPES.DELETE_MOVIE);
    },
    [onMovieDelete, handleModalShowingChange]
  );

  const MoviesCards = useMemo(
    () =>
      movies.map((movie, index) => (
        <Movie
          key={movie.id || index}
          movie={movie}
          onEditClick={(movie) => handleOptionClick(movie, MODAL_TYPES.EDIT_MOVIE)}
          onDeleteClick={(movie) => handleOptionClick(movie, MODAL_TYPES.DELETE_MOVIE)}
        />
      )),
    [movies, handleOptionClick]
  );

  return (
    <MoviesWrapper>
      {MoviesCards}

      <Modal show={isModalShown.editMovie} onClose={() => handleModalShowingChange(MODAL_TYPES.EDIT_MOVIE)}>
        <EditMovieModal
          values={modalValues.editMovie}
          defaultValues={defaultModalValues.editMovie}
          onValuesChange={handleModalValuesChange}
          genres={genres}
        />
      </Modal>

      <Modal show={isModalShown.deleteMovie} onClose={() => handleModalShowingChange(MODAL_TYPES.DELETE_MOVIE)}>
        <DeleteMovieModal values={modalValues.deleteMovie} onDelete={handleMovieDelete} />
      </Modal>
    </MoviesWrapper>
  );
};

Movies.propTypes = {
  genres: arrayOf(genreType),
  movies: arrayOf(movieType),
  modalValues: modalValues,
  defaultModalValues: modalValues,
  onModalValuesChange: func,
  onMovieDelete: func
};

export { Movies };
