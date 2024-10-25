import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const SearchBar = () => {
  return (
    <View style={styles.searchbar}>
      <AntDesign name="search1" size={24} color="gray" />

      <TextInput placeholder="Search For Products" style={styles.searchinput} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchbar: {
    width: "70%",
    backgroundColor: "#fff",
    height: 45,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 10,
  },
  searchinput: {
    width: "85%",
    height: 40,
    fontSize: 16,
    color: "black",
  },
});
