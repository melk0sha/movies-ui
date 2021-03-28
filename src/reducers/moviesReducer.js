import { REQUEST_MOVIES_SUCCESS, REQUEST_MOVIES_ERROR, MAKE_GENRES } from "consts/actions";
import { ALL_GENRES_OPTION } from "consts";

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
        movieList: [...action.payload]
      };
    case REQUEST_MOVIES_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case MAKE_GENRES:
      return {
        ...state,
        genres: [ALL_GENRES_OPTION, ...action.payload]
      };
    default:
      return state;
  }
};
