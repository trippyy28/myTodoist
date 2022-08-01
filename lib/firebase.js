// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcIrkVQR6zr4vgm9uzw-ouU0nnECZeUHk",
  authDomain: "mytodoist-a9556.firebaseapp.com",
  projectId: "mytodoist-a9556",
  storageBucket: "mytodoist-a9556.appspot.com",
  messagingSenderId: "266221215942",
  appId: "1:266221215942:web:213c41828d148b187db7c7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export { db };
