import { PAYMENT_FAILURE, PAYMENT_REQUEST, PAYMENT_SUCCESS } from "../actionType/actionType";
const initialState = {
 paymentData: null,
  loading: false,
  error: null,
};
const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAYMENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case PAYMENT_SUCCESS:
      return {
        ...state,
        paymentData: action.payload,
        loading: false,
      };
    case PAYMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default paymentReducer;
