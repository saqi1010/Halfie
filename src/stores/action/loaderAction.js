import {   LOADER } from "../actionType/actionType";

export const loaderRequest = (payload) => {
return{
  type: LOADER,
  payload: payload,
}
}


