import { takeLatest, call, put } from 'redux-saga/effects';
import { UPLOAD_IMAGE_REQUEST } from '../actionType/actionType';
import { uploadImageFailure, uploadImageSuccess } from '../action/uplaodImageAction';
import { uploadImageApi } from '../services/apiService';
function* handleUploadImage(action) {
  const { payload, callback } = action;
  try {
    const user = yield call(uploadImageApi, payload, callback);
    yield put(uploadImageSuccess(user));
    if (callback) {
      callback(user); 
    }
  } catch (error) {
    yield put(uploadImageFailure(error));
    if (callback) {
      callback({ error }); 
    }
  }
}
function* uploadImageSaga() {
  yield takeLatest(UPLOAD_IMAGE_REQUEST, handleUploadImage);
}
export default uploadImageSaga;
