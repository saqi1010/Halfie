import { NOTIIFICATION_LIST_FAILURE, NOTIIFICATION_LIST_REQUEST, NOTIIFICATION_LIST_SUCCESS } from "../actionType/actionType";

export const notificationListRequest = (payload,callback) => ({
    type: NOTIIFICATION_LIST_REQUEST,
    payload,
    callback
  });
export const notificationListSuccess = (user) => ({
  type: NOTIIFICATION_LIST_SUCCESS,
  payload: user,
});

export const notificationListFailure = (error) => ({
  type: NOTIIFICATION_LIST_FAILURE,
  payload: error,
});


