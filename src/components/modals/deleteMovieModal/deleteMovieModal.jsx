import React, { useCallback } from "react";
import { func } from "prop-types";
import { modalValuesDeleteType } from "types";
import {
  ModalMovieWrapper,
  ModalTitle,
  ModalButtonWrapper,
  ModalSpan
} from "components/modals/shared/styles/modals.styled";
import { Button } from "components/shared/button";

const DeleteMovieModal = ({ values = {}, onDelete }) => {
  const handleDeleteMovieClick = useCallback(() => {
    console.log("Delete Movie Confirming", values.id);
    onDelete(values.id);
  }, [values]);

  return (
    <ModalMovieWrapper>
      <ModalTitle>Delete movie</ModalTitle>
      <ModalSpan>Are you sure you want to delete this movie?</ModalSpan>
      <ModalButtonWrapper>
        <Button onClick={handleDeleteMovieClick}>Confirm</Button>
      </ModalButtonWrapper>
    </ModalMovieWrapper>
  );
};

DeleteMovieModal.propTypes = {
  values: modalValuesDeleteType,
  onValuesChange: func
};

export { DeleteMovieModal };
