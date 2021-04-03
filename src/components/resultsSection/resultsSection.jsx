import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { func, number } from "prop-types";
import { getMoviesByParams } from "actions";
import { SORT_BY_DEFAULT_VALUE } from "consts";
import Genres from "components/resultsSection/genres";
import MoviesSorting from "components/resultsSection/moviesSorting";
import Movies from "components/resultsSection/movies";
import {
  ResultsSectionHeader,
  ResultsSectionWrapper,
  MoviesFoundSpan,
  NoMovieFoundSpan
} from "components/resultsSection/resultsSection.styled";

const ResultsSection = ({ moviesLength = 0, onMoviesByParamsGet }) => {
  useEffect(() => {
    onMoviesByParamsGet({ sortBy: SORT_BY_DEFAULT_VALUE });
  }, []);

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
    </ResultsSectionWrapper>
  );
};

ResultsSection.propTypes = {
  moviesLength: number,
  onMoviesByParamsGet: func
};

const mapStateToProps = (state) => ({
  moviesLength: state.movies.movieList.length
});

const mapDispatchToProps = (dispatch) => ({
  onMoviesByParamsGet: bindActionCreators(getMoviesByParams, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsSection);
