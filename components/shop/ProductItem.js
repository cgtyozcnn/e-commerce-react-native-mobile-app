import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import Card from "../UI/Card";
import Colors from "../../constants/Colors";
const ProductItem = (props) => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <Card style={styles.product}>
      <View style={styles.touchable}>
        <TouchableCmp useForeground  onPress={props.onSelect} >
          <View>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={props.imageUrl} />
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.title}>{props.title}</Text>
              <Text style={styles.price}>${props.price.toFixed(2)}</Text>
            </View>
            <View style={styles.buttonContainer}>{props.children}</View>
          </View>
        </TouchableCmp>
      </View>
    </Card>
  );
};
const styles = StyleSheet.create({
  product: {
    flex: 1,
  },
  imageContainer: {
    marginVertical: 10,
    paddingHorizontal: 10,
    width: "100%",
    height: 200,

  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  detailsContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    marginVertical: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    color: Colors.darklighter,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  touchable: {
    overflow: "hidden",
    borderRadius: 0,
  },
});
export default ProductItem;
