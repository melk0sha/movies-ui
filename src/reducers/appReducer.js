import { ALERT_SHOW, ALERT_HIDE, SET_MOVIES_SORT_BY } from "consts/actions";
import { SORT_BY_DEFAULT_VALUE } from "consts";
import { getValueToSortBy } from "utils";

const initialState = {
  moviesSortBy: SORT_BY_DEFAULT_VALUE,
  alertShown: false
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
    default:
      return state;
  }
};
