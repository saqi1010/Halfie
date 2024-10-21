import { takeLatest, call, put } from 'redux-saga/effects';
import { signOutApi } from '../services/apiService';
import { SIGNOUT_REQUEST } from '../actionType/actionType';
import { signOutFailure, signOutSuccess } from '../action/signOutAction';
function* handleSignOut(action) {
  try {
    const data = yield call(signOutApi, action.payload);
    yield put(signOutSuccess(data));
  } catch (error) {
    yield put(signOutFailure(error));
  }
}
function* signOutSaga() {
  yield takeLatest(SIGNOUT_REQUEST, handleSignOut);
}
export default signOutSaga;
