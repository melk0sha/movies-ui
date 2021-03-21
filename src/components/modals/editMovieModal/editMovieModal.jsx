import React, { useCallback } from "react";
import { connect } from "react-redux";
import { MODAL_TYPES } from "consts";
import { number } from "prop-types";
import { ModalMovieWrapper, ModalTitle, ModalLabel } from "components/modals/shared/styles/modals.styled";
import { StyledModalSpan } from "components/modals/editMovieModal/editMovieModal.styled";
import UpdateMovieFields from "components/modals/shared/updateMovieFields";

const EditMovieModal = ({ movieId }) => {
  const handleEditMovieSubmit = useCallback((e) => {
    e.preventDefault();
    console.log("Edit Movie Submitting");
  }, []);

  return (
    <ModalMovieWrapper>
      <ModalTitle>Edit movie</ModalTitle>
      <ModalLabel>Movie ID</ModalLabel>
      <StyledModalSpan>{movieId}</StyledModalSpan>
      <UpdateMovieFields type={MODAL_TYPES.EDIT_MOVIE} onFieldsSubmit={handleEditMovieSubmit} />
    </ModalMovieWrapper>
  );
};

EditMovieModal.propTypes = {
  movieId: number
};

const mapStateToProps = (state) => ({
  movieId: state.modals[MODAL_TYPES.EDIT_MOVIE].id
});

export default connect(mapStateToProps)(EditMovieModal);
