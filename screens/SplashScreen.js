import { Image, StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'

const SplashScreen = ({navigation}) => {
useEffect(() => {
 setTimeout(()=>{
    navigation?.replace("LoginScreen")

 },2000)
}, [])

  return (
    <View style={styles.container}>
     <Image source={require("../assets/images/logo.png")} />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:"blue",
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})