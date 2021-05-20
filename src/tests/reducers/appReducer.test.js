import { appReducer } from "reducers/appReducer";
import * as types from "consts/actions";
import { SORT_BY_DEFAULT_VALUE, ALL_GENRES_OPTION, SORT_BY_VALUES } from "consts";

describe("App Reducer testing", () => {
  it("should return the initial state", () => {
    const initialState = {
      moviesSortBy: SORT_BY_DEFAULT_VALUE,
      alertShown: false,
      searchValue: "",
      activeGenre: ALL_GENRES_OPTION.value
    };

    expect(appReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle SET_MOVIES_SORT_BY", () => {
    const expectedState = {
      moviesSortBy: "vote_average"
    };
    const action = {
      type: types.SET_MOVIES_SORT_BY,
      payload: SORT_BY_VALUES.RATING.value
    };

    expect(appReducer({}, action)).toEqual(expectedState);
  });

  it("should handle ALERT_SHOW", () => {
    const expectedState = {
      alertShown: true
    };
    const action = {
      type: types.ALERT_SHOW
    };

    expect(appReducer({}, action)).toEqual(expectedState);
  });

  it("should handle ALERT_HIDE", () => {
    const expectedState = {
      alertShown: false
    };
    const action = {
      type: types.ALERT_HIDE
    };

    expect(appReducer({}, action)).toEqual(expectedState);
  });

  it("should handle CHANGE_SEARCH_VALUE", () => {
    const searchValue = "Movie";
    const expectedState = {
      searchValue
    };
    const action = {
      type: types.CHANGE_SEARCH_VALUE,
      payload: searchValue
    };

    expect(appReducer({}, action)).toEqual(expectedState);
  });

  it("should handle CHANGE_ACTIVE_GENRE", () => {
    const activeGenre = "Adventure";
    const expectedState = {
      activeGenre
    };
    const action = {
      type: types.CHANGE_ACTIVE_GENRE,
      payload: activeGenre
    };

    expect(appReducer({}, action)).toEqual(expectedState);
  });
});
