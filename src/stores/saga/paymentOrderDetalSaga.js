import { takeLatest, call, put } from 'redux-saga/effects';
import {  paymentOrderDetailApi } from '../services/apiService';
import {PAYMENT_ORDER_DETAIL_REQUEST } from '../actionType/actionType';
import { paymentOrderDetalFailure, paymentOrderDetalSuccess } from '../action/paymentOrderDetailAction';

function* handleOrderDetailPayment(action) {
  try {
    const event = yield call(paymentOrderDetailApi, action.payload);
    yield put(paymentOrderDetalSuccess(event));
  } catch (error) {
    yield put(paymentOrderDetalFailure(error.message));
  }
}

function* paymentOrderDetalSaga() {
  yield takeLatest(PAYMENT_ORDER_DETAIL_REQUEST, handleOrderDetailPayment);
}

export default paymentOrderDetalSaga;
