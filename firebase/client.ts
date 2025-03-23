// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCAO_zn0nkxun6AJxgz2W8TgtT1cgKjlg",
  authDomain: "mock-interview-f8ee6.firebaseapp.com",
  projectId: "mock-interview-f8ee6",
  storageBucket: "mock-interview-f8ee6.firebasestorage.app",
  messagingSenderId: "565434646011",
  appId: "1:565434646011:web:8996626cfcdefd045ddf5e",
  measurementId: "G-2ZFP5LHQ4S"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app)
export const db = getFirestore(app)