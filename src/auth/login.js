import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    Pressable,
    TextInput,
    Alert,
} from 'react-native';
import supabase from './supabaseClient';

const screenWidth = Dimensions.get('window').width;

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        try {
            // Log in the user using Supabase
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                Alert.alert('Error', error.message);
            } else if (data.user) {
                console.log('User logged in successfully:', data.user);
                Alert.alert('Success', 'Login successful!');
                
                // Optionally navigate to the Home screen
                navigation.navigate('Home', { email });
            }
        } catch (error) {
            console.error('Login failed:', error);
            Alert.alert('Error', 'Something went wrong. Please try again.');
        }
    };

    return (
        <View style={{ margin: 20 }}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Pressable onPress={handleLogin}>
                <View style={styles.loginButton}>
                    <Text style={styles.buttonText}>Log In</Text>
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 48,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 15,
        paddingHorizontal: 10,
        fontSize: 16,
    },
    loginButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#007BFF',
        width: screenWidth - 50,
        height: 48,
        borderRadius: 10,
        marginTop: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: '400',
        fontSize: 18,
    },
});

export default LoginScreen;
