import React, { useCallback, useMemo } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { func, oneOf, oneOfType } from "prop-types";
import { useFormik } from "formik";
import { MODAL_TYPES } from "consts";
import { modalsDefaultState } from "reducers/defaultStates";
import { modalValuesAddType, modalValuesEditType } from "types";
import { setModalValues } from "actions";
import Button from "components/shared/button";
import DatePicker from "components/shared/datePicker";
import { genresList, validationSchema } from "components/modals/shared/updateMovieFields/updateMovieFields.constants";
import { ModalLabel, ModalButtonWrapper } from "components/modals/shared/styles/modals.styled";
import {
  ModalForm,
  ModalInput,
  ModalField,
  ModalDropdown,
  ModalFieldError
} from "components/modals/shared/updateMovieFields/updateMovieFields.styled";

const UpdateMovieFields = ({ movieValues = {}, type, onModalValuesUpdate, onFieldsSubmit }) => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: movieValues,
    validationSchema,
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: (values) => {
      const { id, poster_path, genres, title, release_date, overview, runtime } = values;
      const newValues = {
        id,
        title: title || modalsDefaultState[type].title,
        poster_path: poster_path || modalsDefaultState[type].poster_path,
        release_date: new Date(release_date) || modalsDefaultState[type].release_date,
        genres: genres || modalsDefaultState[type].genres,
        overview: overview || modalsDefaultState[type].overview,
        runtime: (runtime && String(runtime)) || modalsDefaultState[type].runtime
      };

      onModalValuesUpdate(newValues, type);
      onFieldsSubmit(newValues);
    }
  });

  const submitButtonText = useMemo(() => (type === MODAL_TYPES.ADD_MOVIE ? "Submit" : "Save"), [type]);

  const handleResetClick = useCallback(
    (e) => {
      e.preventDefault();

      formik.resetForm(movieValues);
    },
    [movieValues]
  );

  return (
    <ModalForm data-testid="add-movie-modal-submit" onSubmit={formik.handleSubmit}>
      <ModalField>
        <ModalLabel htmlFor="title">Title</ModalLabel>
        <ModalInput
          value={formik.values.title}
          onChange={formik.handleChange}
          id="title"
          placeholder="Write title"
          type="text"
          autoComplete="off"
        />
        {Boolean(formik.errors.title) && <ModalFieldError>{formik.errors.title}</ModalFieldError>}
      </ModalField>
      <ModalField>
        <ModalLabel htmlFor="release_date">Release Date</ModalLabel>
        <DatePicker
          date={formik.values.release_date}
          onDateChange={(date) => formik.setFieldValue("release_date", date)}
          id="release_date"
          placeholderText="Select date"
          autoComplete="off"
        />
        {Boolean(formik.errors.release_date) && <ModalFieldError>{formik.errors.release_date}</ModalFieldError>}
      </ModalField>
      <ModalField>
        <ModalLabel htmlFor="poster_path">Movie URL</ModalLabel>
        <ModalInput
          value={formik.values.poster_path}
          onChange={formik.handleChange}
          id="poster_path"
          placeholder="Insert movie URL"
          type="text"
          autoComplete="off"
        />
        {Boolean(formik.errors.poster_path) && <ModalFieldError>{formik.errors.poster_path}</ModalFieldError>}
      </ModalField>
      <ModalField>
        <ModalLabel htmlFor="genre">Genre</ModalLabel>
        <ModalDropdown
          id="genre"
          options={genresList}
          selectedOptions={formik.values.genres}
          defaultLabel="Select genre"
          onSelect={(options) => formik.setFieldValue("genres", options)}
          multiSelect
        />
        {Boolean(formik.errors.genres) && <ModalFieldError>{formik.errors.genres}</ModalFieldError>}
      </ModalField>
      <ModalField>
        <ModalLabel htmlFor="overview">Overview</ModalLabel>
        <ModalInput
          value={formik.values.overview}
          onChange={formik.handleChange}
          id="overview"
          placeholder="Write overview"
          type="text"
          autoComplete="off"
        />
        {Boolean(formik.errors.overview) && <ModalFieldError>{formik.errors.overview}</ModalFieldError>}
      </ModalField>
      <ModalField>
        <ModalLabel htmlFor="runtime">Runtime</ModalLabel>
        <ModalInput
          value={formik.values.runtime}
          onChange={formik.handleChange}
          id="runtime"
          placeholder="Write runtime"
          type="text"
          autoComplete="off"
        />
        {Boolean(formik.errors.runtime) && <ModalFieldError>{formik.errors.runtime}</ModalFieldError>}
      </ModalField>
      <ModalButtonWrapper>
        <Button primary rounded onClick={handleResetClick}>
          Reset
        </Button>
        <Button rounded type="submit">
          {submitButtonText}
        </Button>
      </ModalButtonWrapper>
    </ModalForm>
  );
};

UpdateMovieFields.propTypes = {
  movieValues: oneOfType([modalValuesAddType, modalValuesEditType]),
  type: oneOf([MODAL_TYPES.ADD_MOVIE, MODAL_TYPES.EDIT_MOVIE]),
  onModalValuesUpdate: func,
  onFieldsSubmit: func
};

const mapStateToProps = (state, ownProps) => ({
  movieValues: state.modals[ownProps.type]
});

const mapDispatchToProps = (dispatch) => ({
  onModalValuesUpdate: bindActionCreators(setModalValues, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateMovieFields);
