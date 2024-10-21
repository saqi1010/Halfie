import {  DEVICEANDLOCATION_REQUEST } from "../actionType/actionType";

export const deviceAndLocationRequest = (payload) => {
return{
  type: DEVICEANDLOCATION_REQUEST,
  payload: payload,
}
}


