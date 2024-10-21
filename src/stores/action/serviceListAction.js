import {  SERVICES_REQUEST, SERVICES_SUCCESS, SERVICES_FAILURE } from "../actionType/actionType";
export const servicesListRequest = (payload) => ({
  type: SERVICES_REQUEST,
  payload: payload,
});
export const servicesListSuccess = (data) => {
  return {
    type: SERVICES_SUCCESS,
    payload: data,
  };
};
export const servicesListFailure = (error) => ({
  type: SERVICES_FAILURE,
  payload: error,
});
