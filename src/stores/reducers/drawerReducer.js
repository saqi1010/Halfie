// reducers/drawerReducer.js
import { GLOBAL_DRAWER } from "../actionType/actionType";

const initialState = {
  openDrawer: () => {},
  closeDrawer: () => {},
  bodyStaff: () => {},
  settedItem:null
};

const drawerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GLOBAL_DRAWER:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default drawerReducer;
