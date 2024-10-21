import { takeLatest, call, put } from 'redux-saga/effects';
import { getFriendApi, getUserDetailApi } from '../services/apiService';
import { GET_USERDETAIL_REQUEST } from '../actionType/actionType';
import { getUserDetailFailure, getUserDetailSuccess } from '../action/getUserDetailAction';
function* handleUserDetail(action) {
  const { payload, callback } = action;
  try {
    const user = yield call(getUserDetailApi, payload, callback);
    yield put(getUserDetailSuccess(user));
    if (callback) {
      callback(user); 
    }
  } catch (error) {
    yield put(getUserDetailFailure(error));
    if (callback) {
      callback({ error }); 
    }
  }
}
function* getUserDetailSaga() {
  yield takeLatest(GET_USERDETAIL_REQUEST, handleUserDetail);
}
export default getUserDetailSaga;
