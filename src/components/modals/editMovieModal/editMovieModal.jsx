import React, { Component } from "react";
import { arrayOf, func } from "prop-types";
import { MODAL_TYPES } from "consts";
import { modalValuesAddType, genreType } from "types";
import { ModalMovieWrapper, ModalTitle, ModalLabel } from "components/modals/shared/styles/modals.styled";
import { StyledModalSpan } from "components/modals/editMovieModal/editMovieModal.styled";
import { UpdateMovieFields } from "components/modals/shared/updateMovieFields";

class EditMovieModal extends Component {
  static defaultProps = {
    values: {},
    defaultValues: {}
  };

  handleValuesChange = (values) => {
    const { onValuesChange } = this.props;
    onValuesChange(values);
  };

  handleEditMovieSubmit = (e) => {
    e.preventDefault();
    console.log("Edit Movie Submitting");
  };

  render() {
    const { handleValuesChange, handleEditMovieSubmit } = this;
    const { values, defaultValues, genres } = this.props;

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
  }
}

EditMovieModal.propTypes = {
  values: modalValuesAddType,
  defaultValues: modalValuesAddType,
  genres: arrayOf(genreType),
  onValuesChange: func
};

export { EditMovieModal };
