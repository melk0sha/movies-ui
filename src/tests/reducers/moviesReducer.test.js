import { moviesReducer } from "reducers/moviesReducer";
import * as types from "consts/actions";

describe("Movies Reducer testing", () => {
  it("should return the initial state", () => {
    const initialState = {
      error: false,
      movieList: [],
      genres: []
    };

    expect(moviesReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle REQUEST_MOVIES_SUCCESS", () => {
    const movieList = [{ id: 1, title: "Movie" }];
    const expectedState = {
      movieList
    };
    const action = {
      type: types.REQUEST_MOVIES_SUCCESS,
      payload: movieList
    };

    expect(moviesReducer({}, action)).toEqual(expectedState);
  });

  it("should handle REQUEST_MOVIES_ERROR", () => {
    const expectedState = {
      error: true
    };
    const action = {
      type: types.REQUEST_MOVIES_ERROR
    };

    expect(moviesReducer({}, action)).toEqual(expectedState);
  });

  it("should handle CLEAR_REQUEST_RESULT", () => {
    const expectedState = {
      error: false
    };
    const action = {
      type: types.CLEAR_REQUEST_RESULT
    };

    expect(moviesReducer({}, action)).toEqual(expectedState);
  });
});
