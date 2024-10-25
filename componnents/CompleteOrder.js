import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';


const OrderDetails = ({item}) => {
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
        <Text style={styles.priceText}>{item.price}</Text>
        <View style={styles.quantityView}>
          <Text style={styles.quantityText}>Quantity</Text>
          <View style={styles.btnView}>
            <View style={styles.btnone}>
                

            </View>
            <View style={styles.btntwo}>
              <Text>1</Text>
            </View>

            <View style={styles.btnthree}>
    

            </View>
          </View>
          
        </View>

      <TouchableOpacity> 
         <AntDesign name="delete" size={24} color="black" />
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
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
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
    width: "40%",
    flexDirection: "row",
  },
 
  btntwo: {
    flex: 2,
    alignItems: "center",
    justifyContent:"center",
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
