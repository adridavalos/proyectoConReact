// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpBK9V0DJMlWZfUSbm0K0gZ6qHfV8NX4c",
  authDomain: "little-bunny-aaaad.firebaseapp.com",
  projectId: "little-bunny-aaaad",
  storageBucket: "little-bunny-aaaad.appspot.com",
  messagingSenderId: "802875253618",
  appId: "1:802875253618:web:86a77892f27210da4673eb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
