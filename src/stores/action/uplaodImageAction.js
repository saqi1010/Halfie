import { UPLOAD_IMAGE_FAILURE, UPLOAD_IMAGE_REQUEST, UPLOAD_IMAGE_SUCCESS } from "../actionType/actionType";

export const uploadImageRequest = (payload,callback) => ({
    type: UPLOAD_IMAGE_REQUEST,
    payload,
    callback
  });
export const uploadImageSuccess = (user) => ({
  type: UPLOAD_IMAGE_SUCCESS,
  payload: user,
});

export const uploadImageFailure = (error) => ({
  type: UPLOAD_IMAGE_FAILURE,
  payload: error,
});


