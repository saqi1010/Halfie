import { GET_COUNTRY_FAILURE, GET_COUNTRY_REQUEST, GET_COUNTRY_SUCCESS } from "../actionType/actionType";

const initialState = {
  countryData: null,
  loading: false,
  error: null,
};
const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_COUNTRY_SUCCESS:
      return {
        ...state,
        countryData: action.payload,
        loading: false,
      };
    case GET_COUNTRY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default countryReducer;
