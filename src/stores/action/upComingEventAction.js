import { UPCOMINGEVENT_FAILURE, UPCOMINGEVENT_REQUEST, UPCOMINGEVENT_SUCCESS } from "../actionType/actionType";

export const upcomingEventRequest = () => ({
  type: UPCOMINGEVENT_REQUEST,
  payload: null,
});
export const upcomingEventSuccess = (data) => {
  return {
    type: UPCOMINGEVENT_SUCCESS,
    payload: data,
  };
};
export const upcomingEventFailure = (error) => ({
  type: UPCOMINGEVENT_FAILURE,
  payload: error,
});
