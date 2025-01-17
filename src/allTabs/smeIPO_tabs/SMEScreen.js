import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Tab3 from './Tab3';
import Tab4 from './Tab4';
import CustomDrawer from '../components/drawer';

const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

const SMEScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon name="menu" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>SME IPO</Text>
          <Icon name="search" size={24} color="#000" />
        </View>

        {/* Top Tab Navigator */}
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: '#6c63ff',
            tabBarInactiveTintColor: '#666',
            tabBarIndicatorStyle: { backgroundColor: '#6c63ff' },
            tabBarStyle: { backgroundColor: '#fff' },
          }}
        >
          <Tab.Screen name="Current & Upcoming" component={Tab3} />
          <Tab.Screen name="Listed" component={Tab4} />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
};

// Drawer Navigator Setup
const DrawerMenu = () => {
  return (
    <Drawer.Navigator
    drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false, // Hide default header
      }}
    >
      <Drawer.Screen name="SME IPO" component={SMEScreen} />
      {/* Add more screens to the drawer if needed */}
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
    elevation: 4,
    marginTop: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default DrawerMenu;
