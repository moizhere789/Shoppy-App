import { StyleSheet, Text, View , TouchableOpacity } from 'react-native'
import React from 'react';

const ShippingAddress = () => {
  return (
    <View style={styles.profileView}>
      <View style={styles.viewOne}>
        <Text style={styles.countryText}>Pakistan</Text>
        <Text style={styles.addresText}>House no *** street ***cewifh oiefreouhf lkewljfoiejf</Text>
       
      </View>
      <View style={styles.viewTwo}>
        <TouchableOpacity>
          <Text style={styles.btnText}>Change</Text>
        </TouchableOpacity>

      </View>

    </View>
  )
}

export default ShippingAddress

const styles = StyleSheet.create({
    profileView: {
        width: "95%",
        backgroundColor: "#fff",
        height: 108,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        alignItems: "center",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 1,
      },
      viewOne:{
        flex:2.5,
        height: 108,
        gap:20,
        justifyContent:"center"
    
      },
      viewTwo:{
        flex:1,
        height: 108,
        alignItems:"flex-end",
        paddingTop:10,
    
      },
      btnText:{
        fontSize:18,
        color:"#2750E1"
      },
      countryText:{
        fontSize:20,
      },
      addresText:{
        fontSize:16,
      },
})