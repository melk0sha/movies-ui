import { SET_MOVIES_SORT_BY } from "consts/actions";
import { SORT_BY_DEFAULT_VALUE } from "consts";
import { getValueToSortBy } from "utils";

const initialState = {
  moviesSortBy: SORT_BY_DEFAULT_VALUE
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES_SORT_BY:
      const moviesSortBy = getValueToSortBy(action.payload);

      return {
        ...state,
        moviesSortBy
      };
    default:
      return state;
  }
};
