import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  import Fontisto from "@expo/vector-icons/Fontisto";
  
  const SelectPayment = ({ title, source, isSelected, onSelect }) => {
    return (
        <TouchableOpacity onPress={onSelect}>
      <View style={styles.container}>
        <View style={styles.imageAndTitle}>
          <View>
            <Image source={source} style={styles.image} resizeMode="contain" />
          </View>
          <View>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
        <View>
            <Fontisto
              name={isSelected ? "radio-btn-active" : "radio-btn-passive"}
              size={24}
              color="#2750E1"
            />
        </View>
      </View>
          </TouchableOpacity>
    );
  };
  
  export default SelectPayment;
  
  const styles = StyleSheet.create({
    container: {
      width: "97%",
      height: 50,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 10,
      alignItems: "center",
      borderRadius: 6,
      borderColor: "#2750E1",
    },
    imageAndTitle: {
      flexDirection: "row",
      gap: 10,
    },
    title: {
      fontSize: 16,
      fontWeight: "500",
      color: "#575757",
    },
    image: {
      width: 25,
      height: 25,
    },
  });
  