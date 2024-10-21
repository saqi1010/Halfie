import { GET_PLANDETAIL_FAILURE, GET_PLANDETAIL_REQUEST, GET_PLANDETAIL_SUCCESS } from "../actionType/actionType";

export const getPlanDetailRequest = (payload,callback) => ({
    type: GET_PLANDETAIL_REQUEST,
    payload,
    callback
  });
export const getPlanDetailSuccess = (user) => ({
  type: GET_PLANDETAIL_SUCCESS,
  payload: user,
});

export const getPlanDetailFailure = (error) => ({
  type: GET_PLANDETAIL_FAILURE,
  payload: error,
});


