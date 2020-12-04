import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Platform,
  FlatList,
  Button,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import ProductItem from "../../components/shop/ProductItem";
import HeaderButton from "../../components/UI/HeaderButton";

import { useDispatch, useSelector } from "react-redux";
import * as productsActions from "../../store/actions/products";
import * as cartActions from "../../store/actions/cart";
import Colors from "../../constants/Colors";
const ProductsOverviewScreen = (props) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  useEffect(() => {
    dispatch(productsActions.fetchProducts());
  }, [dispatch]);
  const selectItemHandler = (id, title) => {
    props.navigation.navigate("ProductDetail", {
      productId: id,
      productTitle: title,
    });
  };
  return (
    <View style={styles.centered}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => {
          return <View style={styles.seperatorLine}></View>;
        }}
        renderItem={(itemData) => (
          <ProductItem
            title={itemData.item.title}
            description={itemData.item.description}
            imageUrl={itemData.item.imageUrl}
            price={itemData.item.price}
            onSelect={() => {
              selectItemHandler(itemData.item.id, itemData.item.title);
            }}
          >
            <Button
              title="Add to Cart"
              color={Colors.primary}
              onPress={() => {
                dispatch(cartActions.addToCart(itemData.item, 1));
              }}
            />
            <Button
              title="Go to Detail"
              color={Colors.primary}
              onPress={() =>
                selectItemHandler(itemData.item.id, itemData.item.title)
              }
            />
          </ProductItem>
        )}
      />
    </View>
  );
};
export const screenOptions = (navData) => {
  return {
    headerTitle: "E-Commerce",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="cart"
          iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
          onPress={() => {
            navData.navigation.navigate("Cart");
          }}
        />
      </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  seperatorLine: {
    backgroundColor: Colors.lighter,
    height: 2,
  },
});
export default ProductsOverviewScreen;
