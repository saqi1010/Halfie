import { GET_USER_REPORT_FAILURE, GET_USER_REPORT_REQUEST, GET_USER_REPORT_SUCCESS } from "../actionType/actionType";

const initialState = {
  getUserReportData: null,
  loading: false,
  error: null,
};

const getUserReportReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_REPORT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_USER_REPORT_SUCCESS:
      return {
        ...state,
        getUserReportData: action.payload,
        loading: false,
      };
    case GET_USER_REPORT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getUserReportReducer;
