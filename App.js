import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../ipo_practice/src/auth/signin';
import TabNavigator from '../ipo_practice/src/allTabs/tabs';
import Login from '../ipo_practice/src/auth/login';

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="TabNavigator" component={TabNavigator} 
                options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

