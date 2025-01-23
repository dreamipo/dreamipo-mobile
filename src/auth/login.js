import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Pressable,
    Alert,
    Dimensions
} from 'react-native';
import supabase from './supabaseClient';

const screenWidth = Dimensions.get('window').width;

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please fill in both fields');
            return;
        }

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                console.error('Login failed:', error);
                Alert.alert('Error', error.message);
            } else {
                console.log('Login successful!', data);
                Alert.alert('Success', 'Login successful!');
                navigation.reset({
                    index: 0,
                    routes: [{ name: "TabNavigator", params: { email } }],
                });
            }
        } catch (error) {
            console.error('Login error:', error);
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
                    <Text style={styles.buttonText}>Login</Text>
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
        backgroundColor: '#28A745',
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

export default Login;
