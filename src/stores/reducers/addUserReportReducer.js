import { ADD_REPORT_FAILURE, ADD_REPORT_REQUEST, ADD_REPORT_SUCCESS } from "../actionType/actionType";

const initialState = {
  addUserReportData: null,
  loading: false,
  error: null,
};

const addUserReportReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REPORT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_REPORT_SUCCESS:
      return {
        ...state,
        addUserReportData: action.payload,
        loading: false,
      };
    case ADD_REPORT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default addUserReportReducer;
