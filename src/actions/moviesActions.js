import axios from "axios";
import { REQUEST_MOVIES_SUCCESS, REQUEST_MOVIES_ERROR, MAKE_GENRES, DELETE_MOVIE } from "consts/actions";
import { getUniqueGenres } from "utils";

const moviesUrl = "http://localhost:4000/movies";

export const requestMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(moviesUrl);
    const movies = response.data;

    dispatch(requestMoviesSuccess(movies.data));
    dispatch(makeGenres(getUniqueGenres(movies.data)));
  } catch (e) {
    dispatch(requestMoviesError(e.message));
  }
};

export const requestMoviesSuccess = (movies) => ({
  type: REQUEST_MOVIES_SUCCESS,
  payload: movies
});

export const requestMoviesError = (error) => ({
  type: REQUEST_MOVIES_ERROR,
  payload: error
});

export const makeGenres = (genres) => ({
  type: MAKE_GENRES,
  payload: genres
});

export const deleteMovie = (movieId) => ({
  type: DELETE_MOVIE,
  payload: movieId
});
