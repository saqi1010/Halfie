import { PAYMENT_ORDER_DETAIL_FAILURE, PAYMENT_ORDER_DETAIL_REQUEST, PAYMENT_ORDER_DETAIL_SUCCESS } from "../actionType/actionType";

const initialState = {
    paymentOrderDetailData: null,
  loading: false,
  error: null,
};
const paymentOrderDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAYMENT_ORDER_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case PAYMENT_ORDER_DETAIL_SUCCESS:
      return {
        ...state,
        paymentOrderDetailData: action.payload,
        loading: false,
      };
    case PAYMENT_ORDER_DETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default paymentOrderDetailReducer;
