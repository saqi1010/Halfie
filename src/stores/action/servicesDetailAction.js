import {  SERVICES_DETAIL_REQUEST, SERVICES_DETAIL_SUCCESS, SERVICES_DETAIL_FAILURE } from "../actionType/actionType";
export const servicesDetailRequest = (payload) => ({
  type: SERVICES_DETAIL_REQUEST,
  payload: payload,
});
export const servicesDetailSuccess = (data) => {
  return {
    type: SERVICES_DETAIL_SUCCESS,
    payload: data,
  };
};
export const servicesDetailFailure = (error) => ({
  type: SERVICES_DETAIL_FAILURE,
  payload: error,
});
