import { takeLatest, call, put } from 'redux-saga/effects';
import { allEventApi } from '../services/apiService';
import { allEventFailure, allEventRequest, allEventSuccess } from '../action/allEventAction';
function* handleAllEvent(action) {
  const { payload, callback } = action;
  try {
    const data = yield call(allEventApi, payload, callback);
    yield put(allEventSuccess(data));
    if (callback) {
      callback(data); 
    }
  } catch (error) {
    yield put(allEventFailure(error));
    if (callback) {
      callback(user); 
    }
  }
}
function* allEventSaga() {
  yield takeLatest(allEventRequest().type, handleAllEvent);
}
export default allEventSaga;


