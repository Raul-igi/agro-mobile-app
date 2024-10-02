import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import RNPickerSelect from "react-native-picker-select";
import { router } from "expo-router";

const newCooperative = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const keyboardVerticalOffset = Platform.OS === "ios" ? 80 : 0;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <View style={styles.innerContainer}>
        {/* Header */}
        <View style={[styles.headerContainer,{marginTop:15}]}>
          <TouchableOpacity
          onPress={() => router.push({pathname:"/homePage"})}
          >
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerText}>New Cooperative</Text>
        </View>

        {/* Full Name */}
        <View style={styles.inputField}>
          <Text style={styles.label}>Name</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Write full name"
            placeholderTextColor="#999"
          />
        </View>

        {/* Phone Number */}
        <View style={styles.inputField}>
          <Text style={styles.label}>Phone Number</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Write your phone number here"
            placeholderTextColor="#999"
            keyboardType="numeric"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>

        {/* Age and Gender */}
        <View style={styles.sidesLabels}>
          <Text style={styles.label}>Registration Number</Text>
          <Text style={styles.label}>Members</Text>
        </View>
        <View style={styles.sidesInputs}>
          <TextInput
            style={[styles.input, { flex: 1, marginRight: 10 }]} // Adding marginRight for space
            placeholder="Write Number"
            placeholderTextColor="#999"
            keyboardType="numeric"
          />
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Write Number"
            placeholderTextColor="#999"
            keyboardType="numeric"
          />
        </View>

        {/* Type of Farmer */}
        <View style={styles.inputField}>
          <Text style={styles.label}>Type of Farmer</Text>
        </View>
        <View style={[styles.inputContainer,{height:47}]}>
          <View style={[styles.input, styles.dropdown]}>
            <RNPickerSelect
              onValueChange={(value) => setSelectedValue(value)}
              items={[
                { label: "Traditional", value: "traditional" },
                { label: "Commercial", value: "commercial" },
              ]}
              //placeholder={{ label: "Traditional", value: null }}
              Icon={() => {
                return <Ionicons name="chevron-down" size={20} color="#999" />;
              }}
            />
          </View>
        </View>

        {/* Type, Total Number */}
        <View style={styles.sidesLabels}>
          <Text style={styles.label}>Crop</Text>
          <Text style={styles.label}>Area</Text>
        </View>
        <View style={styles.sidesInputs}>
          <TextInput
            style={[styles.input, { flex: 1, marginRight: 10 }]} // Adding marginRight for space
            placeholder="Crop Name"
            placeholderTextColor="#999"
            keyboardType="numeric"
          />
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Planted Area"
            placeholderTextColor="#999"
            keyboardType="numeric"
          />
        </View>

        {/* Male Number, Female Number */}
        <View style={styles.sidesLabels}>
          <Text style={styles.label}>Input Used</Text>
          <Text style={styles.label}>Fertilizer</Text>
        </View>
        <View style={styles.sidesInputs}>
          <TextInput
            style={[styles.input, { flex: 1, marginRight: 10 }]} // Adding marginRight for space
            placeholder="Seeds Input"
            placeholderTextColor="#999"
            keyboardType="numeric"
          />
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Fertilizer Used"
            placeholderTextColor="#999"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputField}>
          <Text style={styles.label}>Produce Harvested</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Harvest amount"
            placeholderTextColor="#999"
            keyboardType="numeric"
            
          />
        </View>
        
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "600",
    marginLeft: 10,
  },
  inputField: {
    marginBottom: 5,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#475569",
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderColor: "#d1d5db",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 50,
    backgroundColor: "#fff", // Adding background for input fields
  },
  sidesLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  sidesInputs: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  dropdown: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff", // Background for dropdown to match input style
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#d1d5db",
    paddingHorizontal: 10,
  },
});

export default newCooperative;
