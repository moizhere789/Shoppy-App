import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Secondary = ({title,Google,Apple}) => {
  return (
    <>
    { Google &&
  <TouchableOpacity style={styles.SecondarybtnView} onPress={Google}>
    <Image source={require("../assets/images/google.png") } />
    <Text style={styles.secondaryBtnText}>
        {title}
    </Text>
  </TouchableOpacity>}

    { Apple &&
  <TouchableOpacity style={styles.SecondarybtnView} onPress={Apple}>
    <Image source={require("../assets/images/apple.png") } />
    <Text style={styles.secondaryBtnText}>
        {title}
    </Text>
  </TouchableOpacity>}
  </>
  )
}

export default Secondary

const styles = StyleSheet.create({
    SecondarybtnView:{
        width:"100%",
        borderRadius: 10,
        borderColor:"#000000",
        borderWidth:0.75,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
    
    },
    secondaryBtnText:{
        fontSize:18,
        padding:15,
        color:"#747474",
        fontWeight:"400"
    },
    
})