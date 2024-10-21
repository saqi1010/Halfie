import { takeLatest, call, put } from 'redux-saga/effects';
import {  planDetailApi } from '../services/apiService';
import { GET_PLANDETAIL_REQUEST } from '../actionType/actionType';
import { getPlanDetailFailure, getPlanDetailSuccess } from '../action/getPlanDetailAction';
function* handlePlanDetail(action) {
  const { payload, callback } = action;
  try {
    const user = yield call(planDetailApi, payload, callback);
    yield put(getPlanDetailSuccess(user));
    if (callback) {
      callback(user); 
    }
  } catch (error) {
    yield put(getPlanDetailFailure(error));
    if (callback) {
      callback({ error }); 
    }
  }
}
function* getPlanDetailSaga() {
  yield takeLatest(GET_PLANDETAIL_REQUEST, handlePlanDetail);
}
export default getPlanDetailSaga;
