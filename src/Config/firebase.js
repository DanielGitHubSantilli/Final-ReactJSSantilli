// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsv61iaZmRgp5fi0Mri3Q280MM_b3u-sI",
  authDomain: "caidim-proyectofinalult.firebaseapp.com",
  projectId: "caidim-proyectofinalult",
  storageBucket: "caidim-proyectofinalult.appspot.com",
  messagingSenderId: "160254502429",
  appId: "1:160254502429:web:a941ff79b1fe642190c8f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);