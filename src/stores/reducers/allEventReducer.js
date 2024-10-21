import { ALLEVENT_REQUEST, ALLEVENT_FAILURE,  ALLEVENT_SUCCESS } from "../actionType/actionType";
const initialState = {
  allEventData: null,
  loading: false,
  error: null,
};
const allEventReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALLEVENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case  ALLEVENT_SUCCESS:
      return {
        ...state,
        allEventData:  action.payload,
        loading: false,
      };
    case  ALLEVENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default allEventReducer;
