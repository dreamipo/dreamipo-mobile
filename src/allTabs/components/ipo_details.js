import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';

const IPODetailsScreen = ({route}) => {
  // const { ipoData } = route.params;
  const subscriptionData = [
    { day: 'Day 1', qib: '10%', nii: '25%', retail: '50%' },
    { day: 'Day 2', qib: '30%', nii: '45%', retail: '70%' },
    { day: 'Day 3', qib: '100%', nii: '120%', retail: '150%' },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.logo} />
        <Text style={styles.companyName}>Indo Farm Equipment Limited IPO</Text>
      </View>

      {/* Expected Listing Earnings */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Expected Listing Earnings</Text>
        <Text>Issue Price: ₹60 per share</Text>
        <Text>Expected Price: ₹72-₹80 per share</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View Premium Graph</Text>
        </TouchableOpacity>
      </View>

      {/* IPO Details */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>IPO Details</Text>
        <Text>Issue Period: Jan 24, 2025 - Jan 26, 2025</Text>
        <Text>Issue Size: ₹150 Crore</Text>
        <Text>Face Value: ₹10 per share</Text>
      </View>

      {/* Subscription Details */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Subscription Details</Text>
        <FlatList
          data={subscriptionData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.subscriptionRow}>
              <Text>{item.day}</Text>
              <Text>QIB: {item.qib}</Text>
              <Text>NII: {item.nii}</Text>
              <Text>Retail: {item.retail}</Text>
            </View>
          )}
        />
      </View>

      {/* Company Financials */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Company Financials</Text>
        <Text>Total Revenue: ₹472.3 Cr (2023)</Text>
        <Text>Total Profit: ₹17.5 Cr (2023)</Text>
      </View>

      {/* Peers Comparison */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Peers Comparison</Text>
        <Text>Escorts Kubota: ₹47B (Market Cap)</Text>
        <Text>Indo Farm Equipment: ₹3B (Market Cap)</Text>
      </View>

      {/* Call to Action */}
      <TouchableOpacity style={styles.ctaButton}>
        <Text style={styles.ctaText}>Check Allotment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  companyName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  section: {
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  button: {
    marginTop: 5,
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  subscriptionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  ctaButton: {
    marginTop: 20,
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 5,
  },
  ctaText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default IPODetailsScreen;
