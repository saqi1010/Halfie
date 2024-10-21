import { takeLatest, call, put } from 'redux-saga/effects';
import { deleteAccountApi } from '../services/apiService';
import { ACCOUNTDELETE_REQUEST } from '../actionType/actionType';
import { accountDeleteFailure, accountDeleteSuccess } from '../action/accountDeleteAction';
function* handleAccountDelete(action) {
  try {
    const data = yield call(deleteAccountApi, action.payload);
    yield put(accountDeleteSuccess(data));
  } catch (error) {
    yield put(accountDeleteFailure(error));
  }
}
function* deleteAccountSaga() {
  yield takeLatest(ACCOUNTDELETE_REQUEST, handleAccountDelete);
}
export default deleteAccountSaga;
