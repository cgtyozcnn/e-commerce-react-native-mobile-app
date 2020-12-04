import React from "react";
import { View, StyleSheet, Text, Platform, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";
import OrderItem from "../../components/shop/OrderItem";
import HeaderButton from "../../components/UI/HeaderButton";
import Colors from "../../constants/Colors";
const OrdersScreen = (props) => {
  const orders = useSelector((state) => state.orders.orders);

  return (
    <View style={styles.screen}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => <OrderItem order={itemData.item} />}
      />
    </View>
  );
};
export const screenOptions = (navData) => {
  return {
    headerTitle: "Orders",
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="menu"
            iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      );
    },
  };
};
const styles = StyleSheet.create({
  screen: {
    paddingVertical: 10,
    backgroundColor: Colors.lighter2,
    flex: 1,
    
  },
});
export default OrdersScreen;
