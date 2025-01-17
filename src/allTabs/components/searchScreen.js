import React from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const SearchScreen = () => {
  return (
    <SafeAreaView>
    <View style={styles.container}>
      {/* Header with back button and search input */}
      <View style={styles.header}>
        <Icon name="arrow-left" size={24} color="#000" style={styles.icon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="#aaa"
        />
        <Icon name="x" size={24} color="#000" style={styles.icon} />
      </View>

      {/* Centered content */}
      <View style={styles.content}>
        <Icon name="search" size={50} color="#000" />
        <Text style={styles.title}>Search IPOs</Text>
        <Text style={styles.description}>
          Many billion-dollar brands are going to be built in the next 10 years, and it is going to start with digital.
        </Text>
      </View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginTop: 30,
  },
  searchInput: {
    flex: 1,
    height: 40,
    marginHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    fontSize: 16,
    color: '#000',
  },
  icon: {
    padding: 4,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    marginTop: 16,
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
  description: {
    marginTop: 8,
    fontSize: 14,
    textAlign: 'center',
    color: '#555',
  },
});

export default SearchScreen;
