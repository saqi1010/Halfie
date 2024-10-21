import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionType/actionType";

export const loginRequest = (payload,callback) => {
return{
  type: LOGIN_REQUEST,
  payload,
  callback
}
}
export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});
