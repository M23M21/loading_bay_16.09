// Filename: app/ResultScreen.tsx
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Linking,
  Image,
  Alert,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; // Import MaterialIcons for 'local-shipping'
import { styles } from '../styles/globalStyles';
import { firestore } from '../services/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

type LoadingBayInfo = {
  id: string;
  name: string;
  location?: string;
  openingTime?: string;
  restrictions?: string;
  what3words?: string;
  directions?: string;
  town?: string;
};

const ResultScreen = () => {
  const [loadingBays, setLoadingBays] = useState<LoadingBayInfo[]>([]);
  const router = useRouter();
  const searchParams = useLocalSearchParams<{ shopName: string; town: string }>();
  const shopName = searchParams.shopName || '';
  const town = searchParams.town || '';

  useEffect(() => {
    const fetchFilteredLoadingBays = async () => {
      try {
        const normalizedShopName = shopName.trim();
        const normalizedTown = town.trim();

        const baysQuery = query(
          collection(firestore, 'loadingBays'),
          where('name', '==', normalizedShopName),
          where('town', '==', normalizedTown)
        );

        const querySnapshot = await getDocs(baysQuery);
        const baysData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as LoadingBayInfo[];

        setLoadingBays(baysData);
      } catch (error) {
        Alert.alert('Error', 'Failed to load data. Please try again.');
      }
    };

    fetchFilteredLoadingBays();
  }, [shopName, town]);

  const handleNavigation = (what3words: string) => {
    if (what3words) {
      const url = `https://what3words.com/${what3words}`;
      Linking.openURL(url);
    } else {
      Alert.alert('Error', 'Invalid what3words link.');
    }
  };

  const handleSaveLoadingBay = async (loadingBay: LoadingBayInfo) => {
    try {
      const savedBays = await AsyncStorage.getItem('savedLoadingBays');
      const parsedBays = savedBays ? JSON.parse(savedBays) : [];
      const updatedBays = [...parsedBays, loadingBay];
      await AsyncStorage.setItem('savedLoadingBays', JSON.stringify(updatedBays));
      Alert.alert('Success', 'Loading Bay saved successfully!');
    } catch (error) {
      Alert.alert('Error', 'Failed to save the loading bay.');
    }
  };

  const handleLogout = () => {
    router.replace('/');
  };

  const canNavigate = loadingBays.length > 0 && !!loadingBays[0].what3words;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>Loading Bay Locator</Text>
        </View>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('../assets/images/loading-bay.jpg')} style={styles.image} />
        {loadingBays.length > 0 ? (
          loadingBays.map((item) => (
            <View key={item.id}>
              <View style={styles.resultCard}>
                <Text style={styles.resultInfoLabel}>What3words for Loading Bay is:</Text>
                <TouchableOpacity onPress={() => handleNavigation(item.what3words || '')}>
                  <Text style={styles.resultLinkText}>{item.what3words || 'N/A'}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.resultCard}>
                <Text style={styles.resultInfoLabel}>Opening Time:</Text>
                <Text style={styles.resultInfoText}>{item.openingTime || 'Not provided'}</Text>
              </View>
              <View style={styles.resultCard}>
                <Text style={styles.resultInfoLabel}>Restrictions:</Text>
                <Text style={styles.resultInfoText}>{item.restrictions || 'None'}</Text>
              </View>
              <View style={styles.resultCard}>
                <Text style={styles.resultInfoLabel}>Location:</Text>
                <Text style={styles.resultInfoText}>{item.location || 'Not specified'}</Text>
              </View>
              <View style={styles.resultCard}>
                <Text style={styles.resultInfoLabel}>Directions:</Text>
                <Text style={styles.resultInfoText}>{item.directions || 'No directions provided'}</Text>
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.infoTextCenter}>No results found.</Text>
        )}
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => handleNavigation(loadingBays[0]?.what3words || '')}
          disabled={!canNavigate}
        >
          <MaterialIcons name="local-shipping" size={24} color={canNavigate ? '#3498db' : '#ccc'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => handleNavigation(loadingBays[0]?.what3words || '')}
          disabled={!canNavigate}
        >
          <Ionicons name="walk" size={24} color={canNavigate ? '#3498db' : '#ccc'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => router.push('/(tabs)/home')}
        >
          <Ionicons name="search" size={24} color="#3498db" />
        </TouchableOpacity>
        {/* Saved Icon */}
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => {
            if (loadingBays.length > 0) handleSaveLoadingBay(loadingBays[0]);
          }}
        >
          <Ionicons name="bookmark" size={24} color="#3498db" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>LOG OUT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ResultScreen;
