import React, { Component } from "react";
import { arrayOf, func } from "prop-types";
import { modalValuesAddType, genreType } from "types";
import {
  EditMovieModalWrapper,
  ModalTitle,
  ModalForm,
  ModalLabel,
  ModalInput,
  ModalField,
  ModalDropdown,
  ModalButtonWrapper,
  ModalSpan
} from "components/modals/editMovieModal/editMovieModal.styled";
import { Button } from "components/shared/button";

class EditMovieModal extends Component {
  static defaultProps = {
    values: {},
    defaultValues: {}
  };

  handleResetClick = (e) => {
    e.preventDefault();
    const { defaultValues, onValuesChange } = this.props;
    onValuesChange(defaultValues);
  };

  handleValueChange = (value, type) => {
    const { values, onValuesChange } = this.props;
    onValuesChange({ ...values, [type]: value });
  };

  handleEditMovieSubmit = (e) => {
    e.preventDefault();
    console.log("Edit Movie Submitting");
  };

  render() {
    const { handleResetClick, handleValueChange, handleEditMovieSubmit } = this;
    const { values, genres } = this.props;

    return (
      <EditMovieModalWrapper>
        <ModalTitle>Edit movie</ModalTitle>
        <ModalLabel>Movie ID</ModalLabel>
        <ModalSpan>{123456}</ModalSpan>
        <ModalForm onSubmit={handleEditMovieSubmit}>
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
      </EditMovieModalWrapper>
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
