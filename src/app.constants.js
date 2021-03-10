import { MODAL_TYPES } from "consts";

const movieProperties = {
  title: "",
  releaseDate: "",
  movieUrl: "",
  selectedGenre: {},
  overview: "",
  runtime: ""
};

export const modalValuesDefaultState = {
  [MODAL_TYPES.ADD_MOVIE]: {
    ...movieProperties
  },
  [MODAL_TYPES.EDIT_MOVIE]: {
    id: null,
    ...movieProperties
  },
  [MODAL_TYPES.DELETE_MOVIE]: {
    id: null
  }
};

export const updateMovieModalDefaultValues = {
  [MODAL_TYPES.EDIT_MOVIE]: modalValuesDefaultState[MODAL_TYPES.EDIT_MOVIE],
  [MODAL_TYPES.DELETE_MOVIE]: modalValuesDefaultState[MODAL_TYPES.DELETE_MOVIE]
};
