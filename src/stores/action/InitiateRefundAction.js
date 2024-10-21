import { INITIATE_REFUND_FAILURE, INITIATE_REFUND_REQUEST, INITIATE_REFUND_SUCCESS } from "../actionType/actionType";
export const initiateRefundRequest = (payload,callback) => ({
    type: INITIATE_REFUND_REQUEST,
    payload,
    callback
  });
export const initiateRefundSuccess = (user) => ({
  type: INITIATE_REFUND_SUCCESS,
  payload: user,
});
export const initiateRefundFailure = (error) => ({
  type: INITIATE_REFUND_FAILURE,
  payload: error,
});


