import { WISHLIST_FAILURE, WISHLIST_REQUEST, WISHLIST_SUCCESS } from "../actionType/actionType";
const initialState = {
  wishlistData: null,
  loading: false,
  error: null,
};
const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case WISHLIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case WISHLIST_SUCCESS:
      return {
        ...state,
        wishlistData:  action.payload,
        loading: false,
      };
    case WISHLIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default wishlistReducer;
