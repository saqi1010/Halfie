import { takeLatest, call, put } from 'redux-saga/effects';
import {  UPLOAD_IDVERIFICATION_VIDEO_REQUEST } from '../actionType/actionType';
import {  uploadIdVerificationVideoApi } from '../services/apiService';
import { uploadIdVerificationVideoFailure, uploadIdVerificationVideoSuccess } from '../action/uploadIdverificationVideoAction';
function* handleUploadVideo(action) {
  const { payload, callback } = action;
  try {
    const user = yield call(uploadIdVerificationVideoApi, payload, callback);
    yield put(uploadIdVerificationVideoSuccess(user));
    if (callback) {
      callback(user); 
    }
  } catch (error) {
    yield put(uploadIdVerificationVideoFailure(error));
    if (callback) {
      callback({ error }); 
    }
  }
}
function* uploadIdverificationVideoSaga() {
  yield takeLatest(UPLOAD_IDVERIFICATION_VIDEO_REQUEST, handleUploadVideo);
}
export default uploadIdverificationVideoSaga;
