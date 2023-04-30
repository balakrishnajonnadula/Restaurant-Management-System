import { ADD_CART, DELETE_CART } from "../actionTypes.js/actionType"

const globalStore = {
  cartItems: 0,
};

const cartReducer = (state = globalStore, action) => {
  switch (action.type) {
    case ADD_CART: {
      return {
        ...state,
        cartItems: state.cartItems + 1,
      };
    }
    case DELETE_CART: {
      return {
        ...state,
        cartItems: state.cartItems - 1,
      };
    }
    default:
      return state;
  }
};
export default cartReducer;
