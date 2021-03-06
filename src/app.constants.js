import { MODAL_TYPES } from "consts";

export const modalValuesDefaultState = {
  [MODAL_TYPES.ADD_MOVIE]: {
    title: "",
    releaseDate: "",
    movieUrl: "",
    selectedGenre: {},
    overview: "",
    runtime: ""
  },
  [MODAL_TYPES.EDIT_MOVIE]: {
    id: "",
    title: "",
    releaseDate: "",
    movieUrl: "",
    selectedGenre: {},
    overview: "",
    runtime: ""
  },
  [MODAL_TYPES.DELETE_MOVIE]: {
    movieId: null
  }
};
