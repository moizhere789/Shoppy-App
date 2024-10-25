import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import Singup from '../screens/Singup';
import VerifyEmailScreen from '../screens/VerifyEmailScreen';
import BottomNavigator from './BottomNavigator';
import ProductDetailsScreen from "../screens/ProductDetailsScreen";


const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="SplashScreen"  component={SplashScreen}/>
        <Stack.Screen name="LoginScreen"  component={LoginScreen}/>
        <Stack.Screen name="Singup"  component={Singup}/>
        <Stack.Screen name="VerifyEmailScreen"  component={VerifyEmailScreen}/>
        <Stack.Screen name="BottomNavigator"  component={BottomNavigator}/>
        <Stack.Screen name="ProductDetailsScreen"  component={ProductDetailsScreen}/>
      
       
        
        
    </Stack.Navigator>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})