// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwhNs86GjYwfFzhSRVoQttSS3PdrU6RFI",
  authDomain: "job-portal-9f97e.firebaseapp.com",
  projectId: "job-portal-9f97e",
  storageBucket: "job-portal-9f97e.appspot.com",
  messagingSenderId: "853043367023",
  appId: "1:853043367023:web:68080e920cbabda241519a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);