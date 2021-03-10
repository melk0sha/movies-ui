import { arrayOf, number, shape, string } from "prop-types";

export const genreType = shape({
  id: number,
  value: string
});

export const movieType = shape({
  id: number,
  name: string,
  genres: arrayOf(string),
  year: string,
  image: string
});

export const modalValues = shape({
  addMovie: modalValuesAddType,
  editMovie: modalValuesEditType,
  deleteMovie: modalValuesDeleteType
});

export const modalValuesAddType = shape({
  title: string,
  releaseDate: string,
  movieUrl: string,
  selectedGenre: genreType,
  overview: string,
  runtime: string
});

export const modalValuesEditType = shape({
  id: number,
  title: string,
  releaseDate: string,
  movieUrl: string,
  selectedGenre: genreType,
  overview: string,
  runtime: string
});

export const modalValuesDeleteType = shape({
  id: number
});
