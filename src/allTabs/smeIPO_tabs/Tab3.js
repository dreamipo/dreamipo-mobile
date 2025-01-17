import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

const Tab3 = () => {
  return (
    <View style={styles.container}>
      {/* Scrollable IPO Cards */}
      <View style={styles.ipoCard}>
        <View style={styles.ipoHeader}>
          <Image
            source={require("@/assets/cardImages/card-7.jpeg")}
            style={styles.logo}
          />
          <Text style={styles.ipoTitle}>Davin Sons Retail</Text>
          <TouchableOpacity>
            <Text style={styles.shareText}>Share</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.ipoDate}>Offer Date: Dec 31 - Jan 02, 2025</Text>
        <View style={styles.ipoDetails}>
          <Text style={styles.detailText}>₹ Offer Price: 204-215</Text>
          <Text style={styles.detailText}>Lot Size: 69</Text>
          <Text style={styles.detailText}>Subs: 40.18 times</Text>
        </View>
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Apply</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ipoCard}>
        <View style={styles.ipoHeader}>
          <Image
            source={require("@/assets/cardImages/card-8.jpeg")}
            style={styles.logo}
          />
          <Text style={styles.ipoTitle}>Parmeshwar Metal (BSE SME)</Text>
          <TouchableOpacity>
            <Text style={styles.shareText}>Share</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.ipoDate}>Offer Date: Dec 31 - Jan 02, 2025</Text>
        <View style={styles.ipoDetails}>
          <Text style={styles.detailText}>₹ Offer Price: 204-215</Text>
          <Text style={styles.detailText}>Lot Size: 69</Text>
          <Text style={styles.detailText}>Subs: 40.18 times</Text>
        </View>
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Apply</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ipoCard}>
        <View style={styles.ipoHeader}>
          <Image
            source={require("@/assets/cardImages/card-10.jpeg")}
            style={styles.logo}
          />
          <Text style={styles.ipoTitle}>Indo Farm Equipment</Text>
          <TouchableOpacity>
            <Text style={styles.shareText}>Share</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.ipoDate}>Offer Date: Dec 31 - Jan 02, 2025</Text>
        <View style={styles.ipoDetails}>
          <Text style={styles.detailText}>₹ Offer Price: 204-215</Text>
          <Text style={styles.detailText}>Lot Size: 69</Text>
          <Text style={styles.detailText}>Subs: 40.18 times</Text>
        </View>
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  ipoCard: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 14,
    elevation: 2,
    marginTop: 10, // Remove extra margin
  },
  ipoHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    width: 40,
    height: 40,
  },
  ipoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  shareText: {
    color: "#6c63ff",
    fontSize: 12,
  },
  ipoDate: {
    marginTop: 8,
    fontSize: 12,
    color: "#666",
  },
  ipoDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  detailText: {
    fontSize: 12,
    color: "#000",
  },
  applyButton: {
    backgroundColor: "#6c63ff",
    padding: 8,
    alignItems: "center",
    borderRadius: 4,
    marginTop: 8,
  },
  applyButtonText: {
    color: "#fff",
    fontSize: 14,
  },
});

export default Tab3;
