import React, { useCallback, useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { bool, func, number } from "prop-types";
import { alertHide, getMoviesByParams, clearRequestResult } from "actions";
import { SORT_BY_DEFAULT_VALUE } from "consts";
import Genres from "components/resultsSection/genres";
import MoviesSorting from "components/resultsSection/moviesSorting";
import Movies from "components/resultsSection/movies";
import Alert from "components/shared/alert/alert";
import {
  ResultsSectionHeader,
  ResultsSectionWrapper,
  MoviesFoundSpan,
  NoMovieFoundSpan
} from "components/resultsSection/resultsSection.styled";

const ResultsSection = ({
  moviesLength = 0,
  isAlertShown,
  isRequestError,
  onMoviesByParamsGet,
  onErrorClear,
  onAlertHide
}) => {
  useEffect(() => {
    onMoviesByParamsGet({ sortBy: SORT_BY_DEFAULT_VALUE });
  }, []);

  const handleClose = useCallback(() => {
    onErrorClear();
    onAlertHide();
  }, [onErrorClear, onAlertHide]);

  return (
    <ResultsSectionWrapper>
      <ResultsSectionHeader>
        <Genres />
        <MoviesSorting />
      </ResultsSectionHeader>

      {moviesLength ? (
        <>
          <MoviesFoundSpan>{moviesLength} movies found</MoviesFoundSpan>
          <Movies />
        </>
      ) : (
        <NoMovieFoundSpan>No Movie Found</NoMovieFoundSpan>
      )}

      <Alert show={isAlertShown} isError={isRequestError} onClose={handleClose} />
    </ResultsSectionWrapper>
  );
};

ResultsSection.propTypes = {
  moviesLength: number,
  isRequestError: bool,
  isAlertShown: bool,
  onMoviesByParamsGet: func,
  onErrorClear: func,
  onAlertHide: func
};

const mapStateToProps = (state) => ({
  moviesLength: state.movies.movieList.length,
  isRequestError: state.movies.error,
  isAlertShown: state.app.alertShown
});

const mapDispatchToProps = (dispatch) => ({
  onMoviesByParamsGet: bindActionCreators(getMoviesByParams, dispatch),
  onErrorClear: bindActionCreators(clearRequestResult, dispatch),
  onAlertHide: bindActionCreators(alertHide, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsSection);
