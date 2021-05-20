import React, { useCallback } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { func, string } from "prop-types";
import { MODAL_TYPES } from "consts";
import { movieType, modalValuesEditType, moviesSortByType } from "types";
import { alertShow, getMoviesByParams, updateMovieByData, requestMoviesSuccess } from "actions";
import UpdateMovieFields from "components/modals/shared/updateMovieFields";
import { ModalMovieWrapper, ModalTitle, ModalLabel } from "components/modals/shared/styles/modals.styled";
import { StyledModalSpan } from "components/modals/editMovieModal/editMovieModal.styled";

const EditMovieModal = ({
  moviesSortBy,
  newMovie,
  oldMovie,
  searchValue,
  activeGenre,
  onMovieEdit,
  onNewMoviesUpdate,
  onEditingSubmit,
  onAlertShow,
  onMoviesNotFound
}) => {
  const handleEditMovieSubmit = useCallback(
    async (values) => {
      const updatedMovie = { ...oldMovie, ...values };

      await onMovieEdit(updatedMovie);
      onEditingSubmit();

      if (searchValue) {
        await onNewMoviesUpdate({ sortBy: moviesSortBy, search: searchValue, searchBy: "title", filter: activeGenre });
      } else {
        onMoviesNotFound([]);
      }

      onAlertShow();
    },
    [moviesSortBy, searchValue, activeGenre, newMovie, oldMovie, onEditingSubmit]
  );

  return (
    <ModalMovieWrapper>
      <ModalTitle>Edit movie</ModalTitle>
      <ModalLabel>Movie ID</ModalLabel>
      <StyledModalSpan>{newMovie.id}</StyledModalSpan>
      <UpdateMovieFields type={MODAL_TYPES.EDIT_MOVIE} onFieldsSubmit={handleEditMovieSubmit} />
    </ModalMovieWrapper>
  );
};

EditMovieModal.propTypes = {
  newMovie: modalValuesEditType,
  oldMovie: movieType,
  searchValue: string,
  activeGenre: string,
  moviesSortBy: moviesSortByType,
  onMovieEdit: func,
  onNewMoviesUpdate: func,
  onEditingSubmit: func,
  onAlertShow: func,
  onMoviesNotFound: func
};

const mapStateToProps = (state) => {
  const { moviesSortBy } = state.app;
  const newMovie = state.modals[MODAL_TYPES.EDIT_MOVIE];
  const oldMovie = state.movies.movieList.find((movie) => movie.id === newMovie.id);
  const searchValue = state.app.searchValue;
  const activeGenre = state.app.activeGenre;

  return {
    newMovie,
    oldMovie,
    moviesSortBy,
    searchValue,
    activeGenre
  };
};

const mapDispatchToProps = (dispatch) => ({
  onMovieEdit: bindActionCreators(updateMovieByData, dispatch),
  onNewMoviesUpdate: bindActionCreators(getMoviesByParams, dispatch),
  onAlertShow: bindActionCreators(alertShow, dispatch),
  onMoviesNotFound: bindActionCreators(requestMoviesSuccess, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(EditMovieModal);
