import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";

const Checkout = ({ count, pricePerItem, shippingFee}) => {
  const itemsTotal = pricePerItem * count;
  const totalPayment = itemsTotal + shippingFee;

  return (
    <View style={styles.main}>
      <View style={styles.checkoutView}>
        <Text style={styles.checkoutText}>Checkout Summary</Text>
      </View>

      <View style={styles.detailsViews}>
        <View style={styles.iconAndTextView}>
          <Entypo name="dot-single" size={24} color="black" />
          <Text style={{ fontWeight: "500" }}>Items total</Text>
        </View>
        <View>
          <Text style={{ fontWeight: "500" }}>{`$ ${pricePerItem * count }`}</Text>
        </View>
      </View>
      <View style={styles.detailsViews}>
        <View style={styles.iconAndTextView}>
          <Entypo name="dot-single" size={24} color="black" />
          <Text style={{ fontWeight: "500" }}>Shipping Fee</Text>
        </View>
        <View>
          <Text style={{ fontWeight: "500" }}>{`$ ${shippingFee}`}</Text>
        </View>
      </View>
      <View style={styles.detailsViews}>
        <View style={styles.iconAndTextView}>
          <Entypo name="dot-single" size={24} color="black" />
          <Text style={{ fontWeight: "500" }}>Delivery Discount</Text>
        </View>
        <View>
          <Text style={{ fontWeight: "500" }}>$0.00</Text>
        </View>
      </View>
      <View style={styles.totalpaymentView}>
        <View>
          <Text style={{ fontSize: 16, fontWeight: "500" }}>Total Payment</Text>
        </View>
        <View>
          <Text style={{ fontSize: 16 }}>{`$ ${totalPayment} `}</Text>
        </View>
      </View>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  main: {
    width: "95%",
    height: 187,
    backgroundColor: "#fff",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 1,
  },
  checkoutView: {
    width: "90%",
    paddingTop: 8,
    paddingBottom: 5,
  },
  checkoutText: {
    fontSize: 20,
    fontWeight: "500",
  },
  detailsViews: {
    width: "85%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 2,
  },
  iconAndTextView: {
    flexDirection: "row",
    alignItems: "center",
  },
  totalpaymentView: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 15,
  },
});
