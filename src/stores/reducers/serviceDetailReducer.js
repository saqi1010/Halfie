import { SERVICES_DETAIL_REQUEST, SERVICES_DETAIL_SUCCESS,SERVICES_DETAIL_FAILURE} from "../actionType/actionType";
const initialState = {
 serviceDetailData: null,
  loading: false,
  error: null,
};
const serviceDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case SERVICES_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case  SERVICES_DETAIL_SUCCESS:
      return {
        ...state,
       serviceDetailData:  action.payload,
        loading: false,
      };
    case  SERVICES_DETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default serviceDetailReducer;
