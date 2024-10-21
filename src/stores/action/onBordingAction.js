import { ONBORDING_FAILURE, ONBORDING_REQUEST, ONBORDING_SUCCESS } from "../actionType/actionType";
export const onBordingRequest = () => ({
  type: ONBORDING_REQUEST,
  payload: null,
});
export const onBordingSuccess = (user) => {
  return {
    type: ONBORDING_SUCCESS,
    payload: user,
  };
};
export const onBordingFailure = (error) => ({
  type: ONBORDING_FAILURE,
  payload: error,
});
