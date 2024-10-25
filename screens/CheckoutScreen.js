// CheckoutScreen.js
import { StyleSheet, Text, View, TouchableOpacity, Alert, ScrollView } from "react-native";
import React, { useState } from "react";
import CartHeader from "../componnents/CartHeader";
import SelectPatment from "../componnents/SelectPatment";
import InputWithText from "../componnents/InputWithText";
import ShippingAddress from "../componnents/ShippingAddress";

const CheckoutScreen = ({ navigation, route }) => {
  const { totalPayment } = route.params; // Retrieve totalPayment from navigation parameters
  const [selectedPayment, setSelectedPayment] = useState(null);

  const paymentOptions = [
    { title: "Credit/Debit Card", source: require("../assets/images/mlogo.png") },
    { title: "PayPal", source: require("../assets/images/plogo.png") },
    { title: "ApplePay", source: require("../assets/images/alogo.png") },
    { title: "Other Payment Option", source: require("../assets/images/dlogo.png") },
  ];

  const handleSelectPayment = (title) => {
    setSelectedPayment(selectedPayment === title ? null : title);
  };

  const OrderComplete = () => {
    Alert.alert("Your Order Is On The Way");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <CartHeader title={"Checkout (1)"} onPress={() => navigation.goBack()} />
        <View style={styles.heading}>
          <Text style={styles.headingText}>Payment</Text>
        </View>
        {paymentOptions.map((option, index) => (
          <SelectPatment key={index} title={option.title} source={option.source} isSelected={selectedPayment === option.title} onSelect={() => handleSelectPayment(option.title)} />
        ))}
        <View style={styles.inputText}>
          <InputWithText />
        </View>
        <View style={styles.heading}>
          <Text style={styles.headingTextTwo}>Shipping Address</Text>
        </View>
        <ShippingAddress />
        <View style={styles.totalpayment}>
          <Text style={styles.totalPaymentTexts}>TOTAL</Text>
          <Text style={styles.totalPaymentTexts}>{`$ ${totalPayment}`}</Text>
        </View>
        <TouchableOpacity style={styles.btn} onPress={OrderComplete}>
          <Text style={styles.btnText}>Proceed To Checkout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    gap: 10,
  },
  heading: {
    width: "90%",
    paddingVertical: 10,
  },
  headingText: {
    fontSize: 28,
    fontWeight: "500",
  },
  inputText: {
    width: "100%",
    alignItems: "center",
    paddingTop: 10,
  },
  headingTextTwo: {
    fontSize: 20,
    fontWeight: "700",
  },
  totalpayment: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  totalPaymentTexts: {
    fontSize: 20,
    fontWeight: "700",
  },
  btn: {
    width: "80%",
    backgroundColor: "#2750E1",
    alignItems: "center",
    height: 45,
    justifyContent: "center",
    borderRadius: 16,
    marginBottom:10,
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },
});
