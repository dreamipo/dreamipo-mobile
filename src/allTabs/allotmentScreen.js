import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from "./components/drawer";

const Drawer = createDrawerNavigator();

const AllotmentScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Header with Menu Drawer */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <Image
            source={{
              uri: "https://img.icons8.com/ios-filled/50/000000/menu.png", // Menu icon URL
            }}
            style={styles.menuIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Allotment</Text>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.instructionText}>
          To use the Quick Allotment Checker, log in to your account
        </Text>

        {/* Sign Up/Sign In Button */}
        <TouchableOpacity style={styles.roundedButton}>
          <Text style={styles.buttonText}>Sign Up/Sign In</Text>
        </TouchableOpacity>

        {/* Additional Instructions */}
        <Text style={styles.secondaryText}>
          You can also check allotment using the legacy method. Navigate to the
          IPO Detail Page, then click on "Check Allotment"
        </Text>

        {/* Quick Guide Section */}
        <Text style={styles.guideTitle}>
          How to Check IPO Allotment in a Few Easy Clicks Using IPO Ji | Quick
          Guide
        </Text>

        <Image
          source={{
            uri: "https://via.placeholder.com/300x200", // Replace with your image source
          }}
          style={styles.guideImage}
          resizeMode="contain"
        />
      </View>
    </ScrollView>
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
      <Drawer.Screen name="Allotment" component={AllotmentScreen} />
      {/* Add more screens to the drawer if needed */}
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    marginTop: 20,
  },
  menuButton: {
    marginRight: 15,
  },
  menuIcon: {
    width: 24,
    height: 24,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  content: {
    padding: 20,
    alignItems: "center",
  },
  instructionText: {
    fontSize: 16,
    color: "#000",
    textAlign: "center",
    marginBottom: 15,
  },
  roundedButton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25, // Rounded rectangle effect
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  secondaryText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
  },
  guideTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 15,
  },
  guideImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
});

export default DrawerMenu;
