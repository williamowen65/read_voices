import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.js'
import './assets/resets.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_NMBST5Q_5SLS-izC58IBfiRsz_j7VI0",
  authDomain: "read-voices.firebaseapp.com",
  projectId: "read-voices",
  storageBucket: "read-voices.appspot.com",
  messagingSenderId: "107703471916",
  appId: "1:107703471916:web:5450d11f846eec9f482689",
  measurementId: "G-CRERD6VBT9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const rootElement = document.getElementById('app')
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
