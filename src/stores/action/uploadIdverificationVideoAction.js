import {  UPLOAD_IDVERIFICATION_VIDEO_FAILURE, UPLOAD_IDVERIFICATION_VIDEO_REQUEST, UPLOAD_IDVERIFICATION_VIDEO_SUCCESS } from "../actionType/actionType";

export const uploadIdVerificationVideoRequest = (payload,callback) => ({
    type: UPLOAD_IDVERIFICATION_VIDEO_REQUEST,
    payload,
    callback
  });
export const uploadIdVerificationVideoSuccess = (user) => ({
  type: UPLOAD_IDVERIFICATION_VIDEO_SUCCESS,
  payload: user,
});

export const uploadIdVerificationVideoFailure = (error) => ({
  type: UPLOAD_IDVERIFICATION_VIDEO_FAILURE,
  payload: error,
});


