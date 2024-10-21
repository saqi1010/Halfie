import { takeLatest, call, put } from 'redux-saga/effects';
import { matchProfileApi } from '../services/apiService';
import { MATCH_PROFILE_REQUEST } from '../actionType/actionType';
import { matchProfileFailure, matchProfileSuccess } from '../action/matchProfileAction';
function* handleMatchProfile(action) {
  const { payload, callback } = action;
  try {
    const user = yield call(matchProfileApi, payload, callback);
    yield put(matchProfileSuccess(user));
    if (callback) {
      callback(user); 
    }
  } catch (error) {
    yield put(matchProfileFailure(error));
    if (callback) {
      callback({ error }); 
    }
  }
}
function* matchProfileSaga() {
  yield takeLatest(MATCH_PROFILE_REQUEST, handleMatchProfile);
}
export default matchProfileSaga;
