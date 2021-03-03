import React, { Component } from "react";
import { genreType } from "types";
import {
  AddMovieModalWrapper,
  ModalTitle,
  ModalForm,
  ModalLabel,
  ModalInput,
  ModalField,
  ModalDropdown,
  ModalButtonWrapper
} from "components/addMovieModal/addMovieModal.styled";
import { Button } from "components/shared/button";
import { func, shape, string } from "prop-types";

class AddMovieModal extends Component {
  static defaultProps = {
    values: {}
  };

  render() {
    return (
      <AddMovieModalWrapper>
        <ModalTitle>Add movie</ModalTitle>
        <ModalForm>
          <ModalField>
            <ModalLabel htmlFor="title">Title</ModalLabel>
            <ModalInput id="title" placeholder="Write title" type="text" />
          </ModalField>
          <ModalField>
            <ModalLabel htmlFor="release-date">Release Date</ModalLabel>
            {/* Will be DatePicker instead of release date*/}
            <ModalInput id="release-date" placeholder="Select date" type="text" />
          </ModalField>
          <ModalField>
            <ModalLabel htmlFor="movie-url">Movie URL</ModalLabel>
            <ModalInput id="movie-url" placeholder="Insert movie URL" type="text" />
          </ModalField>
          <ModalField>
            <ModalLabel>Genre</ModalLabel>
            <ModalDropdown
              options={[
                { id: 1, value: "1" },
                { id: 2, value: "2" },
                { id: 3, value: "3" }
              ]}
              defaultSelectedOption={{ id: 1, value: "1" }}
            />
          </ModalField>
          <ModalField>
            <ModalLabel htmlFor="overview">Overview</ModalLabel>
            <ModalInput id="overview" placeholder="Write overview" type="text" />
          </ModalField>
          <ModalField>
            <ModalLabel htmlFor="run-time">Runtime</ModalLabel>
            <ModalInput id="run-time" placeholder="Write runtime" type="text" />
          </ModalField>
        </ModalForm>
        <ModalButtonWrapper>
          <Button primary>Reset</Button>
          <Button>Submit</Button>
        </ModalButtonWrapper>
      </AddMovieModalWrapper>
    );
  }
}

AddMovieModal.propTypes = {
  values: shape({
    title: string,
    releaseDate: string,
    movieUrl: string,
    genre: genreType,
    overview: string,
    runtime: string
  }),
  onValuesChange: func
};

export { AddMovieModal };
