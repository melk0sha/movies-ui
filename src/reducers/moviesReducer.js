import { CLEAR_REQUEST_RESULT, REQUEST_MOVIES_SUCCESS, REQUEST_MOVIES_ERROR } from "consts/actions";

const initialState = {
  error: false,
  movieList: [],
  genres: []
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_MOVIES_SUCCESS:
      return {
        ...state,
        movieList: [...action.payload]
      };
    case REQUEST_MOVIES_ERROR:
      return {
        ...state,
        error: true
      };
    case CLEAR_REQUEST_RESULT:
      return {
        ...state,
        error: false
      };
    default:
      return state;
  }
};
