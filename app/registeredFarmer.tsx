import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet,TextInput } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { Icon, Button } from 'react-native-elements';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Modal from "react-native-modal";
import RNPickerSelect from "react-native-picker-select";
import { defaultStyles } from "@/constants/Styles";





const registeredFarmer = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [items, setItems] = useState([
    { id: '1', number: '44 201' },
    { id: '2', number: '44 202' },
    { id: '3', number: '22 328' },
    { id: '4', number: '44 201' },
    { id: '5', number: '44 202' },
    { id: '6', number: '22 328' },
    { id: '6', number: '22 328' },

  ]);

  const router=useRouter();
  const [show1, setShow1] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);



  const togglesecondModal = () => setShow1(!show1);



  const handleIndexChange = (index) => {
    setSelectedIndex(index);
  };

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>{item.number}</Text>
      <TouchableOpacity >
      <Ionicons name="add-outline" size={20} color="#000" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.mainHeader}>
      <View style={[styles.headerContainer, { marginTop:"-1%",paddingHorizontal: 15, }]}>
          <TouchableOpacity
            onPress={() => router.push({ pathname: "/homePage" })}
          >
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Olivier Kwizera</Text>
        </View>
      </View>

      {/* Segmented Control */}
      <SegmentedControlTab
        values={['15 Cows', '12 Goats', '44 Chicken', '12 Rabbits']}
        selectedIndex={selectedIndex}
        onTabPress={handleIndexChange}
        tabsContainerStyle={styles.tabContainer}
        tabStyle={styles.tabStyle}
        activeTabStyle={styles.activeTabStyle}
        activeTabTextStyle={styles.activeTabTextStyle}
        tabTextStyle={styles.tabTextStyle}
      />

      {/* List */}
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />

      {/* Floating Button */}
      <Button
        buttonStyle={styles.floatingButton}
        icon={<Icon name="plus" type="font-awesome" size={20} color="white" />}
      />

<TouchableOpacity style={styles.addButton}
                 onPress={togglesecondModal}

      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>


{/* first modal */}
<Modal
        isVisible={show1}
        onBackdropPress={togglesecondModal}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>New Livestock</Text>
          </View>

          <View style={styles.sidesLabels}>
            <Text style={styles.label}>Type</Text>
            <Text style={styles.label}>Total Number</Text>
          </View>
          <View style={styles.sidesInputs}>
          <TextInput
              style={[styles.input, { flex: 1 }]}
              placeholder="Livestock"
              placeholderTextColor="#999"
            />
            <TextInput
              style={[styles.input, { flex: 1 }]}
              placeholder="ex: 20"
              placeholderTextColor="#999"
              keyboardType="numeric"
            />
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

          <View style={styles.sidesLabels}>
            <Text style={styles.label}>Proudce(optional)</Text>
          </View>

          <View style={styles.sidesInputs}>
            <TextInput
              style={[styles.input, { flex: 1 }]}
              placeholder="Produce amount"
              placeholderTextColor="#999"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.collapsibleContent2}>
            <TouchableOpacity
              style={[
                defaultStyles.pillButton,
                styles.enabled2,
                { marginBottom: 20, width: "100%" },
              ]}
              onPress={() => router.push({ pathname: "/registeredFarmer" })}
            >
              <Text style={[defaultStyles.buttonText, styles.buttonText2]}>
                Add Livestock
              </Text>
            </TouchableOpacity>
          </View>

          {/* <Button title="Hide modal" onPress={toggleModal} /> */}
        </View>
      </Modal>







    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.solidWhite,

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor:"#FEF7FF",
  },
  headerText: {
    fontSize: 24,
    fontWeight: 600,
    marginLeft: 10,
    lineHeight:32
  },
  tabContainer: {
    marginVertical: 10,
    marginHorizontal: 15,
  },
  tabStyle: {
    borderColor: 'transparent',
    backgroundColor:"transparent"
  },
  activeTabStyle: {
    backgroundColor: '#0F172A',
    borderRadius:28,
  },
  tabTextStyle: {
    color: '#1C1C1E',
    fontSize: 16,
    fontWeight:600,
    lineHeight:24
  },
  activeTabTextStyle: {
    color: '#FFF',
  },
  list: {
    paddingHorizontal: 15,
  },
  listItem: {
    backgroundColor: '#F8FAFC',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    //height:48
  },
  itemText: {
    fontSize: 16,
    color: '#000',
  },
  
  floatingButton: {
    backgroundColor: '#32CD32',
    position: 'absolute',
    bottom: 20,
    right: 20,
    borderRadius: 50,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addButton: {
    position: 'absolute',
    bottom: "10%",
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor:Colors.green,
    justifyContent: 'center',
    alignItems: 'center',
   
  },

  addButtonText: {
    fontSize: 30,
    color: '#FFFFFF',
  },
  mainHeader:{
    width:"100%",
    backgroundColor:Colors.topSide,
    height:"5%",
    alignItems:"flex-start",
  
  },

  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  modal: {
    justifyContent: "center", // Center the modal vertically
    alignItems: "center", // Center the modal horizontally
  },
  modalContent: {
    width: 300, // Set width of the modal
    //height: 200, // Set height of the modal
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    maxHeight: "80%",
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left", // Align the title to the left
    flex: 1, // Ensure the title takes up available space
    color: "#000",
  },

  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start", // Align items at the start (top)
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
    paddingBottom: 10,
    marginBottom: 15,
  },

  sidesLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },

  label: {
    flex: 1,
    fontSize: 16,
    color: "#334155",
    fontWeight: "500",
  },

  sidesInputs: {
    flexDirection: "row",
    justifyContent: "space-between",
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

  dropdown: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff", // Background for dropdown to match input style
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#d1d5db",
    paddingHorizontal: 10,
  },
  collapsibleContent2: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  enabled2: {
    color: Colors.solidWhite,
    backgroundColor: Colors.green,
    borderRadius: 8,
  },
  buttonText2: {
    color: Colors.solidWhite,
    fontSize: 16,
    fontWeight: "600",
  },



});

export default registeredFarmer;
