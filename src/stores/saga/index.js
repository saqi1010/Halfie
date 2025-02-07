import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import signUpSaga from './signUpSaga';
import upComingSaga from './upComingSaga';
import ourServicesSaga from './ourServicesSaga';
import onBordingSaga from './onBordingSaga';
import wishlistSaga from './wishlistSaga';
import allEventSaga from './allEventSaga';
import eventDetailSaga from './eventDetailSaga';
import serviceListSaga from './serviceListSaga';
import serviceDetailSaga from './serviceDetailSaga';
import paymentSaga from './paymentSaga';
import paymentStatusSaga from './paymentStatusSaga';
import paymentOrderDetalSaga from './paymentOrderDetalSaga';
import signOutSaga from './signOutSaga';
import deleteAccountSaga from './deleteAccountSaga';
import userExistSaga from './userExistSaga';
import attendeeSaga from './attendeeSaga';
import getPlanSaga from './getPlanSaga';
import countrySaga from './countrySaga';
import subscripitonDetailSaga from './subscripitonDetailSaga';
import addUserReportSaga from './addUserReportSaga';
import getUserReportSaga from './getUserReportSaga';
import uploadImageSaga from './uploadImageSaga';
import updateUserSaga from './updateUserSaga';
import fetchStaticSaga from './fetchStaticSaga';
import getFriendSaga from './getFriendSaga';
import getUserDetailSaga from './getUserDetailSaga';
import webIndexSaga from './webIndexSaga';
import matchOperationSaga from './matchOperationSaga';
import matchProfileSaga from './matchProfileSaga';
import getOrderDetailSaga from './getOrderDetailSaga';
import getPlanDetailSaga from './getPlanDetailSaga';
import uploadIdverificationVideoSaga from './uploadIdverificationVideoSaga';
import uploadIdverificationImageSaga from './uploadIdverificationImageSaga';
export default function* rootSaga() {
  yield all([loginSaga(),onBordingSaga(),signUpSaga(),upComingSaga(),ourServicesSaga(),wishlistSaga(),allEventSaga(),eventDetailSaga(),serviceListSaga(),serviceDetailSaga(),paymentSaga(),paymentStatusSaga(),paymentOrderDetalSaga(),signOutSaga(),deleteAccountSaga(),userExistSaga(),attendeeSaga(),getPlanSaga(),countrySaga(),subscripitonDetailSaga(),addUserReportSaga(),getUserReportSaga(),uploadImageSaga(),updateUserSaga(),fetchStaticSaga(),getFriendSaga(),getUserDetailSaga(),webIndexSaga(),matchOperationSaga(),matchProfileSaga(),getOrderDetailSaga(),getPlanDetailSaga(),uploadIdverificationVideoSaga(),uploadIdverificationImageSaga()]);
}
