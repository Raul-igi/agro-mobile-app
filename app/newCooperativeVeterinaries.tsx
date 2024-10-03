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
import Colors from "@/constants/Colors";
import { useRouter } from "expo-router";

const newCooperative = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const keyboardVerticalOffset = Platform.OS === "ios" ? 80 : 0;
  const router=useRouter();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={keyboardVerticalOffset}
    >

<View style={styles.mainHeader}>
      <View style={[styles.headerContainer, { marginTop:"20%",paddingHorizontal: 15, }]}>
          <TouchableOpacity
            onPress={() => router.push({ pathname: "/homePage" })}
          >
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerText}>New Cooperative</Text>
        </View>
      </View>


      <View style={styles.innerContainer}>
       
        <View style={styles.inputField}>
          <Text style={styles.label}>Name</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Write Cooperative name"
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
            style={[styles.input, { flex: 1,  }]} // Adding marginRight for space
            placeholder="Write Number"
            placeholderTextColor="#999"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.collapsibleContent}>
              <View style={styles.separateLine}>
                <Text>-</Text>
              </View>
            </View>

        {/* Type of Farmer */}
        <View style={styles.inputField}>
          <Text style={styles.label}>Type of Farmer</Text>
        </View>
        <View style={[styles.inputContainer,styles.inputField2]}>
          <View style={[styles.input, styles.dropdown]}>
            <RNPickerSelect
              onValueChange={(value) => setSelectedValue(value)}
              items={[
                { label: "Traditional", value: "traditional" },
                { label: "Commercial", value: "commercial" },
              ]}
              placeholder={{ label: "Traditional", value: null }}
              Icon={() => {
                return <Ionicons name="chevron-down" size={20} color="#999" />;
              }}
            />
          </View>
        </View>

        {/* Type, Total Number */}
        <View style={styles.sidesLabels}>
          <Text style={styles.label}>Type</Text>
          <Text style={styles.label}>Total Number</Text>
        </View>
        <View style={styles.sidesInputs}>
          <View style={[styles.input, styles.dropdown, { marginRight: 10 }]}>
            <RNPickerSelect
              onValueChange={(value) => setSelectedValue(value)}
              items={[
                { label: "Cow", value: "cow" },
                { label: "Goat", value: "goat" },
              ]}
              placeholder={{ label: "Cow", value: null }}
              Icon={() => {
                return <Ionicons name="chevron-down" size={20} color="#999" />;
              }}
            />
          </View>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="ex: 20"
            placeholderTextColor="#999"
            keyboardType="numeric"
          />
        </View>

        {/* Male Number, Female Number */}
        <View style={styles.sidesLabels}>
          <Text style={styles.label}>Male Number</Text>
          <Text style={styles.label}>Female Number</Text>
        </View>
        <View style={styles.sidesInputs}>
          <TextInput
            style={[styles.input, { flex: 1, marginRight: 10 }]} // Adding marginRight for space
            placeholder="ex: 20"
            placeholderTextColor="#999"
            keyboardType="numeric"
          />
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="ex: 20"
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
    marginTop:"10%"

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

  inputField2: {
    marginBottom: 5,
    height:50
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

  mainHeader:{
    width:"100%",
    backgroundColor:Colors.topSide,
    height:"15%",
    alignItems:"flex-start",
  
  },
  collapsibleContent: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separateLine: {
    backgroundColor: "#CBD5E1",
    height: 1,
    marginTop: 15,
    marginBottom: 10,
    width: "100%",
  },
});

export default newCooperative;
