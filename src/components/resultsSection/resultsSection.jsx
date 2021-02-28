import React, { Component } from "react";
import { getGenres, getMovies } from "api";
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
  state = {
    genres: [],
    movies: []
  };

  componentDidMount() {
    const genresData = getGenres();
    const moviesData = getMovies();

    this.setState({ genres: genresData, movies: moviesData });
  }

  render() {
    const { genres, movies } = this.state;

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

export { ResultsSection };
