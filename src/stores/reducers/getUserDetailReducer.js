import { GET_USERDETAIL_FAILURE, GET_USERDETAIL_REQUEST, GET_USERDETAIL_SUCCESS } from "../actionType/actionType";

const initialState = {
  getUserDetailData: null,
  loading: false,
  error: null,
};

const getUserDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERDETAIL_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_USERDETAIL_SUCCESS:
      return {
        ...state,
        getUserDetailData: action.payload,
        loading: false,
      };
    case GET_USERDETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getUserDetailReducer;
