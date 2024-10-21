import {  ALLEVENT_FAILURE, ALLEVENT_REQUEST, ALLEVENT_SUCCESS } from "../actionType/actionType";
export const allEventRequest = (payload,callback) => ({
  type: ALLEVENT_REQUEST,
  payload: payload,
  callback
});
export const allEventSuccess = (data) => {
  return {
    type: ALLEVENT_SUCCESS,
    payload: data,
  };
};
export const allEventFailure = (error) => ({
  type: ALLEVENT_FAILURE,
  payload: error,
});



