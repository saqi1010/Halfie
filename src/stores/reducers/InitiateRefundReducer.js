import { INITIATE_REFUND_FAILURE, INITIATE_REFUND_REQUEST, INITIATE_REFUND_SUCCESS } from "../actionType/actionType";

const initialState = {
  initiateData: null,
  loading: false,
  error: null,
};
const InitiateRefundReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIATE_REFUND_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case INITIATE_REFUND_SUCCESS:
      return {
        ...state,
        initiateData: action.payload,
        loading: false,
      };
    case INITIATE_REFUND_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default InitiateRefundReducer;
