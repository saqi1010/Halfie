import { SUBSCRIPITON_DETAIL_FAILURE, SUBSCRIPITON_DETAIL_REQUEST, SUBSCRIPITON_DETAIL_SUCCESS } from "../actionType/actionType";

const initialState = {
  subscriptionDetailData: null,
  loading: false,
  error: null,
};

const subscriptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBSCRIPITON_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SUBSCRIPITON_DETAIL_SUCCESS:
      return {
        ...state,
        subscriptionDetailData: action.payload,
        loading: false,
      };
    case SUBSCRIPITON_DETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default subscriptionReducer;
