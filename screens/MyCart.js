// MyCart.js
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import CartHeader from '../componnents/CartHeader';
import ShippingAddress from '../componnents/ShippingAddress';
import OrderDetails from '../componnents/OrderDetails';
import Checkout from '../componnents/Checkout';
import ProceedBtn from '../componnents/ProceedBtn';

const MyCart = ({ navigation }) => {
  const [count, setCount] = useState(1);
  const pricePerItem = 500;
  const shippingFee = 199;
  const totalPayment = count * pricePerItem + shippingFee;

  return (
    <ScrollView>
      <View style={styles.container}>
        <CartHeader title={"My Cart"} onPress={() => navigation.goBack()} />
        <View style={styles.heading}>
          <Text style={styles.headingText}>Shipping Address</Text>
        </View>
        <ShippingAddress />
        <OrderDetails count={count} price={pricePerItem} setCount={setCount} />
        <Checkout count={count} pricePerItem={pricePerItem} shippingFee={shippingFee} totalPayment={totalPayment} />
        <ProceedBtn onPress={() => navigation.navigate("CheckoutScreen", { totalPayment })} />
      </View>
    </ScrollView>
  );
};

export default MyCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 15,
  },
  heading: {
    width: "90%",
  },
  headingText: {
    fontSize: 20,
    fontWeight: "500",
  },
});
