import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ProceedBtn = ({onPress}) => {
  return (
    <View style={styles.main}>
    <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={styles.btnText}>Proceed To Checkout</Text>
    </TouchableOpacity>
    </View>
  )
}

export default ProceedBtn

const styles = StyleSheet.create({
    main:{
        flex:1,
        width:"100%",
        alignItems:"center",
        paddingBottom:10,

    },
    btn:{
        width:"80%",
        backgroundColor:"#2750E1",
        alignItems:"center",
        height:62,
        justifyContent:"center",
        borderRadius:16,

       
    },
    btnText:{
        color:"#fff",
        fontSize:18,
        fontWeight:"500",
    }
})