// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore}from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBigPBitVj_PkHqzuEcetViM0J8diflYbw",
  authDomain: "baziranavatra.firebaseapp.com",
  projectId: "baziranavatra",
  storageBucket: "baziranavatra.appspot.com",
  messagingSenderId: "447593719531",
  appId: "1:447593719531:web:21bd590033d23015ecc0ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const db=getFirestore(app);
