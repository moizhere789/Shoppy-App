import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View,KeyboardAvoidingView } from 'react-native';
import AppNavigation from './Navigation/AppNavigation';
import HomeScreen from './screens/HomeScreen';
import BottomNavigator from './Navigation/BottomNavigator';
import Toast from 'react-native-toast-message';

export default function App() {
  return (

    
   <NavigationContainer>
    
    <AppNavigation/>
    {/* <BottomNavigator/> */}
    <Toast/>
   </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
