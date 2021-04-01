import React, { useCallback, useMemo } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { arrayOf, func, oneOf, oneOfType } from "prop-types";
import { MODAL_TYPES } from "consts";
import { modalValuesAddType, modalValuesEditType, genreType } from "types";
import { resetModalValues, updateModalValueField } from "actions";
import Button from "components/shared/button";
import DatePicker from "components/shared/datePicker";
import {
  ModalForm,
  ModalInput,
  ModalField,
  ModalDropdown
} from "components/modals/shared/updateMovieFields/updateMovieFields.styled";
import { ModalLabel, ModalButtonWrapper } from "components/modals/shared/styles/modals.styled";

const UpdateMovieFields = ({
  values = {},
  genres = [],
  onValuesChange,
  onValuesReset,
  type,
  onFieldsSubmit: handleFieldsSubmit
}) => {
  const submitButtonText = useMemo(() => (type === MODAL_TYPES.ADD_MOVIE ? "Submit" : "Save"), [type]);

  const handleResetClick = useCallback(
    (e) => {
      e.preventDefault();
      onValuesReset(type);
    },
    [type]
  );

  const handleValueChange = useCallback(
    (value, fieldType) => {
      onValuesChange(value, type, fieldType);
    },
    [type]
  );

  return (
    <ModalForm onSubmit={handleFieldsSubmit}>
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
        <DatePicker
          value={values.release_date}
          onDateChange={(date) => handleValueChange(date, "release_date")}
          id="release-date"
          placeholder="Select date"
          isClearable
        />
      </ModalField>
      <ModalField>
        <ModalLabel htmlFor="poster-path">Movie URL</ModalLabel>
        <ModalInput
          value={values.poster_path}
          onChange={({ target }) => handleValueChange(target.value, "poster_path")}
          id="poster-path"
          placeholder="Insert movie URL"
          type="text"
        />
      </ModalField>
      <ModalField>
        <ModalLabel htmlFor="genre">Genre</ModalLabel>
        <ModalDropdown
          id="genre"
          options={genres}
          selectedOptions={values.genres}
          defaultLabel="Select genre"
          onSelect={(options) => handleValueChange(options, "genres")}
          multiSelect
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
        <Button primary rounded onClick={handleResetClick}>
          Reset
        </Button>
        <Button rounded>{submitButtonText}</Button>
      </ModalButtonWrapper>
    </ModalForm>
  );
};

UpdateMovieFields.propTypes = {
  values: oneOfType([modalValuesAddType, modalValuesEditType]),
  onValuesChange: func,
  onValuesReset: func,
  genres: arrayOf(genreType),
  type: oneOf([MODAL_TYPES.ADD_MOVIE, MODAL_TYPES.EDIT_MOVIE]),
  onFieldsSubmit: func
};

const mapStateToProps = (state, ownProps) => ({
  values: state.modals[ownProps.type],
  genres: state.movies.genres.filter((genre) => genre.value !== "All")
});

const mapDispatchToProps = (dispatch) => ({
  onValuesChange: bindActionCreators(updateModalValueField, dispatch),
  onValuesReset: bindActionCreators(resetModalValues, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateMovieFields);
