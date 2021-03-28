import React, { useCallback, useMemo } from "react";
import { connect } from "react-redux";
import { movieType } from "types";
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
import noImagePicture from "assets/images/no_picture.jpg";

const MovieSection = ({ movie = {} }) => {
  const genres = useMemo(() => movie.genres?.join(", "), [movie]);
  const year = useMemo(() => getYearFromReleaseDate(movie.release_date), [movie]);

  const handleSrcError = useCallback(({ target }) => {
    target.src = noImagePicture;
  }, []);

  return (
    <MovieSectionWrapper>
      {movie.id ? (
        <>
          <MovieImage src={movie.poster_path} alt={movie.title} onError={handleSrcError} />
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
        </>
      ) : (
        <MovieSpan>Sorry, but no movie was found.</MovieSpan>
      )}
    </MovieSectionWrapper>
  );
};

MovieSection.propTypes = {
  movie: movieType
};

const mapStateToProps = (state, ownProps) => {
  const { movieId } = ownProps;
  const movie = state.movies.movieList.find((movieItem) => movieItem.id === +movieId);

  return {
    movie
  };
};

export default connect(mapStateToProps)(MovieSection);
