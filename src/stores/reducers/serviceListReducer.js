import { SERVICES_REQUEST, SERVICES_SUCCESS,SERVICES_FAILURE} from "../actionType/actionType";
const initialState = {
  serviceListData: null,
  loading: false,
  error: null,
};
const serviceListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SERVICES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case  SERVICES_SUCCESS:
      return {
        ...state,
        serviceListData:  action.payload,
        loading: false,
      };
    case  SERVICES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default serviceListReducer;
