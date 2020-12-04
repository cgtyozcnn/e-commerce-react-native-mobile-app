import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Platform,
  Alert,
  Animated,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../../components/shop/CartItem";
import Colors from "../../constants/Colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI/HeaderButton";
import * as ordersActions from "../../store/actions/orders";
import * as cartActions from "../../store/actions/cart";
const Cart = (props) => {
  const dispatch = useDispatch();
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);

  const cartItems = useSelector((state) => {
    const cartArray = [];
    for (const key in state.cart.cart) {
      cartArray.push({
        productId: key,
        productTitle: state.cart.cart[key].productTitle,
        productImageUrl: state.cart.cart[key].productImageUrl,
        productPrice: state.cart.cart[key].productPrice,
        quantity: state.cart.cart[key].quantity,
        sum: state.cart.cart[key].sum,
      });
    }
    return cartArray.sort((a, b) => {
      a.id > b.id ? 1 : -1;
    });
  });
  const removeFromCartHandler = (productId) => {
    dispatch(cartActions.removeFromCart(productId));
  };
  const submitHandler = () => {
    dispatch(ordersActions.addOrder(cartItems, cartTotalAmount));
    Alert.alert("Success", "Your payment is successed!", [
      {
        text: "OK",
        onPress: () => props.navigation.navigate("ProductsOverview"),
      },
    ]);
    //
  };
  useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="Purchase" onPress={submitHandler} />
        </HeaderButtons>
      ),
    });
  });
  if (cartItems.length === 0) {
    return (
      <View style={styles.emptyCart}>
        <Text style={{ color: Colors.darklighter }}>Cart is empty!</Text>
      </View>
    );
  }
  return (
    <View style={styles.cart}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.productId.toString()}
        scrollEnabled={true}
        ItemSeparatorComponent={() => {
          return <View style={styles.seperatorLine}></View>;
        }}
        renderItem={(itemData) => (
          <CartItem
            id={itemData.item.productId}
            title={itemData.item.productTitle}
            imageUrl={itemData.item.productImageUrl}
            quantity={itemData.item.quantity}
            price={itemData.item.productPrice}
            sum={itemData.item.sum}
            removeFromCart={removeFromCartHandler}
          />
        )}
      />
      <View style={styles.totalAmount}>
        <Text>Total Amount</Text>
        <Text> ${Math.round(cartTotalAmount.toFixed(2) * 100) / 100}</Text>
      </View>
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: "Cart",
  };
};
const styles = StyleSheet.create({
  cart: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  emptyCart: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  totalAmount: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    backgroundColor: Colors.lighter,
    paddingHorizontal: 20,
    paddingVertical: 20,

    fontSize: 18,
    fontWeight: "bold",
  },
  seperatorLine: {
    backgroundColor: Colors.lighter,
    height: 2,
  },
});
export default Cart;
