import { ACCOUNTDELETE_FAILURE, ACCOUNTDELETE_REQUEST, ACCOUNTDELETE_SUCCESS } from "../actionType/actionType";

export const accountDeleteRequest = (payload) => ({
  type: ACCOUNTDELETE_REQUEST,
  payload: null,
});
export const accountDeleteSuccess = (data) => {
  return {
    type: ACCOUNTDELETE_SUCCESS,
    payload: data,
  };
};
export const accountDeleteFailure = (error) => ({
  type: ACCOUNTDELETE_FAILURE,
  payload: error,
});
