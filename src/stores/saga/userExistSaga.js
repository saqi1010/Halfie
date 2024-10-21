import { takeLatest, call, put } from 'redux-saga/effects';
import {userExistApi } from '../services/apiService';
import { USEREXIST_REQUEST } from '../actionType/actionType';
import { userExistFailure,userExistSuccess } from '../action/userExistAction';
function* handleUserExist(action) {
  const { payload, callback } = action;
  try {
    const user = yield call(userExistApi, payload, callback);
    yield put(userExistSuccess(user));
    if (callback) {
      callback(user); 
    }
  } catch (error) {
    yield put(userExistFailure(error));
    if (callback) {
      callback({ error }); 
    }
  }
}
function* userExistSaga() {
  yield takeLatest(USEREXIST_REQUEST, handleUserExist);
}
export default userExistSaga;
