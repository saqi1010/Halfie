import { takeLatest, call, put } from 'redux-saga/effects';
import { wishlistApi } from '../services/apiService';
import { wishlistFailure, wishlistRequest, wishlistSuccess } from '../action/wishlistAction';
function* handleWishlist(action) {
  try {
    const data = yield call(wishlistApi, action.payload);
    yield put(wishlistSuccess(data));
  } catch (error) {
    yield put(wishlistFailure(error));
  }
}
function* wishlistSaga() {
  yield takeLatest(wishlistRequest().type, handleWishlist);
}
export default wishlistSaga;
