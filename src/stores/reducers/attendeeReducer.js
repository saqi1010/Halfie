import { ATTANDEES_REQUEST, ATTANDEES_SUCCESS,ATTANDEES_FAILURE} from "../actionType/actionType";
const initialState = {
  attendeeData: null,
  loading: false,
  error: null,
};
const attendeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ATTANDEES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case  ATTANDEES_SUCCESS:
      return {
        ...state,
        attendeeData:  action.payload,
        loading: false,
      };
    case  ATTANDEES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default attendeeReducer;
