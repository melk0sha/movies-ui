import { MODAL_TYPES } from "consts";

const movieProperties = {
  title: "",
  releaseDate: "",
  movieUrl: "",
  selectedGenres: [],
  overview: "",
  runtime: ""
};

export const modalsDefaultState = {
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
