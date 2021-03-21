import { combineReducers } from "redux";
import { moviesReducer } from "reducers/moviesReducer";
import { modalsReducer } from "reducers/modalsReducer";

export const rootReducer = combineReducers({ movies: moviesReducer, modals: modalsReducer });
