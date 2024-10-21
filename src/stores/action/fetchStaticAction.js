import { FETCH_STATIC_FAILURE, FETCH_STATIC_REQUEST, FETCH_STATIC_SUCCESS } from "../actionType/actionType";

export const fetchStaticRequest = (payload,callback) => ({
    type: FETCH_STATIC_REQUEST,
    payload,
    callback
  });
export const fetchStaticSuccess = (user) => ({
  type: FETCH_STATIC_SUCCESS,
  payload: user,
});

export const fetchStaticFailure = (error) => ({
  type: FETCH_STATIC_FAILURE,
  payload: error,
});


