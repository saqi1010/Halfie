import { combineReducers } from 'redux';
import authReducer from './authReducer';
import onBordingReducer from './onBordingReducer';
import signUpReducer from './signUpReducer';
import deviceAndLocationReducer from './deviceAndLocationReducer';
import ourServicesReducer from './ourServicesReducer';
import upcomingEventReducer from './upcomingEventReducer';
import loaderReducer from './loaderReducer';
import allEventReducer from './allEventReducer';
import wishlistReducer from './wishlistReducer';
import eventDetailReducer from './eventDetailReducer';
import serviceListReducer from './serviceListReducer';
import serviceDetailReducer from './serviceDetailReducer';
import paymentReducer from './paymentReducer';
import paymentStatusReducer from './paymentStatusReducer';
import paymentOrderDetailReducer from './paymentOrderDetailReducer';
import drawerReducer from './drawerReducer';
import userExistReducer from './userExistReducer';
import attendeeReducer from './attendeeReducer';
import getPlanReducer from './getPlanReducer';
import countryReducer from './countryReducer';
import subscriptionReducer from './subscriptionReducer';
import addUserReportReducer from './addUserReportReducer';
import getUserReportReducer from './getUserReportReducer';
import fetchStaticReducer from './fetchStaticReducer';
import uploadImageReducer from './uploadImageReducer';
import updateUserReducer from './updateUserReducer';
import getFriendReducer from './getFriendReducer';
import getUserDetailReducer from './getUserDetailReducer';
import matchOperationReducer from './matchOperationReducer';
import matchProfileReducer from './matchProfileReducer';
import webIndexReducer from './webIndexReducer';
import getOrderDetailReducer from './getOrderDetailReducer';
import getPlanDetailReducer from './getPlanDetailReducer';
import InitiateRefundReducer from './InitiateRefundReducer';
import thumbnailReducer from './thumbnailReducer';
import uploadIdverificationImageReducer from './uploadIdverificationImageReducer';
import uploadIdverificationVideoReducer from './uploadIdverificationVideoReducer';
const rootReducer = combineReducers({
  auth: authReducer,
  onBording:onBordingReducer,
  signUp:signUpReducer,
  deviceInfoAndLocation:deviceAndLocationReducer,
  ourServices:ourServicesReducer,
  upcomingEvent: upcomingEventReducer,
  loader:loaderReducer,
  allEvent:allEventReducer,
  wishlist:wishlistReducer,
  eventDetail:eventDetailReducer,
  serviceList:serviceListReducer,
  serviceDetail:serviceDetailReducer,
  payment:paymentReducer,
  paymentStatus:paymentStatusReducer,
  paymentOrderDetail:paymentOrderDetailReducer,
  globalDrawer:drawerReducer,
  userExist:userExistReducer,
  attendee:attendeeReducer,
  getPlan:getPlanReducer,
  country:countryReducer,
  subscription:subscriptionReducer,
  addUserReport:addUserReportReducer,
  getUserReport:getUserReportReducer,
  fetchStatic:fetchStaticReducer,
  uploadImage:uploadImageReducer,
  updateUser:updateUserReducer,
  getFriend:getFriendReducer,
  getUserDetail:getUserDetailReducer,
  webIndex:webIndexReducer,
  matchOperation:matchOperationReducer,
  matchProfile:matchProfileReducer,
  getOrderDetail:getOrderDetailReducer,
  getPlanDetail:getPlanDetailReducer,
  initiateRefund:InitiateRefundReducer,
  thumbnail:thumbnailReducer,
  uploadIdverificationImage:uploadIdverificationImageReducer,
  uploadIdverificationVideo:uploadIdverificationVideoReducer,


});
export default rootReducer;
