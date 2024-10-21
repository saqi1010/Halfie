import { MATCH_OPERATION_FAILURE, MATCH_OPERATION_REQUEST, MATCH_OPERATION_SUCCESS } from "../actionType/actionType";

export const matchOperationRequest = (payload,callback) => ({
    type: MATCH_OPERATION_REQUEST,
    payload,
    callback
  });
export const matchOperationSuccess = (user) => ({
  type: MATCH_OPERATION_SUCCESS,
  payload: user,
});

export const matchOperationFailure = (error) => ({
  type: MATCH_OPERATION_FAILURE,
  payload: error,
});


