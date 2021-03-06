import { number, shape, string } from "prop-types";

export const genreType = shape({
  id: number,
  name: string
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
  movieId: number
});
