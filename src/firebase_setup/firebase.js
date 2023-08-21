// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//   apiKey: "AIzaSyA6edOH7o7EKC2kSvZgoy06E0V3T0g1V2k",
//   authDomain: "cut-firebase.firebaseapp.com",
//   projectId: "cut-firebase",
//   storageBucket: "cut-firebase.appspot.com",
//   messagingSenderId: "1019938936454",
//   appId: "1:1019938936454:web:0aeccedb76c41e38222307",
//   measurementId: "G-EQYG8W149C"
// };
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: "cut-firebase.firebaseapp.com",
  projectId: "cut-firebase",
  storageBucket: "cut-firebase.appspot.com",
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);