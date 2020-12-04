import * as actionTypes from "./actionTypes";

export const fetchProducts = () => {
  return { type: actionTypes.SET_PRODUCTS };
};

export const filterProducts = (searchKeyword) => {
  return { type: actionTypes.FILTER_PRODUCTS, searchKeyword };
};
