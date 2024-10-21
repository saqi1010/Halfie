import {  WISHLIST_FAILURE, WISHLIST_REQUEST, WISHLIST_SUCCESS } from "../actionType/actionType";
export const wishlistRequest = () => ({
  type: WISHLIST_REQUEST,
  payload: null,
});
export const wishlistSuccess = (data) => {
  return {
    type: WISHLIST_SUCCESS,
    payload: data,
  };
};
export const wishlistFailure = (error) => ({
  type: WISHLIST_FAILURE,
  payload: error,
});
