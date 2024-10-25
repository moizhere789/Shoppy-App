import { StyleSheet, Text, View , Image, TouchableOpacity , FlatList} from 'react-native'
import React from 'react';
import CartHeader from "../componnents/CartHeader";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import SliderDatathree from "../Lists/SliderDatathree";
import { sliderDatathree } from "../source/Data";

const WishlistScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <CartHeader  title={"My Wishlist"} share={"share"} onPress={()=>navigation?.goBack()}/>
            <View style={{width:'100%',justifyContent:'center',alignItems:'center',paddingTop:30}}>
        <View style={styles.ProductView}>
            <View>
                <Image source={require("../assets/images/image.png")} style={styles.image} />
            </View>

            <View innerViewOfProductDetails>
                <Text style={styles.titleText} numberOfLines={3}>Retro brown man leather bag and notebook in bright colorful summer grass in the park</Text>
                <Text style={styles.priceText}>$ 500</Text>
               
               <TouchableOpacity>
                <View style={styles.addToCartBtn}>
                    <Text style={styles.btnText}>
                        Add To Cart
                    </Text>
                    <AntDesign name="shoppingcart" size={20} color="#fff" />
                

                </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.deleteIcon}>
                <MaterialIcons name="delete" size={26} color="gray " />

                </TouchableOpacity>
            </View>
            
            </View>

        </View>

        <View style={styles.sameLikeThisView}>
            <Text style={styles.sameLikeThisText}>
            Same  Like This
            </Text>
        </View>

        <View style={styles.lastflatlist}>
          <FlatList
            data={sliderDatathree}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <SliderDatathree item={item} />}
            showsHorizontalScrollIndicator={false}
            numColumns={2} 
            columnWrapperStyle={{ gap:10,}} 
            contentContainerStyle={styles.flatListContainer}
          />
        </View>
        
     
    </View>
  )
}

export default WishlistScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:"red",
        width:"100%",
        alignItems:"center",
        

    },

    ProductView:{
        // marginTop:10,
        height:180,
        width:"95%",
        // backgroundColor:"green",
        flexDirection:"row",
        gap:6,
        borderColor:"gray",
        borderBottomWidth:0.3,
    },
    image:{
        width:157,
        height:150,
    },
    titleText:{
        width:"30%",
        fontSize:16,
        fontWeight:"500",
    },
    priceText:{
        color:"#2750E1",
        fontSize:20,
        fontWeight:"500",
        paddingTop:5,
    },
    addToCartBtn:{
        width:113,
        height:24,
        backgroundColor:"#2750E1",
        borderRadius:10,
        flexDirection:"row",
        alignItems:"center",
        gap:2,
        justifyContent:"center",
    },
    btnText:{
        color:"#fff",
        fontSize:14,
        fontWeight:"500",
    },
    deleteIcon:{
        paddingTop:5,
    },
    lastflatlist: {
        flex: 1,
        width: "100%",
    
      },
      sameLikeThisView:{
        width:"95%",
        // backgroundColor:"red",
        paddingVertical:10,
      },
      sameLikeThisText:{
        fontSize:20,
        fontWeight:"700",
      },
      flatListContainer:{
        paddingHorizontal:10
      }
  
})