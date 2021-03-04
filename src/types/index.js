import { number, shape, string } from "prop-types";

export const genreType = shape({
  id: number,
  name: string
});

export const addMovieValuesType = shape({
  title: string,
  releaseDate: string,
  movieUrl: string,
  selectedGenre: genreType,
  overview: string,
  runtime: string
});
