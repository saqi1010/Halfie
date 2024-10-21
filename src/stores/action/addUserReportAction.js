import { ADD_REPORT_FAILURE, ADD_REPORT_REQUEST, ADD_REPORT_SUCCESS } from "../actionType/actionType";

export const addUserReportRequest = (payload,callback) => ({
    type: ADD_REPORT_REQUEST,
    payload,
    callback
  });
export const addUserReportSuccess = (user) => ({
  type: ADD_REPORT_SUCCESS,
  payload: user,
});

export const addUserReportFailure = (error) => ({
  type: ADD_REPORT_FAILURE,
  payload: error,
});


