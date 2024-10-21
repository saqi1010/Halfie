import { ONBORDING_FAILURE, ONBORDING_REQUEST, ONBORDING_SUCCESS } from "../actionType/actionType";
const initialState = {
  onBordingData: null,
  loading: false,
  error: null,
};
const onBordingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ONBORDING_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ONBORDING_SUCCESS:
      return {
        ...state,
        onBordingData:  action.payload,
        loading: false,
      };
    case ONBORDING_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default onBordingReducer;
