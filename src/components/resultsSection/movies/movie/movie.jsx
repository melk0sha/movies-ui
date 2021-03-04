import React, { Component } from "react";
import { arrayOf, func, number, shape, string } from "prop-types";
import { ACTION_MENU_MOVIE_VALUES, ACTION_MENU_MOVIE_OPTIONS } from "consts";
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
    movie: {}
  };

  handleOptionClick = (option) => {
    const { movie, onEditClick, onDeleteClick } = this.props;

    if (option.id === ACTION_MENU_MOVIE_VALUES.EDIT.id) {
      onEditClick(movie);
    } else if (option.id === ACTION_MENU_MOVIE_VALUES.DELETE.id) {
      onDeleteClick(option);
    }
  };

  render() {
    const { handleOptionClick } = this;
    const { movie } = this.props;
    const { image, genresText, name, year } = movie;

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
  onEditClick: func,
  onDeleteClick: func
};

export { Movie };
