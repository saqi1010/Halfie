import {  SIGNOUT_FAILURE, SIGNOUT_REQUEST, SIGNOUT_SUCCESS} from "../actionType/actionType";

const initialState = {
  signOut: null,
  loading: false,
  error: null,
};
const signOutReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNOUT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SIGNOUT_SUCCESS:
      return {
        ...state,
        signOut: action.payload,
        loading: false,
      };
    case SIGNOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default signOutReducer;
