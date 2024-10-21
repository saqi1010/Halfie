import {  ATTANDEES_SUCCESS, ATTANDEES_REQUEST, ATTANDEES_FAILURE } from "../actionType/actionType";
export const attendeeRequest = (payload) => ({
  type: ATTANDEES_REQUEST,
  payload: payload,
});
export const attendeeSuccess = (data) => {
  return {
    type: ATTANDEES_SUCCESS,
    payload: data,
  };
};
export const attendeeFailure = (error) => ({
  type: ATTANDEES_FAILURE,
  payload: error,
});
