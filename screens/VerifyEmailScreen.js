import { StyleSheet, Text, View,Image ,} from 'react-native'
import React from 'react'
import PrimaryBtn from '../componnents/PrimaryBtn'
import InputText from '../componnents/InputText'

const VerifyEmailScreen = ({navigation}) => {
  return (
    <>
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image source={require("../assets/images/logo.png")} style={styles.logoColor}/>
      </View>
      <View style={styles.mainView}>
      <InputText email={'email'} placeholder={'Enter your phone or email'} keyboardType={'email'}/> 
      </View>
      <View style={styles.loginBtn}>
        <PrimaryBtn title={"Send OTP"} onPress={()=>navigation?.navigate('HomeScreen')}/>
      </View>
      </View>
    </>
  )
}

export default VerifyEmailScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        gap:15,
    },
    imageView:{
        paddingTop:70,
        paddingBottom:75,
    },
    logoColor:{tintColor:"blue"},
    mainView:{
        width:"90%",
        gap:20,
        paddingTop:100,
    },
    loginBtn:{
        width:"90%",
        paddingTop:8,

    },
})