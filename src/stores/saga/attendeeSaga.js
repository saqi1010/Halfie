import { takeLatest, call, put } from 'redux-saga/effects';
import { attendeeAPi } from '../services/apiService';
import { ATTANDEES_REQUEST } from '../actionType/actionType';
import { attendeeFailure, attendeeSuccess } from '../action/AttandeeActoin';
function* handleAttendee(action) {
  try {
    const event = yield call(attendeeAPi, action.payload);
    yield put(attendeeSuccess(event));
  } catch (error) {
    yield put(attendeeFailure(error.message));
  }
}

function* attendeeSaga() {
  yield takeLatest(ATTANDEES_REQUEST, handleAttendee);
}

export default attendeeSaga;
