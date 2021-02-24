import genres_JSON from "api/__mock__/genres.json";
import movies_JSON from "api/__mock__/movies.json";

export const getGenres = () => genres_JSON.genres;

export const getMovies = () => movies_JSON.movies;
