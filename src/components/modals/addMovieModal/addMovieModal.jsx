import React, { Component } from "react";
import { arrayOf, func } from "prop-types";
import { MODAL_TYPES } from "consts";
import { modalValuesAddType, genreType } from "types";
import { ModalMovieWrapper, ModalTitle } from "components/modals/shared/styles/modals.styled";
import { UpdateMovieFields } from "components/modals/shared/updateMovieFields";

class AddMovieModal extends Component {
  static defaultProps = {
    values: {},
    defaultValues: {}
  };

  handleValuesChange = (values) => {
    const { onValuesChange } = this.props;
    onValuesChange(values);
  };

  handleAddMovieSubmit = (e) => {
    e.preventDefault();
    console.log("Add Movie Submitting");
  };

  render() {
    const { handleValuesChange, handleAddMovieSubmit } = this;
    const { values, genres, defaultValues } = this.props;

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
  }
}

AddMovieModal.propTypes = {
  values: modalValuesAddType,
  defaultValues: modalValuesAddType,
  genres: arrayOf(genreType),
  onValuesChange: func
};

export { AddMovieModal };
