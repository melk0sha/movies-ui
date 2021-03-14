import React, { useCallback } from "react";
import { arrayOf, func } from "prop-types";
import { genreType, movieType, modalValues } from "types";
import { Genres } from "components/resultsSection/genres";
import { MoviesSorting } from "components/resultsSection/moviesSorting";
import { Movies } from "components/resultsSection/movies";
import {
  ResultsSectionHeader,
  ResultsSectionWrapper,
  MoviesFoundSpan,
  NoMovieFoundSpan
} from "components/resultsSection/resultsSection.styled";

const ResultsSection = ({
  genres = [],
  movies = [],
  modalValues = {},
  defaultModalValues = {},
  onModalValuesChange: handleModalValuesChange,
  onMovieUpdate
}) => {
  const handleMovieDelete = useCallback(
    (movieId) => {
      const movieIndex = movies.findIndex((movie) => movie.id === movieId);
      movies.splice(movieIndex, 1);

      onMovieUpdate(movies);
    },
    [movies, onMovieUpdate]
  );

  return (
    <ResultsSectionWrapper>
      <ResultsSectionHeader>
        <Genres genres={genres} />
        <MoviesSorting />
      </ResultsSectionHeader>

      {movies?.length ? (
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
};

ResultsSection.propTypes = {
  genres: arrayOf(genreType),
  movies: arrayOf(movieType),
  modalValues: modalValues,
  defaultModalValues: modalValues,
  onModalValuesChange: func,
  onMovieUpdate: func
};

export { ResultsSection };
