import { OURSERVICE_FAILURE, OURSERVICE_REQUEST, OURSERVICE_SUCCESS } from "../actionType/actionType";
const initialState = {
  srervicesData: null,
  loading: false,
  error: null,
};
const ourServicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case OURSERVICE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case OURSERVICE_SUCCESS:
      return {
        ...state,
        srervicesData:  action.payload,
        loading: false,
      };
    case OURSERVICE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default ourServicesReducer;
