
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAcIxGZvrbLbtadU-bkY4Mp3d1dargchyU",
  authDomain: "lufda-e8d93.firebaseapp.com",
  projectId: "lufda-e8d93",
  storageBucket: "lufda-e8d93.appspot.com",
  messagingSenderId: "451316223538",
  appId: "1:451316223538:web:2a963006916a71c408762b",
  measurementId: "G-EN151TC1F8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const auth = getAuth(app);


export {auth, firestore};
// npm install -g firebase-tools