import {  ACCOUNTDELETE_FAILURE, ACCOUNTDELETE_REQUEST, ACCOUNTDELETE_SUCCESS} from "../actionType/actionType";

const initialState = {
accountDelete: null,
  loading: false,
  error: null,
};
const accountDeleteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACCOUNTDELETE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ACCOUNTDELETE_SUCCESS:
      return {
        ...state,
        accountDelete: action.payload,
        loading: false,
      };
    case ACCOUNTDELETE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default accountDeleteReducer;
