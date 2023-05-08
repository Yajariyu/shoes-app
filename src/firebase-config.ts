import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_KEY,
  authDomain: "shoes-app-185a5.firebaseapp.com",
  projectId: "shoes-app-185a5",
  storageBucket: "shoes-app-185a5.appspot.com",
  messagingSenderId: "455189897935",
  appId: "1:455189897935:web:e3bf4afec0e4abc3e78dba",
  measurementId: "G-LKXDRVHP69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)