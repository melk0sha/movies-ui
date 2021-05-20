import React, { useCallback } from "react";
import { generatePath, useHistory } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { func, number, string } from "prop-types";
import { MODAL_TYPES, PATHS } from "consts";
import { moviesSortByType } from "types";
import { alertShow, getMoviesByParams, deleteMovieById, requestMoviesSuccess } from "actions";
import Button from "components/shared/button";
import {
  ModalMovieWrapper,
  ModalTitle,
  ModalButtonWrapper,
  ModalSpan
} from "components/modals/shared/styles/modals.styled";

const DeleteMovieModal = ({
  movieId,
  moviesSortBy,
  searchValue,
  activeGenre,
  onMovieDelete,
  onDeletionSubmit,
  onNewMoviesUpdate,
  onAlertShow,
  onMoviesNotFound
}) => {
  const history = useHistory();

  const handleDeleteMovieClick = useCallback(async () => {
    const path = generatePath(searchValue ? PATHS.RESULTS : PATHS.HOME, searchValue && { value: searchValue });

    await onMovieDelete(movieId);
    onDeletionSubmit();

    if (searchValue) {
      await onNewMoviesUpdate({ sortBy: moviesSortBy, search: searchValue, searchBy: "title", filter: activeGenre });
    } else {
      onMoviesNotFound([]);
    }

    history.push(path);
    onAlertShow();
  }, [searchValue, activeGenre, movieId, moviesSortBy, onDeletionSubmit]);

  return (
    <ModalMovieWrapper>
      <ModalTitle>Delete movie</ModalTitle>
      <ModalSpan>Are you sure you want to delete this movie?</ModalSpan>
      <ModalButtonWrapper>
        <Button rounded onClick={handleDeleteMovieClick}>
          Confirm
        </Button>
      </ModalButtonWrapper>
    </ModalMovieWrapper>
  );
};

DeleteMovieModal.propTypes = {
  movieId: number,
  moviesSortBy: moviesSortByType,
  searchValue: string,
  activeGenre: string,
  onMovieDelete: func,
  onNewMoviesUpdate: func,
  onDeletionSubmit: func,
  onAlertShow: func,
  onMoviesNotFound: func
};

const mapStateToProps = (state) => ({
  movieId: state.modals[MODAL_TYPES.DELETE_MOVIE].id,
  moviesSortBy: state.app.moviesSortBy,
  searchValue: state.app.searchValue,
  activeGenre: state.app.activeGenre
});

const mapDispatchToProps = (dispatch) => ({
  onMovieDelete: bindActionCreators(deleteMovieById, dispatch),
  onNewMoviesUpdate: bindActionCreators(getMoviesByParams, dispatch),
  onAlertShow: bindActionCreators(alertShow, dispatch),
  onMoviesNotFound: bindActionCreators(requestMoviesSuccess, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteMovieModal);
