import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const Tab5 = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Main Content */}
      <View style={styles.content}>
        {/* <Text style={styles.instructionText}>
          To use the Quick Allotment Checker, log in to your account
        </Text> */}

        {/* Sign Up/Sign In Button */}
        {/* <TouchableOpacity style={styles.roundedButton}>
          <Text style={styles.buttonText}>Sign Up/Sign In</Text>
        </TouchableOpacity> */}

        {/* Additional Instructions */}
        {/* <Text style={styles.secondaryText}>
          You can also check allotment using the legacy method. Navigate to the
          IPO Detail Page, then click on "Check Allotment"
        </Text> */}
        <Image
         source={require("@/assets/hourglass.png")}
         style={styles.timerImage}
        />

        {/* Quick Guide Section */}
        <Text style={styles.guideTitle}>
          No Current/Upcoming Buybacks 
          You can explore the closed Buybacks
        </Text>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
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
  timerImage: {
    width: 80,
    height: 80,
    borderRadius: 25,
    marginBottom: 10,
  },
});

export default Tab5;
