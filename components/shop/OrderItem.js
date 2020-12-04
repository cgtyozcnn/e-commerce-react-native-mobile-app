import React ,{useState}from "react";
import { View, StyleSheet, Text, Platform, Button,Image } from "react-native";
import moment from "moment";
import Colors from "../../constants/Colors";
import Card from '../UI/Card'
const OrderItem = (props) => {
  const [showDetail, setShowDetail] = useState(false);
  console.log(props.order);
  return (
    <Card style={styles.screen}>
      <View style={styles.orderSummary}>
        <View style={styles.orderSummaryItem}>
          <Text style={{ fontWeight: "bold" }}>Ordered No</Text>
          <Text>{props.order.id}</Text>
        </View>
        <View>
          <Text style={{ fontWeight: "bold" }}>Ordered Date</Text>
          <Text>{moment(props.order.date).format("MM/DD/YYYY")}</Text>
        </View>
        <View>
          <Text style={{ fontWeight: "bold" }}>Total Amount</Text>
          <Text>
            ${Math.round(props.order.totalAmount.toFixed(2) * 100) / 100}
          </Text>
        </View>
      </View>
      <View style={styles.detailButton}>
        <Button
          title={showDetail ? "Hide Detail" : "Show Detail"}
          color={Colors.primary}
          onPress={() => setShowDetail((prevState) => !prevState)}
        />
      </View>
      {showDetail &&
        props.order.items.map((item) => (
          <View style={styles.orderDetail} key={item.productId}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={item.productImageUrl} />
            </View>
            <View style={styles.orderDetailSummary}>
              <Text>
                {item.productTitle.length > 40
                  ? `${item.productTitle.substring(0, 40)}...`
                  : item.productTitle}
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold" }}>Quantity:</Text>
                <Text>{item.quantity}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold" }}>Price:</Text>
                <Text>${Math.round(item.productPrice.toFixed(2) * 100) / 100}</Text>
              </View>
            </View>
          </View>
        ))}
    </Card>
  );
};
const styles = StyleSheet.create({
  screen: {

  marginVertical:10
  },
  orderSummary: {
    paddingHorizontal: 10,
    paddingVertical:20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: Colors.lighter,
  },
  orderSummaryItem: {
    flexDirection: "column",
  },
  detailButton: {
    padding: 10,
  },
  orderDetail:{
      flexDirection:"row",
      borderBottomWidth: 1,
      borderBottomColor: Colors.darklighter,
      height:100
      
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
  orderDetailSummary: {
    flexDirection: "column",
    flex: 2,
    justifyContent: "space-between",
    paddingVertical:10
  },
});
export default OrderItem;
