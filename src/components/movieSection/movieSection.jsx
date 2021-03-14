import React, { useMemo } from "react";
import { useRouteMatch } from "react-router-dom";
import { arrayOf } from "prop-types";
import { movieType } from "types";
import { PATHS } from "consts";
import { getYearFromReleaseDate } from "utils";
import {
  MovieSectionWrapper,
  MovieImage,
  MovieInfoSection,
  InfoWrapper,
  MovieTitle,
  MovieRating,
  MovieSpan,
  MovieGenres
} from "components/movieSection/movieSection.styled";

const MovieSection = ({ movies = [] }) => {
  const match = useRouteMatch(PATHS.MOVIE);

  const id = useMemo(() => match.params.id, [match]);
  const movie = useMemo(() => movies?.find((movieEl) => movieEl.id === +id) || {}, [movies, id]);
  const genres = useMemo(() => movie.genres?.join(", "), [movie]);
  const year = useMemo(() => getYearFromReleaseDate(movie.release_date), [movie]);

  return (
    <MovieSectionWrapper>
      <MovieImage src={movie.poster_path} alt={movie.title} />
      <MovieInfoSection>
        <InfoWrapper>
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieRating>{movie.vote_average}</MovieRating>
        </InfoWrapper>
        <MovieSpan>{movie.tagline}</MovieSpan>
        <MovieGenres>{genres}</MovieGenres>
        <InfoWrapper>
          <MovieSpan>{year}</MovieSpan>
          <MovieSpan>{movie.runtime} min</MovieSpan>
        </InfoWrapper>
        <MovieSpan>{movie.overview}</MovieSpan>
      </MovieInfoSection>
    </MovieSectionWrapper>
  );
};

MovieSection.propTypes = {
  movies: arrayOf(movieType)
};

export { MovieSection };
