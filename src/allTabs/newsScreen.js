import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from "@expo/vector-icons"; // Make sure to install @expo/vector-icons if using Expo
import CustomDrawer from './components/drawer';

const Drawer = createDrawerNavigator();
const newsData = [
  {
    id: "1",
    title: "Quadrant Future Tek to launch Rs 290-crore IPO on January 7",
    subtitle: "Quadrant Future Tek to launch Rs 290-crore IPO on January 7",
    timestamp: "Jan 02, 25 06:25 PM",
    image: require("@/assets/newsImages/news-1.jpg"), // Local image
  },
  {
    id: "2",
    title: "Big-Ticket IPOs to Watch Out for in 2025",
    subtitle:
      "Watch for major IPOs in 2025, featuring Reliance Jio, LG Electronics, and more. Stay updated on potential launches.",
    timestamp: "Jan 02, 25 04:29 PM",
    image: require("@/assets/newsImages/news-2.jpg"), // Local image
  },
  {
    id: "3",
    title: "Indo Farm IPO Details Released",
    subtitle:
      "Indo Farm is expected to launch its IPO with a price band of Rs 204-215. Stay tuned for updates.",
    timestamp: "Jan 01, 25 10:00 AM",
    image: require("@/assets/newsImages/news-3.jpg"), // Local image
  },
];


const NewsScreen = ({ navigation }) =>{
  const renderNewsItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
      <Text style={styles.cardTimestamp}>{item.timestamp}</Text>
    </View>
  );
  

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.header}>News</Text>
      </View>
      
      <FlatList
        data={newsData}
        renderItem={renderNewsItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const DrawerMenu = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false, // Hide default header
      }}
    >
      <Drawer.Screen name="News" component={NewsScreen} />
      {/* Add more screens to the drawer if needed */}
    </Drawer.Navigator>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    marginTop: 14,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    fontFamily: 'OpenSans-Bold',
    marginBottom:10,
  },
  menuButton: {
    marginRight: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  listContent: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 16,
    overflow: "hidden",
    elevation: 2,
  },
  cardImage: {
    width: "100%",
    height: 150,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 8,
    marginTop: 10,
    color: "#000",
  },
  cardSubtitle: {
    fontSize: 14,
    marginHorizontal: 8,
    marginTop: 4,
    color: "#666",
  },
  cardTimestamp: {
    fontSize: 12,
    marginHorizontal: 8,
    marginTop: 8,
    marginBottom: 8,
    color: "#999",
  },

});

export default DrawerMenu;


