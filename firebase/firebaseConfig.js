// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPHpz_aNAjWCwTLEARXQepz5VZHxPFujc",
  authDomain: "watchmedraw-61821.firebaseapp.com",
  projectId: "watchmedraw-61821",
  storageBucket: "watchmedraw-61821.firebasestorage.app",
  messagingSenderId: "83725238844",
  appId: "1:83725238844:web:16f24071794005350ff939",
  measurementId: "G-JWTPLTDBMT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
