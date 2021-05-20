import React, { useCallback, useEffect, useMemo, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { func, number, string } from "prop-types";
import { movieType } from "types";
import { getMovieById, changeSearchValue } from "actions";
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

const MovieSection = ({ movie = {}, movieId, moviesLength, searchValue, onMovieByIdGet, onSearchValueChange }) => {
  const [isFirstMovieRequest, setFirstMovieRequest] = useState(true);
  const genres = useMemo(() => movie.genres?.join(", "), [movie]);
  const year = useMemo(() => getYearFromReleaseDate(movie.release_date), [movie]);

  useEffect(() => {
    if (!moviesLength && isFirstMovieRequest) {
      !movie.id && onMovieByIdGet(movieId);
      movie.title && onSearchValueChange(movie.title);

      setFirstMovieRequest(false);
    }

    if (!searchValue) {
      movie.title && onSearchValueChange(movie.title);
    }
  }, [isFirstMovieRequest, movie, movieId, moviesLength, searchValue]);

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
              {!!movie.vote_average && <MovieRating>{movie.vote_average}</MovieRating>}
            </InfoWrapper>
            {!!movie.tagline && <MovieSpan>{movie.tagline}</MovieSpan>}
            <MovieGenres>{genres}</MovieGenres>
            <InfoWrapper>
              {!!year && <MovieSpan>{year}</MovieSpan>}
              {!!movie.runtime && <MovieSpan>{movie.runtime} min</MovieSpan>}
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
  movie: movieType,
  movieId: string,
  moviesLength: number,
  searchValue: string,
  onMovieByIdGet: func,
  onSearchValueChange: func
};

const mapStateToProps = (state, ownProps) => {
  const { movieId } = ownProps;
  const movie = state.movies.movieList.find((movieItem) => movieItem.id === +movieId);
  const moviesLength = state.movies.movieList.length;
  const searchValue = state.app.searchValue;

  return {
    movie,
    movieId,
    moviesLength,
    searchValue
  };
};

const mapDispatchToProps = (dispatch) => ({
  onMovieByIdGet: bindActionCreators(getMovieById, dispatch),
  onSearchValueChange: bindActionCreators(changeSearchValue, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieSection);
