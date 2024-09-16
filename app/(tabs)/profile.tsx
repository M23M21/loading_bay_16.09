// Filename: app/(tabs)/profile.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../../AuthContext'; // Asigură-te că importul este corect
import { auth, firestore } from '../../services/firebase'; // Asigură-te că importul este corect
import { doc, getDoc } from 'firebase/firestore';
import { styles } from '../../styles/globalStyles'; // Asigură-te că importul este corect

type UserData = {
  name: string;
  email: string;
};

export default function ProfileScreen() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const router = useRouter();
  const { user, signOut } = useAuth();

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          const userDoc = doc(firestore, 'users', user.uid);
          const userSnapshot = await getDoc(userDoc);
          if (userSnapshot.exists()) {
            const data = userSnapshot.data() as UserData;
            setUserData(data);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserData();
  }, [user]);

  const handleLogout = async () => {
    try {
      await signOut();
      router.replace('/');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const handleEditProfile = () => {
    router.push('/EditProfileScreen'); // Navighează către ecranul de Edit Profile
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Text style={styles.profileTitle}>Profile</Text>
      </View>
      {userData ? (
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Name: {userData.name}</Text>
          <Text style={styles.infoText}>Email: {userData.email}</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
      <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}
