// Filename: app/EditProfileScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { auth, firestore } from '../services/firebase'; // Asigură-te că calea este corectă
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { styles } from '../styles/globalStyles'; // Importă stilurile globale

export default function EditProfileScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          const userDoc = doc(firestore, 'users', user.uid);
          const userSnapshot = await getDoc(userDoc);
          if (userSnapshot.exists()) {
            const data = userSnapshot.data();
            setName(data.name || ''); 
            setEmail(data.email || ''); 
          }
        } catch (error: unknown) {
          if (error instanceof Error) {
            Alert.alert('Error', error.message);
          } else {
            Alert.alert('Error', 'An unknown error occurred while fetching data');
          }
        }
      }
    };

    fetchUserData();
  }, []);

  const handleSave = async () => {
    const user = auth.currentUser;
    if (user) {
      try {
        const userDoc = doc(firestore, 'users', user.uid);
        await updateDoc(userDoc, { name, email });
        Alert.alert('Success', 'Profile updated successfully');
        router.replace('/(tabs)/profile'); // Revine la profil după salvare
      } catch (error: unknown) {
        if (error instanceof Error) {
          Alert.alert('Error', error.message);
        } else {
          Alert.alert('Error', 'An unknown error occurred while updating the profile');
        }
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Text style={styles.profileTitle}>Edit Profile</Text>
      </View>
      <View style={styles.infoContainer}>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <TouchableOpacity style={styles.editButton} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}
