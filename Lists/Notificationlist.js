import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Notificationlist = ({ item }) => {
  return <View style={styles.container}>
    <View style={styles.imageAndTextView}> 
      <View style={styles.imageView}>
      <Image source={item.image} style={styles.image}/>
      </View>
      <View style={styles.textView}>

        <Text style={styles.dateText}>{item.date}</Text>
        <Text numberOfLines={2} style={styles.titleText}>{item.title}</Text>
        

      </View>
    </View>
  </View>;
};

export default Notificationlist;

const styles = StyleSheet.create({
  container: {
    flex:1,
    height: 94,
    width: "100%",
    // backgroundColor: "red",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:10,
    borderColor:"blue",
    borderWidth:0.3,
  },
  imageAndTextView:{
    flexDirection:"row",
    gap:10,
  },
  

  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },textone:{
justifyContent:"flex-end"
  },
  textView:{
    width:'70%',
    gap:3
  },
  dateText:{
    // backgroundColor:"yellow",
    textAlign:"right",
    color:"#5A5A5A",},

    titleText: { fontSize:16,
     
    },

});
