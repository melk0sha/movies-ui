import React from "react";
import { arrayOf } from "prop-types";
import { movieType } from "types";

import { MovieSection } from "components/movieSection";

const Movie = ({ movies = [] }) => <MovieSection movies={movies} />;

Movie.propTypes = {
  movies: arrayOf(movieType)
};

export { Movie };
