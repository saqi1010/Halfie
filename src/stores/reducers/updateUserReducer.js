import { UPDATE_USER_FAILURE, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS } from "../actionType/actionType";

const initialState = {
  updateUserData: null,
  loading: false,
  error: null,
};

const updateUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        updateUserData: action.payload,
        loading: false,
      };
    case UPDATE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default updateUserReducer;
