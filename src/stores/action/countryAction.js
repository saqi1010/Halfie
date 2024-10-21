import { GET_COUNTRY_FAILURE, GET_COUNTRY_REQUEST, GET_COUNTRY_SUCCESS } from "../actionType/actionType";

export const countryRequest = (payload) => ({
  type: GET_COUNTRY_REQUEST,
  payload: null,
});
export const countrySuccess = (data) => {
  return {
    type: GET_COUNTRY_SUCCESS,
    payload: data,
  };
};
export const countryFailure = (error) => ({
  type: GET_COUNTRY_FAILURE,
  payload: error,
});
