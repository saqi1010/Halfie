import { takeLatest, call, put } from 'redux-saga/effects';
import {  subscriptionDetailApi } from '../services/apiService';
import { SUBSCRIPITON_DETAIL_REQUEST } from '../actionType/actionType';
import { subscripitonDetailFailure, subscripitonDetailSuccess } from '../action/subscripitonDetailAction';
function* handleSubscriptionDetail(action) {
  const { payload, callback } = action;
  try {
    const user = yield call(subscriptionDetailApi, payload, callback);
    yield put(subscripitonDetailSuccess(user));
    if (callback) {
      callback(user); 
    }
  } catch (error) {
    yield put(subscripitonDetailFailure(error));
    if (callback) {
      callback({ error }); 
    }
  }
}

function* subscripitonDetailSaga() {
  yield takeLatest(SUBSCRIPITON_DETAIL_REQUEST, handleSubscriptionDetail);
}

export default subscripitonDetailSaga;
