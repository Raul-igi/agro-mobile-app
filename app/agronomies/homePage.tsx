import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  FlatList
} from "react-native";
import SegmentedControlTab from "react-native-segmented-control-tab";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Colors from "@/constants/Colors";
import Modal from "react-native-modal";
import RNPickerSelect from "react-native-picker-select";



const homePage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const toggleFirstModal = () => setShow(!show);
  const toggleSecondModal = () => setShow1(!show1);

  const DATA = [
    { id: '1', name: 'Olivier Kwizera', types: 'Crops • Livestock' },
    { id: '2', name: 'Olivier Kwizera', types: 'Crops • Livestock' },
    { id: '3', name: 'Olivier Kwizera', types: 'Crops • Livestock' },
    { id: '4', name: 'Olivier Kwizera', types: 'Crops' },
    { id: '5', name: 'Olivier Kwizera', types: 'Livestock' },
    { id: '6', name: 'Olivier Kwizera', types: 'Crops' },
    { id: '7', name: 'Olivier Kwizera', types: 'Livestock' },
  ];

  const DATA_2 = [
    { id: '1', name: 'Korandebe', types: 'Corn • Rice • Beans' },
    { id: '2', name: 'Kigali Farms', types: 'Mushrooms' },
    { id: '3', name: 'Abashingasuka', types: 'Potatoes • Rice • Corn' },
    { id: '4', name: 'Abatarushwa', types: 'Potatoes • Rice • Beans' },
    { id: '5', name: 'KOKIADU', types: 'Rice' },
    
  ];
  const router=useRouter();
  const [collapsed,setCollapsed]=useState("");

  const renderItem = ({ item }:{item:{id:string; name:string;types:string}}) => (
    <TouchableOpacity style={styles.itemContainer}>
      <View style={styles.circle}>
        <Text style={styles.circleText}>O</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.types}>{item.types}</Text>
      </View>
      <Ionicons name="chevron-forward-sharp" size={20} color="#000" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
    
    <View style={styles.topLevel}>
      <Text style={styles.header}>Urugwiro</Text>
      <Text style={styles.subHeader}>Cultivated Land</Text>
      <Text style={styles.landAmount}>1321 ha</Text>
      </View>
      <Image source={require("@/assets/images/icons/vectorBranchTree.png")} style={[styles.topRightImage,{tintColor:"#BEE2AC"}]} />

     
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
        <View style={styles.ListContainer}>
          <TouchableOpacity>
          <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.flatList}
      />
            </TouchableOpacity>

            <TouchableOpacity style={styles.addButton}
                 onPress={() => router.push({pathname:`/farmerRegistrationFlow/newFarmer`})}

      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
        </View>
      )}
      

      {selectedIndex === 1 && (
         <View style={styles.ListContainer}>
         <TouchableOpacity>
         <FlatList
       data={DATA_2}
       renderItem={renderItem}
       keyExtractor={item => item.id}
       style={styles.flatList}
     />
           </TouchableOpacity>

           <TouchableOpacity style={styles.addButton2}
                //onPress={() => router.push({pathname:`/farmerRegistrationFlow/ewFarmer`})}

     >
       <Text style={styles.addButtonText2}>+</Text>
     </TouchableOpacity>
       </View>
      )}

      {/* Modals and other components as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    height:"100%",
    backgroundColor:Colors.solidWhite,
   


  },
  tabsContainer: {
    marginVertical: 20,
    paddingHorizontal:16,
    
  },
  ListContainer:{
  paddingHorizontal:16
  },

  tabStyle: {
    borderColor: "transparent",
    backgroundColor: "transparent",
    height: 50,
    padding: 10,
    
   
  },
  activeTabStyle: {
    backgroundColor: "transparent",
    borderWidth:0,
    borderBottomWidth:2,
    borderBottomColor:"#1E293B"
  },
  tabTextStyle: {
    color: "#1E293B",
    fontSize: 16,
    fontWeight: "600",
  },
  activeTabTextStyle: {
    color: "#1E293B",
  },
  tabContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 8,
    
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#EAEEFD', 
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  circleText: {
    fontSize: 16,
    color: '#4F378A',
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  types: {
    fontSize: 14,
    color: '#B0B0B0',
  },

  topLevel:{
    backgroundColor:Colors.topSide,
    padding: 16,
    height:"20%"


  },

  subHeader: {
    fontSize: 18,
    color: '#784C00',
  },

  landAmount: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '##0F172A',
    marginVertical: 8,
  },

  topRightImage: {
    position: 'absolute',
    top: 43,
    right: -5,
    width: "40%", 
    height: 100,
    color:"red"
  },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#EFEFEF",
  },

  flatList: {
    flexGrow: 0,
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

  addButton2: {
    position: 'absolute',
    bottom: "-20%",
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor:Colors.green,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  addButtonText2: {
    fontSize: 30,
    color: '#FFFFFF',
  },


  
  // Additional styles as required for other components
});

export default homePage;
