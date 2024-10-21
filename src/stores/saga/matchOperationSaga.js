import { takeLatest, call, put } from 'redux-saga/effects';
import { getFriendApi, matchOperationApi } from '../services/apiService';
import { MATCH_OPERATION_REQUEST } from '../actionType/actionType';
import { matchOperationFailure, matchOperationSuccess } from '../action/matchOperationAction';
function* handleMatchOperation(action) {
  const { payload, callback } = action;
  try {
    const user = yield call(matchOperationApi, payload, callback);
    yield put(matchOperationSuccess(user));
    if (callback) {
      callback(user); 
    }
  } catch (error) {
    yield put(matchOperationFailure(error));
    if (callback) {
      callback({ error }); 
    }
  }
}
function* matchOperationSaga() {
  yield takeLatest(MATCH_OPERATION_REQUEST, handleMatchOperation);
}
export default matchOperationSaga;
