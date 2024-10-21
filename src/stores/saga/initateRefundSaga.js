import { takeLatest, call, put } from 'redux-saga/effects';
import {  initateRefundApi } from '../services/apiService';
import {  INITIATE_REFUND_REQUEST } from '../actionType/actionType';
import { initiateRefundFailure, initiateRefundSuccess } from '../action/InitiateRefundAction';
function* handleInitateRefund(action) {
  const { payload, callback } = action;
  try {
    const user = yield call(initateRefundApi, payload, callback);
    yield put(initiateRefundSuccess(user));
    if (callback) {
      callback(user); 
    }
  } catch (error) {
    yield put(initiateRefundFailure(error));
    if (callback) {
      callback({ error }); 
    }
  }
}
function* initateRefundSaga() {
  yield takeLatest(INITIATE_REFUND_REQUEST, handleInitateRefund);
}
export default initateRefundSaga;
