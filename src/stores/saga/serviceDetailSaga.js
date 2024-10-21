import { takeLatest, call, put } from 'redux-saga/effects';
import {  serviceDetailApi } from '../services/apiService';
import {  SERVICES_DETAIL_REQUEST } from '../actionType/actionType';
import { servicesDetailFailure, servicesDetailSuccess } from '../action/servicesDetailAction';
function* handleServiceDetail(action) {
  try {
    const event = yield call(serviceDetailApi, action.payload);
    yield put(servicesDetailSuccess(event));
  } catch (error) {
    yield put(servicesDetailFailure(error.message));
  }
}

function* serviceDetailSaga() {
  yield takeLatest(SERVICES_DETAIL_REQUEST, handleServiceDetail);
}

export default serviceDetailSaga;
