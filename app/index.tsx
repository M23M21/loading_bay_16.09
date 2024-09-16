// Filename: app/Index.tsx
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '../styles/globalStyles';

export default function Index() {
  const router = useRouter();

  const handleSignupPress = () => {
    router.push('/SignupScreen');
  };

  const handleLoginPress = () => {
    router.push('/LoginScreen');
  };

  return (
    <View style={styles.homeContainer}>
      <Text style={styles.homeTitle}>Loading Bay Locator</Text>
      <Image 
        source={require('../assets/images/loading-bay.jpg')} 
        style={styles.homeImage}
      />
      <TouchableOpacity style={styles.homeButton} onPress={handleSignupPress}>
        <Text style={styles.homeButtonText}>SIGNUP</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.homeLinkButton} onPress={handleLoginPress}>
        <Text style={styles.homeLinkText}>ALREADY HAVE AN ACCOUNT?</Text>
      </TouchableOpacity>
    </View>
  );
}
