import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

const Tab4 = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Card 1 */}
      <View style={styles.ipoCard}>
        <View style={styles.ipoHeader}>
          <Image
            source={require("@/assets/cardImages/card-2.png")}
            style={styles.logo}
          />
          <Text style={styles.ipoTitle}>Hamps Bio</Text>
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

      {/* Additional Cards */}
      <View style={styles.ipoCard}>
        <View style={styles.ipoHeader}>
          <Image
            source={require("@/assets/cardImages/card-10.jpeg")}
            style={styles.logo}
          />
          <Text style={styles.ipoTitle}>Newmalayam Steel</Text>
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

      {/* Repeat more cards if needed */}
      <View style={styles.ipoCard}>
        <View style={styles.ipoHeader}>
          <Image
            source={require("@/assets/cardImages/card-4.jpeg")}
            style={styles.logo}
          />
          <Text style={styles.ipoTitle}>Anya Polytech & Fertilizers</Text>
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
            source={require("@/assets/cardImages/card-6.png")}
            style={styles.logo}
          />
          <Text style={styles.ipoTitle}>Technichem Organics</Text>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: "#f8f9fa",
  },
  ipoCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    marginHorizontal: 10,
    marginBottom: 20,
    elevation: 2,
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

export default Tab4;
