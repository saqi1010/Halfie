import { takeLatest, call, put } from 'redux-saga/effects';
import {webIndexApi } from '../services/apiService';
import { WEB_INDEX_REQUEST } from '../actionType/actionType';
import { webIndexFailure, webIndexSuccess } from '../action/webIndexAction';
function* handleGetFriendWebIndex(action) {
  const { payload, callback } = action;
  try {
    const user = yield call(webIndexApi, payload, callback);
    yield put(webIndexSuccess(user));
    if (callback) {
      callback(user); 
    }
  } catch (error) {
    yield put(webIndexFailure(error));
    if (callback) {
      callback({ error }); 
    }
  }
}
function* webIndexSaga() {
  yield takeLatest(WEB_INDEX_REQUEST, handleGetFriendWebIndex);
}
export default webIndexSaga;
