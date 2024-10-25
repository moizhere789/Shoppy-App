import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const Categories = ({ title, subtitle }) => {
  return (
    <View style={styles.main}>
      <View>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.subtitletext}>{subtitle}</Text>
      </View>
      <TouchableOpacity style={styles.touchable}>
        <Text style={styles.viewallText}>View All</Text>
        <AntDesign name="right" size={15} color="#2750E1" />
      </TouchableOpacity>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignItems:'center'
  },
  touchable: {
    width: "25%",
    height:30,
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 25,
    gap: 5,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#2750E1",
  },
  viewallText: {
    color: "#2750E1",
    fontWeight:"600"
  },
  titleText:{
    fontSize:20,
    fontWeight:"700"

  },
  subtitletext:{
    fontSize:13,
    color:"#747474"

  }
});
