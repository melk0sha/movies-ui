import { modalsDefaultState } from "reducers/defaultStates";
import { RESET_MODAL_VALUES, UPDATE_MODAL_VALUE_FIELD } from "consts/actions";
import { MODAL_TYPES } from "consts";

const initialState = modalsDefaultState;

export const modalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MODAL_VALUE_FIELD:
      return {
        ...state,
        [action.payload.modalType]: {
          ...state[action.payload.modalType],
          [action.payload.fieldType]: action.payload.newValue
        }
      };
    case RESET_MODAL_VALUES:
      const valuesWithId = action.payload.modalType === MODAL_TYPES.EDIT_MOVIE && {
        ...modalsDefaultState[action.payload.modalType],
        id: state[action.payload.modalType].id
      };
      return {
        ...state,
        [action.payload.modalType]: { ...(valuesWithId || modalsDefaultState[action.payload.modalType]) }
      };
    default:
      return state;
  }
};
