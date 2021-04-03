import React, { useCallback, useMemo } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { func, oneOf, oneOfType } from "prop-types";
import { MODAL_TYPES, ALL_GENRES_OPTION } from "consts";
import { genres } from "consts/genres";
import { modalValuesAddType, modalValuesEditType } from "types";
import { resetModalValues, updateModalValueField } from "actions";
import Button from "components/shared/button";
import DatePicker from "components/shared/datePicker";
import { ModalLabel, ModalButtonWrapper } from "components/modals/shared/styles/modals.styled";
import {
  ModalForm,
  ModalInput,
  ModalField,
  ModalDropdown
} from "components/modals/shared/updateMovieFields/updateMovieFields.styled";

const genresList = genres.filter((genre) => genre.value !== ALL_GENRES_OPTION.value);

const UpdateMovieFields = ({
  values = {},
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
          autoComplete="off"
        />
      </ModalField>
      <ModalField>
        <ModalLabel htmlFor="release-date">Release Date</ModalLabel>
        <DatePicker
          date={values.release_date}
          onDateChange={(date) => handleValueChange(date, "release_date")}
          id="release-date"
          placeholderText="Select date"
          autoComplete="off"
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
          autoComplete="off"
        />
      </ModalField>
      <ModalField>
        <ModalLabel htmlFor="genre">Genre</ModalLabel>
        <ModalDropdown
          id="genre"
          options={genresList}
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
          autoComplete="off"
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
          autoComplete="off"
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
  type: oneOf([MODAL_TYPES.ADD_MOVIE, MODAL_TYPES.EDIT_MOVIE]),
  onFieldsSubmit: func
};

const mapStateToProps = (state, ownProps) => ({
  values: state.modals[ownProps.type]
});

const mapDispatchToProps = (dispatch) => ({
  onValuesChange: bindActionCreators(updateModalValueField, dispatch),
  onValuesReset: bindActionCreators(resetModalValues, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateMovieFields);
