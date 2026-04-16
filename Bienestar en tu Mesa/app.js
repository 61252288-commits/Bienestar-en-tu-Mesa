 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgHX84nzZFJ_U13yd-AOiT0cMEchs8cG4",
  authDomain: "bienestar-en-tu-mesa.firebaseapp.com",
  projectId: "bienestar-en-tu-mesa",
  storageBucket: "bienestar-en-tu-mesa.firebasestorage.app",
  messagingSenderId: "480223027321",
  appId: "1:480223027321:web:6df6eea7d54845892cf4a8",
  measurementId: "G-399WP6X8FX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
