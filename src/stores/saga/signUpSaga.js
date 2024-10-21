import { takeLatest, call, put } from 'redux-saga/effects';
import { signUpApi } from '../services/apiService';
import { signUpFailure, signUpRequest, signUpSuccess } from '../action/signUpAction';
function* handleSignUp(action) {
  const { payload, callback } = action;
  try {
    const user = yield call(signUpApi, payload, callback);
    yield put(signUpSuccess(user));
    if (callback) {
      callback(user); 
    }
  } catch (error) {
    yield put(signUpFailure(error));
    if (callback) {
      callback({ error }); 
    }
  }
}
function* signUpSaga() {
  yield takeLatest(signUpRequest().type, handleSignUp);
}
export default signUpSaga;
