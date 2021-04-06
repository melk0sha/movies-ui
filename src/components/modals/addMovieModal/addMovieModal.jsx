import React, { useCallback } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { func } from "prop-types";
import { MODAL_TYPES } from "consts";
import { moviesSortByType } from "types";
import { alertShow, addMovieByData, getMoviesByParams } from "actions";
import UpdateMovieFields from "components/modals/shared/updateMovieFields";
import { ModalMovieWrapper, ModalTitle } from "components/modals/shared/styles/modals.styled";

const AddMovieModal = ({ moviesSortBy, onMovieAdd, onNewMoviesUpdate, onAddingSubmit, onAlertShow }) => {
  const handleAddMovieSubmit = useCallback(
    async (values) => {
      await onMovieAdd(values);
      await onNewMoviesUpdate({ sortBy: moviesSortBy });

      onAddingSubmit();
      onAlertShow();
    },
    [moviesSortBy, onAddingSubmit]
  );

  return (
    <ModalMovieWrapper>
      <ModalTitle>Add movie</ModalTitle>
      <UpdateMovieFields type={MODAL_TYPES.ADD_MOVIE} onFieldsSubmit={handleAddMovieSubmit} />
    </ModalMovieWrapper>
  );
};

AddMovieModal.propTypes = {
  moviesSortBy: moviesSortByType,
  onMovieAdd: func,
  onNewMoviesUpdate: func,
  onAddingSubmit: func,
  onAlertShow: func
};

const mapStateToProps = (state) => ({
  moviesSortBy: state.app.moviesSortBy
});

const mapDispatchToProps = (dispatch) => ({
  onMovieAdd: bindActionCreators(addMovieByData, dispatch),
  onNewMoviesUpdate: bindActionCreators(getMoviesByParams, dispatch),
  onAlertShow: bindActionCreators(alertShow, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AddMovieModal);
