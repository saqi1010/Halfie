import { USEREXIST_FAILURE, USEREXIST_REQUEST, USEREXIST_SUCCESS} from "../actionType/actionType";

export const userExistRequest = (payload,callback) => ({
    type: USEREXIST_REQUEST,
    payload,
    callback
  });
export const userExistSuccess = (user) => ({
  type: USEREXIST_SUCCESS,
  payload: user,
});

export const userExistFailure = (error) => ({
  type: USEREXIST_FAILURE,
  payload: error,
});


