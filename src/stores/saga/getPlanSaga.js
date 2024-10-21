import { takeLatest, call, put } from 'redux-saga/effects';
import { getPlanApi } from '../services/apiService';
import { GET_PLAN_REQUEST } from '../actionType/actionType';
import { getPlanFailure, getPlanSuccess } from '../action/getPlanAction';

function* handleGetPlan(action) {
  const { payload, callback } = action;
  try {
    const user = yield call(getPlanApi, payload, callback);
    yield put(getPlanSuccess(user));
    if (callback) {
      callback(user); 
    }
  } catch (error) {
    yield put(getPlanFailure(error));
    if (callback) {
      callback({ error }); 
    }
  }
}

function* getPlanSaga() {
  yield takeLatest(GET_PLAN_REQUEST, handleGetPlan);
}

export default getPlanSaga;


