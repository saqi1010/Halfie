import { WEB_INDEX_FAILURE, WEB_INDEX_REQUEST, WEB_INDEX_SUCCESS } from "../actionType/actionType";

export const webIndexRequest = (payload,callback) => ({
    type: WEB_INDEX_REQUEST,
    payload,
    callback
  });
export const webIndexSuccess = (user) => ({
  type: WEB_INDEX_SUCCESS,
  payload: user,
});

export const webIndexFailure = (error) => ({
  type:WEB_INDEX_FAILURE,
  payload: error,
});


