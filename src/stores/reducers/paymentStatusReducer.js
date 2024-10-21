import { PAYMENT_STATUS_FAILURE, PAYMENT_STATUS_REQUEST, PAYMENT_STATUS_SUCCESS } from "../actionType/actionType";

const initialState = {
 paymentStatusData: null,
  loading: false,
  error: null,
};
const paymentStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAYMENT_STATUS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case PAYMENT_STATUS_SUCCESS:
      return {
        ...state,
        paymentStatusData: action.payload,
        loading: false,
      };
    case PAYMENT_STATUS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default paymentStatusReducer;
