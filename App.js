import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./navigation/AppNavigator";
import {Provider} from "react-redux"
import { combineReducers,createStore} from 'redux'
import productsReducer from "./store/reducers/products";
import cartReducer from './store/reducers/cart'
import ordersReducer from './store/reducers/orders'
const rootReducer = combineReducers({
  products: productsReducer,
  cart:cartReducer,
  orders:ordersReducer
});
const store = createStore(rootReducer);
export default function App() {
  return <Provider store={store}>
    <AppNavigator />
    </Provider>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
