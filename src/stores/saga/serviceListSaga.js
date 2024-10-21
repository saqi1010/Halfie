import { takeLatest, call, put } from 'redux-saga/effects';
import {  serviceListApi } from '../services/apiService';
import {  SERVICES_REQUEST } from '../actionType/actionType';
import { servicesListFailure, servicesListSuccess } from '../action/serviceListAction';
function* handleServiceList(action) {
  try {
    const event = yield call(serviceListApi, action.payload);
    yield put(servicesListSuccess(event));
  } catch (error) {
    yield put(servicesListFailure(error.message));
  }
}

function* serviceListSaga() {
  yield takeLatest(SERVICES_REQUEST, handleServiceList);
}

export default serviceListSaga;
