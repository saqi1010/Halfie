import { MATCH_OPERATION_FAILURE, MATCH_OPERATION_REQUEST, MATCH_OPERATION_SUCCESS } from "../actionType/actionType";

const initialState = {
  matchOperationData: null,
  loading: false,
  error: null,
};

const matchOperationReducer = (state = initialState, action) => {
  switch (action.type) {
    case MATCH_OPERATION_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case MATCH_OPERATION_SUCCESS:
      return {
        ...state,
        matchOperationData: action.payload,
        loading: false,
      };
    case MATCH_OPERATION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default matchOperationReducer;
