import React, { useCallback } from "react";
import { arrayOf, func } from "prop-types";
import { MODAL_TYPES } from "consts";
import { modalValuesAddType, genreType } from "types";
import { ModalMovieWrapper, ModalTitle, ModalLabel } from "components/modals/shared/styles/modals.styled";
import { StyledModalSpan } from "components/modals/editMovieModal/editMovieModal.styled";
import { UpdateMovieFields } from "components/modals/shared/updateMovieFields";

const EditMovieModal = ({ values = {}, defaultValues = {}, genres = [], onValuesChange: handleValuesChange }) => {
  const handleEditMovieSubmit = useCallback((e) => {
    e.preventDefault();
    console.log("Edit Movie Submitting");
  }, []);

  return (
    <ModalMovieWrapper>
      <ModalTitle>Edit movie</ModalTitle>
      <ModalLabel>Movie ID</ModalLabel>
      <StyledModalSpan>{values.id}</StyledModalSpan>
      <UpdateMovieFields
        values={values}
        defaultValues={defaultValues}
        onValuesChange={handleValuesChange}
        genres={genres}
        type={MODAL_TYPES.EDIT_MOVIE}
        onFieldsSubmit={handleEditMovieSubmit}
      />
    </ModalMovieWrapper>
  );
};

EditMovieModal.propTypes = {
  values: modalValuesAddType,
  defaultValues: modalValuesAddType,
  genres: arrayOf(genreType),
  onValuesChange: func
};

export { EditMovieModal };
