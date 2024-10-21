import { UPDATE_USER_FAILURE, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS } from "../actionType/actionType";
export const userUpdateRequest = (payload,callback) => ({
    type: UPDATE_USER_REQUEST,
    payload,
    callback
  });
export const userUpdateSuccess = (user) => ({
  type: UPDATE_USER_SUCCESS,
  payload: user,
});

export const userUpdateFailure = (error) => ({
  type: UPDATE_USER_FAILURE,
  payload: error,
});


