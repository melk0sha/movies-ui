import React, { useCallback } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { func, string } from "prop-types";
import { MODAL_TYPES } from "consts";
import { moviesSortByType } from "types";
import { alertShow, addMovieByData, getMoviesByParams } from "actions";
import UpdateMovieFields from "components/modals/shared/updateMovieFields";
import { ModalMovieWrapper, ModalTitle } from "components/modals/shared/styles/modals.styled";

const AddMovieModal = ({
  moviesSortBy,
  onMovieAdd,
  searchValue,
  activeGenre,
  onNewMoviesUpdate,
  onAddingSubmit,
  onAlertShow
}) => {
  const handleAddMovieSubmit = useCallback(
    async (values) => {
      await onMovieAdd(values);
      await onNewMoviesUpdate({ sortBy: moviesSortBy, search: searchValue, searchBy: "title", filter: activeGenre });

      onAddingSubmit();
      onAlertShow();
    },
    [moviesSortBy, searchValue, activeGenre, onAddingSubmit]
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
  searchValue: string,
  activeGenre: string,
  onMovieAdd: func,
  onNewMoviesUpdate: func,
  onAddingSubmit: func,
  onAlertShow: func
};

const mapStateToProps = (state) => ({
  moviesSortBy: state.app.moviesSortBy,
  searchValue: state.app.searchValue,
  activeGenre: state.app.activeGenre
});

const mapDispatchToProps = (dispatch) => ({
  onMovieAdd: bindActionCreators(addMovieByData, dispatch),
  onNewMoviesUpdate: bindActionCreators(getMoviesByParams, dispatch),
  onAlertShow: bindActionCreators(alertShow, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AddMovieModal);
