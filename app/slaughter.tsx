import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Platform,
    Button,
  } from "react-native";
  import React, { useState } from "react";
  import DateTimePicker from "@react-native-community/datetimepicker"; // Importing DateTimePicker
  
  import Colors from "@/constants/Colors";
  import { useRouter } from "expo-router";
  import { Ionicons } from "@expo/vector-icons";
  import RNPickerSelect from "react-native-picker-select"; // for dropdowns and menus
  
  const Slaughter = () => {
    const router = useRouter();
  
    // State variables for form fields
    const [livestockType, setLivestockType] = useState(null);
    const [livestockID, setLivestockID] = useState("");
    const [breed, setBreed] = useState(null);
    const [age, setAge] = useState("");
    const [weight, setWeight] = useState("");
    const [healthStatus, setHealthStatus] = useState(null);
  
    // State for handling calendar input
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
  
    // Function to handle date change
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShowDatePicker(Platform.OS === "ios"); // Hide picker on Android after selection
      setSelectedDate(currentDate);
    };
  
    const showDatepicker = () => {
      setShowDatePicker(true);
    };
  
    return (
      <View style={styles.innerContainer}>
        {/* Header */}
        <View style={[styles.headerContainer, { marginTop: 15 }]}>
          <TouchableOpacity onPress={() => router.push({ pathname: "/homePage" })}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Slaughter</Text>
        </View>
  
        
         {/* Calendar Date Picker */}
         <View style={styles.inputField}>
          <Text style={styles.label}>Slaughter Date</Text>
        </View>
        <View style={styles.inputContainer}>
          <TouchableOpacity onPress={showDatepicker} style={styles.datePicker}>
            <Text style={styles.dateText}>
              {selectedDate.toDateString()} {/* Display selected date */}
            </Text>
            <Ionicons name="calendar" size={20} color="#999" />
          </TouchableOpacity>
        </View>


         {/* Show DateTimePicker if true */}
         {showDatePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={selectedDate}
            mode={"date"}
            display="default"
            onChange={onChange}
          />
        )}
  
  
        {/* Livestock ID */}
        <View style={styles.inputField}>
          <Text style={styles.label}>Pre-Slaughter Weight</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="300 KG"
            placeholderTextColor="#999"
            keyboardType="numeric"
            value={livestockID}
            onChangeText={setLivestockID}
          />
        </View>
  
     
        
        
        {/* Weight */}
        <View style={styles.inputField}>
          <Text style={styles.label}>Post-saughter</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="120 KG"
            placeholderTextColor="#999"
            keyboardType="numeric"
            value={weight}
            onChangeText={setWeight}
          />
        </View>
  
       
       
  
        {/* Health Status */}
        <View style={styles.inputField}>
          <Text style={styles.label}>By-products</Text>
        </View>
        <View style={[styles.sidesInputs, { gap: 10 }]}>
          <View style={[styles.inputContainer, { height: 50, flex: 1 }]}>
            <View style={[styles.input, styles.dropdown]}>
              <RNPickerSelect
                onValueChange={(value) => setHealthStatus(value)}
                items={[
                  { label: "Fit for slaughter", value: "fit" },
                  { label: "Unfit for slaughter", value: "unfit" },
                ]}
                placeholder={{ label: "Bones,Organs,Waste", value: null }}
                Icon={() => <Ionicons name="chevron-down" size={20} color="#999" />}
              />
            </View>
          </View>
        </View>
      </View>
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
      backgroundColor: "#fff", // Background for input fields
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
    datePicker: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: "#d1d5db",
      backgroundColor: "#fff",
    },
    dateText: {
      color: "#000",
      fontSize: 16,
    },
  });
  
  export default Slaughter;
  