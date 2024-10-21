import { takeLatest, call, put } from 'redux-saga/effects';
import {  onBordingSuccess, onBordingFailure, onBordingRequest } from '../action/onBordingAction';
import { onBoardingApi } from '../services/apiService';

function* handleOnbording(action) {
  try {
    const user = yield call(onBoardingApi, action.payload);
    yield put(onBordingSuccess(user));
  } catch (error) {
    yield put(onBordingFailure(error));
  }
}
function* onBordingSaga() {
  yield takeLatest(onBordingRequest().type, handleOnbording);
}
export default onBordingSaga;
