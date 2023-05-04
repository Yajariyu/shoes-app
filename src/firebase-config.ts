// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcTYN5ggY-cIUyyv16Dwldr9cD8wiRnYM",
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