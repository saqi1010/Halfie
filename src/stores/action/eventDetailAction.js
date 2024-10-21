import {  EVENTDETAIL_SUCCESS, EVENTDETAIL_REQUEST, EVENTDETAIL_FAILURE } from "../actionType/actionType";
export const eventDetailRequest = (payload) => ({
  type: EVENTDETAIL_REQUEST,
  payload: payload,
});
export const eventDetailSuccess = (data) => {
  return {
    type: EVENTDETAIL_SUCCESS,
    payload: data,
  };
};
export const eventDetailFailure = (error) => ({
  type: EVENTDETAIL_FAILURE,
  payload: error,
});
