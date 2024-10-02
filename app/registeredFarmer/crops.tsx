import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
  TextInput,
} from "react-native";
import SegmentedControlTab from "react-native-segmented-control-tab";
import Collapsible from "react-native-collapsible";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import Modal from "react-native-modal";
import RNPickerSelect from "react-native-picker-select";

type CropDetails = {
  plantedArea: string;
  seedInput: string;
  fertilizer: string;
  harvest: string;
};

const cropData: CropDetails = {
  plantedArea: "400 m²",
  seedInput: "4kg",
  fertilizer: "12kg",
  harvest: "-----",
};

const App = () => {
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [collapsed, setCollapsed] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  //Toggle function for each model
  const toggleFirstModal = () => setShow(!show);
  const togglesecondModal = () => setShow1(!show1);

  const [collapsedState, setCollapsedState] = useState<{
    [key: string]: boolean;
  }>({
    beans: true,
    chicken: true,
    // Add more keys for each collapsible item
  });

  // Function to handle collapsing individual items
  const toggleCollapse = (key: string) => {
    setCollapsedState((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.headerContainer, { marginTop: -25 }]}>
        <TouchableOpacity
          onPress={() => router.push({ pathname: "/homePage" })}
        >
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Oliver Kwizera</Text>
      </View>

      <SegmentedControlTab
        values={["Crops", "Livestock"]}
        selectedIndex={selectedIndex}
        onTabPress={setSelectedIndex}
        tabsContainerStyle={styles.tabsContainer}
        tabStyle={styles.tabStyle}
        activeTabStyle={styles.activeTabStyle}
        tabTextStyle={styles.tabTextStyle}
        activeTabTextStyle={styles.activeTabTextStyle}
      />

      {selectedIndex === 0 && (
        <View>
          <TouchableOpacity onPress={() => setCollapsed(!collapsed)}>
            <View style={styles.itemHeader}>
              <View>
                <Text>Beans</Text>
                <Text>24 May 2024</Text>
              </View>
              <View>
                <Ionicons
                  name={collapsed ? "chevron-up" : "chevron-down"}
                  size={20}
                  color="black"
                />
              </View>
            </View>
          </TouchableOpacity>

          <Collapsible collapsed={collapsed}>
            <View style={styles.collapsibleContent}>
              <Text style={styles.label}>Planted Area</Text>
              <Text style={styles.value}>{cropData.plantedArea}</Text>
            </View>
            <View style={styles.collapsibleContent}>
              <Text style={styles.label}>Fertilizer</Text>
              <Text style={styles.value}>{cropData.fertilizer}</Text>
            </View>
            <View style={styles.collapsibleContent}>
              <Text style={styles.label}>Harvest</Text>
              <Text style={styles.value}>{cropData.harvest}</Text>
            </View>

            <View style={styles.collapsibleContent}>
              <View style={styles.separateLine}>
                <Text>-</Text>
              </View>
            </View>

            <View style={styles.collapsibleContent}>
              <TouchableOpacity
                style={[
                  defaultStyles.pillButton,
                  styles.enabled,
                  { marginBottom: 20, width: "100%" },
                ]}
              >
                <Text style={[defaultStyles.buttonText, styles.buttonText]}>
                  Update
                </Text>
              </TouchableOpacity>
            </View>
          </Collapsible>

          <TouchableOpacity style={styles.addButton} onPress={toggleFirstModal}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      )}

      {selectedIndex === 0 && (
        <View>
          <TouchableOpacity onPress={() => toggleCollapse("beans")}>
            <View style={styles.itemHeader}>
              <View>
                <Text>Beans</Text>
                <Text>24 May 2024</Text>
              </View>
              <View>
                <Ionicons
                  name={collapsedState.beans ? "chevron-up" : "chevron-down"}
                  size={20}
                  color="black"
                />
              </View>
            </View>
          </TouchableOpacity>

          <Collapsible collapsed={collapsedState.beans}>
            <View style={styles.collapsibleContent}>
              <Text style={styles.label}>Planted Area</Text>
              <Text style={styles.value}>{cropData.plantedArea}</Text>
            </View>
            <View style={styles.collapsibleContent}>
              <Text style={styles.label}>Fertilizer</Text>
              <Text style={styles.value}>{cropData.fertilizer}</Text>
            </View>
            <View style={styles.collapsibleContent}>
              <Text style={styles.label}>Harvest</Text>
              <Text style={styles.value}>{cropData.harvest}</Text>
            </View>

            <View style={styles.collapsibleContent}>
              <View style={styles.separateLine}>
                <Text>-</Text>
              </View>
            </View>

            <View style={styles.collapsibleContent}>
              <TouchableOpacity
                style={[
                  defaultStyles.pillButton,
                  styles.enabled,
                  { marginBottom: 20, width: "100%" },
                ]}
              >
                <Text style={[defaultStyles.buttonText, styles.buttonText]}>
                  Update
                </Text>
              </TouchableOpacity>
            </View>
          </Collapsible>
        </View>
      )}

      {selectedIndex === 0 && (
        <View>
          <TouchableOpacity onPress={() => toggleCollapse("chicken")}>
            <View style={styles.itemHeader}>
              <View>
                <Text>Beans</Text>
                <Text>24 May 2024</Text>
              </View>
              <View>
                <Ionicons
                  name={collapsedState.chicken ? "chevron-up" : "chevron-down"}
                  size={20}
                  color="black"
                />
              </View>
            </View>
          </TouchableOpacity>

          <Collapsible collapsed={collapsedState.chicken}>
            <View style={styles.collapsibleContent}>
              <Text style={styles.label}>Planted Area</Text>
              <Text style={styles.value}>{cropData.plantedArea}</Text>
            </View>
            <View style={styles.collapsibleContent}>
              <Text style={styles.label}>Fertilizer</Text>
              <Text style={styles.value}>{cropData.fertilizer}</Text>
            </View>
            <View style={styles.collapsibleContent}>
              <Text style={styles.label}>Harvest</Text>
              <Text style={styles.value}>{cropData.harvest}</Text>
            </View>

            <View style={styles.collapsibleContent}>
              <View style={styles.separateLine}>
                <Text>-</Text>
              </View>
            </View>

            <View style={styles.collapsibleContent}>
              <TouchableOpacity
                style={[
                  defaultStyles.pillButton,
                  styles.enabled,
                  { marginBottom: 20, width: "100%" },
                ]}
              >
                <Text style={[defaultStyles.buttonText, styles.buttonText]}>
                  Update
                </Text>
              </TouchableOpacity>
            </View>
          </Collapsible>
        </View>
      )}

      <View>
        {selectedIndex === 1 && (
          <View>
            <TouchableOpacity onPress={() => setCollapsed(!collapsed)}>
              <View style={styles.itemHeader}>
                <View>
                  <Text>Cow</Text>
                  <Text>12F . 3M </Text>
                </View>
                <View>
                  <Ionicons
                    name="chevron-forward-sharp"
                    size={20}
                    color="#000"
                  />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setCollapsed(!collapsed)}>
              <View style={styles.itemHeader}>
                <View>
                  <Text>Goats</Text>
                  <Text>12F . 3M </Text>
                </View>
                <View>
                  <Ionicons
                    name="chevron-forward-sharp"
                    size={20}
                    color="#000"
                  />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setCollapsed(!collapsed)}>
              <View style={styles.itemHeader}>
                <View>
                  <Text>Chicken</Text>
                  <Text>12F . 3M </Text>
                </View>
                <View>
                  <Ionicons
                    name="chevron-forward-sharp"
                    size={20}
                    color="#000"
                  />
                </View>
              </View>
            </TouchableOpacity>


            <TouchableOpacity
              style={styles.addButton}
              onPress={togglesecondModal}
            >
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* first modal*/}
      <Modal
        isVisible={show}
        onBackdropPress={toggleFirstModal}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>New Crop</Text>
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

          <View style={styles.sidesLabels}>
            <Text style={styles.label}>Produce Harvested</Text>
          </View>

          <View style={styles.sidesInputs}>
            <TextInput
              style={[styles.input, { width: "100%", marginRight: 10 }]} // Adding marginRight for space
              placeholder="Harvest amount"
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
              onPress={() => router.push({ pathname: "/cellLevel/homePage" })}
            >
              <Text style={[defaultStyles.buttonText, styles.buttonText2]}>
                Add Crop
              </Text>
            </TouchableOpacity>
          </View>

          {/* <Button title="Hide modal" onPress={toggleModal} /> */}
        </View>
      </Modal>

      {/* second modal */}
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
            <View style={[styles.input, styles.dropdown, { marginRight: 10 }]}>
              <RNPickerSelect
                onValueChange={(value) => setSelectedValue(value)}
                items={[
                  { label: "Cow", value: "cow" },
                  { label: "Goat", value: "goat" },
                ]}
                placeholder={{ label: "Cow", value: null }}
                Icon={() => {
                  return (
                    <Ionicons name="chevron-down" size={20} color="#999" />
                  );
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

{/* second modal */}
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
            <View style={[styles.input, styles.dropdown, { marginRight: 10 }]}>
              <RNPickerSelect
                onValueChange={(value) => setSelectedValue(value)}
                items={[
                  { label: "Cow", value: "cow" },
                  { label: "Goat", value: "goat" },
                ]}
                placeholder={{ label: "Cow", value: null }}
                Icon={() => {
                  return (
                    <Ionicons name="chevron-down" size={20} color="#999" />
                  );
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
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  tabsContainer: {
    marginVertical: 20,
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
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "transparent",
  },
  collapsibleContent: {
    padding: 10,
    backgroundColor: "#EEFAEC",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  collapsibleContent2: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
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
  label: {
    flex: 1,
    fontSize: 16,
    color: "#334155",
    fontWeight: "500",
  },
  value: {
    flexShrink: 1,
    fontSize: 16,
    color: "#334155",
    textAlign: "right",
    fontWeight: "500",
  },
  enabled: {
    backgroundColor: Colors.solidWhite,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#0F172A",
  },

  enabled2: {
    color: Colors.solidWhite,
    backgroundColor: Colors.green,
    borderRadius: 8,
  },
  buttonText: {
    color: Colors.dark,
    fontSize: 16,
    fontWeight: "600",
  },

  buttonText2: {
    color: Colors.solidWhite,
    fontSize: 16,
    fontWeight: "600",
  },
  separateLine: {
    backgroundColor: "#CBD5E1",
    height: 1,
    marginTop: 15,
    marginBottom: 10,
    width: "100%",
  },
  addButton: {
    flex:1,
    position: "absolute",
    bottom: -300,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: Colors.green,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  addButtonText: {
    fontSize: 30,
    color: "#FFFFFF",
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

  sidesLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },

  inputField: {
    marginBottom: 5,
  },

  inputContainer: {
    marginBottom: 20,
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

export default App;
