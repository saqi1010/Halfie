import { UPLOAD_IMAGE_FAILURE, UPLOAD_IMAGE_REQUEST, UPLOAD_IMAGE_SUCCESS } from "../actionType/actionType";

const initialState = {
  uploadImageData: null,
  loading: false,
  error: null,
};
const uploadImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_IMAGE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
        uploadImageData: action.payload,
        loading: false,
      };
    case UPLOAD_IMAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default uploadImageReducer;
