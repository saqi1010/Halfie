import { takeLatest, call, put } from 'redux-saga/effects';
import { getFriendApi } from '../services/apiService';
import { GET_FRIEND_REQUEST } from '../actionType/actionType';
import { getFriendFailure, getFriendSuccess } from '../action/getFriendAction';
function* handleGetFriend(action) {
  const { payload, callback } = action;
  try {
    const user = yield call(getFriendApi, payload, callback);
    yield put(getFriendSuccess(user));
    if (callback) {
      callback(user); 
    }
  } catch (error) {
    yield put(getFriendFailure(error));
    if (callback) {
      callback({ error }); 
    }
  }
}
function* getFriendSaga() {
  yield takeLatest(GET_FRIEND_REQUEST, handleGetFriend);
}
export default getFriendSaga;
