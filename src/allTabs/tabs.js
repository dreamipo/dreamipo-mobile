import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import mainboardIPOScreen from '../allTabs/mainboard_tabs/mainboardIPOScreen'; 
import SMEScreen from '../allTabs/smeIPO_tabs/SMEScreen';
import newsScreen from '../allTabs/newsScreen';
import allotmentScreen from '../allTabs/allotmentScreen';
import buybackScreen from '../allTabs/buyback_tabs/buybackScreen';
import offersScreen from '../allTabs/offersScreen'

// Create the Tab Navigator
const Tabs = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Mainboard':
              iconName = 'home';
              break;
            case 'SME IPO':
              iconName = 'business';
              break;
            case 'News':
              iconName = 'article';
              break;
            case 'Allotment':
              iconName = 'receipt';
              break;
            case 'Buyback':
              iconName = 'person';
              break;
            case 'Offers':
              iconName = 'discount';
              break;
            default:
              iconName = 'home'; // default icon if no match
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#6055cd', // Active tab indicator color
        tabBarInactiveTintColor: '#666', // Color for inactive tabs
        headerShown: false, // Hides the header at the top of each screen
      })}
    >
      <Tabs.Screen name="Mainboard" component={mainboardIPOScreen} />
      <Tabs.Screen name="SME IPO" component={SMEScreen} />
      <Tabs.Screen name="News" component={newsScreen} />
      <Tabs.Screen name="Allotment" component={allotmentScreen} />
      <Tabs.Screen name="Buyback" component={buybackScreen} />
      <Tabs.Screen name="Offers" component={offersScreen} />
    </Tabs.Navigator>
  );
};

export default TabNavigator;
