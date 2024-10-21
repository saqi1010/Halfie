import { takeLatest, call, put } from 'redux-saga/effects';
import { UPLOAD_IDVERIFICATION_IMAGE_REQUEST } from '../actionType/actionType';
import { uploadIdVerificationImageApi } from '../services/apiService';
import { uploadIdVerificationImageFailure, uploadIdVerificationImageSuccess } from '../action/uploadIdverificationImageAction';
function* handleUploadImage(action) {
  const { payload, callback } = action;
  try {
    const user = yield call(uploadIdVerificationImageApi, payload, callback);
    yield put(uploadIdVerificationImageSuccess(user));
    if (callback) {
      callback(user); 
    }
  } catch (error) {
    yield put(uploadIdVerificationImageFailure(error));
    if (callback) {
      callback({ error }); 
    }
  }
}
function* uploadIdverificationImageSaga() {
  yield takeLatest(UPLOAD_IDVERIFICATION_IMAGE_REQUEST, handleUploadImage);
}
export default uploadIdverificationImageSaga;
