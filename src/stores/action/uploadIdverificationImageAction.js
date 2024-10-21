import { UPLOAD_IDVERIFICATION_IMAGE_FAILURE, UPLOAD_IDVERIFICATION_IMAGE_REQUEST, UPLOAD_IDVERIFICATION_IMAGE_SUCCESS } from "../actionType/actionType";

export const uploadIdVerificationImageRequest = (payload,callback) => ({
    type: UPLOAD_IDVERIFICATION_IMAGE_REQUEST,
    payload,
    callback
  });
export const uploadIdVerificationImageSuccess = (user) => ({
  type: UPLOAD_IDVERIFICATION_IMAGE_SUCCESS,
  payload: user,
});

export const uploadIdVerificationImageFailure = (error) => ({
  type: UPLOAD_IDVERIFICATION_IMAGE_FAILURE,
  payload: error,
});


