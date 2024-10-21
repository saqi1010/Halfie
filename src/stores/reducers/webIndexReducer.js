import { WEB_INDEX_FAILURE, WEB_INDEX_REQUEST, WEB_INDEX_SUCCESS } from "../actionType/actionType";

const initialState = {
  webIndexData: null,
  loading: false,
  error: null,
};

const webIndexReducer = (state = initialState, action) => {
  switch (action.type) {
    case WEB_INDEX_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case WEB_INDEX_SUCCESS:
      return {
        ...state,
        webIndexData: action.payload,
        loading: false,
      };
    case WEB_INDEX_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default webIndexReducer;
