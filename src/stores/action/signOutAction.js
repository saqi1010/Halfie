import { SIGNOUT_FAILURE, SIGNOUT_REQUEST, SIGNOUT_SUCCESS } from "../actionType/actionType";

export const signOutRequest = (payload) => ({
  type: SIGNOUT_REQUEST,
  payload: null,
});
export const signOutSuccess = (data) => {
  return {
    type: SIGNOUT_SUCCESS,
    payload: data,
  };
};
export const signOutFailure = (error) => ({
  type: SIGNOUT_FAILURE,
  payload: error,
});
