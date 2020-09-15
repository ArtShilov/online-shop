import {
  ADD_PRODUCT_TO_CART,
  CLEAR_CART,
  REMOVE_CART_ITEM,
  PLUS_ITEM,
  MINUS_ITEM,
  SET_INITIAL_STATE_TO_CART,
} from "../types";

export const addProductToCart = (productObject) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: productObject,
  };
};

export const setInitialStateToCart = (initialState) => {
  return {
    type: SET_INITIAL_STATE_TO_CART,
    payload: initialState,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

export const removeCartItem = (name) => {
  return {
    type: REMOVE_CART_ITEM,
    payload: name,
  };
};

export const plusItem = (name) => {
  return {
    type: PLUS_ITEM,
    payload: name,
  };
};

export const minusItem = (name) => {
  return {
    type: MINUS_ITEM,
    payload: name,
  };
};
