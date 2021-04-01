import { RESET_MODAL_VALUES, UPDATE_MODAL_VALUE_FIELD, SET_MODAL_VALUES_FOR_EDIT } from "consts/actions";

export const updateModalValueField = (newValue, modalType, fieldType) => ({
  type: UPDATE_MODAL_VALUE_FIELD,
  payload: { newValue, modalType, fieldType }
});

export const setModalValuesForEdit = (values) => ({
  type: SET_MODAL_VALUES_FOR_EDIT,
  payload: values
});

export const resetModalValues = (modalType) => ({
  type: RESET_MODAL_VALUES,
  payload: { modalType }
});
