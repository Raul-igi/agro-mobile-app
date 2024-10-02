import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useAssets } from "expo-asset";
import { Link } from "expo-router";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import "react-native-gesture-handler";


const Page = () => {
  const [assets] = useAssets([require("@/assets/images/homepagepicture.png")]);

  return (
    <View style={styles.container}>
      {assets && (
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: assets[0].uri }}
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
      )}

      <View style={styles.bottomContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.header}>Accurate Data, Better Decisions</Text>
          <Text style={styles.description}>
            Monitor your farm's progress on the go. Check your data anytime, anywhere with our mobile app.
          </Text>
        </View>

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
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

  bottomContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "center",
    paddingBottom: 40,
  },

  textContainer: {
    padding: 20,
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
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
});

export default Page;
