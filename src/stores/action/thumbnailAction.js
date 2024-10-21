import {   THUMBNAIL } from "../actionType/actionType";

export const thumbnailRequest = (payload) => {
return{
  type: THUMBNAIL,
  payload: payload,
}
}


