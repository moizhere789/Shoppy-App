import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const PrimaryBtn = ({title , onPress}) => {
  return (
   <TouchableOpacity style={styles.PrimaryButton} onPress={onPress}>
    <Text style={styles.btnText}>
        {title}
    </Text>
   </TouchableOpacity>
  )
}

export default PrimaryBtn

const styles = StyleSheet.create({
    PrimaryButton:{
        alignItems:"center",
        justifyContent:"center",
        width:"100%",
        height:48.53,
        backgroundColor:"#0066FF",
        borderRadius:10,
    },
    btnText:{
        color:"#FFFFFF",
        fontSize:18,
        fontWeight:"800"
    }
})