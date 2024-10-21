import { GET_USERDETAIL_FAILURE, GET_USERDETAIL_REQUEST, GET_USERDETAIL_SUCCESS } from "../actionType/actionType";

export const getUserDetailRequest = (payload,callback) => ({
    type: GET_USERDETAIL_REQUEST,
    payload,
    callback
  });
export const getUserDetailSuccess = (user) => ({
  type: GET_USERDETAIL_SUCCESS,
  payload: user,
});

export const getUserDetailFailure = (error) => ({
  type: GET_USERDETAIL_FAILURE,
  payload: error,
});


