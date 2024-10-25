import { Image, StyleSheet, Text,  TouchableOpacity, View } from 'react-native';
import React from 'react';

const SliderDataList = ({ item,onPress }) => {
  const click = ()=>{
    setTimeout(()=>{
      console.warn("click");
      

    },500)
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
      <Image source={item.image} style={styles.image} resizeMode='cover' />
      <Text style={styles.text}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SliderDataList;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  text: {
    paddingHorizontal: 10,
    textAlign: 'center',
  },
});
