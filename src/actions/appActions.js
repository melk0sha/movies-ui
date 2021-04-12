import { ALERT_SHOW, ALERT_HIDE, CHANGE_SEARCH_VALUE, SET_MOVIES_SORT_BY } from "consts/actions";

export const setMoviesSortBy = (newSortByValue) => ({
  type: SET_MOVIES_SORT_BY,
  payload: newSortByValue
});

export const alertShow = () => ({
  type: ALERT_SHOW
});

export const alertHide = () => ({
  type: ALERT_HIDE
});

export const changeSearchValue = (newValue) => ({
  type: CHANGE_SEARCH_VALUE,
  payload: newValue
});
