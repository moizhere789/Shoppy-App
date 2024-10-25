import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const InputWithText = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.textOne}>Enter Card Name</Text>
      <View style={styles.inputfield}>
        <TextInput placeholder='Enter Your Name Of Card' style={styles.input}/>

      </View>
    </View>
  )
}

export default InputWithText

const styles = StyleSheet.create({
    main:{
        width:"94%",
        // backgroundColor:"red",
        height:83,
        gap:12,
    },
    inputfield:{
        borderWidth:1,
        color:"blue",
        height:49,
        borderRadius:10,
        alignItems:"center"
    
    },
    input:{
        // backgroundColor:"yellow",
        width:"92%",
        height:44,
        fontSize:16,
        color:"black",
        fontWeight:"500"
    },
    textOne:{
        color:"#747474",
        fontWeight:"400",
    }
})