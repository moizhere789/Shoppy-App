import React, { useRef, useState } from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const { width: viewportWidth } = Dimensions.get('window');

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const data = [
    { image: require('../assets/images/sliderimage.png') }, 
    { image: require('../assets/images/sliderimage.png') },
    { image: require('../assets/images/sliderimage.png') },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.container}>
         <Carousel
        layout={'default'}
        ref={carouselRef}
        data={data}
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth}
        renderItem={renderItem}
        onSnapToItem={(index) => { 
          setActiveIndex(index === data.length - 1 ? data.length - 1 : index);
        }} 
        enableSnap={true} 
        activeSlideAlignment="start" 
      />
      <View style={styles.paginationContainer}>
        <Pagination
          dotsLength={data.length}
          activeDotIndex={activeIndex} 
          dotStyle={styles.dot}
          inactiveDotStyle={styles.inactiveDot}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
  },
  image: {
    width: viewportWidth,
    height: 470, 
    resizeMode: 'cover',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 35, 
    alignSelf: 'center', 
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: 'white', 
  },
  inactiveDot: {
    backgroundColor: 'gray', 
  },
});

export default ImageSlider;
