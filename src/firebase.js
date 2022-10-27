import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {
  getFirestore
} from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBy5gnT_tqfhdYq4U7qjTuwBGG_H-zKmn4",
  authDomain: "slack-clone-2k22.firebaseapp.com",
  projectId: "slack-clone-2k22",
  storageBucket: "slack-clone-2k22.appspot.com",
  messagingSenderId: "1047198596434",
  appId: "1:1047198596434:web:60fef2b172f4e2f5ab0e8b",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Services
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider, db };

