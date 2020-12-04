import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { ShopNavigator ,ProductsNavigator} from "./ShopNavigator";
const AppNavigator = (props) => {
  return (
    <NavigationContainer>
      <ShopNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
