import {
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import React from "react";
  import SearchBar from "./SearchBar";
  import Feather from "@expo/vector-icons/Feather";
  import AntDesign from "@expo/vector-icons/AntDesign";
  import Fontisto from '@expo/vector-icons/Fontisto';
  import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
  const HeaderTwo = ({onPress,cart}) => {
    return (
      <>
        <StatusBar backgroundColor={"#2750E1"} barStyle={"light-content"} />
        <View style={styles.header}>
            <TouchableOpacity onPress={onPress}>
        <AntDesign name="arrowleft" size={24} color="#fff" />
        </TouchableOpacity>
          <SearchBar />
          <TouchableOpacity>
            <View>
            <Fontisto name="share" size={21} color="#fff" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={cart}>
            <View>
            <MaterialCommunityIcons name="cart-minus" size={24} color="#fff" />
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  };
  
  export default HeaderTwo;
  
  const styles = StyleSheet.create({
    header: {
      height: 154,
      width: "100%",
      backgroundColor: "#2750E1",
      borderBottomEndRadius: 80,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      gap: 10,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5, 
    },
  });
  