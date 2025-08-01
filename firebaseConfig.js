// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// ✅ Your config — CORRECTED
const firebaseConfig = {
  apiKey: "AIzaSyCPCyVOntu5PNCSIYLfkZnFmzI40u8mx6E",
  authDomain: "asgg-9db78.firebaseapp.com",
  projectId: "asgg-9db78",
  storageBucket: "asgg-9db78.appspot.com", // ✅ fix: should be .appspot.com
  messagingSenderId: "558659915505",
  appId: "1:558659915505:web:4be0ff24b752457a576350"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export auth & Firestore only
export const auth = getAuth(app);
export const db = getFirestore(app);
