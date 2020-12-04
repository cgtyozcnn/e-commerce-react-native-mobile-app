import * as actionTypes from "../actions/actionTypes";
import Order from "../../models/order";
const initialState = {
  orders: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ORDER:
      const newOrder = new Order(
        `EC${new Date().getTime()}`,
        action.cartItems,
        action.totalAmount,
        new Date()
      );
      return {
        ...state,
        orders: state.orders.concat(newOrder),
      };
    case actionTypes.SET_ORDERS:
      return state;
    default:
      return state;
  }
};
