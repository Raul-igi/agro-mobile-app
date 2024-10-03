import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity,Image } from 'react-native';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const DATA = [
  { id: '1', name: 'Olivier Kwizera', types: 'Crops • Livestock' },
  { id: '2', name: 'Olivier Kwizera', types: 'Crops • Livestock' },
  { id: '3', name: 'Olivier Kwizera', types: 'Crops • Livestock' },
  { id: '4', name: 'Olivier Kwizera', types: 'Crops' },
  { id: '5', name: 'Olivier Kwizera', types: 'Livestock' },
  { id: '6', name: 'Olivier Kwizera', types: 'Crops' },
  { id: '7', name: 'Olivier Kwizera', types: 'Livestock' },
];

const HomePage = () => {

  const router=useRouter();

  const renderItem = ({ item }:{item:{id:string; name:string;types:string}}) => (
    <TouchableOpacity style={styles.itemContainer}
    onPress={()=> router.push({pathname:"/registeredFarmer/crops"})}
    >
      
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
    <View style ={styles.maincontainer}>
      <View style={styles.topLevel}>
      <Text style={styles.header}>Urugwiro</Text>
      <Text style={styles.subHeader}>Cultivated Land</Text>
      <Text style={styles.landAmount}>1321 ha</Text>
      </View>

      <Image source={require("@/assets/images/icons/vectorBranchTree.png")} style={[styles.topRightImage,{tintColor:"#BEE2AC"}]} />


      <View  style={styles.container}>

        <View style={styles.registeredMain}>
      <Text style={styles.registeredFarmers}>Registered Farmers</Text>
      <Ionicons name="filter-sharp" size={20} color="#000" />
      </View>


      <View style={styles.collapsibleContent}>
              <View style={styles.separateLine}>
                <Text>-</Text>
              </View>
            </View>


       
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.flatList}
      />
      
      <TouchableOpacity style={styles.addButton}
                 onPress={() => router.push({pathname:`/newCooperativeAgronomies`})}

      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer:{
  flex:1,
  height:"100%"
  },

  container: {
    backgroundColor:Colors.solidWhite,
    padding:16,
    height:"100%"



  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0B2B08',
    marginBottom:20
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
  registeredFarmers: {
    fontSize: 13,
    fontWeight: '600',
    marginVertical: 12,
    color:"#94A3B8"
  },
  registeredMain:{
    flexDirection:"row",
    alignItems: 'center',
    gap:205,
    marginBottom:10

  },

  flatList: {
    flexGrow: 0,
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
  addButton: {
    position: 'absolute',
    bottom: "30%",
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor:Colors.green,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  addButtonText: {
    fontSize: 30,
    color: '#FFFFFF',
  },

  topLevel:{
    backgroundColor:Colors.topSide,
    padding: 16,
    height:"20%"


  },

  topRightImage: {
    position: 'absolute',
    top: 50,
    right: -5,
    width: "40%", // Adjust this value as needed
    height: 100, // Adjust this value as needed
    color:"red"
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
});

export default HomePage;

