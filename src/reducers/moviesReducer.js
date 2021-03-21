import { REQUEST_MOVIES_SUCCESS, REQUEST_MOVIES_ERROR, MAKE_GENRES, DELETE_MOVIE } from "consts/actions";

const initialState = {
  error: null,
  movieList: [],
  genres: []
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_MOVIES_SUCCESS:
      return {
        ...state,
        error: null,
        movieList: [...state.movieList, ...action.payload]
      };
    case REQUEST_MOVIES_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case MAKE_GENRES:
      return {
        ...state,
        genres: action.payload
      };
    case DELETE_MOVIE:
      const newMovieList = [...state.movieList];
      const movieIndex = newMovieList.findIndex((movie) => movie.id === action.payload);
      newMovieList.splice(movieIndex, 1);

      return {
        ...state,
        movieList: newMovieList
      };
    default:
      return state;
  }
};
