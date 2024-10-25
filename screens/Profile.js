import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import ShippingAddress from "../componnents/ShippingAddress";
import { completeOrder } from "../source/Data";
import CompleteOrder from "../componnents/CompleteOrder";

const Profile = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headertext}>Profile</Text>
      </View>
      <View style={styles.profileView}>
        <View style={styles.profileText}>
          <Text style={styles.textOne}>Hi,Moiz</Text>
          <Text style={styles.textTwo}>Let’s Check Your Activity</Text>
        </View>
        <View style={styles.profileImage}>
          <Image
            source={require("../assets/images/MY.jpg")}
            style={styles.Image}
            resizeMode="contain"
          />
          <TouchableOpacity style={styles.camera}>
            <Entypo name="camera" size={24} color="rgba(39,80,225,0.70)" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.heading}>
        <Text style={styles.headingText}>Shipping Address</Text>
      </View>

      <ShippingAddress />

      <View style={styles.heading}>
        <Text style={styles.headingText}>Payment Methods</Text>
      </View>

      <View style={styles.paymentMethodView}>
        <TouchableOpacity>
          <View style={styles.logoView}>
            <View style={styles.logoImageView}>
              <Image source={require("../assets/images/mlogo.png")} />
            </View>
            <Text style={styles.cardText}>Credit/Debit Card</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.logoView}>
            <View style={styles.logoImageView}>
              <Image source={require("../assets/images/plogo.png")} />
            </View>
            <Text style={styles.cardText}>PayPal</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.logoView}>
            <View style={styles.logoImageView}>
              <Image source={require("../assets/images/alogo.png")} />
            </View>
            <Text style={styles.cardText}>ApplePay</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.logoView}>
            <View style={styles.logoImageView}>
              <Image source={require("../assets/images/dlogo.png")} />
            </View>
            <Text style={styles.cardText}>Add New</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.heading}>
        <Text style={styles.headingText}>Order History</Text>
      </View>
     
      <FlatList
          data={completeOrder}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CompleteOrder item={item} />}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
        />
        
    </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
    alignItems: "center",
    gap: 20,
  },
  header: {
    width: "100%",
    // backgroundColor: "skyblue",
    paddingTop: 50,
    alignItems: "center",
  },
  headertext: {
    fontSize: 36,
    fontWeight: "500",
  },
  profileView: {
    width: "95%",
    backgroundColor: "#fff",
    height: 108,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 1,
  },
  Image: {
    width: 95,
    height: 88,
    borderRadius: 100,
  },
  textOne: {
    fontSize: 20,
    fontWeight: "500",
  },
  textTwo: {
    fontSize: 16,
    fontWeight: "500",
  },
  heading: {
    width: "90%",
  },
  headingText: {
    fontSize: 20,
    fontWeight: "500",
  },
  paymentMethodView: {
    width: "95%",
    backgroundColor: "#fff",
    height: 108,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  logoView: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    flex: 1,
  },
  logoImageView: {
    backgroundColor: "#D9D9D9",
    padding: 10,
    width: 51,
    height: 37,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  cardText: {
    fontSize: 13,
  },
  flatList: {
    flex: 1,
    backgroundColor: "green",
    width: "100%",
  },
  camera: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});
