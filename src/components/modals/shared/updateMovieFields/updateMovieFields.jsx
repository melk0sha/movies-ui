import React, { Component } from "react";
import { arrayOf, func, oneOf } from "prop-types";
import { MODAL_TYPES } from "consts";
import { modalValuesAddType, genreType } from "types";
import {
  ModalForm,
  ModalInput,
  ModalField,
  ModalDropdown
} from "components/modals/shared/updateMovieFields/updateMovieFields.styled";
import { ModalLabel, ModalButtonWrapper } from "components/modals/shared/styles/modals.styled";
import { Button } from "components/shared/button";

class UpdateMovieFields extends Component {
  static defaultProps = {
    values: {},
    defaultValues: {}
  };

  handleResetClick = (e) => {
    e.preventDefault();
    const { defaultValues, onValuesChange, type, values } = this.props;
    const valuesWithId = type === MODAL_TYPES.EDIT_MOVIE && { ...defaultValues, id: values.id };
    onValuesChange({ values: valuesWithId || defaultValues, type });
  };

  handleValueChange = (value, valueType) => {
    const { values, onValuesChange, type } = this.props;
    onValuesChange({ values: { ...values, [valueType]: value }, type });
  };

  render() {
    const { handleResetClick, handleValueChange } = this;
    const { values, genres, type, onFieldsSubmit } = this.props;

    const submitButtonText = type === MODAL_TYPES.ADD_MOVIE ? "Submit" : "Save";

    return (
      <ModalForm onSubmit={onFieldsSubmit}>
        <ModalField>
          <ModalLabel htmlFor="title">Title</ModalLabel>
          <ModalInput
            value={values.title}
            onChange={({ target }) => handleValueChange(target.value, "title")}
            id="title"
            placeholder="Write title"
            type="text"
          />
        </ModalField>
        <ModalField>
          <ModalLabel htmlFor="release-date">Release Date</ModalLabel>
          {/* Will be DatePicker instead of release date*/}
          <ModalInput
            value={values.releaseDate}
            onChange={({ target }) => handleValueChange(target.value, "releaseDate")}
            id="release-date"
            placeholder="Select date"
            type="text"
          />
        </ModalField>
        <ModalField>
          <ModalLabel htmlFor="movie-url">Movie URL</ModalLabel>
          <ModalInput
            value={values.movieUrl}
            onChange={({ target }) => handleValueChange(target.value, "movieUrl")}
            id="movie-url"
            placeholder="Insert movie URL"
            type="text"
          />
        </ModalField>
        <ModalField>
          <ModalLabel htmlFor="genre">Genre</ModalLabel>
          <ModalDropdown
            id="genre"
            options={genres}
            selectedOption={values.selectedGenre}
            defaultLabel="Select genre"
            onSelect={(option) => handleValueChange(option, "selectedGenre")}
          />
        </ModalField>
        <ModalField>
          <ModalLabel htmlFor="overview">Overview</ModalLabel>
          <ModalInput
            value={values.overview}
            onChange={({ target }) => handleValueChange(target.value, "overview")}
            id="overview"
            placeholder="Write overview"
            type="text"
          />
        </ModalField>
        <ModalField>
          <ModalLabel htmlFor="run-time">Runtime</ModalLabel>
          <ModalInput
            value={values.runtime}
            onChange={({ target }) => handleValueChange(target.value, "runtime")}
            id="run-time"
            placeholder="Write runtime"
            type="text"
          />
        </ModalField>
        <ModalButtonWrapper>
          <Button primary onClick={handleResetClick}>
            Reset
          </Button>
          <Button>{submitButtonText}</Button>
        </ModalButtonWrapper>
      </ModalForm>
    );
  }
}

UpdateMovieFields.propTypes = {
  values: modalValuesAddType,
  defaultValues: modalValuesAddType,
  genres: arrayOf(genreType),
  onValuesChange: func,
  type: oneOf([MODAL_TYPES.ADD_MOVIE, MODAL_TYPES.EDIT_MOVIE]),
  onFieldsSubmit: func
};

export { UpdateMovieFields };
