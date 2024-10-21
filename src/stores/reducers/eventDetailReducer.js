import { EVENTDETAIL_REQUEST, EVENTDETAIL_SUCCESS,EVENTDETAIL_FAILURE} from "../actionType/actionType";
const initialState = {
  eventDetailData: null,
  loading: false,
  error: null,
};
const eventDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case EVENTDETAIL_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case  EVENTDETAIL_SUCCESS:
      return {
        ...state,
        eventDetailData:  action.payload,
        loading: false,
      };
    case  EVENTDETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default eventDetailReducer;
