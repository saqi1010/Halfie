import {LOADER } from "../actionType/actionType";

const initialState = {
  loader: false,
  error: null,
};

const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADER:
      return {
        ...state,
        loader: action.payload,
        error: null,
      };
    default:
      return state;
  }
};

export default loaderReducer;
