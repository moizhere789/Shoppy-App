import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import Octicons from "@expo/vector-icons/Octicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MyCart from "../screens/MyCart";
import Notification from "../screens/Notification";
import Ionicons from "@expo/vector-icons/Ionicons";
import Profile from "../screens/Profile";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from "@react-navigation/stack";
import CheckoutScreen from "../screens/CheckoutScreen";
import WishlistScreen from "../screens/WishlistScreen";

const Bottom = createBottomTabNavigator();
const Stack = createStackNavigator();

const CartStack=()=>{
  return(
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="MyCart" component={MyCart}/>
    <Stack.Screen name="CheckoutScreen" component={CheckoutScreen}/>
  </Stack.Navigator>
  )
}

const WishlistStack=()=>{
  return(
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="HomeScreen" component={HomeScreen}/>
    <Stack.Screen name="WishlistScreen" component={WishlistScreen}/>
  </Stack.Navigator>
  )
}

const BottomNavigator = () => {
  return (
    <Bottom.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        keyboardHidesTabBar: true,
        tabBarStyle: {
          height: 80, // Adjust this value to increase height
          paddingBottom: 10, // Optional: Adjust padding for better appearance
        },
        tabBarActiveBackgroundColor:'rgba(39,80,225,0.16)',
        tabBarItemStyle:{borderRadius:20,margin:13}
        
      }}
    >
      <Bottom.Screen
        name="WishlistStack"
        component={WishlistStack}
        options={{
          tabBarIcon: ( ) => (
            <View>
              <Octicons name="home" size={30} color="#2750E1" />
            </View>
          ),
        }}
      />
      <Bottom.Screen
        name="CartStack"
        component={CartStack}
        options={{
          tabBarIcon: () => (
            <View>
              <MaterialCommunityIcons name="cart-minus" size={30} color="#2750E1" />
            </View>
          ),
        }}
      />
      <Bottom.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: () => (
            <View>
              <Ionicons name="notifications-outline" size={30} color="#2750E1" />
            </View>
          ),
        }}
      />
      <Bottom.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <View>
              <FontAwesome5 name="user-circle" size={30} color="#2750E1" />
            </View>
          ),
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  iconContainer: {
    width: 50, 
    height: 50, 
    justifyContent: "center", 
    alignItems: "center", 
    borderRadius: 25, 
    backgroundColor: "transparent", 
  },
  activeTab: {
    backgroundColor: "#2750E1", 
    borderWidth: 1, 
    borderColor: "#2750E1",
    opacity:0.16,
  },
});
