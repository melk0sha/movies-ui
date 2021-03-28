import axios from "axios";
import { REQUEST_MOVIES_SUCCESS, REQUEST_MOVIES_ERROR, MAKE_GENRES } from "consts/actions";
import { getUniqueGenres } from "utils";

const moviesUrl = "http://localhost:4000/movies";
const defaultSortOrder = "desc";

export const getMoviesByParams = (params) => async (dispatch) => {
  try {
    const response = await axios.get(moviesUrl, {
      params: { ...params, sortOrder: params.sortOrder || defaultSortOrder }
    });
    const movies = response.data;

    dispatch(requestMoviesSuccess(movies.data));
    dispatch(makeGenres(getUniqueGenres(movies.data)));
  } catch (e) {
    dispatch(requestMoviesError(e.message));
  }
};

export const addMovieByData = (data) => async (dispatch) => {
  try {
    await axios.post(moviesUrl, {
      ...data,
      runtime: +data.runtime || 0,
      genres: data.genres.map((genre) => genre.value)
    });
  } catch (e) {
    dispatch(requestMoviesError(e.message));
  }
};

export const deleteMovieById = (id) => async (dispatch) => {
  try {
    await axios.delete(`${moviesUrl}/${id}`, {
      id
    });
  } catch (e) {
    dispatch(requestMoviesError(e.message));
  }
};

export const updateMovieByData = (data) => async (dispatch) => {
  try {
    const updatedData = { ...data };

    Object.keys(updatedData).forEach((key) => !updatedData[key] && delete updatedData[key]);

    await axios.put(moviesUrl, {
      ...updatedData,
      runtime: +updatedData.runtime || 0,
      genres: updatedData.genres.map((genre) => genre.value)
    });
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
