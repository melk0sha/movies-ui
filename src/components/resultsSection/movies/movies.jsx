import React, { Component } from "react";
import { arrayOf, number, shape, string } from "prop-types";
import { genreType } from "types";
import { Movie } from "components/resultsSection/movies/movie";
import { MoviesWrapper } from "components/resultsSection/movies/movies.styled";

class Movies extends Component {
  static defaultProps = {
    movies: [],
    genres: []
  };

  render() {
    const { genres, movies } = this.props;

    const MoviesCards = movies.map((movie) => <Movie movie={movie} key={movie.id || Math.random()} genres={genres} />);

    return <MoviesWrapper>{MoviesCards}</MoviesWrapper>;
  }
}

Movies.propTypes = {
  movies: arrayOf(
    shape({
      id: number,
      name: string,
      genreIds: arrayOf(number),
      year: string,
      image: string
    })
  ),
  genres: arrayOf(genreType)
};

export { Movies };
