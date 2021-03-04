import React, { Component } from "react";
import { arrayOf } from "prop-types";
import { getMovies } from "api";
import { genreType } from "types";
import { Genres } from "components/resultsSection/genres";
import { MoviesSorting } from "components/resultsSection/moviesSorting";
import { Movies } from "components/resultsSection/movies";
import {
  ResultsSectionHeader,
  ResultsSectionWrapper,
  MoviesFoundSpan,
  NoMovieFoundSpan
} from "components/resultsSection/resultsSection.styled";

class ResultsSection extends Component {
  static defaultProps = {
    genres: []
  };

  state = {
    movies: []
  };

  componentDidMount() {
    const moviesData = getMovies();

    this.setState({ movies: moviesData });
  }

  render() {
    const { movies } = this.state;
    const { genres } = this.props;

    return (
      <ResultsSectionWrapper>
        <ResultsSectionHeader>
          <Genres genres={genres} />
          <MoviesSorting />
        </ResultsSectionHeader>

        {movies.length ? (
          <>
            <MoviesFoundSpan>{movies.length} movies found</MoviesFoundSpan>
            <Movies movies={movies} genres={genres} />
          </>
        ) : (
          <NoMovieFoundSpan>No Movie Found</NoMovieFoundSpan>
        )}
      </ResultsSectionWrapper>
    );
  }
}

ResultsSection.propTypes = {
  genres: arrayOf(genreType)
};

export { ResultsSection };
