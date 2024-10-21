import { takeLatest, call, put } from 'redux-saga/effects';
import { FETCH_STATIC_REQUEST } from '../actionType/actionType';
import { fetchStaticFailure, fetchStaticSuccess } from '../action/fetchStaticAction';
import { fetchStaticApi } from '../services/apiService';
function* handleFetchStatic(action) {
  const { payload, callback } = action;
  try {
    const user = yield call(fetchStaticApi, payload, callback);
    yield put(fetchStaticSuccess(user));
    if (callback) {
      callback(user); 
    }
  } catch (error) {
    yield put(fetchStaticFailure(error));
    if (callback) {
      callback({ error }); 
    }
  }
}
function* fetchStaticSaga() {
  yield takeLatest(FETCH_STATIC_REQUEST, handleFetchStatic);
}
export default fetchStaticSaga;
