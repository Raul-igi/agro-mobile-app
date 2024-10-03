import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions, Animated, ActivityIndicator } from "react-native";
import React, { useRef, useState } from "react";
import { useAssets } from "expo-asset";
import { Link } from "expo-router";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const Page = () => {
  const [assets, error] = useAssets([
    require("@/assets/images/homepagepicture.png"),
    require("@/assets/images/cowslide.png"),
    require("@/assets/images/soilslide.png"),
  ]);

  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array for different headers and descriptions
  const headers = [
    "Accurate Data, Better Decisions",
    "Efficient Livestock Monitoring",
    "Empower Your Community"
  ];

  const descriptions = [
    "Monitor your farm's progress on the go. Check your data anytime, anywhere with our mobile app.",
    "Keep track of your livestock's health, growth, and production.",
    "Get instant access to your farm and livestock data and generate valuable reports within minutes."
  ];

  const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / width);
    setCurrentIndex(index);
  };

  if (!assets && !error) {
    // If assets are still loading, show a loading indicator
    return (
      <View style={[styles.container, { justifyContent: "center", alignItems: "center" }]}>
        <ActivityIndicator size="large" color={Colors.green} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, { justifyContent: "center", alignItems: "center" }]}>
        <Text>Error loading assets.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {assets && (
        <View style={styles.carouselContainer}>
          <ScrollView 
            horizontal 
            pagingEnabled 
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false, listener: handleScroll }
            )}
            scrollEventThrottle={16}
            contentContainerStyle={styles.scrollViewContent}
          >
            {assets.map((asset, index) => (
              <View key={index} style={styles.imageContainer}>
                <Image
                  source={{ uri: asset.uri }}
                  style={styles.image}
                  resizeMode="cover"
                />
                <LinearGradient
                  colors={['#ffffff00', '#ffffff']}
                  style={styles.linearGradient}
                  start={{ x: 0, y: 0.2 }}
                  end={{ x: 0, y: 1 }}
                />
              </View>
            ))}
          </ScrollView>
        </View>
      )}

      {/* Updated text to change based on currentIndex */}
      <View style={styles.bottomContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.header}>{headers[currentIndex]}</Text>
          <Text style={styles.description}>{descriptions[currentIndex]}</Text>
        </View>
      </View>

      {/* Dot Indicators */}
      <View style={styles.dotContainer}>
        {assets && assets.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>

      {/* Button Last */}
      <View style={styles.buttons}>
        <Link
          href={"/login"}
          style={[
            defaultStyles.pillButton,
            { width: "90%", backgroundColor: Colors.green, borderRadius: 8 },
          ]}
          asChild
        >
          <TouchableOpacity>
            <Text style={defaultStyles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  carouselContainer: {
    flex: 1,
  },

  scrollViewContent: {
    flexDirection: "row",
  },

  imageContainer: {
    width, // Full width for each image
    height, // Full height for each image
  },

  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },

  linearGradient: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  dotContainer: {
    position: "absolute",
    bottom: 110, // Adjusted to ensure it’s visible between text and button
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8, // Space between dots
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
    bottom:40,
  },

  activeDot: {
    backgroundColor: Colors.green,
  },

  inactiveDot: {
    backgroundColor: '#cccccc',
  },

  bottomContainer: {
    position: "absolute",
    bottom: 160, // Adjusted for new positioning above the dots
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  textContainer: {
    alignItems: "center",
    marginBottom: 20,
  },

  header: {
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 28,
    textTransform: "uppercase",
    color: "black",
    textAlign: "center",
    marginBottom: 8,
  },

  description: {
    fontWeight:400,
    fontSize: 16,
    lineHeight:24,
    color: Colors.lightBlack,
    textAlign: "center",
  },

  buttons: {
    position: "absolute",
    bottom: 60, // Positioned last, at the very bottom
    width: "100%",
    alignItems: "center",
  },
});

export default Page;
