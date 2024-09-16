// services/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { Alert } from 'react-native'; // Import Alert for showing alerts

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANg6pLx0zR5Ajg4FFjFDPvaxPNy1O2njU",
  authDomain: "loadinbaylocator.firebaseapp.com",
  projectId: "loadinbaylocator",
  storageBucket: "loadinbaylocator.appspot.com",
  messagingSenderId: "836229091487",
  appId: "1:836229091487:web:45453d6bb97f00ce1892aa",
  measurementId: "G-SRQMY42FM6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const firestore = getFirestore(app);

// Function to handle password reset using Firebase
const handlePasswordReset = (email, router) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      Alert.alert('Success', 'Password reset email sent');
      router.back();
    })
    .catch((error) => {
      Alert.alert('Error', error.message);
    });
};

// Export Firebase services and the password reset function
export { auth, firestore, handlePasswordReset };
