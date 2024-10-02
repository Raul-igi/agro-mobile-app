import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions,ScrollView } from 'react-native';
import Colors from '@/constants/Colors';

// Screen width for charts
const screenWidth = Dimensions.get('window').width;

// Dummy data for chart and livestock list
const livestockData = [
  { id: '1', type: 'Cow', females: 12, males: 3 },
  { id: '2', type: 'Goats', females: 12, males: 3 },
  { id: '3', type: 'Chicken', females: 12, males: 3 },
  { id: '4', type: 'Chicken', females: 12, males: 3 },
  { id: '5', type: 'Chicken', females: 12, males: 3 },
];

const SlaughterData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      data: [600, 600, 600, 600, 600, 673, 600],
    },
  ],
};

const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  fillShadowGradient: '#00c853',
  fillShadowGradientOpacity: 1,
  decimalPlaces: 0, // Number of decimal places
  color: (opacity = 1) => `rgba(0, 200, 83, ${opacity})`, // Bar color
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Label color
};

const HomeScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.livestockItem}>
      <Ionicons name="home-outline" size={24} color="#5D6D7E" />
      <View style={styles.livestockDetails}>
        <Text style={styles.livestockType}>{item.type}</Text>
        <Text style={styles.livestockCount}>{`${item.females} F • ${item.males} M`}</Text>
      </View>
      <Ionicons name="chevron-forward" size={24} color="#5D6D7E" />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Eco-Yield</Text>
      </View>

      {/* Slaughter Data Chart */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Slaughter Data</Text>
        <ScrollView horizontal={true}>
        <BarChart
          data={SlaughterData}
          yAxisSuffix="KG"
          yAxisLabel=""   
          chartConfig={chartConfig}
          fromZero={true}
          style={styles.chart}
          showValuesOnTopOfBars={true} // Optionally show values on top of bars
          withHorizontalLabels={true}  // Show horizontal grid lines (adds interaction feel)
          withInnerLines={true}        // Show inner lines
          width={screenWidth - 40}  // Reduce the width to fit better
          height={200}              // You can reduce the height for smaller bars
          fromZero={true}           // Start y-axis from zero
          showBarTops={false}       // Optionally hide the bar top highlight
          withInnerLines={false}    // Remove inner grid lines





        />
        </ScrollView>
        <Text style={styles.chartHighlight}>673 KG</Text>
      </View>

      {/* Livestock List */}
      <Text style={styles.subTitle}>New Livestock</Text>
      <FlatList
        data={livestockData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.livestockList}
      />

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={30} color="#fff" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={30} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="menu" size={30} color="#fff" />
          <Text style={styles.navText}>Menu</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    paddingTop: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  chartContainer: {
    marginTop: 10,
    alignItems: 'center',
    paddingHorizontal: 25,
    color:"red"
  },
  chartTitle: {
    alignSelf: 'flex-start',
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  chart: {
    marginVertical: 10,
    borderRadius:20,
    
  },
  chartHighlight: {
    position: 'absolute',
    top: 90,
    right: 35,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00c853',
  },
  subTitle: {
    marginTop: 20,
    paddingHorizontal: 20,
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  livestockList: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  livestockItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  livestockDetails: {
    flex: 1,
    marginLeft: 10,
  },
  livestockType: {
    fontSize: 16,
    fontWeight: '500',
  },
  livestockCount: {
    fontSize: 14,
    color: '#5D6D7E',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#274532',
    paddingVertical: 10,
    paddingHorizontal: 30,
    width:"90%",
    marginLeft:"5%",
    borderRadius:24
    
  },
  navItem: {
    alignItems: 'center',
    
  },
  navText: {
    color: '#fff',
    fontSize: 12,
    fontWeight:600
  },
  addButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
