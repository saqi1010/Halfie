import { GET_FRIEND_FAILURE, GET_FRIEND_REQUEST, GET_FRIEND_SUCCESS } from "../actionType/actionType";

export const getFriendRequest = (payload,callback) => ({
    type: GET_FRIEND_REQUEST,
    payload,
    callback
  });
export const getFriendSuccess = (user) => ({
  type: GET_FRIEND_SUCCESS,
  payload: user,
});

export const getFriendFailure = (error) => ({
  type: GET_FRIEND_FAILURE,
  payload: error,
});


