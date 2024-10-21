import { SHARE_DATA_COMPANY_FAILURE, SHARE_DATA_COMPANY_REQUEST, SHARE_DATA_COMPANY_SUCCESS } from "../actionType/actionType";

export const shareDataToCompanyRequest = (payload,callback) => ({
    type: SHARE_DATA_COMPANY_REQUEST,
    payload,
    callback
  });
export const shareDataToCompanySuccess = (user) => ({
  type: SHARE_DATA_COMPANY_SUCCESS,
  payload: user,
});

export const shareDataToCompanyFailure = (error) => ({
  type: SHARE_DATA_COMPANY_FAILURE,
  payload: error,
});


