import { UPLOAD_IDVERIFICATION_IMAGE_FAILURE, UPLOAD_IDVERIFICATION_IMAGE_REQUEST, UPLOAD_IDVERIFICATION_IMAGE_SUCCESS } from "../actionType/actionType";

const initialState = {
  uploadIdverificationImageData: null,
  loading: false,
  error: null,
};
const uploadIdverificationImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_IDVERIFICATION_IMAGE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UPLOAD_IDVERIFICATION_IMAGE_SUCCESS:
      return {
        ...state,
        uploadIdverificationImageData: action.payload,
        loading: false,
      };
    case UPLOAD_IDVERIFICATION_IMAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default uploadIdverificationImageReducer;

