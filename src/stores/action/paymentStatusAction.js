import { PAYMENT_STATUS_FAILURE, PAYMENT_STATUS_REQUEST, PAYMENT_STATUS_SUCCESS } from "../actionType/actionType";

export const paymentStatusRequest = (payload) => ({
  type: PAYMENT_STATUS_REQUEST,
  payload: payload,
});
export const paymentStatusSuccess = (data) => {
  return {
    type: PAYMENT_STATUS_SUCCESS,
    payload: data,
  };
};
export const  paymentStatusFailure = (error) => ({
  type: PAYMENT_STATUS_FAILURE,
  payload: error,
});
