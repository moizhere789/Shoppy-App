import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const OrderDetails = ({ count, price, setCount }) => {
  return (
    <View style={styles.main}>
      <View style={styles.imageView}>
        <Image source={require("../assets/images/image.png")} />
      </View>
      <View style={styles.TextView}>
        <Text style={styles.nameText} numberOfLines={4}>
          Retro brown man leather bag and notebook in bright colorful summer
          grass in the park
        </Text>
        <Text style={styles.priceText}>{`$ ${price * count}`}</Text>
        <View style={styles.quantityView}>
          <Text style={styles.quantityText}>Quantity</Text>
          <View style={styles.btnView}>
            <View style={styles.btnone}>
                <TouchableOpacity onPress={()=>setCount(count-1)}>

              <Text style={{fontSize:20,}}>-</Text>
              </TouchableOpacity>

            </View>
            <View style={styles.btntwo}>
              <Text>{count}</Text>
            </View>

            <View style={styles.btnthree}>
                <TouchableOpacity onPress={()=>setCount(count+1)}>

              <Text style={{fontSize:18,}}>+</Text>
              </TouchableOpacity>

            </View>
          </View>
          
        </View>

      <TouchableOpacity> 
      <MaterialCommunityIcons name="delete" size={22} color="gray" />
      </TouchableOpacity>

      </View>
    </View>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  main: {
    width: "100%",
    backgroundColor: "#fff",
    height: 175,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 5,
    paddingHorizontal: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 1,
  },
  imageView: {
    // backgroundColor: "red",
    height: 170,
    justifyContent: "center",
  },
  TextView: {
    flex: 1,
    // backgroundColor: "pink",
    height: 170,
    paddingTop: 3,
    gap:7,
  },
  quantityView: {
    flexDirection: "row",
    width: "100%",
    // backgroundColor: "yellow",
    justifyContent: "space-between",
    paddingRight: 5,
    height: 30,
    alignItems: "center",
  },
  btnView: {
    borderColor: "black",
    borderWidth: 1,
    width: "55%",
    flexDirection: "row",
  },
  btnone: {
    flex: 1,
    borderRightWidth: 1,
    borderColor: "black",
    alignItems: "center",

  },
  btntwo: {
    flex: 2,
    alignItems: "center",
    justifyContent:"center"
  },

  btnthree: {
    flex: 1,
    borderLeftWidth: 1,
    borderColor: "black",
    alignItems: "center",
  },
  nameText: {
    fontSize: 14,
    fontWeight: "500",
  },
  priceText: {
    fontSize: 20,
    fontWeight: "500",
    color: "#2750E1",
  },
  quantityText: {
    fontSize: 18,
  },
});
