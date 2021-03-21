import React, { useCallback } from "react";
import { MODAL_TYPES } from "consts";
import { ModalMovieWrapper, ModalTitle } from "components/modals/shared/styles/modals.styled";
import UpdateMovieFields from "components/modals/shared/updateMovieFields";

const AddMovieModal = () => {
  const handleAddMovieSubmit = useCallback((e) => {
    e.preventDefault();
    console.log("Add Movie Submitting");
  }, []);

  return (
    <ModalMovieWrapper>
      <ModalTitle>Add movie</ModalTitle>
      <UpdateMovieFields type={MODAL_TYPES.ADD_MOVIE} onFieldsSubmit={handleAddMovieSubmit} />
    </ModalMovieWrapper>
  );
};

export default AddMovieModal;
