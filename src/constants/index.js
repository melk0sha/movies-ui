export const BUTTON_SIZE = {
  xs: "xs",
  sm: "sm",
  md: "md",
  lg: "lg"
};

export const SORT_BY_VALUES = {
  RELEASE_DATE: {
    id: 0,
    value: "Release Date"
  },
  RATING: {
    id: 1,
    value: "Rating"
  }
};

export const SORT_BY_OPTIONS = [SORT_BY_VALUES.RELEASE_DATE, SORT_BY_VALUES.RATING];

export const SEARCH_PLACEHOLDER_TEXT = "What do you want to watch?";

export const ACTION_MENU_MOVIE_VALUES = {
  EDIT: {
    id: 0,
    value: "Edit"
  },
  DELETE: {
    id: 1,
    value: "Delete"
  }
};

export const ACTION_MENU_MOVIE_OPTIONS = [ACTION_MENU_MOVIE_VALUES.EDIT, ACTION_MENU_MOVIE_VALUES.DELETE];

export const MODAL_TYPES = {
  ADD_MOVIE: "addMovie",
  EDIT_MOVIE: "editMovie",
  DELETE_MOVIE: "deleteMovie"
};

export const PATHS = {
  HOME: "/",
  MOVIE: "/film/:id",
  RESULTS: "/search/:value"
};

export const ALL_GENRES_OPTION = {
  id: 0,
  value: "All"
};

export const SORT_BY_DEFAULT_VALUE = "release_date";
