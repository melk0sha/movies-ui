import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const configuredMockStore = configureMockStore(middlewares);

const mockStore = (initialState) => configuredMockStore(initialState);

export { mockStore };
