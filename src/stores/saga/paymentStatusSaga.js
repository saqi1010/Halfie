import { takeLatest, call, put } from 'redux-saga/effects';
import {  paymentStatusApi } from '../services/apiService';
import { PAYMENT_STATUS_REQUEST } from '../actionType/actionType';
import { paymentFailure, paymentSuccess } from '../action/paymentAction';
import { paymentStatusFailure, paymentStatusSuccess } from '../action/paymentStatusAction';

function* handlePaymentStatus(action) {
  try {
    const data = yield call(paymentStatusApi, action.payload);
    yield put(paymentStatusSuccess(data));
  } catch (error) {
    yield put(paymentStatusFailure(error.message));
  }
}

function* paymentStatusSaga() {
  yield takeLatest(PAYMENT_STATUS_REQUEST, handlePaymentStatus);
}

export default paymentStatusSaga;
