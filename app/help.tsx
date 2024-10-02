import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Ionicons } from "@expo/vector-icons";
const help = () => {
  return (
    <View style={Styles.container}>
      <View>
        <MaterialCommunityIcons
          name="help-rhombus"
          size={40}
          color={Colors.dark}
          style={{ textAlign: "center"}}
        />
        <Text style={Styles.help}>
          Tecnical support is'nt available right now
        </Text>
      </View>

      <View>
        <Link
          href="/"
          style={[
            defaultStyles.pillButton,
            {
              backgroundColor: Colors.dark,
              marginTop: 20,
              width: 150,
              marginLeft: 110,
            },
          ]}
          asChild
        >
          <TouchableOpacity>
            <Text style={defaultStyles.buttonText}>Dismiss</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    marginVertical: 200,
    justifyContent: "center",
  },

  help: {
    fontSize: 20,
    fontFamily: "900",
    textTransform: "uppercase",
    textAlign: "center",
  },
});

export default help;
