import { GET_FRIEND_FAILURE, GET_FRIEND_REQUEST, GET_FRIEND_SUCCESS } from "../actionType/actionType";

const initialState = {
  getFriendData: null,
  loading: false,
  error: null,
};

const getFriendReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FRIEND_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_FRIEND_SUCCESS:
      return {
        ...state,
        getFriendData: action.payload,
        loading: false,
      };
    case GET_FRIEND_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getFriendReducer;
