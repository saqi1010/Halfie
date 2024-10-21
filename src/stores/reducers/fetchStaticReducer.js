import { FETCH_STATIC_FAILURE, FETCH_STATIC_REQUEST, FETCH_STATIC_SUCCESS } from "../actionType/actionType";

const initialState = {
  fetchStaticData: null,
  loading: false,
  error: null,
};

const fetchStaticReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STATIC_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_STATIC_SUCCESS:
      return {
        ...state,
        fetchStaticData: action.payload,
        loading: false,
      };
    case FETCH_STATIC_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default fetchStaticReducer;
