import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    Pressable,
    TextInput,
    Alert,
    Modal,
    TouchableOpacity
} from 'react-native';
import supabase from './supabaseClient';
import Login from '../auth/login';

const screenWidth = Dimensions.get('window').width;

const SignInScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
    const [otpModalVisible, setOtpModalVisible] = useState(false);

    const handleSignUp = async () => {
        if (!name || !email || !password || !phone) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        try {
            const { error } = await supabase.auth.signUp({
                email,
                password,
            });

            if (error) {
                Alert.alert('Error', error.message);
            } else {
                console.log('User signed up successfully!');
                Alert.alert('Success', 'Sign up successful!');

                // Store user data in Supabase database
                const { data, error: dbError } = await supabase
                    .from('users')
                    .insert([{ name, email, phone }]);

                if (dbError) {
                    console.error('Error inserting user data:', dbError);
                    Alert.alert('Error', 'Failed to store user data.');
                } else {
                    console.log('User data stored successfully!');
                }

                // Send OTP for phone verification
                const { error: otpError } = await supabase.auth.signInWithOtp({
                    phone: phone, // Send OTP to the mobile number
                });

                if (otpError) {
                    console.error('OTP Error:', otpError);
                    Alert.alert('Error', 'Failed to send OTP. Please try again.');
                } else {
                    console.log('OTP sent successfully!');
                    setOtpModalVisible(true); // Show OTP dialog/modal
                }
            }
        } catch (error) {
            console.error('Sign up failed:', error);
            Alert.alert('Error', 'Something went wrong. Please try again.');
        }
    };

    const handleOtpVerification = async () => {
        if (!otp) {
            Alert.alert('Error', 'Please enter the OTP');
            return;
        }

        try {
            const { error } = await supabase.auth.verifyOtp({
                phone: `+${phone}`,
                otp: otp,
                type: 'sms'
            });
            if(error){
                Alert.alert('Success', 'OTP verified successfully!');
            navigation.reset({
                index: 0,
                routes: [{ name:"TabNavigator", params: { name, email } }],
            });
            setOtpModalVisible(false); 
            }
        } catch (error) {
            console.error('OTP verification failed:', error);
            Alert.alert('Error', 'Something went wrong. Please try again.');
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
            <TextInput
                style={styles.input}
                placeholder="Phone Number"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
            />
            <Pressable onPress={handleSignUp}>
                <View style={styles.signupButton}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </View>
            </Pressable>

             {/* Navigate to Login */}
             <Pressable
    onPress={() => {
        navigation.navigate('Login');
    }}
>
    <Text style={styles.loginText}>
        Already have an account? Login here
    </Text>
</Pressable>


            {/* OTP Verification Modal */}
            <Modal
                visible={otpModalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setOtpModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalText}>Enter OTP sent to your phone</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter OTP"
                            value={otp}
                            onChangeText={setOtp}
                            keyboardType="numeric"
                        />
                        <TouchableOpacity onPress={handleOtpVerification}>
                            <View style={styles.signupButton}>
                                <Text style={styles.buttonText}>Verify OTP</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setOtpModalVisible(false)}>
                            <Text style={styles.cancelButton}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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
    loginText: {
        marginTop: 10,
        textAlign: 'center',
        color: '#007BFF',
        fontSize: 16,
        textDecorationLine: 'underline',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent background
    },
    modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: screenWidth - 50,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'center',
    },
    cancelButton: {
        marginTop: 10,
        color: 'red',
        fontSize: 16,
    },
});

export default SignInScreen;
