import { PRODUCTS } from "../../data/dummy-data";
import * as actionTypes from "../actions/actionTypes";

const initialState = {
  products: [],
  filteredProducts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: PRODUCTS,
        filteredProducts: PRODUCTS,
      };
    case actionTypes.FILTER_PRODUCTS:
      let products = [...state.products];
      let filteredProducts = [];
      if (action.searchKeywrod === 0) {
        filteredProducts = products;
      }
      filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(action.searchKeyword.toLowerCase())
      );
      return {
        ...state,
        filteredProducts: filteredProducts,
      };
    default:
      return state;
  }
};
