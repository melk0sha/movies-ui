import React, { useCallback } from "react";
import { func } from "prop-types";
import { MODAL_TYPES } from "consts";
import { modalValuesDeleteType } from "types";
import {
  DeleteMovieModalWrapper,
  ModalTitle,
  ModalButtonWrapper,
  ModalSpan
} from "components/modals/deleteMovieModal/deleteMovieModal.styled";
import { Button } from "components/shared/button";

const DeleteMovieModal = ({ values = {}, onDelete }) => {
  const handleDeleteMovieClick = useCallback(() => {
    console.log("Delete Movie Confirming", values.id);
    onDelete(values.id);
  }, [values]);

  return (
    <DeleteMovieModalWrapper>
      <ModalTitle>Delete movie</ModalTitle>
      <ModalSpan>Are you sure you want to delete this movie?</ModalSpan>
      <ModalButtonWrapper>
        <Button onClick={handleDeleteMovieClick}>Confirm</Button>
      </ModalButtonWrapper>
    </DeleteMovieModalWrapper>
  );
};

DeleteMovieModal.propTypes = {
  values: modalValuesDeleteType,
  onValuesChange: func
};

export { DeleteMovieModal };
