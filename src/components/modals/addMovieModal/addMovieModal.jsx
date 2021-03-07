import React, { Component } from "react";
import { arrayOf, func } from "prop-types";
import { MODAL_TYPES } from "consts";
import { modalValuesAddType, genreType } from "types";
import {
  AddMovieModalWrapper,
  ModalTitle,
  ModalForm,
  ModalLabel,
  ModalInput,
  ModalField,
  ModalDropdown,
  ModalButtonWrapper
} from "components/modals/addMovieModal/addMovieModal.styled";
import { Button } from "components/shared/button";

class AddMovieModal extends Component {
  static defaultProps = {
    values: {},
    defaultValues: {}
  };

  handleResetClick = (e) => {
    e.preventDefault();
    const { defaultValues, onValuesChange } = this.props;
    onValuesChange({ values: defaultValues, type: MODAL_TYPES.ADD_MOVIE });
  };

  handleValueChange = (value, type) => {
    const { values, onValuesChange } = this.props;
    onValuesChange({ values: { ...values, [type]: value }, type: MODAL_TYPES.ADD_MOVIE });
  };

  handleAddMovieSubmit = (e) => {
    e.preventDefault();
    console.log("Add Movie Submitting");
  };

  render() {
    const { handleResetClick, handleValueChange, handleAddMovieSubmit } = this;
    const { values, genres } = this.props;

    return (
      <AddMovieModalWrapper>
        <ModalTitle>Add movie</ModalTitle>
        <ModalForm onSubmit={handleAddMovieSubmit}>
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
            <ModalLabel>Genre</ModalLabel>
            <ModalDropdown
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
            <Button>Submit</Button>
          </ModalButtonWrapper>
        </ModalForm>
      </AddMovieModalWrapper>
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
