import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions, Pressable, TextInput, Alert } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const SignInScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSignUp = () => {
        if (!name || !email || !password) {
            Alert.alert("Error", "Please fill in all fields");
        } else {
            console.log("Signup Info:", { name, email, password });
            Alert.alert("Signup successful!");
            navigation.navigate('Home', { name, email }); // Navigate to Home and pass user details
        }
    };

    return (
        <View style={{ margin: 20 }}>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
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
            <Pressable onPress={handleSignUp}>
                <View style={styles.signupButton}>
                    <Text style={styles.buttonText}>Sign Up</Text>
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
        signupButton: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#007BFF",
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

export default SignInScreen;
