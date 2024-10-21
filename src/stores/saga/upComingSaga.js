import { takeLatest, call, put } from 'redux-saga/effects';
import { upcomingEventApi } from '../services/apiService';
import { upcomingEventFailure, upcomingEventRequest, upcomingEventSuccess } from '../action/upComingEventAction';
function* handleUpcomingEvent(action) {
  try {
    const data = yield call(upcomingEventApi, action.payload);
    yield put(upcomingEventSuccess(data));
  } catch (error) {
    yield put(upcomingEventFailure(error));
  }
}
function* upComingSaga() {
  yield takeLatest(upcomingEventRequest().type, handleUpcomingEvent);
}
export default upComingSaga;
