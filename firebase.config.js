// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyDmINZZ9OSS2d3BmLawZG8ddnYIx1zY1Do",
  authDomain: "shoppy-7879f.firebaseapp.com",
  projectId: "shoppy-7879f",
  storageBucket: "shoppy-7879f.appspot.com",
  messagingSenderId: "217817012733",
  appId: "1:217817012733:web:c282e1a22b437255b76194"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with Async Storage persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { app, auth };
