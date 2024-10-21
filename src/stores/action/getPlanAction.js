import { GET_PLAN_FAILURE, GET_PLAN_REQUEST, GET_PLAN_SUCCESS } from "../actionType/actionType";
export const getPlanRequest = (payload,callback) => ({
  type: GET_PLAN_REQUEST,
  payload,
  callback
});
export const getPlanSuccess = (user) => {
  return {
    type: GET_PLAN_SUCCESS,
    payload: user,
  };
};
export const getPlanFailure = (error) => ({
  type: GET_PLAN_FAILURE,
  payload: error,
});



