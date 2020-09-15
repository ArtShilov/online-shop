import { SET_PRODUCTS, SET_LOADED } from "../types";

const initialState = {
  items: [],
  isLoaded: false,
};

function products(state = initialState, { type, payload }) {
  switch (type) {
    case SET_PRODUCTS:
      return {
        ...state,
        items: payload,
        isLoaded: true,
      };
    case SET_LOADED:
      return {
        ...state,
        isLoaded: payload,
      };

    default:
      return state;
  }
}

export default products;
