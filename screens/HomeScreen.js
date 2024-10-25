import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import Header from "../componnents/Header";
import Categories from "../componnents/Categories";
import { sliderData, sliderDatatwo, sliderDatathree } from "../source/Data";
import SliderDataList from "../Lists/SliderDataList";
import SliderDatatwo from "../Lists/SliderDatatwo";
import CategoriesTwo from "../componnents/CategoriesTwo";
import SliderDatathree from "../Lists/SliderDatathree";

const HomeScreen = ({ navigation }) => {
  return (
   
    <ScrollView>  
      <View style={styles.container}>
        <Header navigateWish={()=>navigation?.navigate('WishlistScreen')}/>
        

        <View style={styles.img}>
          <Image
            source={require("../assets/images/homeimage.png")}
            style={styles.image}
          />
        </View>
        <Categories title={"Categories"} subtitle={"Based on Your Intrests"} />
        <FlatList
          data={sliderData}
          keyExtractor={(item) => item.id}
          horizontal={true}
          renderItem={({ item }) => <SliderDataList item={item} onPress={()=>navigation?.navigate('ProductDetailsScreen')} />}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
        />
        <FlatList
          data={sliderData}
          keyExtractor={(item) => item.id}
          horizontal={true}
          renderItem={({ item }) => <SliderDataList item={item} onPress={()=>navigation?.navigate('ProductDetailsScreen')}
          />}
          contentContainerStyle={styles.flatListContainer}
          showsHorizontalScrollIndicator={false}
        />
        <CategoriesTwo title={"Most Popular Products"} />

        <FlatList
          data={sliderDatatwo}
          keyExtractor={(item) => item.id}
          horizontal={true}
          renderItem={({ item }) => <SliderDatatwo item={item} onPress={()=>navigation?.navigate('ProductDetailsScreen')} />}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
        />

        <Categories
          title={"Moiz Just For You"}
          subtitle={"Based On Your Activities"}
        />

        <View style={styles.lastflatlist}>
          <FlatList
            data={sliderDatathree}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <SliderDatathree item={item}  onPress={()=>navigation?.navigate('ProductDetailsScreen')} />}
            showsHorizontalScrollIndicator={false}
            numColumns={2} 
            columnWrapperStyle={{ justifyContent: "space-between" }} 
            contentContainerStyle={styles.flatListContainer}
          />
        </View>
      </View>
    </ScrollView>
   
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 15,
  },
  img: {
    overflow: "hidden",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: "gray",
    width: "95%",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 10,
  },
  image: {
    width: "100%",
    height: 173,
  },

  img: {
    overflow: "hidden",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: "gray",
    width: "95%",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 10,
  },
  image: {
    width: "100%",
    height: 173,
  },
  lastflatlist: {
    flex: 1,
    width: "100%",
  },
  flatListContainer:{
    paddingHorizontal:10
  }
 
});
