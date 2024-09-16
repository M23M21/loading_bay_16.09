import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { auth } from '../services/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { styles } from '../styles/globalStyles';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert('Success', 'Logged in successfully');
      router.replace('/home');
    } catch (error: any) { 
      const errorMessage = error?.message || 'An unexpected error occurred'; 
    }
  };

  return (
    <View style={styles.authContainer}>
      <Text style={styles.authTitle}>Login</Text>
      <TextInput
        style={styles.authInput}
        placeholder="Enter email..."
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.authInput}
        placeholder="Enter password..."
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.authButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
      <View style={styles.loginLinkContainer}>
        <TouchableOpacity onPress={() => router.replace('/PasswordResetScreen')}>
          <Text style={styles.linkText}>FORGOT PASSWORD?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => router.replace('/SignupScreen')}>
        <Text style={styles.signupLink}>SIGNUP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
