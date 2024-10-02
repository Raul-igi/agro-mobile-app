import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { Icon, Button } from 'react-native-elements';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';


const App = () => {
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
      <View style={styles.header}>
        <Icon name="arrow-back" size={25} color="#000" />
        <Text style={styles.headerText}>Olivier Kwizera</Text>
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
                 onPress={() => router.push({pathname:`/newCooperative`})}

      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
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
    shadowOffset: { width: 0, height: 2 },
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

});

export default App;
