import { RESET_MODAL_VALUES, UPDATE_MODAL_VALUE_FIELD } from "consts/actions";

export const updateModalValueField = (newValue, modalType, fieldType) => ({
  type: UPDATE_MODAL_VALUE_FIELD,
  payload: { newValue, modalType, fieldType }
});

export const resetModalValues = (modalType) => ({
  type: RESET_MODAL_VALUES,
  payload: { modalType }
});
