import * as actionTypes from "../actions/actionTypes";
import CartItem from "../../models/cart-item";
const initialState = {
  cart: {},
  totalAmount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      let addedProduct = action.product;
      let updatedOrNewCartItem;

      if (state.cart[addedProduct.id]) {
        updatedOrNewCartItem = new CartItem(
          addedProduct.title,
          addedProduct.imageUrl,
          addedProduct.price,
          state.cart[addedProduct.id].quantity + action.quantity,
          state.cart[addedProduct.id].sum + addedProduct.price * action.quantity
        );
      } else {
        updatedOrNewCartItem = new CartItem(
          addedProduct.title,
          addedProduct.imageUrl,
          addedProduct.price,
          action.quantity,
          addedProduct.price
        );
      }
      return {
        cart: { ...state.cart, [addedProduct.id]: updatedOrNewCartItem },
        totalAmount: state.totalAmount + addedProduct.price * action.quantity,
      };
    case actionTypes.REMOVE_FROM_CART:
      let selectedCartItem = state.cart[action.pid];

      const updatedCart = { ...state.cart };
      delete updatedCart[action.pid];

      return {
        ...state,
        cart: updatedCart,
        totalAmount: state.totalAmount - selectedCartItem.sum,
      };

    case actionTypes.ADD_ORDER:
      return initialState;
    default:
      return state;
  }
};
