import React, { useCallback } from "react";
import { arrayOf, func } from "prop-types";
import { MODAL_TYPES } from "consts";
import { modalValuesAddType, genreType } from "types";
import { ModalMovieWrapper, ModalTitle } from "components/modals/shared/styles/modals.styled";
import { UpdateMovieFields } from "components/modals/shared/updateMovieFields";

const AddMovieModal = ({ values = {}, defaultValues = {}, genres = [], onValuesChange: handleValuesChange }) => {
  const handleAddMovieSubmit = useCallback((e) => {
    e.preventDefault();
    console.log("Add Movie Submitting");
  }, []);

  return (
    <ModalMovieWrapper>
      <ModalTitle>Add movie</ModalTitle>
      <UpdateMovieFields
        values={values}
        defaultValues={defaultValues}
        onValuesChange={handleValuesChange}
        genres={genres}
        type={MODAL_TYPES.ADD_MOVIE}
        onFieldsSubmit={handleAddMovieSubmit}
      />
    </ModalMovieWrapper>
  );
};

AddMovieModal.propTypes = {
  values: modalValuesAddType,
  defaultValues: modalValuesAddType,
  genres: arrayOf(genreType),
  onValuesChange: func
};

export { AddMovieModal };
