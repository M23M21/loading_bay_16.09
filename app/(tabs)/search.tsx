// SearchScreen.tsx
import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SearchScreen() {
  const router = useRouter();

  useEffect(() => {
    const loadSearchParams = async () => {
      try {
        const shopName = await AsyncStorage.getItem('name') || '';
        const town = await AsyncStorage.getItem('town') || '';

        if (!shopName || !town) {
          alert('Please go back and enter both Shop Name and Town/Postcode on the Home screen.');
          router.replace('/(tabs)/home');
          return;
        }

        // Navigate with parameters to Result screen
        router.push(`/ResultScreen?shopName=${encodeURIComponent(shopName)}&town=${encodeURIComponent(town)}`);
      } catch (error) {
        console.error('Error loading search params:', error);
        alert('Failed to load search parameters.');
      }
    };

    loadSearchParams();
  }, [router]);

  return null; // No UI needed
}
