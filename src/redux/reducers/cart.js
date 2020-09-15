import {
  ADD_PRODUCT_TO_CART,
  CLEAR_CART,
  REMOVE_CART_ITEM,
  PLUS_ITEM,
  MINUS_ITEM,
  SET_INITIAL_STATE_TO_CART,
} from "../types";

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (array) => {
  return array.reduce((sum, obj) => +(sum + obj.price).toFixed(2), 0);
};

const getAllProductArray = (object) => {
  const items = Object.values(object).map((obj) => obj.items);
  const allProductsArray = [].concat.apply([], items);
  return allProductsArray;
};

const setStateToLocalStorage = (cartState) => {
  localStorage.setItem("cart", JSON.stringify(cartState));
};

function cart(state = initialState, { type, payload }) {
  switch (type) {
    case SET_INITIAL_STATE_TO_CART: {
      return JSON.parse(payload);
    }

    case ADD_PRODUCT_TO_CART: {
      const currentProductItems = !state.items[payload.name]
        ? [payload]
        : [...state.items[payload.name].items, payload];

      const newItems = {
        ...state.items,
        [payload.name]: {
          items: currentProductItems,
          totalPrice: getTotalPrice(currentProductItems),
        },
      };

      const allProductsArray = getAllProductArray(newItems);
      const calculatePrice = getTotalPrice(allProductsArray);
      const newState = {
        ...state,
        items: newItems,
        totalCount: allProductsArray.length,
        totalPrice: calculatePrice,
      };
      setStateToLocalStorage(newState);
      return newState;
    }
    case CLEAR_CART: {
      const newState = {
        items: {},
        totalPrice: 0,
        totalCount: 0,
      };
      setStateToLocalStorage(newState);
      return newState;
    }
    case REMOVE_CART_ITEM: {
      const newItems = {
        ...state.items,
      };

      delete newItems[payload];
      const allProductsArray = getAllProductArray(newItems);
      const calculatePrice = getTotalPrice(allProductsArray);

      const newState = {
        ...state,
        items: newItems,
        totalPrice: calculatePrice,
        totalCount: allProductsArray.length,
      };
      setStateToLocalStorage(newState);
      return newState;
    }

    case PLUS_ITEM: {
      const newItems = [
        ...state.items[payload].items,
        state.items[payload].items[0],
      ];

      const newState = {
        ...state,
        items: {
          ...state.items,
          [payload]: {
            items: newItems,
            totalPrice: getTotalPrice(newItems),
          },
        },
        totalPrice: +(state.totalPrice + newItems[0].price).toFixed(2),
        totalCount: state.totalCount + 1,
      };
      setStateToLocalStorage(newState);
      return newState;
    }
    case MINUS_ITEM: {
      const oldItems = state.items[payload].items;
      const newItems =
        oldItems.length > 1 ? state.items[payload].items.slice(1) : oldItems;
      const newState = {
        ...state,
        items: {
          ...state.items,
          [payload]: {
            items: newItems,
            totalPrice: getTotalPrice(newItems),
          },
        },
        totalPrice:
          oldItems.length > 1
            ? +(state.totalPrice - newItems[0].price).toFixed(2)
            : state.totalPrice,
        totalCount:
          oldItems.length > 1 ? state.totalCount - 1 : state.totalCount,
      };
      setStateToLocalStorage(newState);
      return newState;
    }

    default:
      return state;
  }
}

export default cart;
