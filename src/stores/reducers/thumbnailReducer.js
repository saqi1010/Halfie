import {THUMBNAIL } from "../actionType/actionType";

const initialState = {
    thumbnailData: null,
  error: null,
};

const thumbnailReducer = (state = initialState, action) => {
  switch (action.type) {
    case THUMBNAIL:
      return {
        ...state,
        thumbnailData: action.payload,
        error: null,
      };
    default:
      return state;
  }
};

export default thumbnailReducer;
