import React, { useCallback } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { func } from "prop-types";
import { MODAL_TYPES } from "consts";
import { modalValuesAddType, moviesSortByType } from "types";
import { addMovieByData, getMoviesByParams } from "actions";
import UpdateMovieFields from "components/modals/shared/updateMovieFields";
import { ModalMovieWrapper, ModalTitle } from "components/modals/shared/styles/modals.styled";

const AddMovieModal = ({ movie, moviesSortBy, onMovieAdd, onNewMoviesUpdate, onAddingSubmit }) => {
  const handleAddMovieSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      await onMovieAdd(movie);
      await onNewMoviesUpdate({ sortBy: moviesSortBy });
      onAddingSubmit();
    },
    [movie, moviesSortBy, onAddingSubmit]
  );

  return (
    <ModalMovieWrapper>
      <ModalTitle>Add movie</ModalTitle>
      <UpdateMovieFields type={MODAL_TYPES.ADD_MOVIE} onFieldsSubmit={handleAddMovieSubmit} />
    </ModalMovieWrapper>
  );
};

AddMovieModal.propTypes = {
  movie: modalValuesAddType,
  moviesSortBy: moviesSortByType,
  onMovieAdd: func,
  onNewMoviesUpdate: func,
  onAddingSubmit: func
};

const mapStateToProps = (state) => ({
  movie: state.modals[MODAL_TYPES.ADD_MOVIE],
  moviesSortBy: state.app.moviesSortBy
});

const mapDispatchToProps = (dispatch) => ({
  onMovieAdd: bindActionCreators(addMovieByData, dispatch),
  onNewMoviesUpdate: bindActionCreators(getMoviesByParams, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AddMovieModal);
