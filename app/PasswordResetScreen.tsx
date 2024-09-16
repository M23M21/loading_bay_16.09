// Filename: app/PasswordResetScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '../styles/globalStyles'; // Utilizează stilurile globale
import { handlePasswordReset } from '../services/firebase'; // Importă funcția de resetare a parolei din serviciul Firebase

const PasswordResetScreen = () => {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handlePasswordResetClick = () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email address');
      return;
    }

    // Apelează funcția de resetare a parolei din Firebase
    handlePasswordReset(email, router);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backButtonText}>&lt;</Text>
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>Recovery Password</Text>
        </View>
      </View>

      {/* Conținut */}
      <View style={styles.content}>
        <Text style={styles.passwordResetTitle}>Password Reset</Text>
        <Text style={styles.passwordResetSubtitle}>
          Enter your email address and we'll send you instructions on how to reset your password.
        </Text>
        <TextInput
          style={styles.passwordResetInput}
          placeholder="Enter email..."
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.submitButton} onPress={handlePasswordResetClick}>
          <Text style={styles.submitButtonText}>SUBMIT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={() => router.back()}>
          <Text style={styles.cancelButtonText}>CANCEL</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PasswordResetScreen;
