import { ALERT_SHOW, ALERT_HIDE, CHANGE_SEARCH_VALUE, CHANGE_ACTIVE_GENRE, SET_MOVIES_SORT_BY } from "consts/actions";
import { SORT_BY_DEFAULT_VALUE, ALL_GENRES_OPTION } from "consts";
import { getValueToSortBy } from "utils";

const initialState = {
  moviesSortBy: SORT_BY_DEFAULT_VALUE,
  alertShown: false,
  searchValue: "",
  activeGenre: ALL_GENRES_OPTION.value
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES_SORT_BY:
      const moviesSortBy = getValueToSortBy(action.payload);

      return {
        ...state,
        moviesSortBy
      };
    case ALERT_SHOW:
      return {
        ...state,
        alertShown: true
      };
    case ALERT_HIDE:
      return {
        ...state,
        alertShown: false
      };
    case CHANGE_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload
      };
    case CHANGE_ACTIVE_GENRE:
      return {
        ...state,
        activeGenre: action.payload
      };
    default:
      return state;
  }
};
