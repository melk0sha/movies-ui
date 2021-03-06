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
    movies: []
  };

  componentDidUpdate() {
    const { genres } = this.props;
    const { movies } = this.state;

    if (genres.length && !movies.length) {
      const moviesData = getMovies().map((movie) => {
        const genresText = movie.genreIds
          .map((genreId) => genres.find((genre) => genre.id === genreId)?.name)
          .join(", ");
        delete movie.genreIds;
        return { ...movie, genresText };
      });

      this.setState({ movies: moviesData });
    }
  }

  render() {
    const { movies } = this.state;
    const { genres, modalValues, defaultModalValues, onModalValuesChange } = this.props;

    return (
      <ResultsSectionWrapper>
        <ResultsSectionHeader>
          <Genres genres={genres} />
          <MoviesSorting />
        </ResultsSectionHeader>

        {movies.length ? (
          <>
            <MoviesFoundSpan>{movies.length} movies found</MoviesFoundSpan>
            <Movies
              movies={movies}
              genres={genres}
              modalValues={modalValues}
              defaultModalValues={defaultModalValues}
              onModalValuesChange={onModalValuesChange}
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
