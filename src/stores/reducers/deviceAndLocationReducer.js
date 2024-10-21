import { DEVICEANDLOCATION_REQUEST } from "../actionType/actionType";

const initialState = {
  deviceData: null,
  loading: false,
  error: null,
};

const deviceAndLocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEVICEANDLOCATION_REQUEST:
      return {
        ...state,
        deviceData: action.payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default deviceAndLocationReducer;
