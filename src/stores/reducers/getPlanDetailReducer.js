import { GET_PLANDETAIL_FAILURE, GET_PLANDETAIL_REQUEST, GET_PLANDETAIL_SUCCESS } from "../actionType/actionType";

const initialState = {
  planDetailData: null,
  loading: false,
  error: null,
};
const getPlanDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PLANDETAIL_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_PLANDETAIL_SUCCESS:
      return {
        ...state,
        planDetailData: action.payload,
        loading: false,
      };
    case GET_PLANDETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getPlanDetailReducer;
