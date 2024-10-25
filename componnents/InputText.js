import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React,{useState} from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from '@expo/vector-icons/Entypo';

const InputText = ({ email, placeholder, keyboardType, lock, eye,onChangeText,value }) => {
  const [isPasswordVisible,setIsPasswordVisible]= useState(false)
  const [isVisible,setIsVisible]= useState(true)
  return (
    <>
      {keyboardType && keyboardType === "email" && 
        <View style={styles.InputViewStyle}>
          <MaterialIcons name={email} size={20} color="#747474" />
          <TextInput
            placeholder={placeholder}
            style={styles.textInputStyle}
            keyboardType={keyboardType}
            value={value}
            onChangeText={onChangeText}
          />
        </View>
      }

      {keyboardType && keyboardType === "password" && 
        <View style={styles.InputViewStyle}>
          <MaterialIcons name={lock} size={20} color="#747474" />
          <TextInput
            placeholder={placeholder}
            style={styles.textInputStyle}
            keyboardType={keyboardType}
            secureTextEntry={!isPasswordVisible? true:false}
            value={value}
            onChangeText={onChangeText}
          />
          <TouchableOpacity onPress={()=>{setIsPasswordVisible(!isPasswordVisible),setIsVisible(!isVisible)}} >
          <Entypo name={!isVisible? "eye": "eye-with-line"} size={20} color="#747474" /></TouchableOpacity>
        </View>
      }
    </>
  );
};

export default InputText;

const styles = StyleSheet.create({
  InputViewStyle: {
    width: "100%",
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 10,
    gap: 15,
    borderWidth: 0.75,
  },
  textInputStyle:{
    width: "75%", 
    height: 45,  },
});
