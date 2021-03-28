import { SET_MOVIES_SORT_BY } from "consts/actions";

export const setMoviesSortBy = (newSortByValue) => ({
  type: SET_MOVIES_SORT_BY,
  payload: newSortByValue
});
