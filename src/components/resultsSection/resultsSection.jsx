import React, { Component } from "react";
import { arrayOf, func } from "prop-types";
import { getMovies } from "api";
import { genreType, modalValues } from "types";
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
    genres: [],
    modalValues: {},
    defaultModalValues: {}
  };

  state = {
    movies: null
  };

  componentDidUpdate() {
    const { genres } = this.props;
    const { movies } = this.state;

    if (genres.length && !movies) {
      const moviesData = getMovies().map((movie) => {
        const genresText = movie.genreIds
          .map((genreId) => genres.find((genre) => genre.id === genreId)?.value)
          .join(", ");
        delete movie.genreIds;
        return { ...movie, genresText };
      });

      this.setState({ movies: moviesData });
    }
  }

  handleMovieDelete = (movieId) => {
    const { movies } = this.state;
    const movieIndex = movies.findIndex((movie) => movie.id === movieId);
    movies.splice(movieIndex, 1);

    this.setState({ movies });
  };

  handleModalValuesChange = (values) => {
    const { onModalValuesChange } = this.props;
    onModalValuesChange(values);
  };

  render() {
    const { handleMovieDelete, handleModalValuesChange } = this;
    const { movies } = this.state;
    const { genres, modalValues, defaultModalValues } = this.props;

    return (
      <ResultsSectionWrapper>
        <ResultsSectionHeader>
          <Genres genres={genres} />
          <MoviesSorting />
        </ResultsSectionHeader>

        {movies && movies.length ? (
          <>
            <MoviesFoundSpan>{movies.length} movies found</MoviesFoundSpan>
            <Movies
              movies={movies}
              genres={genres}
              modalValues={modalValues}
              defaultModalValues={defaultModalValues}
              onModalValuesChange={handleModalValuesChange}
              onMovieDelete={handleMovieDelete}
            />
          </>
        ) : (
          <NoMovieFoundSpan>No Movie Found</NoMovieFoundSpan>
        )}
      </ResultsSectionWrapper>
    );
  }
}

ResultsSection.propTypes = {
  genres: arrayOf(genreType),
  modalValues: modalValues,
  defaultModalValues: modalValues,
  onModalValuesChange: func
};

export { ResultsSection };
