import * as actions from "actions/appActions";
import * as types from "consts/actions";
import { SORT_BY_VALUES } from "consts";

describe("App Actions testing", () => {
  it("should create an action to set new sortBy value", () => {
    const sortByValue = SORT_BY_VALUES.RATING.value;
    const expectedAction = {
      type: types.SET_MOVIES_SORT_BY,
      payload: sortByValue
    };

    expect(actions.setMoviesSortBy(sortByValue)).toEqual(expectedAction);
  });

  it("should create an action to show an alert", () => {
    const expectedAction = {
      type: types.ALERT_SHOW
    };

    expect(actions.alertShow()).toEqual(expectedAction);
  });

  it("should create an action to hide an alert", () => {
    const expectedAction = {
      type: types.ALERT_HIDE
    };

    expect(actions.alertHide()).toEqual(expectedAction);
  });

  it("should create an action to change a search value", () => {
    const value = "Search";
    const expectedAction = {
      type: types.CHANGE_SEARCH_VALUE,
      payload: value
    };

    expect(actions.changeSearchValue(value)).toEqual(expectedAction);
  });

  it("should create an action to change a genre value", () => {
    const genreValue = "Adventure";
    const expectedAction = {
      type: types.CHANGE_ACTIVE_GENRE,
      payload: genreValue
    };

    expect(actions.changeActiveGenre(genreValue)).toEqual(expectedAction);
  });
});
