import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'

const Offerlist = ({item}) => {
  return (
    <View style={styles.container}>
        <View style={styles.textview}>
      <Text style={styles.textone}>{item.title}</Text>
      <Text style={styles.texttow}>{item.date}</Text></View>
      <Image source={item.image} resizeMode='stretch' style={{width:'100%',height:100}}/>
    </View>
  )
}

export default Offerlist

const styles = StyleSheet.create({
    container:{
        flex:1,
        gap:5,
        backgroundColor:"#D9D9D9"
    },
    textview:{
        paddingHorizontal:5,
        paddingTop:5,
        gap:2

    },
    textone:{
        fontSize:16,
    },
    texttow:{
        color:"#5A5A5A",
        fontSize:10,
    }
})