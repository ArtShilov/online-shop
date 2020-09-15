import { SET_PRODUCTS, SET_LOADED } from "../types";
import axios from "axios";

export const setLoaded = (payload) => {
  return {
    type: SET_LOADED,
    payload,
  };
};

export const fetchProducts = (dealersArray) => (dispatch) => {
  console.log("fetchProducts -> dealersArray", dealersArray)
  dispatch(setLoaded(false));
  axios
    .get(
      `https://murmuring-tor-81614.herokuapp.com/api/goods/
      ${dealersArray.length>0?`?dealers=${[...dealersArray]}`: ''}`
    )
    .then(({ data }) => {
      dispatch(setProducts(data));
    });
};

export const setProducts = (items) => {
  return {
    type: SET_PRODUCTS,
    payload: items,
  };
};
