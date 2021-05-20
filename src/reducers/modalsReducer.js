import { modalsDefaultState } from "reducers/defaultStates";
import { SET_MODAL_VALUES } from "consts/actions";

const initialState = modalsDefaultState;

export const modalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODAL_VALUES:
      return {
        ...state,
        [action.payload.modalType]: { ...action.payload.values }
      };
    default:
      return state;
  }
};
