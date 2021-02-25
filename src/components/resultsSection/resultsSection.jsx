import React, { useEffect, useState } from "react";
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

const ResultsSection = () => {
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const genresData = getGenres();
    const moviesData = getMovies();
    setGenres(genresData);
    setMovies(moviesData);
  }, [setGenres, setMovies]);

  return (
    <ResultsSectionWrapper>
      <ResultsSectionHeader>
        <Genres genres={genres} />
        <MoviesSorting />
      </ResultsSectionHeader>

      {movies.length ? (
        <>
          <MoviesFoundSpan>{movies.length} movies found</MoviesFoundSpan>
          <Movies movies={movies} />
        </>
      ) : (
        <NoMovieFoundSpan>No Movie Found</NoMovieFoundSpan>
      )}
    </ResultsSectionWrapper>
  );
};

export { ResultsSection };
