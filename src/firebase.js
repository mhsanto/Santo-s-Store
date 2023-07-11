import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoPwgerPgxXvVPJn8K9iWlrDsWUHlJ14s",
  authDomain: "simple-ecommerce-mh.firebaseapp.com",
  projectId: "simple-ecommerce-mh",
  storageBucket: "simple-ecommerce-mh.appspot.com",
  messagingSenderId: "799782791651",
  appId: "1:799782791651:web:6fb032d0a4d6e0ba0f18d6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
