import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Card from "../UI/Card";
import Colors from "../../constants/Colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
const CartItem = (props) => {
  console.log(props);

  const leftSwipe = () => {
    return (
      <View style={styles.leftSwipe}>
        <TouchableOpacity onPress={()=>props.removeFromCart(props.id)}>
          <View
            style={styles.leftSwipeContainer}
          >
            <Ionicons name="ios-trash" size={36} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <Swipeable renderLeftActions={leftSwipe}>
      <Card style={styles.cartItem}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={props.imageUrl} />
        </View>
        <View style={styles.summary}>
          <Text>
            {props.title.length > 40
              ? `${props.title.substring(0, 40)}...`
              : props.title}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold" }}>Quantity:</Text>
            <Text>{props.quantity}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold" }}>Price:</Text>
            <Text>{props.price}</Text>
          </View>
        </View>
        <View style={styles.sum}>
          <Text style={{ fontWeight: "bold" }}>
            ${Math.round(props.sum.toFixed(2) * 100) / 100}
          </Text>
        </View>
      </Card>
    </Swipeable>
  );
};
const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageContainer: {
    height: 80,
    flex: 1,
    padding: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  summary: {
    flexDirection: "column",
    flex: 2,
    justifyContent: "space-between",
  },
  sum: {
    borderLeftWidth: 1,
    borderColor: Colors.lighter,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  leftSwipe: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    backgroundColor: "red",
  },
  leftSwipeContainer:{
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    height:"100%"
  }
});
export default CartItem;
