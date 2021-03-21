import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { arrayOf, func } from "prop-types";
import { requestMovies } from "actions";
import { movieType } from "types";
import Genres from "components/resultsSection/genres";
import MoviesSorting from "components/resultsSection/moviesSorting";
import Movies from "components/resultsSection/movies";
import {
  ResultsSectionHeader,
  ResultsSectionWrapper,
  MoviesFoundSpan,
  NoMovieFoundSpan
} from "components/resultsSection/resultsSection.styled";

const ResultsSection = ({ movies = [], onRequestMoviesData }) => {
  useEffect(() => {
    onRequestMoviesData();
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
  onRequestMoviesData: func
};

const mapStateToProps = (state) => ({
  movies: state.movies.movieList
});

const mapDispatchToProps = (dispatch) => ({
  onRequestMoviesData: bindActionCreators(requestMovies, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsSection);
