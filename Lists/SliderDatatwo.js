import { StyleSheet, Text, View, Image,  TouchableOpacity } from 'react-native';
import React from 'react';

const SliderDatatwo = ({ item , onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
      <Image source={item.image} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.text}>{item.name}</Text>
      <Text style={styles.texttwo}>{item.discount}</Text>
      <Text style={styles.textthree}>{item.price}</Text>
    </View>
  );
}

export default SliderDatatwo;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff", 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 0,
    elevation: 1,  
    margin:6,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "#212121",
  },
  texttwo: {
    fontSize: 14,
    color: "#747474"
  },
  textthree: {
    fontSize: 16,
    color: "#2750E1"
  }
});
