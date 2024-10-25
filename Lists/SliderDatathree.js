import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";



const SliderDatathree = ({ item, onPress }) => {

 
  return (
    <TouchableOpacity style={styles.Touchablestyle} onPress={onPress}>
    <View style={styles.categoryItem}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.allText}>
      <Text style={styles.text}>{item.name}</Text>
      <Text style={styles.texttwo}>{item.discount}</Text>
      <Text style={styles.textthree}>{item.price}</Text>
      </View>
    </View>
    </TouchableOpacity>
  );
};

export default SliderDatathree;

const styles = StyleSheet.create({
  categoryItem: {
    flex: 1,
    marginBottom:5,
    paddingTop:5,
    borderRadius: 10,
    // backgroundColor: "#fff",
    alignItems: "center",
    width: '100%',
  },
  image: {
    width: "100%",
    height: 170,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "700",
    color: "#212121",
    marginTop: 8,
    textAlign: "center",
  },
  texttwo: {
    fontSize: 14,
    color: "#747474",
    marginTop: 4,
  },
  textthree: {
    fontSize: 16,
    color: "#2750E1",
    fontWeight: "600",
    marginTop: 4,
  },
  allText: {
    flex: 1,
    alignItems:"flex-start",
    width:"100%",
  },

  Touchablestyle: {
    flex: 1,
    marginBottom:10,
    paddingHorizontal:5,
    borderRadius: 10,
    alignItems: "center",
    width: '100%',
  },
});
