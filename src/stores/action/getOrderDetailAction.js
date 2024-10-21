import { GET_ORDERDETAIL_FAILURE, GET_ORDERDETAIL_REQUEST, GET_ORDERDETAIL_SUCCESS } from "../actionType/actionType";

export const getOrderDetailRequest = (payload,callback) => ({
    type: GET_ORDERDETAIL_REQUEST,
    payload,
    callback
  });
export const getOrderDetailSuccess = (user) => ({
  type: GET_ORDERDETAIL_SUCCESS,
  payload: user,
});

export const getOrderDetailFailure = (error) => ({
  type: GET_ORDERDETAIL_FAILURE,
  payload: error,
});


