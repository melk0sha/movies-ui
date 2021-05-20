import { SET_MODAL_VALUES } from "consts/actions";

export const setModalValues = (values, modalType) => ({
  type: SET_MODAL_VALUES,
  payload: {
    values,
    modalType
  }
});
