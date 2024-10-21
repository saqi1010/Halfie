import { GET_USER_REPORT_FAILURE, GET_USER_REPORT_REQUEST, GET_USER_REPORT_SUCCESS } from "../actionType/actionType";

export const getUserReportRequest = (payload,callback) => ({
    type: GET_USER_REPORT_REQUEST,
    payload,
    callback
  });
export const getUserReportSuccess = (user) => ({
  type: GET_USER_REPORT_SUCCESS,
  payload: user,
});

export const getUserReportFailure = (error) => ({
  type: GET_USER_REPORT_FAILURE,
  payload: error,
});


