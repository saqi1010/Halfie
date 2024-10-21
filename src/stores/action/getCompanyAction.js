import { GET_COMPANY_FAILURE, GET_COMPANY_REQUEST, GET_COMPANY_SUCCESS } from "../actionType/actionType";

export const getCompanyRequest = (payload,callback) => ({
    type: GET_COMPANY_REQUEST,
    payload,
    callback
  });
export const getCompanySuccess = (user) => ({
  type: GET_COMPANY_SUCCESS,
  payload: user,
});

export const getCompanyFailure = (error) => ({
  type: GET_COMPANY_FAILURE,
  payload: error,
});


