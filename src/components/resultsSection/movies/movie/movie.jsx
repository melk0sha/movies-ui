import React, { Component } from "react";
import { arrayOf, number, shape, string } from "prop-types";
import { ACTION_MENU_MOVIE_VALUES, ACTION_MENU_MOVIE_OPTIONS } from "consts";
import { genreType } from "types";
import {
  MovieWrapper,
  MovieImageWrapper,
  MovieImage,
  MovieInfoWrapper,
  MovieTitle,
  MovieGenres,
  MovieYear,
  StyledActionMenu
} from "components/resultsSection/movies/movie/movie.styled";

class Movie extends Component {
  static defaultProps = {
    movie: {},
    genres: []
  };

  handleOptionClick = (option) => {
    if (option.id === ACTION_MENU_MOVIE_VALUES.EDIT.id) {
      console.log("Edit was clicked");
    }

    if (option.id === ACTION_MENU_MOVIE_VALUES.DELETE.id) {
      console.log("Delete was clicked");
    }
  };

  render() {
    const { handleOptionClick } = this;
    const { movie, genres } = this.props;
    const { image, genreIds, name, year } = movie;

    const genresText = genreIds.map((genreId) => genres.find((genre) => genre.id === genreId).name).join(", ");

    return (
      <MovieWrapper>
        <MovieImageWrapper>
          <StyledActionMenu options={ACTION_MENU_MOVIE_OPTIONS} onOptionClick={handleOptionClick} />
          <MovieImage src={image} alt={name} />
        </MovieImageWrapper>
        <MovieInfoWrapper>
          <MovieTitle>{name}</MovieTitle>
          <MovieYear>{year}</MovieYear>
        </MovieInfoWrapper>
        <MovieGenres>{genresText}</MovieGenres>
      </MovieWrapper>
    );
  }
}

Movie.propTypes = {
  movie: shape({
    id: number,
    name: string,
    genreIds: arrayOf(number),
    year: string,
    image: string
  }),
  genres: arrayOf(genreType)
};

export { Movie };
