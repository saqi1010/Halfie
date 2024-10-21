import { takeLatest, call, put } from 'redux-saga/effects';
import { getCountryApi } from '../services/apiService';
import { GET_COUNTRY_REQUEST } from '../actionType/actionType';
import { countryFailure, countrySuccess } from '../action/countryAction';
function* handleCountry(action) {
  try {
    const data = yield call(getCountryApi, action.payload);
    yield put(countrySuccess(data));
  } catch (error) {
    yield put(countryFailure(error));
  }
}
function* countrySaga() {
  yield takeLatest(GET_COUNTRY_REQUEST, handleCountry);
}
export default countrySaga;
