import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA6edOH7o7EKC2kSvZgoy06E0V3T0g1V2k",
    authDomain: "cut-firebase.firebaseapp.com",
    projectId: "cut-firebase",
    storageBucket: "cut-firebase.appspot.com",
    messagingSenderId: "1019938936454",
    appId: "1:1019938936454:web:0aeccedb76c41e38222307",
    measurementId: "G-EQYG8W149C"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);