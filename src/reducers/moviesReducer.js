import { REQUEST_MOVIES_SUCCESS, REQUEST_MOVIES_ERROR } from "consts/actions";

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
    default:
      return state;
  }
};
