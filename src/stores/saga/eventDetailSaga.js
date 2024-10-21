import { takeLatest, call, put } from 'redux-saga/effects';
import { eventDetailFailure, eventDetailSuccess } from '../action/eventDetailAction';
import { eventDetaulApi } from '../services/apiService';
import { EVENTDETAIL_REQUEST } from '../actionType/actionType';

function* handleEventDetail(action) {
  try {
    const event = yield call(eventDetaulApi, action.payload);
    yield put(eventDetailSuccess(event));
  } catch (error) {
    yield put(eventDetailFailure(error.message));
  }
}

function* eventDetailSaga() {
  yield takeLatest(EVENTDETAIL_REQUEST, handleEventDetail);
}

export default eventDetailSaga;
