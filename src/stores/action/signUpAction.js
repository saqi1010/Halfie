import { SIGNUP_REQUEST,SIGNUP_SUCCESS ,SGNUP_FAILURE} from "../actionType/actionType";

export const signUpRequest = (payload,callback) => ({
    type: SIGNUP_REQUEST,
    payload,
    callback
  });
export const signUpSuccess = (user) => ({
  type: SIGNUP_SUCCESS,
  payload: user,
});

export const signUpFailure = (error) => ({
  type: SGNUP_FAILURE,
  payload: error,
});


