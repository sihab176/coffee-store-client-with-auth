// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABz2LGtwX7EqO2nBLlSbe_SIgYPr8_8oY",
  authDomain: "coffee-store-23f1f.firebaseapp.com",
  projectId: "coffee-store-23f1f",
  storageBucket: "coffee-store-23f1f.firebasestorage.app",
  messagingSenderId: "1042417051923",
  appId: "1:1042417051923:web:2b13a7d4792a445b4252e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);