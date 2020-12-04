import * as actionTypes from "./actionTypes";

export const addToCart = (product,quantity) => {
  return { type: actionTypes.ADD_TO_CART, product: product ,quantity:quantity};
};
export const removeFromCart = (productId) => {
  return { type: actionTypes.REMOVE_FROM_CART, pid: productId };
};
