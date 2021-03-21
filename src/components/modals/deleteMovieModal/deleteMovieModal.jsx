import React, { useCallback } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { func, number } from "prop-types";
import { MODAL_TYPES } from "consts";
import { deleteMovie } from "actions";
import Button from "components/shared/button";
import {
  ModalMovieWrapper,
  ModalTitle,
  ModalButtonWrapper,
  ModalSpan
} from "components/modals/shared/styles/modals.styled";

const DeleteMovieModal = ({ movieId, onDelete, onDeletionSubmit }) => {
  const handleDeleteMovieClick = useCallback(() => {
    onDelete(movieId);
    onDeletionSubmit();
  }, [movieId]);

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
  onDelete: func,
  onDeletionSubmit: func
};

const mapStateToProps = (state) => ({
  movieId: state.modals[MODAL_TYPES.DELETE_MOVIE].id
});

const mapDispatchToProps = (dispatch) => ({
  onDelete: bindActionCreators(deleteMovie, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteMovieModal);
