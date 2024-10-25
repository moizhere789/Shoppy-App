import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Notificationlist from "../Lists/Notificationlist";
import { offerdatalist, orderdatalist, promosdatalist } from "../source/Data";
import Offerlist from "../Lists/Offerlist";
import PromosList from "../Lists/PromosList";

const Notification = () => {
  const [selectIcon, setSelectIcon] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.headerTextView}>
        <Text style={styles.headerText}>Notification</Text>
      </View>
      <View style={styles.headerbtnview}>
        <TouchableOpacity
          style={styles.clickbtn}
          onPress={() => {
            setSelectIcon(0);
          }}
        >
          {selectIcon == 0 ? (
            <View style={styles.iconviewtint}>
              <MaterialIcons name="bookmark-added" size={35} color="#fff" />
            </View>
          ) : (
            <View style={styles.iconview}>
              <MaterialIcons name="bookmark-added" size={35} color="#fff" />
            </View>
          )}

          <Text style={styles.btntext}>Orders</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.clickbtn}
          onPress={() => {
            setSelectIcon(1);
          }}
        >
          {selectIcon == 1 ? (
            <View style={styles.iconviewtint}>
              <MaterialCommunityIcons name="sale" size={35} color="#fff" />
            </View>
          ) : (
            <View style={styles.iconview}>
              <MaterialCommunityIcons name="sale" size={35} color="#fff" />
            </View>
          )}
          <Text style={styles.btntext}>Offers</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.clickbtn}
          onPress={() => {
            setSelectIcon(2);
          }}
        >
          {selectIcon == 2 ? (
            <View style={styles.iconviewtint}>
              <AntDesign name="notification" size={35} color="#fff" />
            </View>
          ) : (
            <View style={styles.iconview}>
              <AntDesign name="notification" size={35} color="#fff" />
            </View>
          )}
          <Text style={styles.btntext}>Promos</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bodyview}>
        {selectIcon === 0 ? (
          <FlatList
            data={offerdatalist}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Notificationlist item={item} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.flatListContainer}
          />
        ) : null}

        {selectIcon === 1 ? (
          <FlatList
            data={orderdatalist}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Offerlist item={item} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.flatListContainertwo}
          />
        ) : null}

        {selectIcon === 2 ? (
          <FlatList
            data={promosdatalist}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <PromosList item={item} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.flatListContainer}
          />
        ) : null}
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
    alignItems: "center",
  },
  headerTextView: {
    width: "100%",
    // backgroundColor: "skyblue",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 5,
  },
  headerText: {
    fontSize: 36,
    fontWeight: "500",
  },
  headerbtnview: {
    // backgroundColor: "pink",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  clickbtn: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconview: {
    backgroundColor: "#2750E1",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35,
  },
  btntext: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2750E1",
  },
  bodyview: {
    // backgroundColor: "yellow",
    width: "100%",
    paddingHorizontal: 15,
    flex: 1,
  },
  flatListContainer: {
    gap: 10,
    paddingBottom: 10,
    paddingTop: 10,
  },

  flatListContainertwo: {
    gap: 10,
    paddingBottom: 10,
    paddingTop: 10,
    // justifyContent:'center'
    // alignItems:'center'
  },

  iconviewtint: {
    backgroundColor: "#6083FF",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35,
  },
});
