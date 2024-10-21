import { MATCH_PROFILE_FAILURE, MATCH_PROFILE_REQUEST, MATCH_PROFILE_SUCCESS } from "../actionType/actionType";

export const matchProfileRequest = (payload,callback) => ({
    type: MATCH_PROFILE_REQUEST,
    payload,
    callback
  });
export const matchProfileSuccess = (user) => ({
  type: MATCH_PROFILE_SUCCESS,
  payload: user,
});

export const matchProfileFailure = (error) => ({
  type: MATCH_PROFILE_FAILURE,
  payload: error,
});


