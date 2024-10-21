import { takeLatest, call, put } from 'redux-saga/effects';
import { ourServicesApi } from '../services/apiService';
import { ourServicesFailure, ourServicesRequest, ourServicesSuccess } from '../action/ourServicesAction';
function* handleOurSevices(action) {
  try {
    const user = yield call(ourServicesApi, action.payload);
    yield put(ourServicesSuccess(user));
  } catch (error) {
    yield put(ourServicesFailure(error));
  }
}
function* ourServicesSaga() {
  yield takeLatest(ourServicesRequest().type, handleOurSevices);
}
export default ourServicesSaga;
