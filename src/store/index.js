import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "reducers";

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), window.REDUX_DEVTOOLS_EXTENSION ? window.REDUX_DEVTOOLS_EXTENSION() : (f) => f)
);

export { store };
