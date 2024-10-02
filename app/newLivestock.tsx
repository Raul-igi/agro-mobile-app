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
import { defaultStyles } from "@/constants/Styles";
import { router, Link } from "expo-router";
import Colors from "@/constants/Colors";

const RadioButton = ({ value, selected, onSelect }) => {
  return (
    <TouchableOpacity
      onPress={() => onSelect(value)}
      style={styles.radioContainer}
    >
      <View style={styles.radioButton}>
        {selected && <View style={styles.radioButtonSelected} />}
      </View>
      <Text style={styles.radioText}>{value}</Text>
    </TouchableOpacity>
  );
};

const newLivestock = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const keyboardVerticalOffset = Platform.OS === "ios" ? 80 : 0;
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectOption = (value) => {
    setSelectedOption(value);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <View style={styles.innerContainer}>
        {/* Header */}
        <View style={[styles.headerContainer, { marginTop: 15 }]}>
          <TouchableOpacity
            onPress={() => router.push({ pathname: "/homePage" })}
          >
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerText}>New Livestock</Text>
        </View>

        {/* Full Name */}
        <View style={styles.inputField}>
          <Text style={styles.label}>Livestock type</Text>
        </View>
        <View style={[styles.inputContainer, { height: 47 }]}>
          <View style={[styles.input, styles.dropdown]}>
            <RNPickerSelect
              onValueChange={(value) => setSelectedValue(value)}
              items={[
                { label: "Traditional", value: "traditional" },
                { label: "Commercial", value: "commercial" },
              ]}
              placeholder={{ label: "Cattle", value: null }}
              Icon={() => {
                return <Ionicons name="chevron-down" size={20} color="#999" />;
              }}
            />
          </View>
        </View>

        {/* Phone Number */}
        <View style={styles.inputField}>
          <Text style={styles.label}>Livestock ID</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Cd 23"
            placeholderTextColor="#999"
            keyboardType="numeric"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>

        <View>
          <View style={styles.sidesLabels}>
            <Text style={styles.label}>Breed</Text>
            <Text style={styles.label}>Age</Text>
          </View>
          <View style={[styles.sidesInputs, { gap: 10 }]}>
            <View style={[styles.inputContainer, { height: 50, flex: 1 }]}>
              <View style={[styles.input, styles.dropdown]}>
                <RNPickerSelect
                  onValueChange={(value) => setSelectedValue(value)}
                  items={[
                    { label: "Traditional", value: "traditional" },
                    { label: "Commercial", value: "commercial" },
                  ]}
                  //placeholder={{ label: "Traditional", value: null }}
                  Icon={() => {
                    return (
                      <Ionicons name="chevron-down" size={20} color="#999" />
                    );
                  }}
                />
              </View>
            </View>

            <TextInput
              style={[styles.input, { flex: 1, marginRight: 10,width:40 }]}
              placeholder="Write Number"
              placeholderTextColor="#999"
              keyboardType="numeric"
            />
          </View>
        </View>

        <View style={styles.radioContainer}>
          <View style={styles.radioGroup}>
            <RadioButton
              value="Male"
              selected={selectedOption === "Option 1"}
              onSelect={handleSelectOption}
            />
            <RadioButton
              value="Female"
              selected={selectedOption === "Option 2"}
              onSelect={handleSelectOption}
            />
          </View>
        </View>

        <View style={styles.inputField}>
          <Text style={styles.label}>Weight</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="320 KG"
            placeholderTextColor="#999"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputField}>
          <Text style={styles.label}>Health status</Text>
        </View>

        <View style={[styles.sidesInputs, { gap: 10 }]}>
          <View style={[styles.inputContainer, { height: 50, flex: 1 }]}>
            <View style={[styles.input, styles.dropdown]}>
              <RNPickerSelect
                onValueChange={(value) => setSelectedValue(value)}
                items={[
                  { label: "Traditional", value: "traditional" },
                  { label: "Commercial", value: "commercial" },
                ]}
                placeholder={{ label: "Fit for slaughter", value: null }}
                Icon={() => {
                  return (
                    <Ionicons name="chevron-down" size={20} color="#999" />
                  );
                }}
              />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.buttonMainContaioner}>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={[defaultStyles.pillButtonSmall, styles.buttons1]}
            onPress={()=> router.push({pathname:"/ecoYield"})}
          >
            <Text style={[defaultStyles.buttonTextSmall, styles.buttonText1]}>
              Save
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttons}>
          
            <TouchableOpacity
            style={[
                defaultStyles.pillButtonSmall,
                { width: "70%", backgroundColor: Colors.green, borderRadius: 8 },
              ]}
              onPress={()=>router.push({pathname:"/homePage"})}
              //onPress={()=>router.push({pathname:"/slaughter"})}
            >
              <Text style={defaultStyles.buttonTextSmall}>
                Proccede to slaughter
              </Text>
            </TouchableOpacity>
          
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

  radioContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 20,
  },

  radioGroup: {
    flexDirection: "row", // Align all radio buttons horizontally
    alignItems: "flex-start",
    justifyContent: "space-around", // Space the buttons evenly
    gap: 20,
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonSelected: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#000",
  },
  radioText: {
    marginLeft: 10,
    fontSize: 16,
  },
  selectedText: {
    marginTop: 20,
    fontSize: 18,
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },

  buttons1: {
    width: "60%",
    backgroundColor: "#EEFAEC",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.green,
  },

  buttonMainContaioner: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-around",
  },

  buttonText1: {
    color: Colors.green,
  },
});

export default newLivestock;
