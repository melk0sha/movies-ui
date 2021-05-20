import * as actions from "actions/modalsActions";
import * as types from "consts/actions";
import { MODAL_TYPES } from "consts";

describe("Modals Actions testing", () => {
  it("should create an action to set modal values", () => {
    const modalValues = { title: "Title" };
    const values = { values: modalValues, modalType: MODAL_TYPES.ADD_MOVIE };
    const expectedAction = {
      type: types.SET_MODAL_VALUES,
      payload: values
    };

    expect(actions.setModalValues(modalValues, MODAL_TYPES.ADD_MOVIE)).toEqual(expectedAction);
  });
});
