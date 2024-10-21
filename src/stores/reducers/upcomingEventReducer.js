import { UPCOMINGEVENT_FAILURE, UPCOMINGEVENT_REQUEST, UPCOMINGEVENT_SUCCESS } from "../actionType/actionType";

const initialState = {
    upcomingEventData: null,
    loading: false,
    error: null,
};
const upcomingEventReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPCOMINGEVENT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case UPCOMINGEVENT_SUCCESS:
            return {
                ...state,
                upcomingEventData: action.payload,
                loading: false,
            };
        case UPCOMINGEVENT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default upcomingEventReducer;
