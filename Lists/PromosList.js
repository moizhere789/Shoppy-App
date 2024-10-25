import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PromosList = ({item}) => {
  return (
    <View style={styles.container}>

        <View style={styles.innerViewOne}>
            <Text style={styles.txtOne}>{item.discount}</Text>
            <Text style={styles.txtTow}>{item.title}</Text>
            <Text style={styles.txtThree}>{item.subtitle}</Text>

        </View>

        <View style={styles.innerViewTwo}>
            <Image style={styles.image} source={item.image} resizeMode='stretch'/>

        </View>

      
    </View>
  )
}

export default PromosList

const styles = StyleSheet.create({
container:{
    width:"100%",
    backgroundColor:"#D9D9D9",
    height:150,
    flexDirection:"row",
    borderRadius:10,
},
innerViewOne:{
flex:1,
   
    paddingLeft:15,
   
    
},
innerViewTwo:{
   
    flex:1,
    justifyContent:"center"
   
},
image:{
    height:150,
    width:172,
},
txtOne:{
    fontSize:36,
    fontWeight:"bold"
},
txtTow:{
    fontSize:24,
    fontWeight:"500",
},
txtThree:{
    fontSize:16,
    fontWeight:"400",
}

})