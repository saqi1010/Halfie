import { PAYMENT_ORDER_DETAIL_REQUEST, PAYMENT_ORDER_DETAIL_SUCCESS, PAYMENT_ORDER_DETAIL_FAILURE } from "../actionType/actionType";

export const paymentOrderDetalRequest = (payload) => ({
  type: PAYMENT_ORDER_DETAIL_REQUEST,
  payload: payload,
});
export const paymentOrderDetalSuccess = (data) => {
  return {
    type: PAYMENT_ORDER_DETAIL_SUCCESS,
    payload: data,
  };
};
export const  paymentOrderDetalFailure = (error) => ({
  type: PAYMENT_ORDER_DETAIL_FAILURE,
  payload: error,
});
