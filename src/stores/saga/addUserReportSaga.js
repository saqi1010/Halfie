import { takeLatest, call, put } from 'redux-saga/effects';
import { addUserReportApi, signUpApi } from '../services/apiService';
import { ADD_REPORT_REQUEST } from '../actionType/actionType';
import { addUserReportFailure, addUserReportSuccess } from '../action/addUserReportAction';
function* handleAddUserReport(action) {
  const { payload, callback } = action;
  try {
    const user = yield call(addUserReportApi, payload, callback);
    yield put(addUserReportSuccess(user));
    if (callback) {
      callback(user); 
    }
  } catch (error) {
    yield put(addUserReportFailure(error));
    if (callback) {
      callback({ error }); 
    }
  }
}
function* addUserReportSaga() {
  yield takeLatest(ADD_REPORT_REQUEST, handleAddUserReport);
}
export default addUserReportSaga;
