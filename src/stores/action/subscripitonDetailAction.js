import { SUBSCRIPITON_DETAIL_FAILURE, SUBSCRIPITON_DETAIL_REQUEST, SUBSCRIPITON_DETAIL_SUCCESS } from "../actionType/actionType";
export const subscripitonDetailRequest = (payload,callback) => ({
    type: SUBSCRIPITON_DETAIL_REQUEST,
    payload,
    callback
  });
export const subscripitonDetailSuccess = (user) => ({
  type: SUBSCRIPITON_DETAIL_SUCCESS,
  payload: user,
});

export const subscripitonDetailFailure = (error) => ({
  type: SUBSCRIPITON_DETAIL_FAILURE,
  payload: error,
});


