import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Image
          source={require("@/assets/user.png")} // Placeholder user image
          style={styles.userImage}
        />
        <Text style={styles.welcomeText}>Welcome User</Text>
        <Text style={styles.signInText}>Click here to Sign In!</Text>
        <TouchableOpacity style={styles.adFreeButton}>
          <Text style={styles.adFreeText}>Go Ad-Free</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menuItems}>
        <DrawerItem
          label="Home"
          icon={() => <Icon name="home-outline" size={20} color="black" />}
          onPress={() => props.navigation.navigate('Home')}
        />
        <DrawerItem
          label="Go Ad-Free"
          icon={() => <Icon name="bag-outline" size={20} color="black" />}
          onPress={() => {}}
        />
        <DrawerItem
          label="FAQs"
          icon={() => <Icon name="help-circle-outline" size={20} color="black" />}
          onPress={() => {}}
        />
        <Text style={styles.otherText}>OTHER</Text>
        <DrawerItem
          label="Share with Friends"
          icon={() => <Icon name="share-social-outline" size={20} color="black" />}
          onPress={() => {}}
        />
        <DrawerItem
          label="Contact Us"
          icon={() => <Icon name="mail-outline" size={20} color="black" />}
          onPress={() => {}}
        />
        <DrawerItem
          label="Privacy Policy"
          icon={() => <Icon name="shield-outline" size={20} color="black" />}
          onPress={() => {}}
        />
        <DrawerItem
          label="Terms and Conditions"
          icon={() => <Icon name="document-outline" size={20} color="black" />}
          onPress={() => {}}
        />
        <DrawerItem
          label="Settings"
          icon={() => <Icon name="settings-outline" size={20} color="black" />}
          onPress={() => {}}
        />
      </View>
      <View style={styles.socialMedia}>
        <Icon name="logo-facebook" size={30} color="#4267B2" />
        <Icon name="logo-instagram" size={30} color="#C13584" />
        <Icon name="logo-xbox" size={30} color="black" />
        <Icon name="paper-plane-outline" size={30} color="#0088cc" />
        <Icon name="logo-whatsapp" size={30} color="#25D366" />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#6A4DD8',
    padding: 20,
    alignItems: 'center',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 10,
  },
  welcomeText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signInText: {
    color: 'white',
    fontSize: 14,
    marginBottom: 10,
  },
  adFreeButton: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  adFreeText: {
    color: '#6A4DD8',
    fontWeight: 'bold',
  },
  menuItems: {
    marginTop: 20,
  },
  otherText: {
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 5,
    fontSize: 12,
    color: 'gray',
    fontWeight: 'bold',
  },
  socialMedia: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
});

export default CustomDrawer;
