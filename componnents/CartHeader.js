import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';


const CartHeader = ({title, share,onPress}) => {
  return (
    <View style={styles.main}>

        <View>
            <TouchableOpacity onPress={onPress}>
        <AntDesign name="arrowleft" size={24} color="#fff" />
        </TouchableOpacity>
        </View>
        <View>
            <Text style={styles.cartText}>
                {title}
            </Text>
        </View>

        <View style={styles.icons}>
            <View>

          <TouchableOpacity>
            <Ionicons name="menu" size={24} color="#fff" />
          </TouchableOpacity> 

            </View>
            <View>
                <TouchableOpacity>
            <FontAwesome name="heart" size={22} color="#fff" />
            </TouchableOpacity>

            </View>

            <View>
            <TouchableOpacity>
            <Entypo name={share} size={24} color="#fff" />
            </TouchableOpacity>

            </View>
        </View>
        
      
    </View>
  )
}

export default CartHeader

const styles = StyleSheet.create({
    main:{
        width:"100%",
        backgroundColor:"#2750E1",
        height:90,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"flex-end",
        paddingHorizontal:20,
        paddingBottom:25
    },
    icons:{
        flexDirection:"row",
        gap:10,
        justifyContent:"center",
        alignItems:"center"
    },
    cartText:{
        fontSize:20,
        color:"#fff",
        fontWeight:"500",
    }
})