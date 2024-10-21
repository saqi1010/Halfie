import { takeLatest, call, put } from 'redux-saga/effects';
import { UPDATE_USER_REQUEST } from '../actionType/actionType';
import { userUpdateFailure, userUpdateSuccess } from '../action/userUpdateAction';
import { updateUserApi } from '../services/apiService';
function* handleUpdateUser(action) {
  const { payload, callback } = action;
  try {
    const user = yield call(updateUserApi, payload, callback);
    yield put(userUpdateSuccess(user));
    if (callback) {
      callback(user); 
    }
  } catch (error) {
    yield put(userUpdateFailure(error));
    if (callback) {
      callback({ error }); 
    }
  }
}
function* updateUserSaga() {
  yield takeLatest(UPDATE_USER_REQUEST, handleUpdateUser);
}
export default updateUserSaga;
