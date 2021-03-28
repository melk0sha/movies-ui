import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { arrayOf, func } from "prop-types";
import { getMoviesByParams } from "actions";
import { movieType } from "types";
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

const ResultsSection = ({ movies = [], onMoviesByParamsGet }) => {
  useEffect(() => {
    onMoviesByParamsGet({ sortBy: SORT_BY_DEFAULT_VALUE });
  }, []);

  return (
    <ResultsSectionWrapper>
      <ResultsSectionHeader>
        <Genres />
        <MoviesSorting />
      </ResultsSectionHeader>

      {movies?.length ? (
        <>
          <MoviesFoundSpan>{movies.length} movies found</MoviesFoundSpan>
          <Movies />
        </>
      ) : (
        <NoMovieFoundSpan>No Movie Found</NoMovieFoundSpan>
      )}
    </ResultsSectionWrapper>
  );
};

ResultsSection.propTypes = {
  movies: arrayOf(movieType),
  onMoviesByParamsGet: func
};

const mapStateToProps = (state) => ({
  movies: state.movies.movieList
});

const mapDispatchToProps = (dispatch) => ({
  onMoviesByParamsGet: bindActionCreators(getMoviesByParams, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsSection);
