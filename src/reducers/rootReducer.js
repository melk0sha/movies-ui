import { combineReducers } from "redux";
import { appReducer } from "reducers/appReducer";
import { moviesReducer } from "reducers/moviesReducer";
import { modalsReducer } from "reducers/modalsReducer";

export const rootReducer = combineReducers({ app: appReducer, movies: moviesReducer, modals: modalsReducer });
