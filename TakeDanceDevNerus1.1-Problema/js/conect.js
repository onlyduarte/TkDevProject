
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBitRLMdb0oslpPs4_I6WCYWh1LQox8Hsg",
  authDomain: "database-tdd-01.firebaseapp.com",
  projectId: "database-tdd-01",
  storageBucket: "database-tdd-01.appspot.com",
  messagingSenderId: "656594861754",
  appId: "1:656594861754:web:706d477ec9cb093bf20c83",
  measurementId: "G-9ML4WM11TH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);