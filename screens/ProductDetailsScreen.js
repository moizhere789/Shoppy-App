import {
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from "react-native";
import React from "react";
import HeaderTwo from "../componnents/HeaderTwo";
import ImageSlider from "../componnents/ImageSlider";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import SliderDatathree from "../Lists/SliderDatathree";
import { sliderDatathree } from "../source/Data";

const ProductDetailsScreen = ({navigation}) => {
  return (
    <>
      <ScrollView style={{ flex: 1 }}>
        {/* <StatusBar backgroundColor={'red'} barStyle={'dark-content'}/> */}
        <View style={styles.container}>
          <View>
            <ImageSlider />
          </View>
          <View style={{ position: "absolute", left: 0, right: 0 }}>
            <HeaderTwo onPress={()=>navigation?.goBack()} cart={()=>navigation?.navigate('CartStack')}/>
          </View>
          <View style={styles.outsideView}>
            <View style={styles.productsDetailsView}>
              <View style={styles.textView}>
                <Text numberOfLines={2} style={styles.textOne}>
                  Wireless earbuds with neon cyberpunk style lighting
                </Text>
                <Text numberOfLines={2} style={styles.TextTwo}>
                  This dish originates from the Balochistan province in Pakistan
                  and consists of marinated, skewered, and roasted whole lamb or
                  chicken
                </Text>
              </View>
              <View style={styles.priceView}>
                <Text style={styles.priceText}>$ 500</Text>
                <Text style={styles.discountText}>Rs. 700</Text>
                <Text style={styles.percentageText}>-73%</Text>
                <Text style={styles.soldText}>2K Sold</Text>
                <TouchableOpacity>
                  <Entypo name="heart-outlined" size={20} color="black" />
                </TouchableOpacity>

                <Text style={styles.likeText}>1k</Text>
              </View>

              <View style={styles.ratingView}>
                <View style={styles.innerRatingView}>
                  <AntDesign name="star" size={20} color="#FFE600" />
                  <Text style={{ fontSize: 16, fontWeight: "400" }}>4.25</Text>
                  <Entypo name="chevron-small-right" size={24} color="black" />
                </View>
                <Text>200 question and answers</Text>
              </View>
              <TouchableOpacity style={styles.btnAskQuestion}>
                <Text
                  style={{ fontSize: 16, fontWeight: "700", color: "#fff" }}
                >
                  Ask question
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.outsideBtnView}>
            <View style={styles.btnsView}>
              <TouchableOpacity style={styles.btnOrderNow}>
                <Text
                  style={{ fontSize: 16, fontWeight: "700", color: "#fff" }}
                >
                  Order Now
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnAddToCart}>
                <Text
                  style={{ color: "#fff", fontSize: 16, fontWeight: "700" }}
                >
                  Add To Cart
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.ratingDetailsView}>
            <View style={styles.innerRatingDetailsView}>
              <Text style={{ fontSize: 18, fontWeight: "500" }}>
                Ratings & Reviews
              </Text>
              <View style={styles.ratingAndReview}>
                <Text style={{ fontSize: 20, fontWeight: "400" }}>4.25</Text>
                <View style={styles.starView}>
                  <FontAwesome name="star" size={22} color="#FFE600" />
                  <FontAwesome name="star" size={22} color="#FFE600" />
                  <FontAwesome name="star" size={22} color="#FFE600" />
                  <FontAwesome name="star" size={22} color="#FFE600" />
                  <FontAwesome
                    name="star-half-empty"
                    size={22}
                    color="#FFE600"
                  />
                  <FontAwesome name="star-o" size={22} color="#FFE600" />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.commentsMainView}>
            <View style={styles.commentsView}>
              <View style={styles.commentsheader}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <FontAwesome name="star" size={15} color="#FFE600" />
                  <FontAwesome name="star" size={15} color="#FFE600" />
                  <FontAwesome name="star" size={15} color="#FFE600" />
                  <FontAwesome name="star" size={15} color="#FFE600" />
                  <Text
                    style={{
                      color: "#B5B5B5",
                      fontSize: 12,
                      fontWeight: "400",
                    }}
                  >
                    {" "}
                    Mozi Butti
                  </Text>
                </View>
                <Text
                  style={{ color: "#B5B5B5", fontSize: 12, fontWeight: "400" }}
                >
                  3 days Ago
                </Text>
              </View>

              <View style={styles.imageAndTextView}>
                <Text numberOfLines={3}>
                  This dish originates from the Balochistan province in Pakistan
                  and consists of marinated, skewered, and roasted whole lamb or
                  chicken
                </Text>

                <Image
                  source={require("../assets/images/come.png")}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
          {/* <<< comments viw end here  */}
          <View style={styles.commentsMainView}>
            <View style={styles.commentsView}>
              <View style={styles.commentsheader}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <FontAwesome name="star" size={15} color="#FFE600" />
                  <FontAwesome name="star" size={15} color="#FFE600" />
                  <FontAwesome name="star" size={15} color="#FFE600" />
                  <FontAwesome name="star" size={15} color="#FFE600" />
                  <Text
                    style={{
                      color: "#B5B5B5",
                      fontSize: 12,
                      fontWeight: "400",
                    }}
                  >
                    {" "}
                    Ibtasam
                  </Text>
                </View>
                <Text
                  style={{ color: "#B5B5B5", fontSize: 12, fontWeight: "400" }}
                >
                  3 days Ago
                </Text>
              </View>

              <View style={styles.imageAndTextView}>
                <Text numberOfLines={3}>
                  This dish originates from the Balochistan province in Pakistan
                  and consists of marinated, skewered, and roasted whole lamb or
                  chicken
                </Text>

                <Image
                  source={require("../assets/images/come.png")}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
          {/* <<< comments viw end here  */}
          <View style={styles.commentsMainView}>
            <View style={styles.commentsView}>
              <View style={styles.commentsheader}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <FontAwesome name="star" size={15} color="#FFE600" />
                  <FontAwesome name="star" size={15} color="#FFE600" />
                  <FontAwesome name="star" size={15} color="#FFE600" />
                  <FontAwesome name="star" size={15} color="#FFE600" />
                  <Text
                    style={{
                      color: "#B5B5B5",
                      fontSize: 12,
                      fontWeight: "400",
                    }}
                  >
                    {" "}
                    Sarib Noor
                  </Text>
                </View>
                <Text
                  style={{ color: "#B5B5B5", fontSize: 12, fontWeight: "400" }}
                >
                  3 days Ago
                </Text>
              </View>

              <View style={styles.imageAndTextView}>
                <Text numberOfLines={3}>
                  This dish originates from the Balochistan province in Pakistan
                  and consists of marinated, skewered, and roasted whole lamb or
                  chicken
                </Text>

                <Image
                  source={require("../assets/images/come.png")}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
          {/* <<< comments viw end here  */}

          <View style={styles.viewAllBtn}>
            <TouchableOpacity style={styles.touchableView}>
              <Text
                style={{ color: "#2750E1", fontSize: 18, fontWeight: "500" }}
              >
                View All
              </Text>
              <Entypo name="chevron-right" size={24} color="#2750E1" />
            </TouchableOpacity>
          </View>
          {/* View end OF View ALL Button */}

          <View style={styles.imageBackroundView}>
            <ImageBackground
              source={require("../assets/images/ph.png")}
              style={styles.backgroundImage}
            >
              <Text style={{ color: "#fff" }} numberOfLines={5}>
                "These earbuds offer impeccable sound quality, delivering a
                truly immersive audio experience. Their sleek design and
                comfortable fit make them a must-have for any music lover on the
                go."
              </Text>
            </ImageBackground>

            <ImageBackground
              source={require("../assets/images/ph2.png")}
              style={styles.imagetwo}
            >
              <Text style={{ color: "#fff" }}>
                "Immerse Yourself: Unveiling the Ultimate Earbud Experience"
              </Text>
            </ImageBackground>
            <ImageBackground
              source={require("../assets/images/ph3.png")}
              style={styles.imageThree}
            ></ImageBackground>
         
          </View>
          {/* image background view end here */}
          <View style={styles.textViewAfterImageBackground}>
            <View style={styles.innerViewOfText}>
              <Text style={{fontSize:14, fontWeight:"500"}}>
              "Step into a world of sonic sophistication with our
               state-of-the-art earbuds. Crafted with precision engineering and advanced technology, 
              </Text>
              <Text style={{fontSize:14, fontWeight:"500"}}>
              these sleek companions redefine audio immersion. Feel the pulse of every note, the clarity 
              of every lyric, and the depth of every beat as you indulge in a truly immersive listening experience.
              </Text>
              <Text style={{fontSize:14, fontWeight:"500"}}>
              With ergonomic design and seamless connectivity, they seamlessly integrate into your lifestyle, 
              </Text>
              <Text style={{fontSize:14, fontWeight:"500"}}>
              whether you're on-the-go or unwinding at home.
               Elevate your audio journey with these earbuds – where innovation meets unparalleled sound."
              </Text>

            </View>

            <View>
              <Text style={{fontSize:20, fontWeight:"700"}}>People Also View</Text>
            </View>

          </View>

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
    </>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productsDetailsView: {
    width: "90%",
    height: 273,
    backgroundColor: "#fff",
    position: "absolute",
    top: -50,
    borderRadius: 10,
    alignItems: "center",
    gap: 10,
  },
  outsideView: {
    width: "100%",
    height: 220,
    //  backgroundColor:"red" ,
    alignItems: "center",
  },
  textView: {
    paddingHorizontal: 14,
    paddingTop: 10,
    gap: 10,
  },
  textOne: {
    fontSize: 18,
    fontWeight: "500",
  },
  TextTwo: {
    fontSize: 14,
    fontWeight: "500",
  },
  priceView: {
    flexDirection: "row",
    width: "100%",
    // backgroundColor:"red",
    // justifyContent:"space-evenly",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingTop: 10,
  },
  priceText: {
    color: "#2750E1",
    fontSize: 20,
    fontWeight: "500",
  },
  discountText: {
    color: "#878787",
    fontSize: 16,
    fontWeight: "500",
    textDecorationLine: "line-through",
    paddingLeft: 10,
    paddingRight: 8,
  },
  percentageText: {
    color: "#878787",
    fontSize: 16,
    fontWeight: "500",
    paddingRight: 40,
  },
  soldText: {
    fontSize: 16,
    fontWeight: "500",
    paddingLeft: 8,
    paddingRight: 8,
  },
  likeText: {
    fontSize: 16,
    fontWeight: "500",
    paddingLeft: 9,
  },
  ratingView: {
    height: 43,
    width: "90%",
    // backgroundColor:"red",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 0.5,
  },
  innerRatingView: {
    flexDirection: "row",
    alignItems: "center",
    width: "30%",
    // backgroundColor:"yellow",
    justifyContent: "space-between",
  },
  btnAskQuestion: {
    height: 43,
    backgroundColor: "#2750E1",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  btnsView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 17,
    // backgroundColor:"red"
  },
  btnOrderNow: {
    height: 40,
    width: 160,
    backgroundColor: "#2750E1",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btnAddToCart: {
    height: 40,
    width: 160,
    backgroundColor: "#FF5C00",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  outsideBtnView: {
    paddingTop: 10,
    paddingBottom: 20,
    // backgroundColor:"red",
    borderBottomWidth: 1,
    borderColor: "#D3D3D3",
  },
  ratingDetailsView: {
    width: "100%",
    alignItems: "center",
    // backgroundColor:"red",
    paddingTop: 10,
  },
  innerRatingDetailsView: {
    // backgroundColor: "#fff",
    width: "95%",
    paddingHorizontal: 15,
    gap: 10,
    borderBottomWidth: 0.7,
    borderColor: "#D3D3D3",
  },
  ratingAndReview: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  starView: {
    flexDirection: "row",
  },
  commentsMainView: {
    // height: 200,
    width: "100%",
    // backgroundColor: "red",
    alignItems: "center",
  },
  commentsView: {
    width: "95%",
    // backgroundColor: "green",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#D3D3D3",
  },
  commentsheader: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "brown",
    width: "100%",
    paddingHorizontal: 10,
  },
  viewAllBtn: {
    width: "100%",
    // backgroundColor:"red",
    alignItems: "center",
    paddingVertical: 10,
    justifyContent: "center",
    borderBottomWidth: 0.7,
    borderColor: "gray",
  },
  touchableView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  imageBackroundView: {
    width: "100%",
    // backgroundColor:"red",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingBottom: 14,
    paddingTop: 20,
  },
  backgroundImage: {
    width: "100%",
    height: 388,
    alignItems: "center",
    paddingTop: 25,
  },
  imagetwo: {
    width: "100%",
    height: 238,
    alignItems: "center",
    paddingTop: 25,
  },
  imageThree: {
    width: "100%",
    height: 388,
  },
  textViewAfterImageBackground:{
    // height:371,
    width:"100%",
    paddingHorizontal:14,
    // backgroundColor:"red",
    gap:10,

  },
  innerViewOfText:{
    // backgroundColor:"#fff",
    height:271,
    width:"100%",
    gap:18,
  },
  lastflatlist: {
    flex: 1,
    width: "100%",
  },
});
