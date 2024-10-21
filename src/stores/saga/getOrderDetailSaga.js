import { takeLatest, call, put } from 'redux-saga/effects';
import {  orderDetailApi } from '../services/apiService';
import { GET_ORDERDETAIL_REQUEST } from '../actionType/actionType';
import { getOrderDetailFailure, getOrderDetailSuccess } from '../action/getOrderDetailAction';
function* handleOrderDetail(action) {
  const { payload, callback } = action;
  try {
    const user = yield call(orderDetailApi, payload, callback);
    yield put(getOrderDetailSuccess(user));
    if (callback) {
      callback(user); 
    }
  } catch (error) {
    yield put(getOrderDetailFailure(error));
    if (callback) {
      callback({ error }); 
    }
  }
}
function* getOrderDetailSaga() {
  yield takeLatest(GET_ORDERDETAIL_REQUEST, handleOrderDetail);
}
export default getOrderDetailSaga;
