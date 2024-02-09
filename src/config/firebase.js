import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCfFeQhNzMl72AnwgYyswYYXU2g-CHIpQ8",
    authDomain: "emailauthfirebase-rabi.firebaseapp.com",
    databaseURL: "https://emailauthfirebase-rabi-default-rtdb.firebaseio.com",
    projectId: "emailauthfirebase-rabi",
    storageBucket: "emailauthfirebase-rabi.appspot.com",
    messagingSenderId: "956059753096",
    appId: "1:956059753096:web:ec7d47fa6810adf392dd3d"
  };

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseFirestore = getFirestore(FirebaseApp)