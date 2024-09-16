// Filename: app/(tabs)/home.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, SafeAreaView, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '@/styles/globalStyles';

export default function HomeScreen() {
  const [shopName, setShopName] = useState('');
  const [town, setTown] = useState('');

  const handleShopNameChange = (value: string) => {
    setShopName(value);
  };

  const handleTownChange = (value: string) => {
    setTown(value);
  };

  useEffect(() => {
    const saveSearchParams = async () => {
      try {
        await AsyncStorage.setItem('name', shopName);
        await AsyncStorage.setItem('town', town);
        console.log('Saved search parameters:', { shopName, town });
      } catch (error) {
        console.error('Error saving search params:', error);
      }
    };

    saveSearchParams();
  }, [shopName, town]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.headerTitle}>Loading Bay Locator</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/loading-bay.jpg')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Warehouse / Shop"
          value={shopName}
          onChangeText={handleShopNameChange}
        />
        <TextInput
          style={styles.input}
          placeholder="Town / Postcode"
          value={town}
          onChangeText={handleTownChange}
        />
      </View>
    </SafeAreaView>
  );
}
