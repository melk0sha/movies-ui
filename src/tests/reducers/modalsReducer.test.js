import { modalsReducer } from "reducers/modalsReducer";
import { modalsDefaultState } from "reducers/defaultStates";
import * as types from "consts/actions";
import { MODAL_TYPES } from "consts";

describe("Modals Reducer testing", () => {
  it("should return the initial state", () => {
    expect(modalsReducer(undefined, {})).toEqual(modalsDefaultState);
  });

  it("should handle SET_MODAL_VALUES", () => {
    const expectedState = {
      [MODAL_TYPES.ADD_MOVIE]: {
        title: "Movie"
      }
    };
    const action = {
      type: types.SET_MODAL_VALUES,
      payload: { values: { title: "Movie" }, modalType: MODAL_TYPES.ADD_MOVIE }
    };

    expect(modalsReducer({}, action)).toEqual(expectedState);
  });
});
