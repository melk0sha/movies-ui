import React, { useCallback } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { func } from "prop-types";
import { MODAL_TYPES } from "consts";
import { movieType, modalValuesEditType, moviesSortByType } from "types";
import { alertShow, getMoviesByParams, updateMovieByData } from "actions";
import UpdateMovieFields from "components/modals/shared/updateMovieFields";
import { ModalMovieWrapper, ModalTitle, ModalLabel } from "components/modals/shared/styles/modals.styled";
import { StyledModalSpan } from "components/modals/editMovieModal/editMovieModal.styled";

const EditMovieModal = ({
  moviesSortBy,
  newMovie,
  oldMovie,
  onMovieEdit,
  onNewMoviesUpdate,
  onEditingSubmit,
  onAlertShow
}) => {
  const handleEditMovieSubmit = useCallback(
    async (values) => {
      const updatedMovie = { ...oldMovie, ...values };

      await onMovieEdit(updatedMovie);
      await onNewMoviesUpdate({ sortBy: moviesSortBy });

      onEditingSubmit();
      onAlertShow();
    },
    [moviesSortBy, newMovie, oldMovie, onEditingSubmit]
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
  moviesSortBy: moviesSortByType,
  onMovieEdit: func,
  onNewMoviesUpdate: func,
  onEditingSubmit: func,
  onAlertShow: func
};

const mapStateToProps = (state) => {
  const { moviesSortBy } = state.app;
  const newMovie = state.modals[MODAL_TYPES.EDIT_MOVIE];
  const oldMovie = state.movies.movieList.find((movie) => movie.id === newMovie.id);

  return {
    newMovie,
    oldMovie,
    moviesSortBy
  };
};

const mapDispatchToProps = (dispatch) => ({
  onMovieEdit: bindActionCreators(updateMovieByData, dispatch),
  onNewMoviesUpdate: bindActionCreators(getMoviesByParams, dispatch),
  onAlertShow: bindActionCreators(alertShow, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(EditMovieModal);
