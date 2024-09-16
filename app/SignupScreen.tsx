// Filename: app/SignupScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, firestore } from '../services/firebase';
import { setDoc, doc } from 'firebase/firestore'; // Import pentru a salva în Firestore
import { styles } from '../styles/globalStyles';

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const router = useRouter();

  const handleSignup = async () => {
    if (!email || !password || !fullName) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Salvează datele utilizatorului în Firestore
      await setDoc(doc(firestore, 'users', user.uid), {
        name: fullName,
        email: email,
      });

      Alert.alert('Success', 'Account created successfully');
      router.replace('/home'); // Redirecționează către ecranul Home din tab-uri
    } catch (error) {
      console.error('Signup Error:', error);
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.authContainer}>
      <Text style={styles.authTitle}>Signup</Text>
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
      <TextInput
        style={styles.authInput}
        placeholder="Enter full name..."
        value={fullName}
        onChangeText={setFullName}
      />
      <TouchableOpacity style={styles.authButton} onPress={handleSignup}>
        <Text style={styles.buttonText}>SIGNUP</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.replace('/LoginScreen')}>
        <Text style={styles.authLinkText}>ALREADY HAVE AN ACCOUNT?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;
