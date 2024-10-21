import { takeLatest, call, put } from 'redux-saga/effects';
import { loginApi } from '../services/apiService';
import { LOGIN_REQUEST } from '../actionType/actionType';
import { loginSuccess, loginFailure }from '../action/loginActions';

function* handleLogin(action) {
  const { payload, callback } = action;
  try {
    const user = yield call(loginApi, payload, callback);
    yield put(loginSuccess(user));
    if (callback) {
      callback(user); 
    }
  } catch (error) {
    yield put(loginFailure(error));
    if (callback) {
      callback({ error }); 
    }
  }
}

function* loginSaga() {
  yield takeLatest(LOGIN_REQUEST, handleLogin);
}

export default loginSaga;
