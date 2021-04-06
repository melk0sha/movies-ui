import React, { useCallback } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { func, number } from "prop-types";
import { MODAL_TYPES } from "consts";
import { moviesSortByType } from "types";
import { alertShow, getMoviesByParams, deleteMovieById } from "actions";
import Button from "components/shared/button";
import {
  ModalMovieWrapper,
  ModalTitle,
  ModalButtonWrapper,
  ModalSpan
} from "components/modals/shared/styles/modals.styled";

const DeleteMovieModal = ({
  movieId,
  moviesSortBy,
  onMovieDelete,
  onDeletionSubmit,
  onNewMoviesUpdate,
  onAlertShow
}) => {
  const handleDeleteMovieClick = useCallback(async () => {
    await onMovieDelete(movieId);
    await onNewMoviesUpdate({ sortBy: moviesSortBy });

    onDeletionSubmit();
    onAlertShow();
  }, [movieId, moviesSortBy, onDeletionSubmit]);

  return (
    <ModalMovieWrapper>
      <ModalTitle>Delete movie</ModalTitle>
      <ModalSpan>Are you sure you want to delete this movie?</ModalSpan>
      <ModalButtonWrapper>
        <Button rounded onClick={handleDeleteMovieClick}>
          Confirm
        </Button>
      </ModalButtonWrapper>
    </ModalMovieWrapper>
  );
};

DeleteMovieModal.propTypes = {
  movieId: number,
  moviesSortBy: moviesSortByType,
  onMovieDelete: func,
  onNewMoviesUpdate: func,
  onDeletionSubmit: func,
  onAlertShow: func
};

const mapStateToProps = (state) => ({
  movieId: state.modals[MODAL_TYPES.DELETE_MOVIE].id,
  moviesSortBy: state.app.moviesSortBy
});

const mapDispatchToProps = (dispatch) => ({
  onMovieDelete: bindActionCreators(deleteMovieById, dispatch),
  onNewMoviesUpdate: bindActionCreators(getMoviesByParams, dispatch),
  onAlertShow: bindActionCreators(alertShow, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteMovieModal);
