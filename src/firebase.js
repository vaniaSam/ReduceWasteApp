// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Import other Firebase services you want to use (e.g., Firestore, Authentication)
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvAQPaVSI9LLJW0jOUdoolTGAkeq1vCe0",
  authDomain: "reducewaste-bda0f.firebaseapp.com",
  projectId: "reducewaste-bda0f",
  storageBucket: "reducewaste-bda0f.firebasestorage.app",
  messagingSenderId: "130243773692",
  appId: "1:130243773692:web:9fa18667abe28b73d10379",
  measurementId: "G-2HHS2ZBTDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase services
const db = getFirestore(app); // For Firestore database
const auth = getAuth(app); // For Firebase Authentication
const analytics = getAnalytics(app); // For Firebase Analytics (optional)

// Export Firebase services to use in other parts of the app
export { db, auth };
