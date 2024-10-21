import { SGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "../actionType/actionType";

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        loading: false,
      };
    case SGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default signUpReducer;
