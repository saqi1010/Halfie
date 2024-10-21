import { takeLatest, call, put } from 'redux-saga/effects';
import { getUserReportApi } from '../services/apiService';
import { getUserReportFailure, getUserReportSuccess } from '../action/getUserReportAction';
import { GET_USER_REPORT_REQUEST } from '../actionType/actionType';
function* handleGetUserReport(action) {
  const { payload, callback } = action;
  try {
    const user = yield call(getUserReportApi, payload, callback);
    yield put(getUserReportSuccess(user));
    if (callback) {
      callback(user); 
    }
  } catch (error) {
    yield put(getUserReportFailure(error));
    if (callback) {
      callback({ error }); 
    }
  }
}
function* getUserReportSaga() {
  yield takeLatest(GET_USER_REPORT_REQUEST, handleGetUserReport);
}
export default getUserReportSaga;
