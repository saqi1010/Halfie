import {  OURSERVICE_FAILURE, OURSERVICE_REQUEST, OURSERVICE_SUCCESS } from "../actionType/actionType";
export const ourServicesRequest = () => ({
  type: OURSERVICE_REQUEST,
  payload: null,
});
export const ourServicesSuccess = (data) => {
  return {
    type: OURSERVICE_SUCCESS,
    payload: data,
  };
};
export const ourServicesFailure = (error) => ({
  type: OURSERVICE_FAILURE,
  payload: error,
});
