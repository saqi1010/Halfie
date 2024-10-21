import { USEREXIST_FAILURE, USEREXIST_REQUEST, USEREXIST_SUCCESS} from "../actionType/actionType";

const initialState = {
  userExist: null,
  loading: false,
  error: null,
};
const userExistReducer = (state = initialState, action) => {
  switch (action.type) {
    case USEREXIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case USEREXIST_SUCCESS:
      return {
        ...state,
        userExist: action.payload,
        loading: false,
      };
    case USEREXIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userExistReducer;
