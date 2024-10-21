import { GET_PLAN_FAILURE, GET_PLAN_REQUEST, GET_PLAN_SUCCESS } from "../actionType/actionType";

const initialState = {
  getPlanData: null,
  loading: false,
  error: null,
};
const getPlanReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PLAN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case  GET_PLAN_SUCCESS:
      return {
        ...state,
        getPlanData:  action.payload,
        loading: false,
      };
    case  GET_PLAN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default getPlanReducer;



