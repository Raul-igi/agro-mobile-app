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
  import SegmentedControlTab from "react-native-segmented-control-tab";

  const NewFarmer = () => {
    const [selectedValue, setSelectedValue] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState("");
    const keyboardVerticalOffset = Platform.OS === "ios" ? 80 : 0;
    const [selectedIndex, setSelectedIndex] = useState(0);

  
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        keyboardVerticalOffset={keyboardVerticalOffset}
      >
        <View style={styles.innerContainer}>
          <View style={[styles.headerContainer,{marginTop:15}]}>
            <TouchableOpacity
            onPress={() => router.push({pathname:"/homePage"})}
            >
              <Ionicons name="arrow-back" size={24} color="#000" />
            </TouchableOpacity>
            <Text style={styles.headerText}>New Farmer</Text>
          </View>
  
          
          <View style={styles.inputField}>
            <Text style={styles.label}>Full Name</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Write full name"
              placeholderTextColor="#999"
            />
          </View>
  
         
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
  
          
          <View style={styles.sidesLabels}>
            <Text style={styles.label}>Age</Text>
            <Text style={styles.label}>Gender</Text>
          </View>
          <View style={styles.sidesInputs1}>
            <TextInput
              style={[styles.input, { flex: 1, marginRight: 10 }]} // Adding marginRight for space
              placeholder="Age"
              placeholderTextColor="#999"
              keyboardType="numeric"
            />
            <View style={[styles.inputContainer,{height:50,flex: 1}]}>
            <View style={[styles.input, styles.dropdown]}>
              <RNPickerSelect
                onValueChange={(value) => setSelectedValue(value)}
                items={[
                  { label: "Male", value: "Male" },
                  { label: "Female", value: "Female" },
                ]}
                placeholder={{ label: "Male/Female", value: null }}
                Icon={() => {
                  return <Ionicons name="chevron-down" size={20} color="#999" />;
                }}
              />
            </View>
          </View>
          </View>

          <View style={styles.collapsibleContent}>
              <View style={styles.separateLine}>
                <Text>-</Text>
              </View>
            </View>


            <SegmentedControlTab
        values={["indi-famer", "cooperative"]}
        selectedIndex={selectedIndex}
        onTabPress={setSelectedIndex}
        tabsContainerStyle={styles.tabsContainer}
        tabStyle={styles.tabStyle}
        activeTabStyle={styles.activeTabStyle}
        tabTextStyle={styles.tabTextStyle}
        activeTabTextStyle={styles.activeTabTextStyle}
      />



      
      {selectedIndex === 0 && (
        <View >
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



      
        </View>
      )}








        
{selectedIndex === 1 && (
        <View >
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

          <View style={styles.sidesLabels}>
            <Text style={styles.label}>Type</Text>
            <Text style={styles.label}>Total Number</Text>
          </View>

          <View style={styles.sidesInputs1}>
            <TextInput
              style={[styles.input, { flex: 1, marginRight: 10 }]} 
              placeholder="Age"
              placeholderTextColor="#999"
              keyboardType="numeric"
            />
            <View style={[styles.inputContainer,{height:50,flex: 1}]}>
            <View style={[styles.input, styles.dropdown]}>
              <RNPickerSelect
                onValueChange={(value) => setSelectedValue(value)}
                items={[
                  { label: "Male", value: "Male" },
                  { label: "Female", value: "Female" },
                ]}
                placeholder={{ label: "Male/Female", value: null }}
                Icon={() => {
                  return <Ionicons name="chevron-down" size={20} color="#999" />;
                }}
              />
            </View>
          </View>




          
          </View>






          <View style={styles.sidesLabels}>
            <Text style={styles.label}>Male Number</Text>
            <Text style={styles.label}>Female Number</Text>
          </View>
          <View style={styles.sidesInputs}>
            <TextInput
              style={[styles.input, { flex: 1, marginRight: 10 }]} // Adding marginRight for space
              placeholder="ex:20"
              placeholderTextColor="#999"
              keyboardType="numeric"
            />
            <TextInput
              style={[styles.input, { flex: 1 }]}
              placeholder="ex:20"
              placeholderTextColor="#999"
              keyboardType="numeric"
            />
          </View>



      
        </View>
      )}
      



  
          
         
  
          
          
          
  
          
         
  

          
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
      //paddingHorizontal: 10,
      padding:10,
      height: 50,
      backgroundColor: "#fff", // Adding background for input fields
    },
    sidesLabels: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 5,
    },

    sidesInputs1: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: -15,
      
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
    collapsibleContent: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separateLine: {
    backgroundColor: "#CBD5E1",
    height: 1,
    marginTop: 5,
    marginBottom: 5,
    width: "100%",
  },

  tabsContainer: {
    marginVertical: 20,
    paddingHorizontal:16,
    
  },
  tabStyle: {
    borderColor: "#1E293B",
    backgroundColor: "#F5F5F5",
    height: 56,
    padding: 5,
    borderWidth: 4,
    borderRadius: -40,
  },
  activeTabStyle: {
    backgroundColor: "#1E293B",
  },
  tabTextStyle: {
    color: "#333333",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 24,
  },
  activeTabTextStyle: {
    color: "#FFFFFF",
  },

  ListContainer:{
    paddingHorizontal:16
    },
  

  });
  
  export default NewFarmer;
  