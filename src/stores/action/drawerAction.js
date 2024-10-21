import {GLOBAL_DRAWER } from "../actionType/actionType";

export const drawerAction = (payload) => {
return{
  type: GLOBAL_DRAWER,
  payload: payload,
}
}


