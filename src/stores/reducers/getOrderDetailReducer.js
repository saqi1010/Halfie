import { GET_ORDERDETAIL_FAILURE, GET_ORDERDETAIL_REQUEST, GET_ORDERDETAIL_SUCCESS } from "../actionType/actionType";

const initialState = {
  orderDetailData: null,
  loading: false,
  error: null,
};
const getOrderDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERDETAIL_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_ORDERDETAIL_SUCCESS:
      return {
        ...state,
        orderDetailData: action.payload,
        loading: false,
      };
    case GET_ORDERDETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getOrderDetailReducer;
