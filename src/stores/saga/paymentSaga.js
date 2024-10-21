import { takeLatest, call, put } from 'redux-saga/effects';
import {  paymentApi } from '../services/apiService';
import {PAYMENT_REQUEST } from '../actionType/actionType';
import { paymentFailure, paymentSuccess } from '../action/paymentAction';

function* handlePayment(action) {
  try {
    const event = yield call(paymentApi, action.payload);
    yield put(paymentSuccess(event));
  } catch (error) {
    yield put(paymentFailure(error.message));
  }
}

function* paymentSaga() {
  yield takeLatest(PAYMENT_REQUEST, handlePayment);
}

export default paymentSaga;
