import { MATCH_PROFILE_FAILURE, MATCH_PROFILE_REQUEST, MATCH_PROFILE_SUCCESS } from "../actionType/actionType";

const initialState = {
  matchProfileData: null,
  loading: false,
  error: null,
};

const matchProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case MATCH_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case MATCH_PROFILE_SUCCESS:
      return {
        ...state,
        matchProfileData: action.payload,
        loading: false,
      };
    case MATCH_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default matchProfileReducer;
