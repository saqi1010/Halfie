import { PAYMENT_FAILURE, PAYMENT_REQUEST, PAYMENT_SUCCESS } from "../actionType/actionType";

export const paymentRequest = (payload) => ({
  type: PAYMENT_REQUEST,
  payload: payload,
});
export const paymentSuccess = (data) => {
  return {
    type: PAYMENT_SUCCESS,
    payload: data,
  };
};
export const paymentFailure = (error) => ({
  type: PAYMENT_FAILURE,
  payload: error,
});
